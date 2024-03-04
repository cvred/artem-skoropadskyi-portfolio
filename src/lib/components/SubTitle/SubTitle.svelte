<script lang="ts">
	export let classes = '';
</script>

<h6
	class={`font-[var(--title-f)] font-semibold tracking-[2px] text-1.5em sm:text-1.8em md:text-2em lg:text-1.6em text-[var(--tertiary-text)] ${classes}`}
>
	<slot />
</h6>
