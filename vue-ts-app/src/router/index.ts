import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'


declare module 'vue-router' {
  interface RouteMeta {
    menu?: boolean,
    title?: string,
    icon?: string,
    auth?: boolean
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Home.vue'),
    meta: {
      menu: true,
      title: '考勤管理',
      icon: 'document-copy',
      auth: true
    },
    children: [
      {
        path: 'sign',
        name: 'sign',
        meta: {
          menu: true,
          title: '在线打卡签到',
          icon: 'calendar',
          auth: true
        },
        component: () => import('@/views/Sign/Sign.vue')
      },
      {
        path: 'exception',
        name: 'exception',
        meta: {
          menu: true,
          title: '异常考勤查询',
          icon: 'warning',
          auth: true
        },
        component: () => import('@/views/Exception/Exception.vue')
      },
      {
        path: 'check',
        name: 'check',
        meta: {
          menu: true,
          title: '我的考勤审批',
          icon: 'finished',
          auth: true
        },
        component: () => import('@/views/Check/Check.vue')
      },
      {
        path: 'apply',
        name: 'apply',
        meta: {
          menu: true,
          title: '添加考勤审批',
          icon: 'document-add',
          auth: true
        },
        component: () => import('@/views/Apply/Apply.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router