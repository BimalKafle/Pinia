<template>
<div>
    <div class="card" >
    <!-- <img :src='post.img' :alt="post.title" /> -->
    <div class="info">
        <div class="name">{{post.title}}</div>
        <div class="role">{{post.description}}</div>
            <div class="icons">
            <i class="material-icons" @click="postStore.deleteTask(post.id)" >delete</i>
            <i class="material-icons" 
              :class="{active:post.isFav}"
                @click="postStore.toggleFav(post.id)">favorite</i>
            </div>
    </div>
    </div>
</div>
</template>

<script>
import {UsePostStore} from '../stores/PostStore' 
export default {
    props:['post'],
    setup(){
        const postStore=UsePostStore();

        return{postStore};
    }
}
</script>

<style>
i.active{
  color: red;
}
</style>