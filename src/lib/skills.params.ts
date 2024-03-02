import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'cpp',
		color: 'lightblue',
		description: 
			`C++ has been my primary programming language since my school days. I began delving into it extensively and this journey led me to Dragon's Lake, where I initially joined as an Intern Unreal Engine Developer and eventually progressed to a Junior role. At Dragon's Lake, I honed my C++ skills significantly, particularly in the context of Unreal Engine development. My experience there allowed me to master C++ for Unreal Engine, leveraging it for various projects and gaining proficiency in areas such as game development and real-time rendering. During my tenure at Luxolis, although C++ wasn't the primary focus as the main development was centered around Three.js, I still utilized it for specific tasks. Notably, I contributed to the engineering and development of certain components of Computer-Aided Design (CAD) applications using OpenGL. Overall, my experience with C++ spans various domains, from game development in Unreal Engine to CAD applications using OpenGL, showcasing my versatility and adaptability with the language.`,
		logo: Assets.Cpp,
		name: 'C++'
	}),
	s({
		slug: 'ue',
		color: 'pink',
		description: 
			`Unreal Engine holds a special place in my journey as it was one of the first game engines I discovered during my early university years. Since then, I've immersed myself in its ecosystem, progressively building my expertise. During my university studies, I delved into Unreal Engine, culminating in the development of my first project as part of my coursework. This experience allowed me to gain hands-on familiarity with both sides of Unreal Engine development – utilizing blueprints for rapid prototyping and harnessing the power of C++ for more intricate and optimized solutions. Working with Unreal Engine has been an enriching journey for me, enabling me to explore various aspects of game development and honing my skills in both visual scripting with blueprints and programming with C++.`,
		logo: Assets.UnrealEngine,
		name: 'Unreal Engine'
	}),
	s({
		slug: 'blueprints',
		color: 'blue',
		description: 
			`My journey with UE Blueprints began with the inception of my learning Unreal Engine. From the very start, I immersed myself in mastering the intricacies of Blueprints, gradually building my proficiency. During my tenure at Dragon's Lake, I had the opportunity to further solidify my skills in UE Blueprints. Working on various projects, I developed a strong foundation and gained the ability to visualize and implement complex scripts effortlessly using Blueprints. UE Blueprints have been an integral part of my Unreal Engine toolkit, enabling me to translate ideas into reality efficiently and effectively.`,
		logo: Assets.Blueprints,
		name: 'UE Blueprints'
	}),	
	s({
		slug: 'cs',
		color: 'purple',
		description: 
			`My proficiency in C# extends particularly to scripting for Unity, where I have honed my skills in developing some scripts for it. Additionally, I possess moderate expertise in coding and architecting server-client solutions using C#. During my tenure as an QA Technician for Testronic on "For The King 2", I diligently identified and resolved issues to enhance the gaming experience. This project provided me with hands-on experience in troubleshooting and implementing fixes.`,
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'unity',
		color: 'gray',
		description: 
			`I have an average proficiency with Unity Engine and scripting within it. Unity is one of the game engines that I often compare to Unreal Engine, as I've gained experience with both platforms. During my involvement in "For The King 2" as an QA Technician for Testronic, I had the opportunity to work with Unity and gain hands-on experience in testing and providing feedback for Unity-based projects.`,
		logo: Assets.UnityEngine,
		name: 'Unity'
	}),
	s({
		slug: 'vs',
		color: 'purple',
		description: 
			`Visual Studio is my primary IDE, which I am proficient in setting up and maintaining for various programming languages. I rely on Visual Studio for its comprehensive features and robust development environment, ensuring efficiency and productivity across projects.`,
		logo: Assets.VisualStudio,
		name: 'Visual Studio'
	}),	
	s({
		slug: 'opengl',
		color: 'cyan',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.OpenGL,
		name: 'OpenGL'
	}),
	s({
		slug: 'dx',
		color: 'black',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.DirectX,
		name: 'Microsoft DirectX'
	}),
	s({
		slug: 'vulkan',
		color: 'red',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Vulkan,
		name: 'Vulkan API'
	}),
	s({
		slug: 'bitbucket',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Bitbucket,
		name: 'Bitbucket'
	}),
	s({
		slug: 'jira',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Jira,
		name: 'Jira'
	}),
	s({
		slug: 'github',
		color: 'purple',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Github,
		name: 'Github'
	}),
	s({
		slug: 'python',
		color: 'yellow',
		description: 
			`Python has been a key focus of mine, during my university studies, where I mastered its implementation for algorithmic and mathematical purposes. I have also ventured into areas such as Machine Learning and Data Science, utilizing Python extensively for these endeavors.`,
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'numpy',
		color: 'blue',
		description: 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Numpy,
		name: 'NumPY'
	}),
	s({
		slug: 'tensorflow',
		color: 'orange',
		description: 
			`During my university studies, I've mastered TensorFlow, utilizing this library extensively in both Python and Node.js for various Machine Learning projects.`,
		logo: Assets.Tensorflow,
		name: 'Tensorflow'
	}),	
	s({
		slug: 'illustrator',
		color: 'orange',
		description: 
			`Adobe Illustrator is one of the Adobe applications I use for vector drawing tasks, such as creating small SVGs or logos.`,
		logo: Assets.Illustrator,
		name: 'Adobe Illustrator'
	}),
	s({
		slug: 'ps',
		color: 'blue',
		description: 
			`Adobe Photoshop is an essential tool in my toolkit for raster drawing tasks and graphic design work.`,
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop'
	}),
	s({
		slug: 'premiere',
		color: 'purple',
		description: 
			`Adobe Premiere is my go-to application for video editing, enabling me to craft good-quality videos with ease.`,
		logo: Assets.Premiere,
		name: 'Adobe Premiere'
	}),
	s({
		slug: 'js',
		color: 'yellow',
		description: 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.JavaScript,
		name: 'JavaScript'
	}),
	s({
		slug: 'njs',
		color: 'green',
		description: 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.NodeJs,
		name: 'NodeJS'
	}),
	s({
		slug: 'mongodb',
		color: 'green',
		description: 
			`Throughout various university projects, I've mastered MongoDB, a non-SQL database, which I find to be a useful and versatile tool for storing data efficiently.`,
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'mocha',
		color: 'brown',
		description: 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Mocha,
		name: 'Mocha'
	}),
	s({
		slug: 'rjs',
		color: 'cyan',
		description: 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.ReactJs,
		name: 'React JS'
	}),
	s({
		slug: '3js',
		color: 'black',
		description: 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Threejs,
		name: 'Three.js'
	}),
	s({
		slug: 'webgl',
		color: 'crimson',
		description: 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.WebGL,
		name: 'WebGL'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description: 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description: 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'math',
		color: 'green',
		description: 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Math,
		name: 'Math'
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
