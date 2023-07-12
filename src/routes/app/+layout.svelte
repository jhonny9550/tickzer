<script>
	import Navbar from '$components/Navbar.svelte';
	import Sidebar from '$components/Sidebar.svelte';
</script>

<Navbar />
<main class="flex">
	<Sidebar />
	<div class="flex-grow transition-all duration-300 ease-in-out">
		<slot />
	</div>
</main>
