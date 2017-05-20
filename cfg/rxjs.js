
SystemJS.config({

	packages: {

		'rxjs': {main: 'Rx.min.js', meta: {
			'observable/*': {loader: 'pkg/Observable'},
			'operator/*': {loader: 'pkg/Observable.prototype'},
			'Rx.min.js': {loader: 'cdnjs'},
			'Rx.js': {loader: 'cdnjs'},
			'*': {loader: 'pkg'}
		}}
	}
});
