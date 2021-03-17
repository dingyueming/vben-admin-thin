import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const system: AppRouteModule = {
  path: '/system',
  name: 'system',
  component: LAYOUT,
  redirect: '/system/user',
  meta: {
    icon: 'ant-design:setting-outlined',
    title: '系统管理',
  },
  children: [
    {
      path: 'user',
      name: 'user',
      component: () => import('/@/views/sys/user/index.vue'),
      meta: {
        title: '用户管理',
        affix: false,
        icon: 'ant-design:user-outlined',
      },
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('/@/views/sys/role/index.vue'),
      meta: {
        title: '角色管理',
        affix: false,
        icon: 'ant-design:trademark-outlined',
      },
    },
    {
      path: 'security',
      name: 'security',
      component: () => import('/@/views/sys/security/index.vue'),
      meta: {
        title: '权限管理',
        affix: false,
        icon: 'ant-design:setting-outlined',
      },
    },
  ],
};

export default system;
