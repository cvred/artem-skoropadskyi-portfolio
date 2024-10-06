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

			<a href="https://www.dropbox.com/scl/fo/6g8oh5t80jp9h2k0ahczb/AGtISob_pBMmNiPNpmR_BO8?rlkey=m3wni55s4zh9ctt5n4dypqa04&st=m36u0zfz&dl=0" target="_blank" class="dropbox-button">
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
