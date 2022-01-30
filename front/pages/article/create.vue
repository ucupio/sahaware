<template>
  <div class="create-article">
    <div class="create-container">
      <div class="create-side">
        <span class="side-header">Create New Article</span>
        <p>Title</p>
        <input v-model="newArticle.title" type="text" name="title" style="width: 100%;">
        <TextArea v-model="newArticle.description" class="editor" />
      </div>
      <div class="publication-side">
        <span class="side-header">Publication Detail</span>
        <p>Short Description</p>
        <textarea v-model="newArticle.short_description" name="short_description" cols="30" rows="10" style="width: 100%;"></textarea>
        <p>Thumbnail</p>
        <input id="image" class="inputfile" type="file" name="image" @change="onChangeHandle">
        <p>Category</p>
        <input v-model="newArticle.categoryId" type="text" name="categoryId" style="width: 100%;">
        <p style="width: 70%; margin-right: 10px;">Published</p>
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label><br>
        <button type="submit" class="button-submit" @submit="addArticle()">Submit</button>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreateArticle',
  data(){
    return {
      newArticle : {
        title: "",
        short_description: "",
        description: "<p>Write your Story</p>",
        image: "",
        categoryId: ""
      }
    }
  },
  methods: {
    onChangeHandle () {
      this.Article.image = event.target.files[0]
    },
    addArticle () {
      axios.post('https://sahaware-server.herokuapp.com/api/article', {
        header: {
          'accept': 'application/json',
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          title: this.newArticle.title,
          short_description: this.newArticle.short_description,
          description: this.newArticle.description,
          image: this.newArticle.image,
          userId: 3,
          categoryId: this.newArticle.categoryId
        }
      })
      .then((result) => {
        console.log(result)
        this.newArticle = {
          title: "",
          short_description: "",
          description: "<p>Write your Story</p>",
          image: "",
          categoryId: ""
        }
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.create-container {
  display: flex;
  padding: 80px 200px;
  @media (max-width: 584px){
    flex-direction: column;
    padding: 16px;
  }
}

.side-header {
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 32px;
  color: #000000;
}

p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
}

.create-side {
  flex: 2;
  margin: 12px;
}

.publication-side {
  flex: 1;
  margin: 12px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 26px;
  height: 14px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(12px);
  -ms-transform: translateX(12px);
  transform: translateX(12px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.button-submit {
  background: #ED3237;
  border-radius: 5px;
  width: 101px;
  height: 47px;
  align-items: center;
  padding: 12px 16px;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.5px;

  color: #FFFFFF;
  box-shadow: none;
  border: none;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

.button-submit:hover{
  background-color: white; 
  color: black; 
  border: 2px solid #ED3237;
}

input[type=text] {
  display: inline-block;
  margin-bottom: 24px;
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
}

textarea {
  display: inline-block;
  margin-bottom: 24px;
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}

label {
  display: inline-block;
  margin-bottom: 24px;
  width: 20%;
}

input[type=file]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: .2em .4em;
  border-radius: .2em;
  background-color: #e5e5e5;
  transition: 1s;
  border: 1px solid #CED4DA;
  border-radius: 4px 0px 0px 4px;
  margin-bottom: 24px;
  width: 120px;
  padding: 12px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  color: #6C757D;
}

input[type=file]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

.editor {
  display: inline-block;
  margin-bottom: 24px;
  width: 100%;
  height: 628px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
}
</style>