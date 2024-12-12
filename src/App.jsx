import  { useState } from 'react';
import  {validatePassword }  from 'nist-password-validator';
import PropTypes from 'prop-types';

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
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
        
        {/* Info Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-6">Password Security Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard title="HIBP (Have I Been Pwned)">
              <p className="text-gray-600">
                HIBP checks if your password appears in known data breaches. If a password is found in the database, 
                it is considered compromised and should not be used.
              </p>
            </InfoCard>
            
            <InfoCard title="Industry Password Blacklists">
              <p className="text-gray-600">Password blacklists help prevent the use of commonly known weak passwords.</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Dictionary words</li>
                <li>Company-specific terms</li>
                <li>Context-specific phrases</li>
                <li>Previously breached passwords</li>
              </ul>
            </InfoCard>
            
            <InfoCard title="NIST Guidelines (SP 800-63B)">
              <ul className="list-disc pl-5 text-gray-600">
                <li>Minimum 8 characters</li>
                <li>Maximum 64 characters</li>
                <li>Allow all ASCII and Unicode characters</li>
                <li>No password hints</li>
                <li>No periodic changes unless compromised</li>
              </ul>
            </InfoCard>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Password Input</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Enter Password:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="new-password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                />
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
                  Blacklist (comma-separated):
                </label>
                <textarea
                  value={blacklist}
                  onChange={(e) => setBlacklist(e.target.value)}
                  placeholder="e.g., password, 123456"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordValidator;