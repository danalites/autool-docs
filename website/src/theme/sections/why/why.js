import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';

export default function Why() {
	const component = 'shift-why';

	return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'small'}
				spacingBottom={'none'}
			>
				<Heading
					componentClass={component}
					title={'A programming framework to automate your workflow '}
					subtitle={'AuTool provides a set of APIs to interact with the computers like human does; it is designed to flexible and simple for users to design their own automation flow. <br>I developed this framework to make my life easier. I hope it will help you too. '}
					align={'left'}
					titleSize={'medium'}
				/>
			</Container>
			<Container
				componentClass={component}
				size={'medium'}
				spacingTop={'none'}
			>
				<div className={`${component}__content`}>
					<img className={`${component}__image ${component}__image--desktop`} src={useBaseUrl('img/img-why-boilerplate@2x.png')} />
					<img className={`${component}__image ${component}__image--mobile`} src={useBaseUrl('img/img-why-boilerplate-mobile@2x.png')} />
				</div>
			</Container>
		</div>
	)
}
