import { defHttp } from '/@/utils/http/axios';
import {
  getMenuListByIdParams,
  getMenuListByIdParamsResultModel,
  getSecurityListByIdParams,
  getSecurityListByIdParamsResultModel
} from './model/menuModel';

enum Api {
  GetMenuListById = '/getMenuListById',
  GetSecurityListById='/getSecurityListById'
}

/**
 * @description: Get user menu based on id
 */

export const getMenuListById = (params: getMenuListByIdParams) => {
  return defHttp.get<getMenuListByIdParamsResultModel>({ url: Api.GetMenuListById, params });
};

/**
 * @description: Get user menu based on id
 */

export const getSecurityListById = (params: getSecurityListByIdParams) => {
  return defHttp.get<getSecurityListByIdParamsResultModel>({ url: Api.GetSecurityListById, params });
};
