const
	babel = require('rollup-plugin-babel'),
  commonjs = require('rollup-plugin-commonjs'),
  resolve = require('rollup-plugin-node-resolve'),
	rollup = require('rollup').rollup
;

return rollup({
		entry: 'index.js',
		format: 'iife',
		moduleName: 'diy',
		plugins: [
      resolve({
        jsnext: true,
        main: true,
      }),
			commonjs({
				include: 'node_modules/**',
			}),
      babel({
		    "babelrc": false,
		    "exclude": "node_modules/**",
		    "presets": [
		      ["env", {
		        "modules": false
		      }],
		      "stage-1"
		    ],
		    "plugins": [
		      "external-helpers",
		    ]
		  }),
		],
		sourceMap: true
	})
  .then(function (bundle) {
    return bundle.write({
      format: 'iife',
      dest: 'bundle.js'
    });
  }).catch(function(err){
    console.error(err);
  })
;
