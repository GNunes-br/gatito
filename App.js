import { StatusBar, SafeAreaView } from 'react-native';
import ServicesPage from './src/pages/Services'

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ServicesPage />
    </SafeAreaView>
  );
}