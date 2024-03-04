<script lang="ts">
	export let classes = '';
</script>

<h2
	class={`font-[var(--title-f)] font-semibold tracking-[2px] text-1.5em sm:text-1.8em md:text-2em lg:text-2.2em text-[var(--tertiary-text)] ${classes}`}
>
	<slot />
</h2>
