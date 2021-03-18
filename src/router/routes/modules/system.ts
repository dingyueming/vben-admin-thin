import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'system',
  component: LAYOUT,
  redirect: '/system/user',
  meta: {
    icon: 'ant-design:setting-outlined',
    title: t('routes.demo.system.moduleName'),
  },
  children: [
    {
      path: 'user',
      name: 'user',
      component: () => import('/@/views/sys/user/index.vue'),
      meta: {
        title: t('routes.demo.system.account'),
        affix: false,
        securitySign:'user.service.list',
        icon: 'ant-design:user-outlined',
      },
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('/@/views/sys/role/index.vue'),
      meta: {
        title: t('routes.demo.system.role'),
        affix: false,
        securitySign:'role.service.list',
        icon: 'ant-design:trademark-outlined',
      },
    },
    {
      path: 'security',
      name: 'security',
      component: () => import('/@/views/sys/security/index.vue'),
      meta: {
        title: t('routes.demo.system.security'),
        affix: false,
        securitySign:'security.service.list',
        icon: 'ant-design:security-scan-outlined',
      },
    },
  ],
};

export default system;
