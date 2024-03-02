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
			'Project that I\'ve been working as FQA technichian, finding issues and implementing fixes',
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
				label: 'gameplay screenshot 1',
				src: 'ftk2/2.png',
			},
			{
				label: 'gameplay screenshot 1',
				src: 'ftk2/3.jpg',
			},
			{
				label: 'gameplay screenshot 1',
				src: 'ftk2/4.jpg',
			},
			{
				label: 'gameplay screenshot 1',
				src: 'ftk2/5.jpg',
			},
			{
				label: 'credits',
				src: 'ftk2/6.jpg',
			},
		]
	},
	{
		slug: 'web-cad',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Commercial Project',
		period: {
			from: new Date('August 2023'),
			to: new Date('November 2023')
		},
		skills: getSkills('cpp'),
		type: 'Commercial Project',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export default MY_PROJECTS;
