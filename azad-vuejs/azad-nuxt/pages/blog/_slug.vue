<template>
  <div class="big-wrapper">
    <div>
        <nuxt-link to="/">Go Back</nuxt-link>
        <h2>{{post.title.rendered}}</h2>
        <div class="" v-html="post.content.rendered"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
        post:{}
    }
  },
  async asyncData({params,payload}){
      if(payload){
          return {
              post:payload
          }
      }else{
            return axios.get('http://localhost/news/wp-json/wp/v2/posts' + params.id).then((res)=>{
            return {
                post:res.data
            }
            }).catch((error)=>{
                console.log(error)
            })
      }
    
  }
}
</script>