import Mock from 'mockjs'

Mock.mock('/test', {

  'number1|1-100.1-10': 1,
  'number2|123.1-10': 1,
  'number3|123.3': 1,
  'number4|123.10': 1.123
})
