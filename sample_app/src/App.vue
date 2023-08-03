
<script>
import PostList from './components/PostList.vue'
import {UsePostStore} from './stores/PostStore'
import { ref } from 'vue';
export default{
  components:{PostList},
  setup(){
    const postStore=UsePostStore()
    const filter=ref('all');
    return {postStore,filter}
  }
}

</script>

<template>
       <nav class="filter">
        <button @click="filter='all'">All Sports</button>
        <button @click="filter='fav'">Favorites</button>
       </nav>
        <div class="task-list" v-if="filter==='all'">
       
               <div v-for="post in postStore.Posts" :key="post.id" style="margin:5px">
                <PostList :post="post"/>
              </div>
        </div>
          
          <div class="task-list" v-if="filter==='fav'">
               <div v-for="post in postStore.favs" :key="post.id" style="margin:5px">
                  <PostList :post="post"/>
                </div>
        </div>


</template>

<style scoped>

</style>
