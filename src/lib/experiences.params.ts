import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

import {getDate} from './utils/helpers';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'ue-dev',
		company: 'Dragon\'s Lake',
		description: 'Worked remotely, collaborating closely to develop immersive experiences using Unreal Engine and C++ for gameplay programming. Managed bug resolution, implemented new game features. During the internship, I collaborated closely with project teams to develop and optimize immersive gameplay experiences using Unreal Engine and C++. I played a key role in resolving bugs and addressing technical issues, ensuring the stability and performance of game projects. I utilized version control systems such as Git to manage source code efficiently, ensuring collaboration and code integrity. Tasks were managed and progress tracked using Jira, effectively prioritizing and addressing development objectives. I communicated effectively with team members to discuss project requirements, provide updates, and coordinate efforts for successful project delivery. Throughout the internship, I demonstrated strong problem-solving skills, quickly identifying and resolving technical challenges to keep projects on track and meet deadlines. Worked remotely, collaborating closely to develop immersive experiences using Unreal Engine and C++ for gameplay programming. Managed bug resolution, implemented new game features. In this role, I continued to collaborate closely with project teams to develop and optimize immersive gameplay experiences using Unreal Engine and C++. I played a key role in resolving bugs and addressing technical issues, ensuring the stability and performance of game projects. I utilized version control systems such as Git and Bitbucket to manage source code efficiently, ensuring collaboration and code integrity. Tasks were managed and progress tracked using Jira, effectively prioritizing and addressing development objectives. I communicated effectively with team members to discuss project requirements, provide updates, and coordinate efforts for successful project delivery. Throughout the role, I demonstrated strong problem-solving skills, quickly identifying and resolving technical challenges to keep projects on track and meet deadlines.',
		contract: ContractType.FullTime,
		type: 'Game Development',
		location: 'Remote',
		period: { from: getDate('March 2022'), to: getDate('February 2023') },
		skills: getSkills('ue', 'vs', 'cpp', 'opengl', 'blueprints', 'jira', ' bitbucket', 'github', 'math'),
		name: 'Unreal Engine Developer',
		color: 'midnightblue',
		links: [],
		logo: Assets.DragonsLake,
		shortDescription: 'Worked on unreleased project'
	},
	{
		slug: 'qa-tech',
		company: 'Testronic',
		description: 'Worked as an FQA Technician at Testronic, there I specialized providing QA services for game development projects, notably contributing to the development of For The King 2. During this work experience my expertise extended to working closely with Unity Engine, employing C# programming language, and efficiently utilizing Jira for project management and issue tracking.',
		contract: ContractType.FullTime,
		type: 'Game Development',
		location: 'Warsaw, Poland',
		period: { from: getDate('June 2023'), to: getDate('November 2023')},
		skills: getSkills('jira', 'bitbucket' ,'unity', 'cs'),
		name: 'QA Analyst',
		color: 'mediumblue',
		links: [{to: 'https://store.steampowered.com/app/1676840/For_The_King_II/', label: 'Steam'}],
		logo: Assets.Testronic,
		shortDescription: 'Provided QA services for titles'
	},
	{
		slug: 'software-engineer-junior',
		company: 'Luxolis',
		description: 'As a Freelance Software Engineer, I leveraged JavaScript libraries like Three.js to create immersive 3D experiences, while harnessing C++ for performance-critical components tailored to the CAD environment. I collaborated closely with Luxolis\'s AI team to integrate new bug fixes into the CAD system, ensuring seamless interaction between the 3D environment and AI algorithms. I contributed significantly to the continuous enhancement of Luxolis\'s CAD technology stack through innovative problem solving, guaranteeing a high-quality end product for users. I designed and implemented dynamic lighting systems that significantly improved rendering performance and visual fidelity. Additionally, I developed custom shaders and materials to achieve realistic material interactions and effects in the CAD environment, and optimized memory management strategies, resulting in a 30% reduction in memory usage and improved overall system stability.',
		contract: ContractType.Freelance,
		type: 'Software Engineer',
		location: 'Remote',
		period: { from: getDate('August 2023'), to: getDate('November 2023')},
		skills: getSkills('js', 'njs', 'webgl', '3js', 'rjs', 'mocha','cpp', 'opengl', 'github'),
		name: 'C++ and Javascript Engineer',
		color: 'mediumorchid',
		links: [],
		logo: Assets.Luxolis,
		shortDescription: 'Worked closely with rendering 3d in web space'
	},
	{
		slug: 'game-dev-indie',
		company: 'multiple',
		description: 'As an Indie Game Developer, I suited myself as various programmer, working as a Gameplay Programmer, Tools Programmer and AI Programmer. I developed the main procedural generation logic, enhancing gameplay by creating diverse and dynamic in-game environments. Coded JSON libraries for asset storage and developed a proprietary framework for procedural generation, streamlining team workflows. Designed team workflows and generated tasks using the Game Design Document, facilitating efficient project management. Co-developed a custom shading system, improving the game\'s visual fidelity. Developed a JRPG style tactical battle system using cinematic attacks.',
		contract: ContractType.PartTime,
		type: 'Game Development',
		location: 'Remote',
		period: { from: getDate('June 2024')},
		skills: getSkills('cpp', 'cs', 'ue', 'blueprints', 'jira', 'github', 'vs', 'math'),
		name: 'Indie game developer',
		color: 'hotpink',
		links: [],
		logo: Assets.SchizaProject,
		shortDescription: 'Worked with indie game team on an Unreal Engine project'
	},
	{
		slug: 'game-tester',
		company: 'Lionbridge',
		description: 'As a Game Tester at Lionbridge, my primary responsibility involved identifying, documenting, and reporting any potential game issues to developers, ensuring a smooth and polished experience for end users. I worked on an unreleased DLC project for a 2D game, focusing on Functional Quality Assurance (FQA) testing. This role allowed me to deepen my understanding of the game development cycle, particularly in reporting bugs, collaborating with developers, and improving communication between QA teams and clients. My work significantly contributed to enhancing the game\'s quality, utilizing tools like Jira for issue tracking and reporting.',
		contract: ContractType.FullTime,
		type: 'Game Development',
		location: 'Warsaw',
		period: { from: getDate('August 2024')},
		skills: getSkills('steam'),
		name: 'QA Analyst',
		color: 'darkorange',
		links: [],
		logo: Assets.Lionbridge,
		shortDescription: 'Worked as Game Tester on Blasphemous 2 DLC and one unrealeased project'
	}
];

export default MY_EXPERIENCES;
