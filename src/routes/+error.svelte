<script>
	import { page } from '$app/stores';
	import ErrorFallback from '$components/ErrorPages/ErrorFallback.svelte';
	import NotFound from '$components/ErrorPages/NotFound.svelte';
</script>

<div class="container p-14">
	{#if $page.status === 404}
		<NotFound message={$page.error?.message} />
	{:else}
		<ErrorFallback message={$page.error?.message} />
	{/if}
</div>
