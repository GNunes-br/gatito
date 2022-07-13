import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import { DefaultPageComponent } from './src/components'

import Routes from './src/routes'

export default function App() {
  return <DefaultPageComponent>
    <Routes />
  </DefaultPageComponent>
}