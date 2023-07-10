<script lang="ts">
	import ROUTES from '$routes';

	export let message = 'Unexpected error';

	const handleReset = () => {
		window.location.href = ROUTES.HOME;
	};
</script>

<div>
	<div class="card bg-white p-8 shadow-lg gap-8 items-center">
		<h1>500 - {message}</h1>
		<button on:click={handleReset} class="btn btn-secondary btn-lg">Go back to the homepage</button>
	</div>
	<img
		alt="Unexpected Error Illustration"
		src="/images/errors/500.svg"
		height="auto"
		width={600}
		class="mt-10"
	/>
</div>
