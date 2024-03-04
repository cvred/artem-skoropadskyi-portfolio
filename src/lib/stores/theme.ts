import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const key = '@toogle-themes';

const updateLocalStorage = (value: boolean) => {
	if (browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const theme = writable<boolean>(false);

export const toggleTheme = (value?: boolean) =>
	theme.update((it) => {
		const $v = typeof value === 'boolean' ? value : !it;

		updateLocalStorage($v);

		document.querySelector(':root')?.setAttribute('data-theme', $v ? 'dark' : 'light');

		return $v;
	});

export const onHydrated = () => {
	const fromStore = localStorage.getItem(key);

	if (window.matchMedia) {
		const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

		toggleTheme(prefersDarkMode);
	 }
	 else {

		 toggleTheme(false);
	 }
};
