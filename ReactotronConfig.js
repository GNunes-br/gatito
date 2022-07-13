import Reactotron from 'reactotron-react-native'

export default Reactotron
  .setAsyncStorageHandler()
  .configure()
  .useReactNative()
  .connect()