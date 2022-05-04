import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {

  // Navigation is the parent route, which contains all the child routes. We nest routes like this is because we want to keep the Nav bar when other components change
  return (
    <Routes>

      <Route path='/' element={<Navigation />}>

        {/* Index routes can be thought of as "default child routes". When a parent route has multiple children, but the URL is just at the parent's path, you probably want to render something into the outlet. */}
        <Route index element={<Home />} />  

        {/* 'shop/*' means there are subsequent URL parameters set after shop route. Shop is a parent route */}
        <Route path='shop/*' element={<Shop />} />

        <Route path='auth' element={<Authentication />} />

        <Route path='checkout' element={<Checkout />} />

      </Route>

    </Routes>
  );
};

export default App;