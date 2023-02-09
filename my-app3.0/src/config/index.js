/**
 * 环境配置文件
 * 一般在企业级项目里面有三个环境
 * 开发环境
 * 测试环境
 * 线上环境
 */
// 当前的环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi:
      'https://www.fastmock.site/mock/73a8156a191885be02a608a4d39aa94e/api'
  },
  test: {
    baseApi: '//test.future.com/api',
    mockApi:
      'https://www.fastmock.site/mock/73a8156a191885be02a608a4d39aa94e/api'
  },
  pro: {
    baseApi: '//future.com/api',
    mockApi:
      'https://www.fastmock.site/mock/73a8156a191885be02a608a4d39aa94e/api'
  }
}

export default {
  env,
  // mock的总开关,
  mock: false,
  ...EnvConfig[env]
}
