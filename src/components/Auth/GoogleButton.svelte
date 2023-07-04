<script lang="ts">
	import 'iconify-icon';
	export let label: string;
	export let onClick: () => void;
</script>

<button class="btn btn-block bg-white" on:click={onClick}>
	<iconify-icon icon="logos:google-icon" class="text-xl" />
	{label}
</button>
