import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'ue-dev-intern',
		company: 'Dragon\'s Lake',
		description: 'job desc',
		contract: ContractType.Internship,
		type: 'Intern Gameplay Programmer',
		location: 'Remote',
		period: { from: new Date('March 2022'), to: new Date('September 2022') },
		skills: getSkills('ue'),
		name: 'Unreal Engine Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Completed full 6 month internship.'
	},
	{
		slug: 'ue-dev',
		company: 'Dragon\'s Lake',
		description: 'job desc',
		contract: ContractType.FullTime,
		type: 'Junior Gameplay Programmer',
		location: 'Remote',
		period: { from: new Date('September 2022'), to: new Date('Feburary 2023') },
		skills: getSkills('ue'),
		name: 'Unreal Engine Developer',
		color: 'crimson',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Worked On unreleased projects'
	},
	{
		slug: 'qa-tech',
		company: 'Testronic',
		description: 'job desc',
		contract: ContractType.PartTime,
		type: 'FQA Services',
		location: 'Warsaw, Poland',
		period: { from: new Date('June 2023'), to: new Date('November 2023')},
		skills: getSkills('jira'),
		name: 'FQA Technichian',
		color: 'darkblue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'software-contract-junior',
		company: 'Luxolis',
		description: 'job desc',
		contract: ContractType.Contract,
		type: 'Freelance Software Engineer',
		location: 'Remote',
		period: { from: new Date('August 2023'), to: new Date('November 2023')},
		skills: getSkills('js', 'cpp'),
		name: 'C++ and Javascript Engineer',
		color: 'lightskyblue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
