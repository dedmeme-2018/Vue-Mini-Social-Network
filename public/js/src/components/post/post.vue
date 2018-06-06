<template>

  <router-link :to="{ name: 'view-post', params: { post: post.post_id } }" >
    <div class='note'>
      <div class='note_header common_header'>
        <img :src='imgSrc' alt='Your profile!!' />
        <div class='note_h_left'>
          <span class='note_username'>{{ post.username }}</span>
          <span class='note_time'>{{ post.post_created | timeAgo }}</span>
        </div>
      </div>
      <div class='note_title'>
        <span>{{ post.title | to-uppercase }}</span>
      </div>
      <div id='content' class='note_content'>
        <span>{{ post.content | slice }}</span>

        {{ post.img_id }}

        {{ photoSrc }}

        <img v-if="hasPhoto" :src="photoSrc" />
      </div>
    </div>
  </router-link>

</template>

<script>
import db from '../firebaseInit'
import AsyncComputed from 'vue-async-computed'

// Vue.use(AsyncComputed)

export default {
  data () {
    return {
      imgSrc: `/users/${this.post.user}/avatar.jpg`,
    }
  },

  computed: {
    hasPhoto: function () {
      return this.post.img_id != ''
    },
    photoSrc: async function () {
      await db.ref().child('images/' + this.post.img_id).getDownloadURL().then(
        function (url) {
          console.log(url);
          return url;
        }
      )
    }
  },

  asyncComputed: {
    photoSrc: async function () {
      db.ref().child('images/' + this.post.img_id).getDownloadURL().then(
        function (url) {
          console.log(url);
          return url;
        }
      )
    }
  },

  methods: {

  },

  props: {
    post: {
      type: Object,
      required: true
    }
  }
}


// if(document.getElementById("image_id").textContent != '')
//   loadPhoto(document.getElementById("image_id").textContent);

// function loadPhoto (img_id) {
//   db.ref().child('images/' + imgId).getDownloadURL().then(function(url) {
//     var image = document.createElement("img");
//     image.setAttribute("src", url);
//     document.getElementById('content').appendChild(image);
//   }
// },

</script>
