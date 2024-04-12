import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {calculateAge} from './utils/helpers'
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Artem Skoropadskyi';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
		case Platform.Steam:
			return Icons.Steam;
		case Platform.ArtStation:
			return Icons.ArtStation;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Artem',
	lastName: 'Skropadskyi',
	location: {
		city: 'Warsaw',
		country: 'Poland'
	}, 
	description:
		`Hey there, I\'m Artem, a ${calculateAge(new Date('2003-3-4'))}-year-old Computer Science student currently studying at NTUU KPI. Welcome to my portfolio website, where I\'ll be sharing my projects and experiences. Feel free to explore my work and skills. If you have any inquiries or would like to connect, all the necessary links are provided below.`,
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/L1ghtboro' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/artem-skoropadskyi/'
		},
		//{
		//	platform: Platform.Twitter,
		//	link: 'https://twitter.com/'
		//},
		//{
		//	platform: Platform.StackOverflow,
		//	link: 'https://stackoverflow.com/'
		//},
		{
			platform: Platform.Email,
			link: 'artem.skoropadskyi@gmail.com'
		},
		// {
		// 	platform: Platform.Youtube,
		// 	link: 'https://www.youtube.com/channel/UC_Fif1QQvsIk_-BdL2jUVVw'
		// },
		//{
		//	platform: Platform.Facebook,
		//	link: 'https://www.facebook.com'
		//},
		{
			platform: Platform.ArtStation,
			link: 'https://www.artstation.com/artemskoropadskii4'
		},
		{
			platform: Platform.Steam,
			link: 'https://steamcommunity.com/id/exedbaffer/'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: './Artem Skoropadskyi Resume.pdf'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};
