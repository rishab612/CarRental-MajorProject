import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {
  const { setShowLogin, axios, setToken, navigate } = useAppContext();

  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [captchaToken, setCaptchaToken] = React.useState(null);
  const [agreeTerms, setAgreeTerms] = React.useState(false);

  // Password strength (signup only)
  const isStrongPassword = (pwd) =>
    pwd.length >= 8 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd);

  // Disable button logic (LOGIN + SIGNUP)
  const isButtonDisabled =
    state === "login"
      ? !captchaToken
      : !captchaToken || !agreeTerms || !isStrongPassword(password);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // CAPTCHA REQUIRED FOR BOTH
    if (!captchaToken) {
      return toast.error("Please verify you are not a robot");
    }

    // Extra signup validations
    if (state === "register") {
      if (!agreeTerms) {
        return toast.error("Please accept Terms & Conditions");
      }
      if (!isStrongPassword(password)) {
        return toast.error("Password must be strong");
      }
    }

    try {
      const { data } = await axios.post(`/api/user/${state}`, {
        name,
        email,
        password
      });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        navigate("/");
        setShowLogin(false);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      onClick={() => setShowLogin(false)}
      className="fixed inset-0 z-50 flex items-center bg-black/50"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <p className="text-2xl font-medium m-auto">
          <span className="text-primary">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        {/* NAME (SIGNUP ONLY) */}
        {state === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              type="text"
              required
            />
          </div>
        )}

        {/* EMAIL */}
        <div className="w-full">
          <p>Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            type="email"
            required
          />
        </div>

        {/* PASSWORD */}
        <div className="w-full">
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            type="password"
            required
          />
        </div>

        {/* PASSWORD HINT (SIGNUP ONLY) */}
        {state === "register" && password && !isStrongPassword(password) && (
          <p className="text-xs text-red-500">
            Password must be 8+ chars, 1 uppercase & 1 number
          </p>
        )}

        {/* CAPTCHA (CENTERED & SMALL) */}
        <div className="flex justify-center scale-90 w-full">
          <ReCAPTCHA
            sitekey="6LepokcsAAAAAD1KT9L05t1asNyGXZTjhT9E6gjp"
            onChange={(token) => setCaptchaToken(token)}
          />
        </div>

        {/* TERMS (SIGNUP ONLY) */}
        {state === "register" && (
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            I agree to{" "}
            <a
              href="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Terms & Conditions
            </a>
          </label>
        )}

        {/* BUTTON */}
        <button
          disabled={isButtonDisabled}
          className={`bg-primary hover:bg-blue-800 transition-all text-white w-full py-2 rounded-md
            ${isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>

        {/* SWITCH LOGIN / SIGNUP */}
        <p className="text-sm text-center w-full">
          {state === "register" ? (
            <>
              Already have account?{" "}
              <span
                onClick={() => setState("login")}
                className="text-primary cursor-pointer"
              >
                click here
              </span>
            </>
          ) : (
            <>
              Create an account?{" "}
              <span
                onClick={() => setState("register")}
                className="text-primary cursor-pointer"
              >
                click here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
