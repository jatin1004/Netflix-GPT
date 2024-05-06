import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
   
    const handleSignOut = () => {
        signOut(auth).then(() => {   
          }).catch((error) => {
            navigate("/erro");
          });
          
    };

    useEffect(()=> {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({ uid:uid, email: email, displayName: displayName, photoURL: photoURL }));
            navigate("/browse");
            // ...
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
          }
        });
        // unsubscribe when components unmount
        return () => unsubscribe();
  }, []);


  return (
    <div className="absolute w-full pl-28 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
      <img
        className="w-52"
        src={LOGO}
        alt="logo-img"
      />
      {user && <div className="flex p-4">
        <img className="h-12 w-12 "
          alt="UserIcon"
          src={user.photoURL }
        />
        <button className="font-bold text-blue-700" onClick={handleSignOut}>(Sign Out)</button>
      </div>
     }
    </div>
  );
};
export default Header;
