<script>
	import { page } from '$app/stores';
	import ErrorFallback from '$components/ErrorPages/ErrorFallback.svelte';
	import NotFound from '$components/ErrorPages/NotFound.svelte';
</script>

<div class="p-14 bg-shapes flex-grow">
	{#if $page.status === 404}
		<NotFound />
	{:else}
		<ErrorFallback message={$page.error?.message} />
	{/if}
</div>
