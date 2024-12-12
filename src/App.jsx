import  { useState } from 'react';
import  {validatePassword }  from 'nist-password-validator';
import PropTypes from 'prop-types';

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [minLength, setMinLength] = useState(15);
  const [maxLength, setMaxLength] = useState(64);
  const [hibpCheck, setHibpCheck] = useState(true);
  const [blacklist, setBlacklist] = useState('');
  const [validationResult, setValidationResult] = useState(null);
  const [isValidating, setIsValidating] = useState(false);

  const handleValidate = async () => {
    setIsValidating(true);
    try {
      const result = await validatePassword(password, {
        minLength,
        maxLength,
        hibpCheck,
        blacklist: blacklist.split(',').map(item => item.trim()).filter(Boolean)
      });
      setValidationResult(result);
    } catch (error) {
      setValidationResult({
        isValid: false,
        errors: [error.message]
      });
    }
    setIsValidating(false);
  };

  const InfoCard = ({ title, children }) => (
    <div className="space-y-2">
      <h4 className="text-indigo-600 font-medium text-lg">{title}</h4>
      {children}
    </div>
  );

  InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600">Password Validator</h1>

        {/* Main Content - Moved to the top */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Password Input</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Enter Password:
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
                {isValidating ? 'Validating...' : 'Validate Password'}
              </button>

              {validationResult && (
                <div className={`mt-4 p-4 rounded-md ${validationResult.isValid ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  <div className="font-medium">
                    {validationResult.isValid ? 'Password is valid' : 'Password is invalid'}
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

          {/* Options Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Validation Options</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Minimum Length:
                </label>
                <input
                  type="number"
                  value={minLength}
                  onChange={(e) => setMinLength(parseInt(e.target.value))}
                  min="1"
                  max="64"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Maximum Length:
                </label>
                <input
                  type="number"
                  value={maxLength}
                  onChange={(e) => setMaxLength(parseInt(e.target.value))}
                  min="1"
                  max="64"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  HIBP Check:
                </label>
                <select
                  value={hibpCheck.toString()}
                  onChange={(e) => setHibpCheck(e.target.value === 'true')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="true">Enabled</option>
                  <option value="false">Disabled</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Blocklist (comma-separated):
                </label>
                <textarea
                  value={blacklist}
                  onChange={(e) => setBlacklist(e.target.value)}
                  placeholder="e.g., password, admin, website name"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>

{/* Info Section - Moved to the bottom */}
<div className="bg-white rounded-lg shadow p-6">
  <h2 className="text-xl font-bold mb-6">Password Security Guidelines</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <InfoCard title="HIBP (Have I Been Pwned)">
      <p className="text-gray-600">
        HIBP checks if your password appears in known data breaches. This is in compliance with NIST guidelines, which recommend checking passwords against known breach databases to prevent reuse of compromised credentials. Avoid using passwords found in such databases to enhance security.
      </p>
    </InfoCard>

    <InfoCard title="Context-Specific Password Blocklists">
      <p className="text-gray-600">
        Context-specific password blocklists, in compliance with NIST guidelines, help ensure stronger password choices by disallowing predictable or commonly used passwords.
      </p>
      <ul className="list-disc pl-5 text-gray-600">
        <li>Common dictionary words</li>
        <li>Company-specific terms</li>
        <li>Context-specific phrases (e.g., project names)</li>
      </ul>
    </InfoCard>

    <InfoCard title="NIST Guidelines (SP 800-63B)">
      <ul className="list-disc pl-5 text-gray-600">
        <li>Passwords must be at least 8 characters long (15 characters or more recommended).</li>
        <li>Allow passwords up to at least 64 characters.</li>
        <li>Support all printable ASCII characters and spaces.</li>
        <li>Unicode characters are recommended, with each code point counted as one character.</li>
        <li>Avoid enforcing composition rules (e.g., requiring a mix of character types).</li>
        <li>Do not require periodic password changes unless there is evidence of compromise.</li>
        <li>Do not allow password hints accessible to unauthenticated users.</li>
        <li>Avoid using knowledge-based authentication (KBA) as part of password verification.</li>
        <li>Always validate the full password as submitted; do not truncate or alter it.</li>
      </ul>
    </InfoCard>

  </div>
</div>

      </div>
    </div>
  );
};

export default PasswordValidator;