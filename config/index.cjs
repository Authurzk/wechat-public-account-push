/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  // USE_PASSAGE: 'push-deer',
  USE_PASSAGE: 'push-plus',

  USERS: [
    {
      // 想要发送的人的名字
      name: '周坤',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // push-deer的key
      // id: 'PDU18982T7CrwJr7tm5E7sx6lPU9sVNfKOeCItSbV',

      id: 'f0580256160f43c995a50e6ca1216b28',

      province: '上海',
      city: '虹口区',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-13',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '周坤', year: '1995', date: '08-19',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '李四', year: '1996', date: '09-31',
        // },
        // {
        //   type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        // },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // // 在一起的日子
        { keyword: 'love_day', date: '2022-12-08' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },

    {
      // 想要发送的人的名字
      name: '房若琳',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // push-deer的key
      // id: 'PDU18982T7CrwJr7tm5E7sx6lPU9sVNfKOeCItSbV',

      id: 'd388ab1bb99b47db975016eb952d637e',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      province: '河南',
      city: '开封',
      useTemplateId: '0004',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小琳', year: '1996', date: '02-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '小琳', year: '1996', date: '03-22',
        // },
        {
          type: '节日', name: '春节', year: '2023', date: '01-21',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-12-07' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

