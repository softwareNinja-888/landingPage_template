import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import { Layout } from './components/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      {/*<PageScrollToTop/>*/}
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<App/>}/>
        </Route>
      </Routes>
      {/* <ScrollToTop/>
      <Whatsapp/> */}
    </BrowserRouter>
 
  </StrictMode>,
)
