import login from './mock_login'
import user from './mock_user'
import role from './mock_role'
import quanta from './mock_quanta'

/**
 * 模拟数据mock
 *
 * mock是否开启模拟数据拦截
 */

const enable = true

login({ mock: enable })
user({ mock: enable })
role({ mock: enable })
quanta({ mock: enable })
