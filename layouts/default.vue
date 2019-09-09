<template>
  <div>
    <navbar />
    <nuxt />
    <my-footer />
  </div>
</template>

<script>
  import Navbar from '~/components/layouts/Navbar'
  import MyFooter from '~/components/layouts/MyFooter'
  export default {
    components: {
      Navbar,
      MyFooter
    },
  }
</script>

