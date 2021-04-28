<template>
  <header>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  header {
    display: flex;
    width: 100%;
    height: 80px;
    padding-left: 20px;
    background: #303030;
  }

  ul {
    display: flex;
    list-style: none;
  }

  ul li {
    display: flex;
    align-items: center;
  }

  ul li a {
    margin-right: 20px;
    color: #f0f0f0;
  }
</style>
