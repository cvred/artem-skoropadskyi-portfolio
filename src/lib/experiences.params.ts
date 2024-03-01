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
		color: 'midnightblue',
		links: [],
		logo: Assets.DragonsLake,
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
		color: 'midnightblue',
		links: [],
		logo: Assets.DragonsLake,
		shortDescription: 'Worked On unreleased projects'
	},
	{
		slug: 'qa-tech',
		company: 'Testronic',
		description: 'Worked as an FQA Technician at Testronic, there I specialized providing QA services for game development projects, notably contributing to the development of For The King 2. During this work experience my expertise extended to working closely with Unity Engine, employing C# programming language, and efficiently utilizing Jira for project management and issue tracking.',
		contract: ContractType.PartTime,
		type: 'FQA Services',
		location: 'Warsaw, Poland',
		period: { from: new Date('June 2023'), to: new Date('November 2023')},
		skills: getSkills('jira', 'bitbucket' ,'unity', 'cs'),
		name: 'FQA Technichian',
		color: 'mediumblue',
		links: [{to: 'https://store.steampowered.com/app/1676840/For_The_King_II/', label: 'steam'}],
		logo: Assets.Testronic,
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
		color: 'mediumorchid',
		links: [],
		logo: Assets.Luxolis,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
