import { Router, Route } from 'electron-router-dom'

import { Blank } from './src/pages/Blank'
import { Document } from './src/pages/Document'
import { Default } from './src/pages/layouts/default'

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Blank />} />
          <Route path="/documents/:id" element={<Document />} />
        </Route>
      }
    />
  )
}
