<template>
  <div>
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
  props: {
    post: {
      type: Object
    }

  },
  created: async function() {
    let {
      $route: { params: { post } }
    } = this;

    this.post_id = post

    let commentsRef = db.collection("comments").doc(post.toString()).collection("commentList");
    var that = this;

    commentsRef.get().then(function(doc) {
      console.log (doc)
      if (doc.size > 0) {
        let comments = doc.docs;
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
  }
}
</script>
