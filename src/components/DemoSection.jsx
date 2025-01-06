import dependencies from "../../package.json"
let v = dependencies.dependencies["nist-password-validator"].substring(1)

const DemoSection = () => (
  <div className="mb-6 text-center p-4 border border-gray-300 rounded-md bg-gray-100">
    <p className="text-lg font-semibold">
      This site is a demo for the{" "}
      <a
        href="https://www.npmjs.com/package/nist-password-validator"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        nist-password-validator
      </a>{" "}
      library. ({v})
    </p>
    <p className="text-lg mt-2">
      A lightweight, zero-dependencies open-source password validator according
      to NIST guidelines.
    </p>
    <p className="text-lg mt-2">
      Check out the{" "}
      <a
        href="https://github.com/ypreiser/NIST-password-ts"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        GitHub repository
      </a>{" "}
      for more information.
    </p>
  </div>
);

export default DemoSection;
