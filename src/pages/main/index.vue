<template>
    <el-container class="my__container">
        <el-header class="my__header">
            <my-header></my-header>
        </el-header>
        <el-main class="my__main">
            <!-- <my-body></my-body> -->
            <router-view></router-view>
        </el-main>
        <el-footer>jinmeiyuan测试</el-footer>
    </el-container>
</template>
<script>
import myHeader from './components/header'
export default {
  components: { myHeader }
}
</script>
<style lang="scss">
.my__container{
    min-height: 100%;
}
.my__header{
    width: 100%;
    padding: 0;
}
.my__main{
    width: 1280px;
    display: flex;
    margin: 0 auto;
}
</style>
<style scoped>
   @media screen and (min-width: 1280px) {
       .my__main{
           width: 1280px;
       }
   }
   @media screen and (min-width: 960px) and (max-width:1280px){
       .my__main{
           width: 960px;
       }
   }
</style>
