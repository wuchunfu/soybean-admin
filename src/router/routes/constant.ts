import { getLoginModuleRegExp } from '@/utils';
import { LoginModuleKey } from '@/interface';

/** 固定的路由 */
const constantRoutes: AuthRoute.Route[] = [
  {
    name: 'root',
    path: '/',
    redirect: '/dashboard/analysis',
    meta: {
      title: 'Root'
    }
  },
  {
    name: 'login',
    path: `/login/:module(${getLoginModuleRegExp()})?`,
    component: 'blank',
    props: route => {
      const moduleType = (route.params.module as LoginModuleKey) || 'pwd-login';
      return {
        module: moduleType
      };
    },
    meta: {
      title: '登录',
      single: true,
      singleOriginPath: '/login'
    }
  },
  {
    name: 'no-permission',
    path: '/no-permission',
    component: 'blank',
    meta: {
      title: '无权限',
      single: true
    }
  },
  {
    name: 'not-found',
    path: '/not-found',
    component: 'blank',
    meta: {
      title: '未找到',
      single: true
    }
  },
  {
    name: 'service-error',
    path: '/service-error',
    component: 'blank',
    meta: {
      title: '服务器错误',
      single: true
    }
  },
  // 匹配无效的路径重定向not-found的页面
  {
    name: 'redirect-not-found',
    path: '/:pathMatch(.*)*',
    component: 'blank',
    meta: {
      title: '未找到',
      single: true
    }
  }
];

export default constantRoutes;