<template>

    <div style="cursor:default;" class='note'>
      <div class='note_header common_header'>
        <Avatar :AvatarID='this.post.user'/>
        <div display='inline;' class='note_h_left'>
          <span class='note_username'>{{ post.username }}</span>
          <router-link :to="{ name: 'view-post', params: { post: post.post_id } }" >
            <span class='data_post_icons'>
              <ui-icon>delete</ui-icon>
              <ui-icon>edit</ui-icon>
            </span>
          </router-link>
          <span class='note_time'>{{ post.post_created | timeAgo }}</span>
        </div>
      </div>
      <div class='note_content'>
        <span>{{ post.content | slice }}</span>
        <img v-if="hasPhoto" class='note_photo' :src="photoSrc" />
      </div>
    </div>

</template>

<script>
import Avatar from '../others/avatar.vue'
import {db, storage} from '../firebaseInit'

export default {
  data(){
    console.log("Hello!");
    return {
      photoSrc: ''
    }
  },
  components: {
    'Avatar': Avatar
  },
  computed: {
    hasPhoto: function () {
      return this.post.img_id != ''
    }
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
    }
  }
}
</script>
