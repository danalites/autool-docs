module.exports = {
	docs: {
		'Getting Started': [
			'intro-install',
			'intro-user-interface',
			'pricing',
			'theme',
			'plugin'
		],
		'Example Scripts': [
			'basics/apps-macos-display',
			'basics/apps-macos-runner',
			'basics/tips-tricks',
			'basics/architecture-concepts',
			'basics/apps-web',
			{
				'type': 'category',
				'label': 'Games-Scripts',
				'items': [
					'basics/frontend',
					'basics/webpack',
					'basics/library'
				]
			},
			{
				'type': 'category',
				'label': 'Apps-with-Service',
				'items': [
					'basics/service-ffmpeg',
					'basics/helpers-javascript',
					'basics/helpers-scss',
					'basics/helpers-php',
				]
			}
		],
		'Developers': [
			'developers/task',
			{
				'type': 'category',
				'label': 'APIs',
				'items': [
					'basics/backend',
					'basics/namespaces',
					'basics/extending-classes',
					'basics/autowiring',
					'basics/example-class',
					'basics/manifest',
					{
						'type': 'category',
						'label': 'Rest',
						'items': [
							'basics/rest',
							'basics/rest-field',
							'basics/rest-route',
						]
					},
				]
			},
		],

	},
};
