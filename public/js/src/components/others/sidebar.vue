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

<style>
    #open_sidebar_button{
        font-size: 200%;
        height:30px;
        width:30px;
        transition:all .2s;
        padding:2px;
        text-align: center;
        line-height: 30px;
    }

    #open_sidebar_button:hover{
        transition:all .2s;
        color: white;
        transform: rotate(180deg);
    }

    #sidenav_img{
        border-radius: 50%;
        height:150px;
        width:150px;
    }

    #sidebar_profile_name{
        padding: 0px;
        text-decoration: none;
        text-align: center;
        font-size: 25px;
        color: black;
        display: block;
        transition: 0.3s;
        margin-bottom: 20px;
    }

    #sidebar_profile_name:hover {
      color: black;
      background-color: #f1f1f1;
    }

  .sidenav {
    z-index:10;
    height: 100vh;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #FFFFFF;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    border-radius: 0px 15px 10px 0px;
  }

  .sidenav a {
    padding: 8px 8px 8px 32px;
    margin:auto;
    text-decoration: none;
    font-size: 25px;
    color: black;
    display: block;
    transition: 0.3s;
    border-radius: 10px;
  }

  .sidenav .ha_active{
      background-color: rgba(0, 0, 0, 0.12);
      box-shadow: 0px 0px
  }

  .sidenav a:hover {
    color: #f1f1f1;
    background-color: #556674;
  }

  .sidenav .closebtn {
    float:right;
    margin-right:10px;
    text-align:center;
    padding:0px;
    border-radius: 50%;
    width: 50px;
    height:50px;
    position: relative;
    /* border:solid 1px; */
    font-size: 36px;
    top:-55px;
  }

  .sidenav .closebtn:hover{
      cursor: pointer;
      color: black;
      background-color: white;
      transition:all .2s;
      transform: rotate(180deg);
  }

  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
</style>
