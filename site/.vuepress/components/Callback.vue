<template>
  <p>Checking Authentication...</p>
</template>

<script>
console.log('HII');
export default {


  async beforeMount () {
    // Process the auth tokens
    const handleAuth = await this.$auth.handleAuthentication();
  }
}
</script>