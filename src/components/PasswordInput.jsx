import PropTypes from "prop-types";

const PasswordInput = ({
  password,
  setPassword,
  showPassword,
  setShowPassword,
  handleValidate,
  isValidating,
  validationResult,
  userName,
  setUserName,
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-bold mb-6">Password Input</h2>

    <div className="mb-4 p-4 border border-gray-300 rounded-md bg-gray-50">
      <div className="text-gray-700">
        <b>Strong Passwords, Simplified</b>
        <br />
        NIST has updated its password guidelines to prioritize simplicity and
        security. <br />
        <b>Forget complex rules and focus on length.</b>
        <ul className="list-disc pl-5">
          <li>
            <b>Length is Key:</b> Aim for at least 8 characters, the longer the
            better.
          </li>
          <li>
            <b>Creative Freedom:</b> Use any printable characters: letters,
            numbers, symbols, spaces, emojis 😁, or other languages (אפילו
            עברית).
          </li>
          <li>
            <b>Unique and Unpredictable:</b> Avoid dictionary words, personal
            information, or anything related to the app or service.
          </li>
          <li>
            <b>Memorability Matters:</b> Use memorable passphrases that are easy
            for you to remember but difficult for others to guess.
          </li>
        </ul>
        for more information see below 👇
      </div>
    </div>

    <div className="space-y-4">
      <form>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            User Name: <br />
            (personal information is added to blockList for better security.)
          </label>

          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="username"
            autoComplete="username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Enter Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern="u"
              placeholder="Enter your password"
              autoComplete="new-password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600 hover:text-gray-900"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          onClick={handleValidate}
          disabled={isValidating}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isValidating ? "Validating..." : "Validate Password"}
        </button>
      </form>
      {validationResult && (
        <div
          className={`mt-4 p-4 rounded-md ${
            validationResult.isValid
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          <div className="font-medium">
            {validationResult.isValid
              ? "Password is valid"
              : "Password is invalid"}
          </div>
          {validationResult.errors?.length > 0 && (
            <ul className="mt-2 list-disc pl-5 space-y-1">
              {validationResult.errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  </div>
);

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  setShowPassword: PropTypes.func.isRequired,
  minLength: PropTypes.number,
  handleValidate: PropTypes.func.isRequired,
  isValidating: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
  validationResult: PropTypes.shape({
    isValid: PropTypes.bool.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default PasswordInput;
