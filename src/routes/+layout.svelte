<script>
	import Header from '../lib/Header.svelte';
	import '../styles/app.css';
</script>

<Header />
<main class="px-8 py-4">
	<slot />
</main>
<footer>Footer</footer>
