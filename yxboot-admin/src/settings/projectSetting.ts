import type { ProjectConfig } from '#/config'
import {
  ContentEnum,
  PermissionModeEnum,
  RouterTransitionEnum,
  SessionTimeoutProcessingEnum,
  SettingButtonPositionEnum,
  ThemeEnum
} from '@/enums/appEnum'
import { CacheTypeEnum } from '@/enums/cacheEnum'
import { MenuModeEnum, MenuTypeEnum } from '@/enums/menuEnum'
import { APP_PRESET_COLOR_LIST, HEADER_PRESET_BG_COLOR_LIST, SIDE_BAR_BG_COLOR_LIST } from './designSetting'

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {
  // Whether to show the configuration button
  showSettingButton: true,

  // Whether to show the theme switch button
  showDarkModeToggle: true,

  // `Settings` button position
  settingButtonPosition: SettingButtonPositionEnum.AUTO,

  // Permission mode
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,

  // Permission-related cache is stored in sessionStorage or localStorage
  permissionCacheType: CacheTypeEnum.LOCAL,

  // Session timeout processing
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,

  // color
  themeColor: APP_PRESET_COLOR_LIST[0],

  // Website gray mode, open for possible mourning dates
  grayMode: false,

  // Color Weakness Mode
  colorWeak: false,

  // Whether to cancel the menu, the top, the multi-tab page display, for possible embedded in other systems
  fullContent: false,

  // content mode
  contentMode: ContentEnum.FULL,

  // Whether to display the logo
  showLogo: true,

  // Whether to show footer
  showFooter: false,

  // Header configuration
  headerSetting: {
    // header bg color
    bgColor: HEADER_PRESET_BG_COLOR_LIST[0],
    // Fixed at the top
    fixed: true,
    // Whether to show top
    show: true,
    // theme
    theme: ThemeEnum.LIGHT,
    // Whether to enable the lock screen function
    useLockPage: true,
    // Whether to show the full screen button
    showFullScreen: true,
    // Whether to show the document button
    showDoc: true,
    // Whether to show the notification button
    showNotice: true,
    // Whether to display the menu search
    showSearch: true
  },

  // Menu configuration
  menuSetting: {
    // sidebar menu bg color
    bgColor: SIDE_BAR_BG_COLOR_LIST[0],
    //  Whether to fix the left menu
    fixed: true,
    // Show Menu
    show: true,
    // Menu collapse
    collapsed: false,
    // When sider hide because of the responsive layout
    siderHidden: false,
    // Menu width
    menuWidth: 210,
    // Menu mode
    mode: MenuModeEnum.INLINE,
    // Menu type
    type: MenuTypeEnum.SIDEBAR,
    // Menu theme
    theme: ThemeEnum.DARK,
    // Split menu
    split: false
  },

  // Multi-label
  multiTabsSetting: {
    cache: false,
    // Turn on
    show: true,
    // Is it possible to drag and drop sorting tabs
    canDrag: true,
    // Turn on quick actions
    showQuick: true,
    // Whether to show the refresh button
    showRedo: true,
    // Whether to show the collapse button
    showFold: true
  },

  // Transition Setting
  transitionSetting: {
    //  Whether to open the page switching animation
    // The disabled state will also disable pageLoading
    enable: true,

    // Route basic switching animation
    basicTransition: RouterTransitionEnum.FADE_SIDE,

    // Whether to open page switching loading
    // Only open when enable=true
    openPageLoading: true,

    // Whether to open the top progress bar
    openNProgress: false
  },

  // Whether to enable KeepAlive cache is best to close during development, otherwise the cache needs to be cleared every time
  openKeepAlive: true,

  // Automatic screen lock time, 0 does not lock the screen. Unit minute default 0
  lockTime: 0,

  // Whether to show breadcrumbs
  showBreadCrumb: true,

  // Whether to show the breadcrumb icon
  showBreadCrumbIcon: false,

  // Use error-handler-plugin
  useErrorHandle: false,

  // Whether to open back to top
  useOpenBackTop: true,

  //  Is it possible to embed iframe pages
  canEmbedIFramePage: true,

  // Whether to delete unclosed messages and notify when switching the interface
  closeMessageOnSwitch: true,

  // Whether to cancel the http request that has been sent but not responded when switching the interface.
  // If it is enabled, I want to overwrite a single interface. Can be set in a separate interface
  removeAllHttpPending: false
}

export default setting
