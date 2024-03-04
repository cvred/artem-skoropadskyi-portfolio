import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

import {getDate} from './utils/helpers';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'ue-dev-intern',
		company: 'Dragon\'s Lake',
		description: 'job desc',
		contract: ContractType.Internship,
		type: 'Intern Gameplay Programmer',
		location: 'Remote',
		period: { from: getDate('March 2022'), to: getDate('September 2022') },
		skills: getSkills('ue', 'vs', 'cpp', 'vulkan', 'opengl', 'blueprints', 'github', 'math'),
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
		period: { from: getDate('September 2022'), to: getDate('Feburary 2023') },
		skills: getSkills('ue', 'vs', 'cpp', 'vulkan', 'opengl', 'blueprints', 'jira', ' bitbucket', 'github', 'math'),
		name: 'Unreal Engine Developer',
		color: 'midnightblue',
		links: [],
		logo: Assets.DragonsLake,
		shortDescription: 'Worked on unreleased projects'
	},
	{
		slug: 'qa-tech',
		company: 'Testronic',
		description: 'Worked as an FQA Technician at Testronic, there I specialized providing QA services for game development projects, notably contributing to the development of For The King 2. During this work experience my expertise extended to working closely with Unity Engine, employing C# programming language, and efficiently utilizing Jira for project management and issue tracking.',
		contract: ContractType.PartTime,
		type: 'FQA Services',
		location: 'Warsaw, Poland',
		period: { from: getDate('June 2023'), to: getDate('November 2023')},
		skills: getSkills('jira', 'bitbucket' ,'unity', 'cs'),
		name: 'FQA Technichian',
		color: 'mediumblue',
		links: [{to: 'https://store.steampowered.com/app/1676840/For_The_King_II/', label: 'steam'}],
		logo: Assets.Testronic,
		shortDescription: 'Providing QA services for titles'
	},
	{
		slug: 'software-contract-junior',
		company: 'Luxolis',
		description: 'job desc',
		contract: ContractType.Freelance,
		type: 'Freelance Software Engineer',
		location: 'Remote',
		period: { from: new Date('August 2023'), to: new Date('November 2023')},
		skills: getSkills('js', 'njs', 'webgl', '3js', 'rjs', 'mocha','cpp', 'opengl', 'github'),
		name: 'C++ and Javascript Engineer',
		color: 'mediumorchid',
		links: [],
		logo: Assets.Luxolis,
		shortDescription: 'Worked closely with rendering 3d in web space.'
	}
];

export default MY_EXPERIENCES;
