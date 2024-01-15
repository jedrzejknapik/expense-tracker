import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    console.log("results: ", results);
    const { uid, displayName, photoURL } = results.user ?? {};

    const authInfo = {
      userId: uid,
      name: displayName,
      photoUrl: photoURL,
      isAuth: true,
    };

    console.log("user: ", authInfo);

    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };

  if (isAuth) {
    return <Navigate to={"/expense-tracker"} />;
  }

  return (
    <div>
      <p>Sign In with Google to continue</p>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
};
