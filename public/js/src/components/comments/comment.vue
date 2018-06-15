<template>

  <div class='comment'>
    <div class='comment_name'>{{comment.data().user}}</div>
    <div class='comment_content'>{{comment.data().content}}</div>
    <div class='comment_time'>{{this.date.toLocaleDateString("en-us")}}</div>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        date: new Date(this.comment.data().timestamp)
      }
    },
    props: {
      comment: {
        type: Object,
        required: true
      }
    }
  }

</script>
