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
  MaxEditDistance,
  setMaxEditDistance,
  errorLimit,
  setErrorLimit
}) => (
  <div className="bg-white rounded-lg shadow p-4">
    <h2 className="text-lg font-bold mb-4">Validation Options</h2>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Minimum Length:
        </label>
        <input
          type="number"
          value={minLength}
          onChange={(e) => setMinLength(parseInt(e.target.value))}
          min="1"
          max="64"
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Maximum Length:
        </label>
        <input
          type="number"
          value={maxLength}
          onChange={(e) => setMaxLength(parseInt(e.target.value))}
          min="1"
          max="100000000000000"
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          HIBP Check:
        </label>
        <select
          value={hibpCheck.toString()}
          onChange={(e) => setHibpCheck(e.target.value === "true")}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="true">Enabled</option>
          <option value="false">Disabled</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Trim Whitespace:
        </label>
        <select
          value={trimWhitespace.toString()}
          onChange={(e) => setTrimWhitespace(e.target.value === "true")}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="true">Enabled</option>
          <option value="false">Disabled</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Error Limit:
        </label>
        <input
          type="number"
          value={errorLimit}
          onChange={(e) => setErrorLimit(parseInt(e.target.value))}
          min="1"
          max="Infinity"
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="col-span-2 bg-gray-100 border-4 p-3 rounded-lg ">
        <h3 className="text-sm font-semibold mb-2 text-gray-800">
          Blocklist Options
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Blocklist (comma-separated):
            </label>
            <textarea
              value={blocklist}
              onChange={(e) => setBlocklist(e.target.value)}
              placeholder="e.g., password, admin, website name"
              rows={2}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="space-y-1">
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
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Max Edit Distance:
            </label>
            <input
              type="number"
              value={MaxEditDistance}
              onChange={(e) => setMaxEditDistance(parseInt(e.target.value))}
              min="0"
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
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
  MaxEditDistance: PropTypes.number.isRequired,
  setMaxEditDistance: PropTypes.func.isRequired,
  errorLimit: PropTypes.number.isRequired,
  setErrorLimit: PropTypes.func.isRequired
};

export default ValidationOptions;
