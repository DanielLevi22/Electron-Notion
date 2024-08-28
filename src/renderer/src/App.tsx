export  function App() {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <h1>Hello word</h1>
    </>
  )
}
