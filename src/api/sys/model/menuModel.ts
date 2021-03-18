import { RouteMeta,Security } from '/@/router/types';
export interface RouteItem {
  path: string;
  component: any;
  meta: RouteMeta;
  name?: string;
  alias?: string | string[];
  redirect?: string;
  caseSensitive?: boolean;
  children?: RouteItem[];
}

/**
 * @description: Get menu interface
 */
export interface getMenuListByIdParams {
  id: number | string;
}

/**
 * @description: Get security interface
 */
export interface getSecurityListByIdParams {
  id: number | string;
}

/**
 * @description: Get menu return value
 */
export type getMenuListByIdParamsResultModel = RouteItem[];

/**
 * @description: Get security return value
 */
 export type getSecurityListByIdParamsResultModel = Security[];
