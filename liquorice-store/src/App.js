import { Route, Routes } from 'react-router-dom';
import Homepage from "./Components/Homepage";
import Navigation from './Routes/Navigation/Navigation.component';



const Shop = () => {
  return (
    <h1>I am the shop</h1>
  )
}

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path='shop' element={<Shop /> } />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
