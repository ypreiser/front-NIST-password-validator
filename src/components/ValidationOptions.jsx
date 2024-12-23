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
  matchingSensitivity,
  setMatchingSensitivity,
  trimWhitespace,
  setTrimWhitespace,
  MinEditDistance,
  setMinEditDistance,
  MaxEditDistance,
  setMaxEditDistance,
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
          Trim leading and trailing whitespace from passwords and blocklist 
        </label>
        <select
          value={trimWhitespace.toString()}
          onChange={(e) => setTrimWhitespace(e.target.value === "true")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="true">Enabled</option>
          <option value="false">Disabled</option>
        </select>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Blocklist Options
        </h3>
        <div className="space-y-4">
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

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Matching Sensitivity:
            </label>
            <input
              type="number"
              value={matchingSensitivity}
              onChange={(e) =>
                setMatchingSensitivity(parseFloat(e.target.value))
              }
              min="0"
              max="1"
              step="0.05"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Minimum Edit Distance:
            </label>
            <input
              type="number"
              value={MinEditDistance}
              onChange={(e) => setMinEditDistance(parseInt(e.target.value))}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Maximum Edit Distance:
            </label>
            <input
              type="number"
              value={MaxEditDistance}
              onChange={(e) => setMaxEditDistance(parseInt(e.target.value))}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
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
  matchingSensitivity: PropTypes.number.isRequired,
  setMatchingSensitivity: PropTypes.func.isRequired,
  trimWhitespace: PropTypes.bool.isRequired,
  setTrimWhitespace: PropTypes.func.isRequired,
  MinEditDistance: PropTypes.number.isRequired,
  setMinEditDistance: PropTypes.func.isRequired,
  MaxEditDistance: PropTypes.number.isRequired,
  setMaxEditDistance: PropTypes.func.isRequired,
};

export default ValidationOptions;
