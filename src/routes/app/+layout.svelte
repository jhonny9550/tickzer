<script>
	import Navbar from '$components/Navbar.svelte';
	import Sidebar from '$components/Sidebar.svelte';
</script>

<Navbar />
<main class="flex">
	<Sidebar />
	<div class="flex-grow">
		<slot />
	</div>
</main>
