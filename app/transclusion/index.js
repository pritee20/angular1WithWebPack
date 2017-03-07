module.exports = function(ngModule){
	require('./tabDir')(ngModule);
	require('./tab-contentDir')(ngModule);
	require('./tabCtrl')(ngModule);
}