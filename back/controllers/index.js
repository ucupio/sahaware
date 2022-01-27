const { Op } = require("sequelize")
const { User, Article, Category, sequelize } = require("../models")
const { comparing } = require("../helpers/bcrypt")
const generateToken = require("../helpers/jsonwebtoken")

class Controller {
	static register(req, res, next) {
		User.create(req.body)
			.then((user) => {
				res.status(201).json({ status: 201, msg: "Register berhasil " + user.email})
			})
			.catch((error) => {
				next(error)
			})
	}

	static login(req, res, next) {
		const { email, password } = req.body
		User.findOne({
			where: {
				email,
			},
		})
			.then((user) => {
				if (!user) next({ status: 400, msg: "Email tidak ditemukan" })

				const isCorrect = comparing(password, user.password)
				if (!isCorrect) next({ status: 400, msg: "Password tidak sesuai" })
        
				const payload = {
					id: user.id,
					name: user.name,
					email: user.email,
				}
				const access_token = generateToken(payload)
				res.status(200).json({ status: 200, msg: "Login berhasil", data: access_token })
			})
			.catch((error) => {
				console.log(error)
			})
	}

	static async getArticles(req, res, next) {
		let response = {}
		const { page } = req.query
		const options = {
			include: [Skill, Category],
			attributes: { exclude: ["createdAt", "updatedAt"] },
			order: [["name", "ASC"]],
		}

		// pagination
		let limit
		let offset
		if (page !== "" && typeof page !== "undefined") {
			if (page.size !== "" && typeof page.size !== "undefined") {
				limit = page.size
				options.limit = limit
			}

			if (page.number !== "" && typeof page.number !== "undefined") {
				offset = page.number * limit - limit
				options.offset = offset
			}
		} else {
			limit = 12
			offset = 0
			options.limit = limit
			options.offset = offset
		}

		let maxCount = await Article.count()
		let maxPage = Math.ceil(maxCount / +limit)

		Article.findAll(options)
			.then((result) => {
				if (page !== "" && typeof page !== "undefined") {
					response = {
						data: result,
						total: maxCount,
						currentPage: +page.number,
						pageSize: +page.size,
						lastPage: maxPage,
						nextPageUrl:
							page.number == maxPage
								? null
								: `${req.protocol}://${req.hostname}:${process.env.PORT}${
										req.path
								  }?page[number]=${+page.number + 1}&page[size]=${+limit}`,
						prevPageUrl:
							page.number == 1
								? null
								: `${req.protocol}://${req.hostname}:${process.env.PORT}${
										req.path
								  }?page[number]=${+page.number - 1}&page[size]=${+limit}`,
					}
					res.status(200).json(response)
				} else {
					res.status(200).json(result)
				}
			})
			.catch((err) => {
				next(err)
			})
	}

	static getArticleDetail(req, res, next) {
		const options = {
			include: [
				{
					model: Category,
				},
				{
					model: Skill,
				},
			],
			attributes: { exclude: ["createdAt", "updatedAt"] },
		}
		Article.findByPk(req.params.id, options)
			.then((result) => {
				res.status(200).json(result)
			})
			.catch((err) => {
				next(err)
			})
	}

