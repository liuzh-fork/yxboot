import { useThemeStoreWithOut } from '@/store/modules/themeStore'
import { setCssVar } from '@/utils/theme'
import { theme } from 'ant-design-vue'
import { storeToRefs } from 'pinia'
import { computed, unref } from 'vue'

export const useAppTheme = () => {
  const themeStore = useThemeStoreWithOut()
  const { setTheme } = themeStore
  const { getTheme } = storeToRefs(themeStore)

  const isDark = computed(() => {
    return unref(getTheme).algorithm === theme.darkAlgorithm
  })

  const toggleTheme = (dark: boolean) => {
    unref(getTheme).algorithm = dark ? theme.darkAlgorithm : theme.defaultAlgorithm
    setTheme(unref(getTheme))
  }

  const setThemeColor = (color: string) => {
    unref(getTheme).token = {
      ...unref(getTheme).token,
      colorPrimary: color
    }
    setTheme(unref(getTheme))
  }

  const primaryColor = computed(() => {
    return unref(getTheme).token?.colorPrimary
  })

  watch(
    primaryColor,
    (val) => {
      val && setCssVar('--primary-color', val)
    },
    { deep: true }
  )

  return {
    getTheme,
    isDark,
    toggleTheme,
    setThemeColor,
    primaryColor
  }
}
