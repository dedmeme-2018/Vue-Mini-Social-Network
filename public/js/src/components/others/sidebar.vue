<template>
  <div>
    <div id="open_sidebar_button" style="cursor:pointer" @click="openNav()">&#9776;</div>
    <div id="mySidenav" class="sidenav">
      <a  class="closebtn" @click="closeNav()">&times;</a>
      <div style="width:150px;margin:auto;" class='profile_img_div'>
        <Avatar :AvatarID='session.id'/>
      </div>
      <router-link id="sidebar_profile_name" :to='{ name: "profile", params: { username: session.username } }' class='user_main_link'>
       {{ session.username }}
      </router-link>
      <table>
        <router-link to='/' :exact='true' active-class='ha_active'>
          <tr>
            <td><ui-icon>home</ui-icon></td>
            <td>Home</td>
          </tr>
        </router-link>
        <router-link to='/explore' active-class='ha_active'>
          <tr>
            <td><ui-icon>public</ui-icon></td>
            <td>Explore</td>
          </tr>
        </router-link>
        <router-link to='/deactivate' active-class='ha_active' >
          <tr>
            <td><ui-icon>delete_forever</ui-icon></td>
            <td>Deactivate</td>
          </tr>
        </router-link>
        <router-link :to="{ name: 'publish', params: { username: session.username }}" active-class="ha_active">
          <tr><td>SpeakEasy Ads</td></tr>
        </router-link>
      </table>
    </div>
  </div>
</template>

<script>
  import userMixin from '../../mixins/user-mixin'
  import Avatar from '../others/avatar.vue'
  
  export default {
    name: 'Sidebar',
    components: {
    },
    mixins: [userMixin],
    data () {
      return {
      }
    },
    components: {
      'Avatar': Avatar
    },
    computed: {
    },
  
    methods: {
      openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      },
      closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
  
    },
    created () {
    }
  }
  
</script>