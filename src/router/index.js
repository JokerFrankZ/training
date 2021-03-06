import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/customerInfo/customerInfoManage'),
    meta: {
      title: '客户关系管理信息系统'
    }
  },

  {
    path: '/customerInfo',
    component: () => import('@/views/customerInfo/customerInfo'),
    meta: {
      title: '客户信息添加'
    }
  },
  {
    path: '/customerInfoManage',
    component: () => import('@/views/customerInfo/customerInfoManage'),
    meta: {
      title: '客户信息管理'
    }
  },

  {
    path: '/contactInfoManage',
    component: () => import('@/views/contactInfo/contactInfoManage'),
    meta: {
      title: '联系人信息管理'
    }
  },
  {
    path: '/contactInfo',
    component: () => import('@/views/contactInfo/contactInfo'),
    meta: {
      title: '联系人信息添加'
    }
  },

  {
    path: '/servicesInfoAdd',
    component: () => import('@/views/servicesManage/servicesInfoAdd'),
    meta: {
      title: '客户服务添加'
    }
  },
  {
    path: '/servicesManage',
    component: () => import('@/views/servicesManage/servicesManage'),
    meta: {
      title: '客户服务管理'
    }
  },

  {
    path: '/customerServices',
    component: () => import('@/views/customerServices/customerServices'),
    meta: {
      title: '客户关怀'
    }
  },
  {
    path: '/generalQuery',
    component: () => import('@/views/generalQuery/generalQuery'),
    meta: {
      title: '综合查询'
    }
  },
  {
    path: '/queryManage',
    component: () => import('@/views/generalQuery/queryManage'),
    meta: {
      title: '查询结果'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // document.title = to.matched[0].meta.title
  next()
})

export default router
