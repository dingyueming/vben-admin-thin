import { resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

const securityList = [
  {
    id: 1,
    uniqueName: 'user.service.profile.self',
    remark: 'user.service.profile.self',
    enabled: true,
  },
  {
    id: 2,
    uniqueName: 'user.service.profile',
    remark: 'user.service.profile',
    enabled: true,
  },
  {
    id: 3,
    uniqueName: 'user.service.list',
    remark: 'user.service.list',
    enabled: true,
  },
  {
    id: 4,
    uniqueName: 'user.service.modify.self',
    remark: 'user.service.modify.self',
    enabled: true,
  },
  {
    id: 5,
    uniqueName: 'user.service.modify',
    remark: 'user.service.modify',
    enabled: true,
  },
  {
    id: 6,
    uniqueName: 'user.service.delete',
    remark: 'user.service.delete',
    enabled: true,
  },
  {
    id: 7,
    uniqueName: 'user.service.add',
    remark: 'user.service.add',
    enabled: true,
  },
  {
    id: 8,
    uniqueName: 'user.service.change.password',
    remark: 'user.service.change.password',
    enabled: true,
  },
  {
    id: 9,
    uniqueName: 'user.service.roles.self',
    remark: 'user.service.roles.self',
    enabled: true,
  },
  {
    id: 10,
    uniqueName: 'user.service.roles',
    remark: 'user.service.roles',
    enabled: true,
  },
  {
    id: 11,
    uniqueName: 'user.service.securities.self',
    remark: 'user.service.securities.self',
    enabled: true,
  },
  {
    id: 12,
    uniqueName: 'user.service.securities',
    remark: 'user.service.securities',
    enabled: true,
  },
  {
    id: 13,
    uniqueName: 'role.service.list',
    remark: 'role.service.list',
    enabled: true,
  },
  {
    id: 14,
    uniqueName: 'role.service.add',
    remark: 'role.service.add',
    enabled: true,
  },
  {
    id: 15,
    uniqueName: 'role.service.modify',
    remark: 'role.service.modify',
    enabled: true,
  },
  {
    id: 16,
    uniqueName: 'role.service.delete',
    remark: 'role.service.delete',
    enabled: true,
  },
  {
    id: 17,
    uniqueName: 'role.service.give',
    remark: 'role.service.give',
    enabled: true,
  },
  {
    id: 18,
    uniqueName: 'security.service.list',
    remark: 'security.service.list',
    enabled: true,
  },
  {
    id: 19,
    uniqueName: 'security.service.give',
    remark: 'security.service.give',
    enabled: true,
  },
  {
    id: 20,
    uniqueName: 'security.service.refresh',
    remark: 'security.service.refresh',
    enabled: true,
  },
  {
    id: 21,
    uniqueName: 'security.service.all',
    remark: 'security.service.all',
    enabled: true,
  },
];

export default [
  {
    url: '/basic-api/getSecurityListById',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { id } = query;
      if (!id || id === '1') {
        return resultSuccess(securityList);
      }
      if (id === '2') {
        return resultSuccess(securityList);
      }
    },
  },
] as MockMethod[];
