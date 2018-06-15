<template>

    <img :src='SRC' alt='Avatar'>

</template>
<script>
import {db,storage} from '../firebaseInit'
export default {
    props: {
        AvatarID: {
            required: true
        }
    },
    data(){
        return{
            SRC:'/images/giphy.gif'
        }
    },
    watch:{
        AvatarID: function(newid){ 
            storage.ref().child('avatar/'+newid+'.jpg').getDownloadURL().then(url=>{
            this.SRC = url
        }).catch(e=>{
            this.SRC = '/images/spacecraft.jpg'
        })
        }
    },
    created(){
        storage.ref().child('avatar/'+this.AvatarID+'.jpg').getDownloadURL().then(url=>{
            this.SRC = url
        }).catch(e=>{
            this.SRC = '/images/spacecraft.jpg'
        })
    }
}
</script>
