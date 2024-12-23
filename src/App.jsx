import { useState } from "react";
import { validatePassword } from "nist-password-validator";
import DemoSection from "./components/DemoSection";
import PasswordInput from "./components/PasswordInput";
import ValidationOptions from "./components/ValidationOptions";
import GuidelinesSection from "./components/GuidelinesSection";

const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [minLength, setMinLength] = useState(15);
  const [maxLength, setMaxLength] = useState(64);
  const [hibpCheck, setHibpCheck] = useState(true);
  const [blocklist, setBlocklist] = useState("");
  const [validationResult, setValidationResult] = useState(null);
  const [isValidating, setIsValidating] = useState(false);

  const handleValidate = async () => {
    setIsValidating(true);
    try {
      const result = await validatePassword(password, {
        minLength,
        maxLength,
        hibpCheck,
        blocklist: blocklist
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      });
      setValidationResult(result);
    } catch (error) {
      setValidationResult({
        isValid: false,
        errors: [error.message],
      });
    }
    setIsValidating(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <DemoSection />
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          NIST Password Validator
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PasswordInput
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            minLength={minLength}
            handleValidate={handleValidate}
            isValidating={isValidating}
            validationResult={validationResult}
          />

          <ValidationOptions
            minLength={minLength}
            setMinLength={setMinLength}
            maxLength={maxLength}
            setMaxLength={setMaxLength}
            hibpCheck={hibpCheck}
            setHibpCheck={setHibpCheck}
            blocklist={blocklist}
            setBlocklist={setBlocklist}
          />
        </div>

        <GuidelinesSection />
      </div>
    </div>
  );
};

export default PasswordValidator;
