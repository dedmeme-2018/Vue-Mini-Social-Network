<template>

  <div class='user_banner'>

    <div class='profile_img_div'>
       <Avatar :AvatarID='user.id'/>
    </div>
    <div class='user_info'>
      <router-link :to='{ name: "profile", params: { username: user.username } }' class='user_main_link'>{{ user.username }}</router-link>
      <span class='user_no_notes'>{{ user.email }}</span>
      <div class='user_bio' :class='{no_bio: !user.bio}'>
        <span v-if='user.bio' >{{ user.bio }}</span>
        <template v-else >
          <span v-if='me' >You have no bio!!</span>
          <span v-else >{{ user.username }} has no bio!!</span>
        </template>
      </div>
      <div class='user_buttons'>
        <template v-if='me'>
          <router-link :to="{ name: 'create-post', params: { username: user.username } }" class='pri_btn' >New Post</router-link>
          <router-link :to="{ name: 'edit-profile' }" class='pri_btn' >Edit Profile</router-link>
          <router-link :to="{ name: 'confirm-followers' }" class='pri_btn' >Confirm Requests</router-link>
          <router-link :to="{ name: 'delete-followers' }" class='pri_btn' >Remove Friends</router-link>
          <router-link :to="{ name: 'data-page'}" class='pri_btn' color=''>Data Page</router-link>
        </template>
        <template v-else >
          <a v-if='is_following' href='#' class='pri_btn unfollow' @click.prevent='unfollow' >Remove friend</a>
          <a v-else-if='is_pending' href='#' class='pri_btn unfollow' @click.prevent='unfollow' >Pending</a>
          <a v-else href='#' class='pri_btn follow' @click.prevent='follow' >Follow</a>
        </template>
      </div>
      <hr />
      <div class='user_stats'>
        <div class='stat_post'>
          <span class='stat_hg'>{{ posts_len }}</span>
          <span class='stat_nhg'>Posts</span>
        </div>
        <router-link :to='{ name: "followers", params: { username: user.username } }' class='stat_followers'>
          <span class='stat_hg'>{{ f.followers.length + f.followings.length }}</span>
          <span class='stat_nhg'>Friends</span>
        </router-link>
        <div class='stat_views stat_disabled '>
          <span class='stat_hg'>{{ f.views }}</span>
          <span class='stat_nhg'>Profile views</span>
        </div>
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
  data(){
    return {
      is_following: false,
      is_pending: false,
    }
  },
  components: {
    'Avatar': Avatar
  },
  computed: {
    posts_len(){
      return this.p.posts.length
    }
  },
  methods: {
    follow: async function(){
      let {
        user: { id, username },
        $store: { commit },
      } = this
      fn.follow({
        user: id,
        username,
        update_followers: true,
        commit,
        done: () => {
          this.is_pending = true
        }
      })
    },
    unfollow: async function(){
      let {
        user: { id } ,
        $store: { commit },
      } = this
      fn.unfollow({
        user: id,
        update_followers: true,
        commit,
        done: () => {
          this.is_following = false
          this.is_pending = false
        }
      })
    }
  },
  created: async function() {
    this.is_following = await fn.isFollowing(this.$route.params.username)
    this.is_pending = await fn.isPending(this.$route.params.username)
  },
  updated: async function() {
    this.is_following = await fn.isFollowing(this.$route.params.username)
    this.is_pending = await fn.isPending(this.$route.params.username)
  }
}
</script>
