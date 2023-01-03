import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';


import SignUp from './pages/SignUp';
import SignIn from './pages/SignIN';
import Home from './pages/Home';
import Levies from './pages/Levies';
import Mines from './pages/Mines';
import Mine from './pages/Mine';
import Profile from './pages/Profile';
import AddQuarry from './pages/AddQuarry';
import DispatchOrder from './pages/DispatchOrder';
import Penalty from './pages/Penalty';
import Staff from './pages/staff';
import InspectionReport from './pages/InspectionReport';
function App() {
  const {currentUser}=useSelector(state=>state.users);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index  element={ currentUser? (<Mines/>):(<SignIn/>) }/>
          <Route path="levies" element={ currentUser? (<Levies/>):(<SignIn/>)}/>
          {/* <Route index element={<Home/>}/> */}
          <Route path="signup" element={<SignUp/>}/>
          <Route path="signin" element={ currentUser? (<Home/>):(<SignIn/>) }/>
         
          <Route path="staff" element={ currentUser? (<Staff/>):(<SignIn/>) }/>
          <Route path="mines/:id" element={ currentUser? (<Mine/>):(<SignIn/>) }/>
          <Route path="profile/:id" element={ currentUser? (<Profile/>):(<SignIn/>)}/>
          <Route path="addquarry" element={ currentUser?.role=="RC"? (<AddQuarry/>):(<SignIn/>)}/>
          <Route path="dispatchOrder" element={ currentUser? (<DispatchOrder/>):(<SignIn/>) }/>
          <Route path="penalty" element={ currentUser? (<Penalty/>):(<SignIn/>) }/>
          <Route path="inspection" element={ currentUser? (<InspectionReport/>):(<SignIn/>) }/>
        </Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
