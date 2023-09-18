import { StatusBar } from 'react-native';
import RootNavigtaion from './navigation/RootNavigation';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function App() {
  return (
    <>
      <Provider store={store} >
        <StatusBar barStyle={"dark-content"} />
        <RootNavigtaion />
      </Provider>
    </>
  );
}

