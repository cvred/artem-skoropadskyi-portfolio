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
			`C++ has been my programming language of choice since I first started coding back in school. I coding more and searching for any experiances, and that eventually brought me to Dragon's Lake, where I began as an Intern Unreal Engine Developer and eventually grew into a Junior role. My time at Dragon's Lake significantly refining my C++ skills, especially within the realm of Unreal Engine development. I mastered using C++ for Unreal Engine, applying it to diverse projects and gaining expertise in game development and little of real-time rendering. While C++ wasn't the primary focus at Luxolis, where the main development revolved around Three.js, I still utilized it effectively. Overall, my experience with C++ consists a various areas, ranging from game development in Unreal Engine to CAD applications using OpenGL, demonstrating my versatility and ability to adapt and thrive with the language.`,
		logo: Assets.Cpp,
		name: 'C++'
	}),	  
	s({
		slug: 'ue',
		color: 'pink',
		description: 
			`Unreal Engine holds a special place in my journey as it was one of the first game engines I discovered during my early university years. Since then, I've immersed myself in its ecosystem, progressively building my expertise. During my university studies, I delved into Unreal Engine, culminating in the development of my first project as part of my coursework. This experience allowed me to gain hands-on familiarity with both sides of Unreal Engine development \– utilizing blueprints for rapid prototyping and harnessing the power of C++ for more intricate and optimized solutions. Working with Unreal Engine has been an enriching journey for me, enabling me to explore various aspects of game development and honing my skills in both visual scripting with blueprints and programming with C++.`,
		logo: Assets.UnrealEngine,
		name: 'Unreal Engine'
	}),	  
	s({
		slug: 'blueprints',
		color: 'blue',
		description: 
			`My journey with UE Blueprints began with the inception of my learning Unreal Engine. From the very start, I immersed myself in mastering Blueprints, gradually building my proficiency. During my work at Dragon's Lake, I had the opportunity to further solidify my skills in UE Blueprints. Working on various projects, I developed a strong foundation and gained the ability to visualize and implement complex scripts effortlessly using Blueprints. UE Blueprints have been an integral part of my Unreal Engine toolkit, enabling me to translate ideas into reality efficiently and effectively.`,
		logo: Assets.Blueprints,
		name: 'UE Blueprints'
	}),	
	s({
		slug: 'cs',
		color: 'purple',
		description:
			`C# is mine like called go-to language, especially for Unity scripting. I've built several scripts for the game engine and have a good understanding of coding and architecting server-client solutions using C#. As a QA Technician at Testronic, I helped improve the gaming experience for 'For The King 2' by finding and fixing bugs. This project gave me valuable hands-on experience in troubleshooting and implementing solutions.`,
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
			`I've been expanding my knowledge of graphics libraries by exploring OpenGL. I've used it in educational projects, which has given me a solid understanding of its capabilities, including the GLSL shading language.`,
		logo: Assets.OpenGL,
		name: 'OpenGL'
	}),	  
	s({
		slug: 'dx',
		color: 'black',
		description:
			`I've been expanding my knowledge of graphics libraries by exploring Microsoft DirectX. I've used it in educational projects, familiarizing myself with its features like HLSL and its various functionalities. While I'm still learning, mine experiance says that it's a valuable tool for creating graphics-intensive applications.`,
		logo: Assets.DirectX,
		name: 'Microsoft DirectX'
	}),
	s({
		slug: 'vulkan',
		color: 'red',
		description:
			`I've been expanding my knowledge of graphics libraries by exploring Vulkan API. While I haven't delved deeply into it yet, I'm interested in learning more about its capabilities in the future.`,
		logo: Assets.Vulkan,
		name: 'Vulkan API'
	}),	  
	s({
		slug: 'bitbucket',
		color: 'blue',
		description:
			`My experience with Bitbucket has grown significantly through my work at Dragon's Lake and Testronic. I find it to be a valuable tool for managing code repositories. It allows me to easily track changes, collaborate with teammates, and access previous versions of projects. This makes it easier to maintain a clear history and iterate on ideas effectively.`,
		logo: Assets.Bitbucket,
		name: 'Bitbucket'
	}),  
	s({
		slug: 'jira',
		color: 'blue',
		description:
			`Jira has become a core part of my workflow, serving both as a bug reporting tool and a task management system. It helps me track bugs efficiently, assign tasks clearly to different team members, and monitor progress towards project objectives. This enhances collaboration and ensures everyone stays focused on achieving our goals.`,
		logo: Assets.Jira,
		name: 'Jira'
	}),	  
	s({
		slug: 'github',
		color: 'purple',
		description: 
			`Github was one of the first version control systems I encountered on my coding journey. Through utilizing Git and engaging with Github, I developed a solid foundation in version control both during my university studies and in professional work settings.`,
		logo: Assets.Github,
		name: 'Github'
	}),	
	s({
		slug: 'python',
		color: 'goldenrod',
		description: 
			`Python has been a key focus of mine, during my university studies, where I mastered its implementation for algorithmic and mathematical purposes. I have also ventured into areas such as Machine Learning and Data Science, utilizing Python extensively for these endeavors.`,
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'numpy',
		color: 'dodgerblue',
		description:
			`NumPy is kind of like the Swiss Army knife of Python for numerical computing. It tackles all sorts of math problems, from simple calculations to complex simulations. During my university days, it became my go-to tool whenever I needed to build a math-based application. It saved me countless hours and helped me focus on understanding the concepts, not the tedious calculations.`,
		logo: Assets.Numpy,
		name: 'NumPy'
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
		slug: 'opencv',
		color: 'lime',
		description:
			`OpenCV is like the foundation for building computer vision applications. It's a popular library used by many and has been helpful for me in developing vision-based projects. From creating robot vision systems using ROS to implementing computer vision tasks in Python for machine learning, OpenCV has been a valuable tool in my toolbox.`,
		logo: Assets.OpenCV,
		name: 'OpenCV'
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
		color: 'deepskyblue',
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
			`JavaScript was the frontend scripting language I began learning in school and continued to study throughout university. While I rarely use pure JavaScript in my projects, I am fully capable of leveraging it to create dynamic animations and interactive elements.`,
		logo: Assets.JavaScript,
		name: 'JavaScript'
	}),	
	s({
		slug: 'njs',
		color: 'green',
		description: 
			`Node.js has been a staple in many of my projects due to its simplicity and easy-to-understand structure. I utilized it extensively in numerous university projects and gained valuable working experience with it.`,
		logo: Assets.NodeJs,
		name: 'NodeJS'
	}),
	s({
		slug: 'ts',
		color: 'deepskyblue',
		description: 
			`Similar to Node.js, I often turn to TypeScript for various projects, ranging from coursework to developing my portfolio website. I appreciate the toolkit that TypeScript offers, enhancing productivity and code quality.`,
		logo: Assets.TypeScript,
		name: 'TypeScript'
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
			'Mocha is my favorite testing framework, which I extensively used both during my university studies and while working with Luxolis. It offers a robust set of features and provides a smooth testing experience, making it an indispensable tool in my development journey.',
		logo: Assets.Mocha,
		name: 'Mocha'
	}),
	s({
		slug: 'rjs',
		color: 'cyan',
		description: 
			`React JS is a JavaScript library that I've utilized extensively in various projects. Its component-based architecture and virtual DOM make it efficient for building user interfaces. I've leveraged React to create dynamic and interactive web applications, improving user experience and development efficiency.`,
		logo: Assets.ReactJs,
		name: 'React JS'
	}),
	s({
		slug: '3js',
		color: 'black',
		description: 
			'Three.js is a powerful JavaScript library used for creating 3D graphics in web browsers. I\'ve utilized Three.js to develop immersive 3D experiences, such as virtual tours, interactive simulations, and visualizations. Its robust features and documentation have enabled me to push the boundaries of web-based 3D graphics.',
		logo: Assets.Threejs,
		name: 'Three.js'
	}),
	s({
		slug: 'webgl',
		color: 'crimson',
		description: 
			'WebGL is a JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser. I\'ve used WebGL to create visually stunning and high-performance graphics for web applications. Its low-level access to the GPU allows for the creation of complex visual effects and animations, enhancing the overall user experience.',
		logo: Assets.WebGL,
		name: 'WebGL'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description: 
			'HTML is the standard markup language for creating web pages and web applications. I have a strong command of HTML and have used it extensively to structure web content, create forms, embed multimedia, and enhance accessibility. HTML serves as the foundation for building robust and well-structured web projects.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description: 
			'CSS is a style sheet language used for describing the presentation of a document written in HTML. I have a proficient understanding of CSS and have utilized it to style and layout web pages, create responsive designs, and implement animations and transitions. CSS plays a crucial role in enhancing the visual appeal and user experience of web applications.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'math',
		color: 'lightgreen',
		description: 
			`Mathematics has been my passion since middle school, especially after realizing my ambition to pursue a career in game development. During university, I delved deeply into various mathematical subjects, including Linear Algebra, Mathematical Analysis, and Game Theory, enriching my understanding and skills.`,
		logo: Assets.Math,
		name: 'Math'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
