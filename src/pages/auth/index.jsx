import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    console.log("results: ", results);
    const { uid, displayName, photoUrl } = results.user ?? {};

    const authInfo = {
      userId: uid,
      name: displayName,
      profilePhoto: photoUrl,
      isAuth: true,
    };

    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };

  return (
    <div>
      <p>Sign In with Google to continue</p>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
};
