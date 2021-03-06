import universal from 'react-universal-component'
import Loading from 'components/Loading'

export default universal(() => import('./Home'), {
  loading: Loading
})
