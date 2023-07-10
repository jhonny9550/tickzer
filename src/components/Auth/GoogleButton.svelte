<script lang="ts">
	import 'iconify-icon';
	export let label: string;
	export let onClick: () => void;
	export let type: 'button' | 'submit' | 'reset' = 'button';
</script>

<button class="btn btn-block bg-white" on:click={onClick} {type}>
	<iconify-icon icon="logos:google-icon" class="text-xl" />
	{label}
</button>
