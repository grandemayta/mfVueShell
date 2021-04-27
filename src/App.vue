<template>
  <Header />
  <UserList msg="Welcome to Your Vue.js App"/>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import UserList from './components/UserList.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    UserList
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>