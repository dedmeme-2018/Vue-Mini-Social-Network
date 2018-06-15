<template>

  <div class='comment'>
    <div class='comment_name'>{{comment.data().user}}</div>
    <div class='comment_content'>
        {{comment.data().content}}
        <div class='comment_time'>{{this.date.toLocaleDateString("en-us")}}</div>
    </div>

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

<style>
    .comment{
        width:95%;
        margin:auto;
        border-radius:15px;
        padding:10px 15px 10px 0px;
        margin-top:10px;
        /* background-color: #D9E4F1; */
        /* border:solid black 1px; */
        max-height: 500px;
    }

    .comment_content{
        font-weight: normal;
        width:95%;
        margin:auto;
        border-radius:15px;
        padding:10px 15px 10px 0px;
        margin-top:10px;
        background-color: #D9E4F1;
        /* border:solid black 1px; */
        max-height: 500px;
    }

    .comment_time{
        font-size: 10px;
        margin-top:10px;
        font-weight: lighter;
    }

    .comment_name{
        position:relative;
        right:2.5%;
        font-weight: bold;
        margin-bottom:5px;
    }
</style>
