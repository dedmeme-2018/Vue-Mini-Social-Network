<template>

  <div class='explores_list'>
    <div class='exl_main'>
      <Avatar :AvatarID='avatarid'/>
      <div class='exl_content'>
        <router-link :to='{ name: "profile", params: { username: exp.username } }' class='exl_username'>{{ exp.username }}</router-link>
        <div class='exl_desc'>
          <span class='exl_email'>{{ exp.email }}</span>
          <span class='exl_desc_sep'>•</span>
          <span class='exl_followers'>{{ no_of_followers }} Friends</span>
        </div>
      </div>
    </div>
    <div class='exl_ff'>
      <a v-if='!is_pending' href='#' class='pri_btn follow' @click.prevent='follow' >Add Friend</a>
      <a v-if='is_pending' href='#' class='pri_btn unfollow' @click.prevent='unfollow' >Friend request sent</a>
    </div>
  </div>

</template>

<script>
import * as fn from '../../utils/functions'
import Avatar from '../others/avatar.vue'

export default {
  props: {
    exp: {
      type: Object,
      required: true
    }
  },
  components: {
    'Avatar': Avatar
  },
  data(){
    return {
      is_pending: false,
      avatarid: this.exp.id,
      no_of_followers: 0
    }
  },
  methods: {
    follow(){
      let { exp: { id, username } } = this
      fn.follow({
        user: id,
        username,
        done: () => this.is_pending = true
      })
    },
    unfollow(){
      let { exp: { id } } = this
      fn.unfollow({
        user: id,
        done: () => this.is_pending = false
      })
    }
  },
  created: async function() {
    let
      { exp, $http } = this,
      no = await fn.noOfFollowers(exp.id)
    this.is_pending = await fn.isPending(exp.username)
    this.no_of_followers = no
  }
}
</script>
