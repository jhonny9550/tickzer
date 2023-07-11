<script lang="ts">
	import { generateUid } from '../utils/uid.utils';

	export let classes: { root?: string; label?: string; input?: string } = {};
	export let label: string;
	export let type: string = 'text';
	const inputId = generateUid('input');
</script>

<div class={`form-control ${classes?.root}`}>
	<label class={`label ${classes?.label}`} for={inputId}>{label}</label>
	<input {type} id={inputId} class={`input input-bordered ${classes?.input}`} />
</div>
