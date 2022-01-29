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
				if (!isCorrect) next({ status: 401, msg: "Password tidak sesuai" })
        
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
		const page = req.query
		const options = {
			include: [User, Category],
			attributes: { exclude: ["createdAt", "updatedAt"] },
			order: [["title", "ASC"]],
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
    console.log(options, page)

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

	static getArticle(req, res, next) {
		const options = {
			include: [Category, User],
			attributes: { exclude: ["createdAt", "updatedAt"] },
		}
		Article.findByPk(req.params.articleid, options)
			.then((result) => {
				res.status(200).json(result)
			})
			.catch((err) => {
				next(err)
			})
	}

	static async getCategories(req, res, next) {

		Category.findAll()
			.then((result) => {
				res.status(200).json(result)
			})
			.catch((err) => {
				next(err)
			})
	}

	static getCategory(req, res, next) {
		const options = {
			include: [
				{
					model: Article,
					include: [
						{
							model: User,
						},
					],
				}
			],
			attributes: { exclude: ["createdAt", "updatedAt"] },
		}
		Category.findByPk(req.params.categoryid, options)
			.then((result) => {
				res.status(200).json(result)
			})
			.catch((err) => {
				next(err)
			})
	}

	static createCategory(req, res, next) {
		const category = {
			title: req.body.title
		}

		Category.create(category)
			.then((result) => {
				res.status(200).json(result)
			})
			.catch((err) => {
				next(err)
			})
	}

	static async createArticle(req, res, next) {
    const { title, short_description, description, image, userId, categoryId } = req.body
    const article = { title, short_description, description, image, userId, categoryId }

		let transaction
		let result
		try {
			// get transaction
			transaction = await sequelize.transaction()
			result = await Article.create(article)
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
