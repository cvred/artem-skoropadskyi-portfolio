import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Kyiv, Ukraine',
		logo: Assets.University,
		name: '',
		organization: 'National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”',
		period: { from: new Date('2020'), to: new Date('2024') },
		shortDescription: '',
		slug: 'bachelor-degree',
		subjects: ['C++', 'Algorithm\'s', 'Python', 'Linear Algebra', 'Mathematical Analysis', 'Tensorflow', 'JavaScript', 'Mocha', 'ReactJS', 'GameTheory', 'Scrum & Agile', 'AI', 'English']
	}
];
