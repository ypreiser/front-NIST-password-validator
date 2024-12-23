import PropTypes from "prop-types";

const ValidationOptions = ({
  minLength,
  setMinLength,
  maxLength,
  setMaxLength,
  hibpCheck,
  setHibpCheck,
  blocklist,
  setBlocklist,
}) => (
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
          onChange={(e) => setHibpCheck(e.target.value === "true")}
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
          value={blocklist}
          onChange={(e) => setBlocklist(e.target.value)}
          placeholder="e.g., password, admin, website name"
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  </div>
);

ValidationOptions.propTypes = {
  minLength: PropTypes.number.isRequired,
  setMinLength: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
  setMaxLength: PropTypes.func.isRequired,
  hibpCheck: PropTypes.bool.isRequired,
  setHibpCheck: PropTypes.func.isRequired,
  blocklist: PropTypes.string.isRequired,
  setBlocklist: PropTypes.func.isRequired,
};

export default ValidationOptions;
