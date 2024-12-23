import InfoCard from "./InfoCard";

const GuidelinesSection = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-bold mb-6">Password Security Guidelines</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <InfoCard title="HIBP (Have I Been Pwned)">
        <p className="text-gray-600">
          HIBP checks if your password appears in known data breaches. This is
          in compliance with NIST guidelines, which recommend checking passwords
          against known breach databases to prevent reuse of compromised
          credentials. Avoid using passwords found in such databases to enhance
          security.
        </p>
      </InfoCard>

      <InfoCard title="Context-Specific Password Blocklists">
        <p className="text-gray-600">
          Context-specific password blocklists, in compliance with NIST
          guidelines, help ensure stronger password choices by disallowing
          predictable or commonly used passwords.
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Common dictionary words</li>
          <li>Company-specific terms</li>
          <li>Context-specific phrases (e.g., project names)</li>
        </ul>
      </InfoCard>

      <InfoCard title="NIST Guidelines (SP 800-63B)">
        <ul className="list-disc pl-5 text-gray-600">
          <li>
            <a
              href="https://pages.nist.gov/800-63-4/sp800-63b.html#password"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View NIST Guidelines
            </a>
          </li>
          <li>
            Passwords must be at least 8 characters long (15 characters or more
            recommended).
          </li>
          <li>Allow passwords up to at least 64 characters.</li>
          <li>Support all printable ASCII characters and spaces.</li>
          <li>
            Unicode characters are recommended, with each code point counted as
            one character.
          </li>
          <li>
            Avoid enforcing composition rules (e.g., requiring a mix of
            character types).
          </li>
          <li>
            Do not require periodic password changes unless there is evidence of
            compromise.
          </li>
          <li>
            Do not allow password hints accessible to unauthenticated users.
          </li>
          <li>
            Avoid using knowledge-based authentication (KBA) as part of password
            verification.
          </li>
          <li>
            Always validate the full password as submitted; do not truncate or
            alter it.
          </li>
          <li>
            May remove leading and trailing whitespace from passwords to prevent user errors.
            Length validation occurs after trimming

          </li>
        </ul>
      </InfoCard>
    </div>
  </div>
);

export default GuidelinesSection;
