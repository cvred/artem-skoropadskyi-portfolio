<script lang="ts">
	import { onMount } from 'svelte';
  	import { writable } from 'svelte/store';

	import Preloader from '$lib/components/Preloader/Preloader.svelte';
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import SubTitle from '$lib/components/SubTitle/SubTitle.svelte';
	import { TITLE_SUFFIX } from '$lib/params';
	import { HOME, getPlatfromIcon } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';

	const { description, lastName, links, name, title, skills, location } = HOME;

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};

	const contentLoaded = writable(false);

  	onMount(() => {
    	setTimeout(() => {
      		contentLoaded.set(true);
    	}, 0);

		// Execute Google Analytics script only on the client side
		if (typeof window !== 'undefined') {
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-3F2CHBZGN1');
		}
  	});	
</script>

<div class="{`preloader ${$contentLoaded ? 'hidden' : ''}`}">
  <Preloader />
</div>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>

<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName}</MainTitle>
		<SubTitle class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-extralight" >{location.city}, {location.country}</SubTitle>
		<p class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>
	<Carrousel items={skills ?? MY_SKILLS} />
</div>
