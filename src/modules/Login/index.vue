<template lang="pug">
  
  div
    h1 Login
    el-form(:models='loginModel',  @submit.native.prevent="login")
        el-form-item(label='email')
          el-input(v-model='loginModel.email', type='email')
        el-form-item(label='password')
          el-input(v-model='loginModel.password')
        el-form-item    
          el-button(type='submit', icon='plus', @click='login') Login
    h2 if you dont have an account 
      router-link(to="/SignUp") SignUp
      
      
</template>

<script>
import firebase from 'firebase';
export default {
  data () {
    return {
      loginModel: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.loginModel.email, this.loginModel.password).then(
        (user) => {
          this.$router.replace('hello')
        },
        (error) => {
          alert(error);
        }
      )
    },
  }
}
</script>
