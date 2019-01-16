<template>
  <el-container>
    <el-aside>
      <el-menu default-active="2" router>
        <el-submenu index='1'>
          <template slot='title'>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index='thermo'>
              热力图
            </el-menu-item>
            <el-menu-item index='imageData'>图片处理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  height:100%;
}
</style>
