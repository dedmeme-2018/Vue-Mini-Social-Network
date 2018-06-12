<template>

  <div class='comment'>
    <span class='comment_name'>{{user}}</span>
    <span class='comment_content'>{{content}}</span>
    <span class='comment_time'>{{timestamp}}</span>
  </div>

</template>

<script>

  export default {
    props: {
      content: {
        type: String,
        required: true
      },
      user: {
        type: String,
        required: true
      }
      timestamp: {
        type: String,
        required: true
      }
    }
  }
  
</script>
