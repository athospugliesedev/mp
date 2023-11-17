import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from './tamagui.config'

export default function App() {
  return (
    <Provider>
      <TamaguiProvider config={tamaguiConfig}>
        <NativeNavigation />
      </TamaguiProvider>
    </Provider>
  )
}
