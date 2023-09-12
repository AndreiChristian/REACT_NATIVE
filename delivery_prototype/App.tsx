import { StatusBar } from 'react-native';
import RootNavigtaion from './navigation/RootNavigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <RootNavigtaion />
    </>
  );
}

