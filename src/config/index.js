import development from './development'
import staging from './staging'
import production from './production'

const environments = {
  development,
  staging,
  production
}

export default environments['development']
