<template>
  <div>
  <span v-if='false' >{{ username }}</span>
    <div class='aligner'>
      <div class='user_banner' padding='10px'>
        <h2> Your Data Page </h2>
        <div class='profile_img_div'>
          <Avatar :AvatarID='user.id'/>
        </div>
        <div class='user_info'>
          <router-link :to='{ name: "profile", params: { username: user.username } }' class='user_main_link'>{{ user.username }}</router-link>
          <span class='user_no_notes'>{{ user.email }}</span>
          <span class='user_no_notes'>{{ user.id }}</span>
        </div>
      </div>

      <br>

      <ui-alert style="font-size: 16px;" @dismiss="showAlert1 = false" v-show="showAlert1">
          This is all the information you have posted throughout SpeakEasy in one simple place. <br/> Here you can edit or delete your information as you see fit.
      </ui-alert>

      <div class='notes'>
        <template v-if='posts.length > 0' >
          <template v-for='post in posts' >
            <Post :key='post.post_id' :post='post' />
          </template>
          <End mssg="Back to Top"></End>
        </template>

        <template v-else >
          <Nothing mssg="You don't have any data in SpeakEasy."> </Nothing>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import userMixin from '../../mixins/user-mixin'
import moduleMixin from '../../mixins/module-mixin'
import * as fn from '../../utils/functions'
import Avatar from '../others/avatar.vue'

export default {
  mixins: [
    userMixin,
    moduleMixin
  ],
  components: {
    'Avatar': Avatar
  },
  data(){
    return {
      username: this.$route.params.username,
      showAlert1: true,
    };
  },
  methods: {
      resetAlerts() {
          this.showAlert1 = true;
      }
  },
  watch: {
    '$route' (to, from) {
      this.username = to.params.username
    },
  },
  created(){
    fn.forDataPage(this)
  },
  computed: {
    posts_len(){
      return this.p.posts.length
    },
    posts(){
        return this.p.posts
    }
  }
}
</script>
