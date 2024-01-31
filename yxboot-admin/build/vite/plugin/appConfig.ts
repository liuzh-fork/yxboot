import colors from 'picocolors'
import { type PluginOption } from 'vite'
import pkg from '../../../package.json'
import { getConfigFileName } from '../../getConfigFileName'
import { getEnvConfig } from '../utils/env'
import { createContentHash } from '../utils/hash'

const GLOBAL_CONFIG_FILE_NAME = '_app.config.js'
const PLUGIN_NAME = 'app-config'

function createAppConfigPlugin({ isBuild }: { isBuild: boolean }): PluginOption {
  let publicPath: string
  let source: string
  if (!isBuild) {
    return {
      name: PLUGIN_NAME
    }
  }
  const { version = '' } = pkg

  return {
    name: PLUGIN_NAME,
    async configResolved(_config) {
      publicPath = _config.base
      source = await getConfigSource()
    },
    async transformIndexHtml(html) {
      publicPath = publicPath.endsWith('/') ? publicPath : `${publicPath}/`

      const appConfigSrc = `${publicPath || '/'}${GLOBAL_CONFIG_FILE_NAME}?v=${version}-${createContentHash(source)}`

      return {
        html,
        tags: [
          {
            tag: 'script',
            attrs: {
              src: appConfigSrc
            }
          }
        ]
      }
    },
    async generateBundle() {
      try {
        this.emitFile({
          type: 'asset',
          fileName: GLOBAL_CONFIG_FILE_NAME,
          source
        })

        console.log(colors.cyan(`✨configuration file is build successfully!`))
      } catch (error) {
        console.log(colors.red('configuration file configuration file failed to package:\n' + error))
      }
    }
  }
}

async function getConfigSource() {
  const config = await getEnvConfig()
  const variableName = getConfigFileName(config)
  const windowVariable = `window.${variableName}`
  // Ensure that the variable will not be modified
  let source = `${windowVariable}=${JSON.stringify(config)};`
  source += `
    Object.freeze(${windowVariable});
    Object.defineProperty(window, "${variableName}", {
      configurable: false,
      writable: false,
    });
  `.replace(/\s/g, '')
  return source
}

export { createAppConfigPlugin }
