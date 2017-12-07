'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _iconSettings = require('../../../../components/icon-settings');

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _lookup = require('../../../../components/lookup');

var _lookup2 = _interopRequireDefault(_lookup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// `~` is replaced with design-system-react at runtime

var Example = (0, _createReactClass2.default)({
	displayName: 'LookupExample',

	render: function render() {
		return _react2.default.createElement(
			_iconSettings2.default,
			{ iconPath: '/assets/icons' },
			_react2.default.createElement(_lookup2.default, {
				emptyMessage: 'No Files found',
				hasError: false,
				iconCategory: 'utility',
				iconInverse: false,
				iconName: 'open_folder',
				label: 'Files',
				onSelect: function onSelect(item) {
					console.log(item, ' Selected');
				},
				options: [{ label: 'File 1' }, { label: 'File 2' }, { label: 'File 3' }, { label: 'File 4' }]
			})
		);
	}
});

exports.default = Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime