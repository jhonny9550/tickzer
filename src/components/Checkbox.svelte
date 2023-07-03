<script lang="ts">
	export let classes: { root?: string; label?: string; input?: string } = {};
	export let label: string;
</script>

<label class={`cursor-pointer label gap-1.5 ${classes?.root}`}>
	<input type="checkbox" class={`checkbox checkbox-secondary checkbox-xs ${classes?.input}`} />
	<span class={`label-text ${classes?.label}`}>{label}</span>
</label>
