import { Box, useTheme } from 'native-base'
import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from '@react-navigation/native'

import { useAuth } from '@hooks/useAuth'

import { AuthNavigatorRoutesProps, AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

import { Loading } from '@components/Loading'

const linking = {
  prefixes: ['ignite_gym://', 'com.em.ignitegym://'],
  config: {
    screens: {
      exercise: {
        path: 'exercise/:exerciseId',
        parse: {
          exerciseId: (exerciseId: string) => exerciseId,
        },
      },
      history: {
        path: 'history',
      },
      home: {
        path: 'home',
      },
      signIn: {
        path: 'signIn',
      },
      notFound: '*',
    },
  },
}

export function Routes() {
  const nativeBaseTheme = useTheme()

  const { user, isLoadingUserStorageData } = useAuth()

  const theme = DefaultTheme
  theme.colors.background = nativeBaseTheme.colors.gray[700]

  if (isLoadingUserStorageData) {
    return <Loading />
  }

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme} linking={linking}>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  )
}
