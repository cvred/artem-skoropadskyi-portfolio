<script>
	import Analytics from '$lib/components/Analytics/Analytics.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';

	const { item, title } = RESUME;
</script>

<Analytics />

<CommonPage {title}>
	<div class="resume">
		{#if item}
			<a href={item}>
				<Chip size={'1.25em'}>Download</Chip>
			</a>

			<p class = "or-text"> or </p>

			<a href="https://www.dropbox.com/scl/fi/ydoo4yf1u3noviayxyv1s/Artem_Skoropadskyi_CV.pdf?rlkey=xl6b9q7tt3tx7vyo0gwdach6v&st=2696n8ov&dl=0" target="_blank" class="dropbox-button">
				<Chip>View on Dropbox</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
    .resume {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        align-items: center;
        flex-wrap: wrap;
    }

    .or-text {
        margin: 10px;
        font-size: 16px;
    }

</style>
