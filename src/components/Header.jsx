import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/');
    });
  };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName } = user;
        dispatch(addUser({userId: uid, email: email , displayName: displayName}));
        navigate("/browse")
      } else {
       dispatch(removeUser());
       navigate('/')
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user && (<button className="font-bold bg-red-500 text-white p-4 my-4" onClick={handleSignOut}>Sign Out</button>)}
    </div>
  )
}

export default Header;