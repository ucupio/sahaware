<template>
  <div class="create-article">
    Create
  </div>
</template>

<script>
export default {
  name: 'CreateArticle',
  data(){
    return {
      newArticle : {
        title: "",
        short_description: "",
        description: "",
        image: "",
        categoryId: ""
      }
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>