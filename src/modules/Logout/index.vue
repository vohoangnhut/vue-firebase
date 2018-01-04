<template lang="pug">
  h1 Logout
    el-button(@click='logout') Logout
</template>

<script>
import firebase from 'firebase';
export default {
  methods: {
    logout: function () {
        firebase.auth().signOut.then(
          this.$router.replace('login')
        );
    },
  }
}
</script>
