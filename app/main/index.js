module.exports = function(ngModule){
	require('./main-dir')(ngModule);
	require('./weather-service')(ngModule);
	require('./main-ctrl')(ngModule);
	require('./detail-ctrl')(ngModule);
	require('./weather-icon.dir')(ngModule);

}
