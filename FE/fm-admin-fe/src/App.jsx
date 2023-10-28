import { BrowserRouter, Routes, Route } from "react-router-dom"
import { populateRoutes } from "./routes"
import DefaultLayout from "./components/Layout/DefaultLayout"
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {
              populateRoutes.map((route, index) => {
                let Page = route.component
                let Layout = route.layout ? route.layout : DefaultLayout
                return <Route key={index} path={route.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
              })
            }
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>

  )
}

export default App
