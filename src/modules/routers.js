import blueRouters from './blue/router.js'
import purpleRouters from './purple/router.js'

const routerModules = [...blueRouters, ...purpleRouters]

console.log({
  routerModules
})

export default routerModules
