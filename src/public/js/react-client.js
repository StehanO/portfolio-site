import Routes from '../../views/Routes'
import ReactEngineClient from 'react-engine/lib/client'

// boot options
const options = {
  routes: Routes,
  viewResolver: function(viewName) {
    return require('../../views/' + viewName)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactEngineClient.boot(options)
})
