import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'ftk-2',
		color: '#5e95e3',
		description:
			'As an QA Technician for Testronic, I\'ve been actively involved in the development of "For The King 2" diligently identifying and resolving issues to enhance the gaming experience. This project transports players into the enchanting yet perilous realm of Farul, where they embark on a journey to overthrow the despotic Queen Rozomon. With a campaign spanning over 30 hours of gameplay divided into 5 interconnected adventures, "For The King 2" offers a rogue-lite experience characterized by its easy-to-grasp mechanics and strategic depth. Players can choose from 12 unique character classes, collaborate in teams of up to four players, and engage in turn-based combat enriched by tactical positioning. With its procedurally generated maps and diverse environments ranging from lush forests to treacherous swamps, "For The King 2" promises an immersive and captivating gaming world for both seasoned adventurers and newcomers alike.',
		shortDescription:
			'Project that I\'ve been working as FQA technichian, finding issues and implementing fixes.',
		links: [{ to: 'https://store.steampowered.com/app/1676840/For_The_King_II/', label: 'Steam' }],
		logo: Assets.ForTheKing2,
		name: 'For The King II',
		period: {
			from: new Date('July 2023'),
			to: new Date('November 2023')
		},
		skills: getSkills('jira', 'bitbucket', 'unity', 'cs'),
		type: 'Commercial Project',
		screenshots: [
			{
				label: 'gameplay screenshot 1',
				src: 'ftk2/1.png',
			},
			{
				label: 'gameplay screenshot 2',
				src: 'ftk2/2.png',
			},
			{
				label: 'gameplay screenshot 3',
				src: 'ftk2/3.jpg',
			},
			{
				label: 'gameplay screenshot 4',
				src: 'ftk2/4.jpg',
			},
			{
				label: 'gameplay screenshot 5',
				src: 'ftk2/5.jpg',
			},
			{
				label: 'credits',
				src: 'ftk2/6.jpg',
			},
		]
	},
	{
		slug: 'dx-game',
		color: 'black',
		description:
			'I developed a DirectX shooting game as part of my education, utilizing the provided library. The game features simple 3D graphics and simple shooting gameplay mechanics. Players are challenged to aim and shoot targets within the game environment, showcasing technical proficiency with DirectX. This project highlights my ability to apply theoretical knowledge in a practical context and demonstrates my passion for game development.',
		shortDescription:
			'This is mine project on DirectX.',
		links: [{ to: 'https://github.com/L1ghtboro/ShooterGame', label: 'GitHub' }],
		logo: Assets.DirectX,
		name: 'Shooter Game DX',
		period: {
			from: new Date('December 2023'),
			to: new Date('March 2024')
		},
		skills: getSkills('cpp', 'dx', 'vs'),
		type: 'Educational Project',
		screenshots: [
			{
				label: 'gameplay screenshot 1',
				src: 'dxgame/1.png',
			},
			{
				label: 'gameplay screenshot 2',
				src: 'dxgame/3.png',
			},
			{
				label: 'UI screenshot 1',
				src: 'dxgame/2.png',
			}
		]
	},
	{
		slug: 'face-edu',
		color: 'orange',
		description:
			'During my university studies, I embarked on a machine learning project aimed at detecting individuals in images with or without masks. Utilizing various models including CNN, VGG, MobileNetV2, and Xception, I explored different architectures to achieve optimal accuracy and performance. Among these, the Xception model demonstrated superior accuracy, while MobileNetV2 offered faster inference speed and lower parameter count compared to VGG and Xception. The project highlights my expertise in machine learning algorithms and showcases my ability to implement and evaluate different models for specific tasks.',
		shortDescription:
			'This is one of my machine learning projects during university studies.',
		links: [{ to: 'https://github.com/L1ghtboro/FaceTracking', label: 'GitHub' }],
		logo: Assets.Tensorflow,
		name: 'Mask detecting ML',
		period: {
			from: new Date('November 2023'),
			to: new Date('December 2023')
		},
		skills: getSkills('python', 'tensorflow', 'numpy', 'opencv'),
		type: 'Educational Project',
		screenshots: [
			{
				label: 'Testing Screenshot 1',
				src: 'faceedu/1.jpg',
			},
			{
				label: 'Testing Screenshot 2',
				src: 'faceedu/2.jpg',
			},
			{
				label: 'Testing Screenshot 3',
				src: 'faceedu/3.jpg',
			},
			{
				label: 'Confidence 0.5',
				src: 'faceedu/4.jpg',
			},
			{
				label: 'Confidence 0.01',
				src: 'faceedu/5.jpg',
			}
		]
	}	
];

export default MY_PROJECTS;
