import type {
  LoginParams,
  GetUserInfoByUserIdModel,
  GetUserInfoByUserIdParams,
} from '/@/api/sys/model/userModel';
import type { UserInfo } from '/@/store/types';

import store from '/@/store/index';
import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';

import { PageEnum } from '/@/enums/pageEnum';
import { RoleEnum } from '/@/enums/roleEnum';
import { ROLES_KEY, TOKEN_KEY, USER_INFO_KEY, SECURITY_KEY } from '/@/enums/cacheEnum';

import { useMessage } from '/@/hooks/web/useMessage';

import router from '/@/router';

import { loginApi, getUserInfoById } from '/@/api/sys/user';

import { useI18n } from '/@/hooks/web/useI18n';
import { ErrorMessageMode } from '/@/utils/http/axios/types';
import { getAuthCache, setAuthCache } from '/@/utils/auth/index';
import { Security } from '/@/router/types';
import { getSecurityListById } from '/@/api/sys/menu';
import { SecurityEnum } from '/@/enums/securityEnum';

const NAME = 'app-user';
hotModuleUnregisterModule(NAME);

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class User extends VuexModule {
  // user info
  private userInfoState: UserInfo | null = null;

  // token
  private tokenState = '';

  // roleList
  private roleListState: RoleEnum[] = [];

  // securityList
  private securityListState: SecurityEnum[] = [];

  get getUserInfoState(): UserInfo {
    return this.userInfoState || getAuthCache<UserInfo>(USER_INFO_KEY) || {};
  }

  get getTokenState(): string {
    return this.tokenState || getAuthCache<string>(TOKEN_KEY);
  }

  get getRoleListState(): RoleEnum[] {
    return this.roleListState.length > 0 ? this.roleListState : getAuthCache<RoleEnum[]>(ROLES_KEY);
  }

  get getSecurityListState(): SecurityEnum[] {
    return this.securityListState.length > 0
      ? this.securityListState
      : getAuthCache<SecurityEnum[]>(SECURITY_KEY);
  }

  @Mutation
  commitResetState(): void {
    this.userInfoState = null;
    this.tokenState = '';
    this.roleListState = [];
  }

  @Mutation
  commitUserInfoState(info: UserInfo): void {
    this.userInfoState = info;
    setAuthCache(USER_INFO_KEY, info);
  }

  @Mutation
  commitRoleListState(roleList: RoleEnum[]): void {
    this.roleListState = roleList;
    setAuthCache(ROLES_KEY, roleList);
  }

  @Mutation
  commitSecurityListState(securityList: SecurityEnum[]): void {
    this.securityListState = securityList;
    setAuthCache(SECURITY_KEY, securityList);
  }

  @Mutation
  commitTokenState(info: string): void {
    this.tokenState = info;
    setAuthCache(TOKEN_KEY, info);
  }

  /**
   * @description: login
   */
  @Action
  async login(
    params: LoginParams & {
      goHome?: boolean;
      mode?: ErrorMessageMode;
    }
  ): Promise<GetUserInfoByUserIdModel | null> {
    try {
      const { goHome = true, mode, ...loginParams } = params;
      const data = await loginApi(loginParams, mode);

      const { token, userId } = data;

      // save token
      this.commitTokenState(token);

      // get user info
      const userInfo = await this.getUserInfoAction({ userId });

      goHome && (await router.replace(PageEnum.BASE_HOME));
      return userInfo;
    } catch (error) {
      return null;
    }
  }

  @Action
  async getUserInfoAction({ userId }: GetUserInfoByUserIdParams) {
    const userInfo = await getUserInfoById({ userId });
    const { roles } = userInfo;
    const roleList = roles.map((item) => item.value) as RoleEnum[];
    const securities = (await getSecurityListById({ id: userId })) as Security[];
    const securityList = securities.map((item) => item.uniqueName) as SecurityEnum[];
    this.commitUserInfoState(userInfo);
    this.commitRoleListState(roleList);
    this.commitSecurityListState(securityList);
    return userInfo;
  }

  /**
   * @description: logout
   */
  @Action
  async logout(goLogin = false) {
    goLogin && router.push(PageEnum.BASE_LOGIN);
  }

  /**
   * @description: Confirm before logging out
   */
  @Action
  async confirmLoginOut() {
    const { createConfirm } = useMessage();
    const { t } = useI18n();
    createConfirm({
      iconType: 'warning',
      title: t('sys.app.logoutTip'),
      content: t('sys.app.logoutMessage'),
      onOk: async () => {
        await this.logout(true);
      },
    });
  }
}
export const userStore = getModule<User>(User);
