<template>
  <div>
    <router-link to="/">
      <el-button type="primary">主要按钮</el-button>
    </router-link>
    <router-link to="/user">
      <el-button type="success">成功按钮</el-button>
    </router-link>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