	static async getCategory(req, res, next) {
		let response = {}
		let additonalUrl = ""
		const { page, name, email, article } = req.query
		const options = {
			include: [
				{
					model: Article,
				},
				{
					model: Assesment,
					include: [Skill],
				},
			],
			attributes: { exclude: ["createdAt", "updatedAt"] },
			order: [["name", "ASC"]],
		}
		let limit
		let offset

		//Search
		if (name !== "" && typeof name !== "undefined") {
			options.where = {
				name: {
					[Op.iLike]: `%${name}%`,
				},
			}
			additonalUrl += `&name=${name}`
		}

		if (email !== "" && typeof email !== "undefined") {
			options.where = {
				email: {
					[Op.iLike]: `%${email}%`,
				},
			}
			additonalUrl += `&email=${email}`
		}

		//Filter
		if (article !== "" && typeof article !== "undefined") {
			if (typeof options.where === "undefined") {
				options.where = {
					ArticleId: +article,
				}
			} else {
				options.where = {
					...options.where,
					ArticleId: +article,
				}
			}
			additonalUrl += `&article=${+article}`
		}

		// pagination
		if (page !== "" && typeof page !== "undefined") {
			if (page.size !== "" && typeof page.size !== "undefined") {
				limit = page.size
				options.limit = limit
			}

			if (page.number !== "" && typeof page.number !== "undefined") {
				offset = page.number * limit - limit
				options.offset = offset
			}
		} else {
			limit = 12
			offset = 0
			options.limit = limit
			options.offset = offset
		}

		let maxCount =
			typeof options.where !== "undefined"
				? await Category.count()
				: await Category.count({ where: options.where })
		let maxPage = Math.ceil(maxCount / +limit)

		Category.findAll(options)
			.then((result) => {
				if (page !== "" && typeof page !== "undefined") {
					response = {
						data: result,
						total: maxCount,
						currentPage: +page.number,
						pageSize: +page.size,
						lastPage: maxPage,
						nextPageUrl:
							page.number == maxPage
								? null
								: `${req.protocol}://${req.hostname}:${process.env.PORT}${
										req.path
								  }?page[number]=${
										+page.number + 1
								  }&page[size]=${+limit}${additonalUrl}`,
						prevPageUrl:
							page.number == 1
								? null
								: `${req.protocol}://${req.hostname}:${process.env.PORT}${
										req.path
								  }?page[number]=${
										+page.number - 1
								  }&page[size]=${+limit}${additonalUrl}`,
					}
					res.status(200).json(response)
				} else {
					res.status(200).json(result)
				}
			})
			.catch((err) => {
				next(err)
			})
	}

	static getCategoryDetail(req, res, next) {
		const options = {
			include: [
				{
					model: Article,
					include: [
						{
							model: Skill,
						},
					],
				},
				{
					model: Assesment,
					include: [Skill],
				},
			],
			attributes: { exclude: ["createdAt", "updatedAt"] },
		}
		Category.findByPk(req.params.id, options)
			.then((result) => {
				res.status(200).json(result)
			})
			.catch((err) => {
				next(err)
			})
	}

	static createCategory(req, res, next) {
		const category = {
			name: req.body.name,
			email: req.body.email,
			photo: req.body.photo,
			ArticleId: req.body.ArticleId,
		}

		Category.create(category)
			.then((result) => {
				res.status(200).json(result)
			})
			.catch((err) => {
				next(err)
			})
	}

	static async createCategoryDetail(req, res, next) {
		const assesments = {
			CategoryId: req.params.categoryId,
			SkillId: req.params.skillId,
			score: req.body.score,
		}

		let checkAssesment = await Assesment.findOne({
			where: {
				CategoryId: req.params.categoryId,
				SkillId: req.params.skillId,
			},
		})

		if (checkAssesment) {
			Assesment.update(assesments, {
				where: {
					id: checkAssesment.id,
				},
			})
				.then((result) => {
					res.status(200).json(result)
				})
				.catch((err) => {
					next(err)
				})
		} else {
			Assesment.create(assesments)
				.then((result) => {
					res.status(200).json(result)
				})
				.catch((err) => {
					next(err)
				})
		}
	}

	static async createArticles(req, res, next) {
		const skill = {
			name: req.body.name,
			baseScore: req.body.baseScore,
			minScore: req.body.minScore,
			maxScore: req.body.maxScore,
			ArticleId: req.params.id,
		}

		let transaction
		let result
		try {
			// get transaction
			transaction = await sequelize.transaction()
			result = await Skill.create(skill)
			await transaction.commit()
			res.status(200).json(result)
		} catch (err) {
			// Rollback transaction only if the transaction object is defined
			console.log(`error`, err)
			if (transaction) {
				await transaction.rollback()
				next(err)
			}
		}
	}
}

module.exports = Controller
