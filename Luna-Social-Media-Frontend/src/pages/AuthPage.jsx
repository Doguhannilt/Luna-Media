import LoginCard from '../components/LoginCard.jsx'
import SignupCard from '../components/SignupCard.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setState } from '../features/actions/isSignuporLogin'

const AuthPage = () => {
  const dispatch = useDispatch(setState());
  const took = useSelector((state) => state.isloggedornot.default)
  console.log(took)
  return (
    <div>
      {took === 'login' ? <LoginCard /> : <SignupCard />}
    </div>
);
}  

export default AuthPage
