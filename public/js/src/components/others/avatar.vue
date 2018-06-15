<template>

    <img :src='SRC' alt='Avatar'>

</template>
<script>
import db from '../firebaseInit'
import { create } from 'domain';
export default {
    props: {
        AvatarID: {
            type: Number,
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
            db.ref().child('avatar/'+newid+'.jpg').getDownloadURL().then(url=>{
            this.SRC = url
        }).catch(e=>{
            this.SRC = '/images/spacecraft.jpg'
        })
        }
    },
    created(){
        db.ref().child('avatar/'+this.AvatarID+'.jpg').getDownloadURL().then(url=>{
            this.SRC = url
        }).catch(e=>{
            this.SRC = '/images/spacecraft.jpg'
        })
    }
}
</script>
