<template>

  <router-link :to="{ name: 'view-post', params: { post: post.post_id } }" >
    <div class='note'>
      <div class='note_header common_header'>
        <Avatar :AvatarID='avatarid'/>
        <div class='note_h_left'>
          <span class='note_username'>{{ post.username }}</span>
          <span class='note_time'>{{ post.post_created | timeAgo }}</span>
        </div>
      </div>
      <!-- <div class='note_title'>
        <span>{{ post.title | to-uppercase }}</span>
      </div>
 -->      <div id='content' class='note_content'>
        <span>{{ post.content | slice }}</span>
        <img v-if="hasPhoto" class='note_photo' :src="photoSrc" />
      </div>
    </div>
  </router-link>

</template>

<script>
import Avatar from '../others/avatar.vue'
import {db, storage} from '../firebaseInit'

export default {
  data () {
    return {
      avatarid: this.post.user,
      photoSrc: '',
    }
  },

  computed: {
    hasPhoto: function () {
      return this.post.img_id != '' && this.post.img_id !== undefined
    }
  },
  components: {
    'Avatar': Avatar
  },
  created: function () {
    var vm = this;

    if(this.hasPhoto){
      storage.ref().child('images/' + this.post.img_id)
      .getDownloadURL().then(function(url){
         vm.photoSrc = url;
      })
    }
  },

  props: {
    post: {
      type: Object,
      required: true
    },
  }
}

</script>
