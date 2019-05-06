<template>
  <div class="mock">
    <h1>开始与安装（Node）</h1>
    <pre class="my__mock">
<span class="my__mock__notes"># 安装</span>
npm install mockjs --save-dev
    </pre>
    <pre class="my__mock">
<span class="my__mock__notes">// 使用 Mock</span>
var Mock = require('mockjs')
var data = Mock.mock({
    <span class="my__mock__notes">// 属性 list 的值是一个数组，其中含有 1 到 10 个元素</span>
    'list|1-10': [{
        <span class="my__mock__notes">// 属性 id 是一个自增数，起始值为 1，每次增 1</span>
        'id|+1': 1
    }]
})
<span class="my__mock__notes">// 输出结果</span>
console.log(JSON.stringify(data, null, 4))
    </pre>
    <h1>语法规范</h1>
    <pre class="my__mock">
Mock.js 的语法规范包括两部分：
1、数据模板定义规范（Data Template Definition，DTD）
2、数据占位符定义规范（Data Placeholder Definition，DPD）
    </pre>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
$bgColor: #f6f8fa;
$notesColor: #6a737d;
.mock {
  width: 100%;
  h1 {
    text-align: left;
  }
}
.my__mock {
  background: $bgColor;
  width: 100%;
  text-align: left;
  padding: 8px 16px;
  .my__mock__notes {
    color: $notesColor;
  }
}
</style>
