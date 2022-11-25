import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import Forms from './pages/Forms';
import { useRoutes } from 'react-router-dom';
import { useState } from 'react';

import DetailedInfoPage from './pages/DetailedInfoPage';

const Routes = (props: any) => {
  const routes = useRoutes([
      { path: '/', element: <Home 
        loading={props.loading} setLoading={props.setLoading}
        /> },
      { path: 'about', element: <AboutUs /> },
      { path: '*', element: <Home /> },
      { path: 'forms', element: <Forms /> },
      { path: 'video', element: <DetailedInfoPage />},
  ]);
  return routes;
};

function App() {
  const [loading, setLoading] = useState(false);

  return (
      <div className="App">
        <div className="wrapper">
          <Header loading={loading} setLoading={setLoading} />
          <Routes
            loading={loading} setLoading={setLoading}>
          </Routes>
        </div>
      </div>
  );
}

export default App;
