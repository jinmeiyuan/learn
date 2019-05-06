<template>
    <div class="header__box">
        <div class="header__box__linkbox">
            <svg-icon iconClass="javascript" svgStyle="width:60px;height:60px;">饿了么</svg-icon>
            <span>基础自检</span>
            <router-link class="header__box__link" to="/">JavaScript基础</router-link>
            <router-link class="header__box__link" to="/place/order">我的订单</router-link>
            <router-link class="header__box__link" to="/place/cooperate">加盟合作</router-link>
            <router-link class="header__box__link" to="/place/mock">mock</router-link>
        </div>
        <nav class="header__box__nav">
            <router-link class="header__box__nav__link" to="/">规则中心</router-link>
            <div>
                <svg-icon iconClass="phone"></svg-icon>
                <span>手机应用</span>
            </div>
            <div>
                <span>dollar</span>
                <svg-icon iconClass="down"></svg-icon>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
$bg-color:#1e89e0;
.header__box{
    background: $bg-color;
    height: 100%;
    font-size: 16px;
    color: #fff;
    align-items: center;
    display: flex;
    padding: 0 5rem;
    min-width: 1280px;
    justify-content: space-between;
    .header__box__linkbox{
        display: flex;
        align-items: center;
        height: 100%;
    }
    .header__box__link{
        color: #fff;
        display: flex;
        width: 8rem;
        justify-content: center;
        height: 100%;
        align-items: center;
    }
    .header__box__link:hover{
        background: #006bc7;
    }
    .header__box__nav{
        display: flex;
        color: #d2e7f9;
        float: right;
        >a{
            color: inherit;
            width: 7.5rem;
        }
        >div{
            color: inherit;
            width: 7.5rem;
            cursor: pointer;
        }
    }
}
</style>
