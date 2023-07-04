<script lang="ts">
	export let classes: { root?: string; label?: string; input?: string } = {};
	export let label: string;
	export let link: { text: string; href: string } | null = null;
</script>

<label class={`cursor-pointer label gap-1.5 ${classes?.root}`}>
	<input type="checkbox" class={`checkbox checkbox-secondary checkbox-xs ${classes?.input}`} />
	<span class={`label-text ${classes?.label}`}>
		{label}
		{#if link}
			<a class="link text-base-content" href={link.href}>{link.text}</a>
		{/if}
	</span>
</label>
