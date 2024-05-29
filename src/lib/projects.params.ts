import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

import {getDate} from './utils/helpers';

import { checkPageLoaded } from './utils/helpers';

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
		period: { from: getDate('July 01 2023'), to: getDate('November 02 2023') },
		skills: getSkills('jira', 'bitbucket', 'unity', 'cs'),
		type: 'Commercial Project',
		screenshots: [
			{
				label: 'gameplay screenshot 1',
				src: `${checkPageLoaded('ftk-2/')}1.png`,
			},
			{
				label: 'gameplay screenshot 2',
				src: `${checkPageLoaded('ftk-2/')}2.png`,
			},
			{
				label: 'gameplay screenshot 3',
				src: `${checkPageLoaded('ftk-2/')}3.jpg`,
			},
			{
				label: 'gameplay screenshot 4',
				src: `${checkPageLoaded('ftk-2/')}4.jpg`,
			},
			{
				label: 'gameplay screenshot 5',
				src: `${checkPageLoaded('ftk-2/')}5.jpg`,
			},
			{
				label: 'credits',
				src: `${checkPageLoaded('ftk-2/')}6.jpg`,
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
		period: { from: getDate('December 2023'), to: getDate('March 2024') },
		skills: getSkills('cpp', 'dx', 'vs'),
		type: 'Educational Project',
		screenshots: [
			{
				label: 'gameplay screenshot 1',
				src: `${checkPageLoaded('dx-game/')}1.png`,
			},
			{
				label: 'gameplay screenshot 2',
				src: `${checkPageLoaded('dx-game/')}3.png`,
			},
			{
				label: 'UI screenshot 1',
				src: `${checkPageLoaded('dx-game/')}2.png`,
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
		period: { from: getDate('November 2023'), to: getDate('December 2023') },
		skills: getSkills('python', 'tensorflow', 'numpy', 'opencv'),
		type: 'Educational Project',
		screenshots: [
			{
				label: 'Testing Screenshot 1',
				src: `${checkPageLoaded('face-edu/')}1.jpg`,
			},
			{
				label: 'Testing Screenshot 2',
				src: `${checkPageLoaded('face-edu/')}2.jpg`,
			},
			{
				label: 'Testing Screenshot 3',
				src: `${checkPageLoaded('face-edu/')}3.jpg`,
			},
			{
				label: 'Confidence 0.5',
				src: `${checkPageLoaded('face-edu/')}4.jpg`,
			},
			{
				label: 'Confidence 0.01',
				src: `${checkPageLoaded('face-edu/')}5.jpg`,
			}
		]
	},
	{
		
		slug: 'afterglow-game',
		color: 'hotpink',
		description:
			'My first game made on Unreal Engine 4, contains one simple quest and one boss fight',
		shortDescription:
			'Small game powered by Unreal Engine',
		links: [{ to: 'https://github.com/L1ghtboro/AP_Coursework', label: 'GitHub' }],
		logo: Assets.UnrealEngine,
		name: 'Afterglow',
		period: { from: getDate('March 2021'), to: getDate('July 2021') },
		skills: getSkills('cpp', 'ue'),
		type: 'Educational Project',
		screenshots: [
			{
				label: 'Gameplay Screenshot 1',
				src: `${checkPageLoaded('afterglow-game/')}1.png`,
			},
			{
				label: 'Gameplay Screenshot 2',
				src: `${checkPageLoaded('afterglow-game/')}2.png`,
			},
			{
				label: 'Gameplay Screenshot 3',
				src: `${checkPageLoaded('afterglow-game/')}4.png`,
			},
			{
				label: 'Gameplay Screenshot 4',
				src: `${checkPageLoaded('afterglow-game/')}5.png`,
			},
			{
				label: 'Asset testout Screenshot 1',
				src: `${checkPageLoaded('afterglow-game/')}3.jpg`,
			},
		]
	},
	{
		slug: 'ray-tracing-edu',
		color: 'midnightblue',
		description:
			'This ray tracing program simulates the rendering of a scene containing a single sphere illuminated by a point light source. Instead of Sphere class we can use any i used it because it is simple to draw and process .Utilizing ray-sphere intersection calculations, it traces rays from each pixel in a 2D grid to determine if they intersect with the sphere. Upon intersection, the program computes the shading of the pixel based on the surface normal and the direction to the light source. Outputting the results in the PPM image format, the program dynamically selects the output file destination, either defaulting to "out.ppm" in the current directory or placing it in an "images/" directory if present. Through this process, the program showcases the foundational concepts of ray tracing in computer graphics, offering a glimpse into the generation of realistic images through ray-object interactions and light interactions. Note: repository was updated!',
		shortDescription:
			'This is one of mine try outs of understanding Ray Tracing works.',
		links: [{ to: 'https://github.com/L1ghtboro/Simple-Ray-Tracing', label: 'GitHub' }],
		logo: Assets.Cpp,
		name: 'Simple Ray Tracing',
		period: { from: getDate('May 2021'), to: getDate('May 03 2021') },
		skills: getSkills('cpp', 'vs', 'math'),
		type: 'Educational Project',
		screenshots: [
			{
				label: 'Testing Screenshot 1',
				src: `${checkPageLoaded('ray-tracing-edu/')}1.png`,
			}
		]
	}	
];

export default MY_PROJECTS;
