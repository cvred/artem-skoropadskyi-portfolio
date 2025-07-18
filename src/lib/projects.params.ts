import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

import {getDate, getCurrentDate} from './utils/helpers';

import { checkPageLoaded } from './utils/helpers';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'dateeverything',
		color: 'deeppink',
		description:
  			'Served as a QA Analyst on *Date Everything*, an indie game developed for Nintendo Switch and Xbox Series X. Contributed to key submission milestones by identifying and documenting platform-specific issues, including controller-related compliance problems, dialogue inconsistencies, and physics-related bugs. Played a pivotal role in ensuring certification readiness through thorough testing and cross-functional collaboration with developers and producers.',
		shortDescription:
			'An indie game where you can literally date anything!',
		links: [{ to: 'https://store.steampowered.com/app/2201320/Date_Everything/', label: 'Steam' }],
		logo: Assets.DateEverything,
		name: 'Date Everything',
		period: { from: getDate('November 01 2024'), to: getDate('June 16 2025') },
		skills: getSkills('jira'),
		type: 'Commercial Project',
		screenshots: [
			{
				label: 'Game Picture 1',
				src: `${checkPageLoaded('date-everything/')}1.jpg`,
			},
			{
				label: 'Gameplay Screenshot 2',
				src: `${checkPageLoaded('date-everything/')}2.jpg`,
			},
			{
				label: 'Gameplay Screenshot 3',
				src: `${checkPageLoaded('date-everything/')}3.jpg`,
			},
			{
				label: 'Credits 4',
				src: `${checkPageLoaded('date-everything/')}4.jpg`,
			}
		]
	},
	{
		slug: 'horizonsofachaea',
		color: 'orange',
		description:
			'Contributed across multiple systems as a core Unreal Engine Generalist on a cinematic, turn-based JRPG-style indie title. Developed custom UI components and an expandable dialogue system to support dynamic narrative interactions. Prototyped core combat mechanics and designed a modular `SpellEngine`—a standalone, flexible skill system built for seamless integration with diverse game components. Played a key role in bridging design and engineering efforts across the project. For the better understanding of the game please check out our YouTube channel `Horizons of Achaea`, I won\'t share anything that is not presented outside it as the game is under NDA.',
		shortDescription:
			'A commerical Indie Game Project in JRPG style with cinematic turn based fighting.',
		links: [{ to: 'https://youtu.be/V-MTG9fuEJQ?si=F0LiULHiMkXlTx3Z', label: 'YouTube' }],
		logo: Assets.HorizonsOfAchaea,
		name: 'Horizons Of Achaea',
		period: { from: getDate('November 27 2024'), to: getCurrentDate() },
		skills: getSkills('blueprints', 'ue', 'cpp', 'vs'),
		type: 'Commercial Project',
		screenshots: [
			{
				label: 'Game Trailer #1',
				src: `${checkPageLoaded('hoa/')}1.mp4`,
			}
		]
	},
	{
		slug: 'newtypeprocedural',
		color: 'pink',
		description:
			'An experimental project focused on exploring innovative, non-traditional approaches to procedural generation—specifically avoiding BSP (Binary Space Partitioning) techniques. The objective is to create diverse, non-repetitive rooms using a dynamic system where spatial properties are defined through JSON data, enabling a high degree of modularity and control. As part of this research effort, we developed a custom procedural generation algorithm capable of creating a wide variety of spaces. The system emphasizes flexibility, allowing core parameters and structures to be easily modified through data-driven configurations. This approach pushes the boundaries of procedural design, promoting the creation of rich, unpredictable environments with minimal hardcoded constraints. If you want to play the game please leave me a note on LinkedIn.',
		shortDescription:
			'A community based project to purpose a new way of procedural generation',
		links: [{ to: 'https://youtu.be/uqaBoQoF16w', label: 'YouTube' }],
		logo: Assets.UnrealEngine,
		name: 'Procedural Generation Re-Purpose',
		period: { from: getDate('July 27 2024'), to: getDate('October 27 2024') },
		skills: getSkills('blueprints', 'ue', 'cpp', 'vs', 'jira'),
		type: 'Community Project',
		screenshots: [
			{
				label: 'Spawn Location',
				src: `${checkPageLoaded('com/')}2.png`,
			},
						{
				label: 'Safe Zone Corridor',
				src: `${checkPageLoaded('com/')}3.png`,
			},
						{
				label: 'Rescued NPCes Chill Zone',
				src: `${checkPageLoaded('com/')}4.png`,
			}, 
						{
				label: 'Main Character Bedroom',
				src: `${checkPageLoaded('com/')}1.png`,
			},
						{
				label: 'Quest Giver Room',
				src: `${checkPageLoaded('com/')}5.png`,
			},
						{
				label: 'Enemy Room',
				src: `${checkPageLoaded('com/')}6.png`,
			}, 
						{
				label: 'Treasure Room',
				src: `${checkPageLoaded('com/')}7.png`,
			},
						{
				label: 'Dungeon Corridor',
				src: `${checkPageLoaded('com/')}8.png`,
			}
		]
	},
	{
		slug: 'blasphemous2dlc',
		color: 'black',
		description:
			'As a QA Analyst, my primary goal was to identify and report issues to ensure a smoother and more enjoyable user experience. I focused on finding bugs and suggesting improvements to help make the product more reliable and user-friendly.',
		shortDescription:
			'As a QA Analyst, I focused on identifying and reporting issues to improve product quality and create a better user experience.',
		links: [{ to: 'https://store.steampowered.com/app/2879370/Blasphemous_2__Mea_Culpa/', label: 'Steam' }],
		logo: Assets.Blasphemous2,
		name: 'Blaspemous 2 Mea Culpa DLC',
		period: { from: getDate('August 08 2024'), to: getDate('November 28 2024') },
		skills: getSkills('qa'),
		type: 'Commercial Project',
		screenshots: [
			{
				label: 'Gameplay Screenshot 1',
				src: `${checkPageLoaded('bl2-dlc/')}1.jpg`,
			},
			{
				label: 'Gameplay Screenshot 2',
				src: `${checkPageLoaded('bl2-dlc/')}2.jpg`,
			},
			{
				label: 'Gameplay Screenshot 3',
				src: `${checkPageLoaded('bl2-dlc/')}3.jpg`,
			},
			{
				label: 'Gameplay Screenshot 4',
				src: `${checkPageLoaded('bl2-dlc/')}4.jpg`,
			},
			{
				label: 'Gameplay Screenshot 5',
				src: `${checkPageLoaded('bl2-dlc/')}5.jpg`,
			},
			{
				label: 'Credits',
				src: `${checkPageLoaded('bl2-dlc/')}6.png`,
			}
		]
	},
	{
		slug: 'diploma',
		color: 'hotpink',
		description:
			'For my bachelor\'s project, I was super involved in building smarter virtual characters for 3D games using Unreal Engine 5. Imagine bringing video game characters to life with cutting-edge AI! That\'s what I focused on. To be short about what been done: Spotting Objects in Games (UE based), Navigation for Drones, Building a Dynamic World',
		shortDescription:
			'AI project for Unreal Engine 5, enhancing 3D game realism through advanced object detection and drone navigation.',
		links: [{ to: 'https://github.com/L1ghtboro/backend-navigation-py', label: 'Github-AI' }, { to: 'https://github.com/L1ghtboro/game-navigation-ue', label: 'Github-Game' }],
		logo: Assets.UnrealEngine,
		name: 'AI integration for Unreal Engine',
		period: { from: getDate('December 01 2023'), to: getDate('June 12 2024') },
		skills: getSkills('jira', 'ue', 'cpp', 'tensorflow', 'opencv', 'python'),
		type: 'Educational Project',
		screenshots: [
			{
				label: 'AI trying to find pink cube',
				src: `${checkPageLoaded('diploma/')}1.mp4`,
			}
		]
	},
	{
		slug: 'ftk-2',
		color: 'darkblue',
		description:
			'In my role as a Quality Assurance Technician at Testronic, I have been significantly involved in the development of "For The King 2." My primary focus has been on identifying and resolving issues to ensure a polished and enjoyable gaming experience for players. "For The King 2" transports players to the captivating yet perilous realm of Farul. Here, they embark on a challenging quest to overthrow the tyrannical Queen Rozomon. The campaign offers over 30 hours of engaging gameplay, divided into five interconnected adventures. This rogue-lite experience combines easy-to-learn mechanics with strategic depth, providing a rewarding challenge for players of all skill levels.',
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
	// {
	// 	slug: 'luxolis-cad',
	// 	color: 'mediumorchid',
	// 	description:
	// 		'That\'s the project I\'ve been working at Luxolis, I am sorry if that\'s just a little, but unfrotunetlly that\'s the only one I am allowed to show. P.S. I have lost access to those jwt I used as testing models so...',
	// 	shortDescription:
	// 		'Project I\'ve worked at Luxolis.',
	// 	links: [{ to: '', label: '' }],
	// 	logo: Assets.Luxolis,
	// 	name: 'Luxolis CAD',
	// 	period: { from: getDate('August 2023'), to: getDate('November 2023') },
	// 	skills: getSkills('js', 'cpp', 'rjs', 'webgl'),
	// 	type: 'Commercial Project',
	// 	screenshots: [
	// 		{
	// 			label: 'CAD Screenshot 1',
	// 			src: `${checkPageLoaded('luxolis-cad/')}1.jpg`,
	// 		}
	// 	]
	// },	
	{
		slug: 'dx-game',
		color: 'black',
		description:
			'I developed a DirectX shooting game as part of my education, utilizing the provided library. The game features simple 3D graphics and simple shooting gameplay mechanics. Players are challenged to aim and shoot targets within the game environment, showcasing technical proficiency with DirectX. This project highlights my ability to apply theoretical knowledge in a practical context and demonstrates my passion for game development.',
		shortDescription:
			'This is educational project on DirectX. I was learning how we render objects on non engine base.',
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
			'In my university studies, I undertook a machine learning project focused on object detection. The project aimed to develop a system capable of identifying individuals in images, with a specific emphasis on whether they were wearing masks or not. I explored various convolutional neural network (CNN) architectures, including VGG, MobileNetV2, and Xception. This approach allowed me to evaluate the impact of different network structures on both accuracy and performance. Ultimately, the Xception model achieved the highest degree of accuracy in detecting individuals with and without masks. However, the MobileNetV2 model offered a more efficient solution with faster processing speeds and a lower number of parameters compared to VGG and Xception.',
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
