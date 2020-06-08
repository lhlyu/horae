import user from './user'
import role from './role'

/**
 * 模拟数据mock
 *
 * mock是否开启模拟数据拦截
 */

const enable = true

user({ mock: enable })
role({ mock: enable })
