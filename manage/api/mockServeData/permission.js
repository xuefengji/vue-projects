import Mock from 'mockjs'
export default{
  getMenu:config =>{
    // 先判断用户是否存在
    // 再判断账户和密码是否正确
    const { username,password} = JSON.parse(config.body)
    if(username === 'admin' && password === 'admin'){
      return{
        code:20000,
        data:{
          menu:[
            {
              path:'/home',
              name:'home',
              label:'首页',
              icon:'s-home',
              url:'home/index'
            },
            {
              path:'/user',
              name:'user',
              label:'用户管理',
              icon:'user',
              url:'user/index'
            },
            {
              path:'/mall',
              name:'mall',
              label:'商品管理',
              icon:'video-play',
              url:'product/index'
            },
            {
              path: '/other',
              label:'其他',
              icon:'location',
              children:[
                {
                  path:'/page1',
                  name:'page1',
                  label:'页面1',
                  icon:'setting',
                  url:'other/pageOne.vue'
                },
                {
                  path:'/page2',
                  name:'page2',
                  label:'页面2',
                  icon:'setting',
                  url:'other/pageTwo.vue'
                }
              ]

            },

          ],
          token:Mock.Random.guid(),
          message:'获取成功'
        }

      }
    }else if(username === 'xiaoxiao' && password === 'xiaoxiao'){
      return {
        code:20000,
        data:{
          menu:[
            {
              path:'/home',
              name:'home',
              label:'首页',
              icon:'s-home',
              url:'home/index'
            },
            {
              path:'/video',
              name:'video',
              label:'商品管理',
              icon:'video-play',
              url:'product/index'
            }
          ],
          token:Mock.Random.guid(),
          message:'获取成功'
        }
      }
    }else{
      return {
        code:-999,
        data:{
          message:'密码错误'
        }
      }
    }
  }
}