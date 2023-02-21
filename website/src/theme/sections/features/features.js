import React from 'react';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';

export default function Features() {

	const component = 'shift-features';

	const data = [
		{
			icon: 'red',
			title: 'Workspace quick setup',
			desc: 'Arrange windows to different positions? hide or show desktop icons? switch monitor input source, and more. All with a single click!',
		},
		{
			icon: 'purple',
			title: 'Monitor important things',
			desc: 'Track time spent on each app; Parse your order emails to record your spending or delivery status, etc.',
		},
		{
			icon: 'red',
			title: 'Schedule and hotkey',
			desc: 'Trigger a script to a hotkey, or schedule it to run it later. You can even let it run remotely on a server.'
		},
		{
			icon: 'yellow',
			title: 'Integrate AI into your workflow',
			desc: 'You can use AuTool to send window captures or local files to remote AI processing, e.g., text recognition, object detection.',
		},
		{
			icon: 'green',
			title: 'Quick knowledge flashcard',
			desc: 'Import your notes or cheat sheets into a AuTool script, and you can quickly refresh your mind by triggering a notification.'
		},
		{
			icon: 'red',
			title: 'Glue everything together',
			desc: 'Automatically send a notification to Slack when a new email comes in? Sure, AuTool can do it for you!',
		},
	];

	const items = data.map((item, index) => {
		const {
			icon,
			title,
			desc,
		} = item;

		return (
			<div className={`${component}__item`} key={index}>
				<div className={`${component}__title ${component}__title--${icon}`}>
					{title}
				</div>
				<div className={`${component}__desc`}>
					{desc}
				</div>
			</div>
		)
	});

	return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'medium'}
			>
				<Heading
					componentClass={component}
					title={'What you can do with AuTool'}
					align={'left'}
				/>
				<div className={`${component}__content`}>
					{items}
				</div>
			</Container>
		</div>
	)
}
