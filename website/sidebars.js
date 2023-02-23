module.exports = {
	docs: {
		'Getting Started': [
			'intro-install',
			'intro-user-interface',
			'intro-hello-world-script',
			'pricing',
			'theme'
		],
		'Example Scripts': [
			'basics/apps-macos-display',
			'basics/apps-macos-runner',
			'basics/apps-web',
			'basics/apps-status-monitor',
			{
				'type': 'category',
				'label': 'Games-Scripts',
				'items': [
					'basics/game-mihoyo-genshin',
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
