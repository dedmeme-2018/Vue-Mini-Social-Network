<template>
  <div>
  </div>
</template>


<script>
  import {db} from "../firebaseInit"
  
  export default {
    props: {
      post_id: {
        type: String,
        required: true
      }
    }
  }
</script>
