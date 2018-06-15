<template>
  <div id="comment_wrapper">
    <Comment v-for="comment in comments" :key="comment.data().timestamp" v-bind:comment="comment" ></Comment>
  </div>
</template>


<script>
import {db, storage} from "../firebaseInit"
import Comment from './comment.vue'

export default {
  data() {
    return {
      comments: [],
      post_id: undefined
    }
  },
  components: {
    'Comment': Comment
  },

  created: async function() {
    let {
      $route: { params: { post } }
    } = this;

    this.post_id = post

    let commentsRef = db.collection("comments").doc(post.toString()).collection("commentList");
    var that = this;

    // firebase query
    commentsRef.get().then(function(doc) {
      console.log (doc)
      if (doc.size > 0) {
        let comments = doc.docs;

        // sort by time
        comments.sort(function (a,b){
          return a.data().timestamp - b.data().timestamp
        })

        that.comments = comments
      } else {
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });


    commentsRef.onSnapshot(function(doc) {
      if (doc.size > 0) {
        let comments = doc.docs;

        // sort by time
        comments.sort(function (a,b){
          return a.data().timestamp - b.data().timestamp
        })

        that.comments = comments
      }
    });
  }
}
</script>

<style>
    #comment_wrapper{
        /* border:solid black 1px; */
        margin-bottom:15px;
        padding-bottom:15px;
        margin-top: 15px;
        max-height: 35vh;
        overflow-y: scroll;
        border-top: solid #EEEEEE 1px;
    }
</style>
