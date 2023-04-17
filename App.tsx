import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import OneSignal from 'react-native-onesignal'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Loading } from '@components/Loading'

import { THEME } from './src/theme'

import { Routes } from './src/routes'

import { AuthContextProvider } from '@contexts/AuthContext'

OneSignal.setAppId('')

OneSignal.promptForPushNotificationsWithUserResponse((res) => console.log(res))

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  )
}
