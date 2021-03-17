import type { MenuModule } from '/@/router/types';
const menu: MenuModule = {
  // 菜单排序。越大排名越后面
  orderNo: 50,
  menu: {
    path: '/system',
    name: '系统管理',
    tag: {
      // content: 'new',
    },
    children: [
      {
        path: 'user',
        name: '用户管理',
      },
      {
        path: 'role',
        name: '角色管理',
      },
      {
        path: 'security',
        name: '权限管理',
      },
    ],
  },
};
export default menu;
