import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';
const menu: MenuModule = {
  // 菜单排序。越大排名越后面
  orderNo: 50,
  menu: {
    path: '/system',
    name: t('routes.demo.system.moduleName'),
    tag: {
      // content: 'new',
    },
    children: [
      {
        path: 'user',
        name: t('routes.demo.system.account'),
      },
      {
        path: 'role',
        name: t('routes.demo.system.role'),
      },
      {
        path: 'security',
        name: t('routes.demo.system.security'),
      },
    ],
  },
};
export default menu;
