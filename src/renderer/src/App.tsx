import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { Button } from '@/components/ui/button'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button onClick={ipcHandle}>Click me</Button>
      <Versions></Versions>
    </div>
  )
}

export default App
