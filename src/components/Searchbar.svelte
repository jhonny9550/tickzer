<script>
	import 'iconify-icon';
	import { generateUid } from '../utils/uid.utils';

	const inputId = generateUid('input');
</script>

<div class="form-control">
	<div class="input-group">
		<label for={inputId} class="bg-white px-2 flex-center" aria-label="Search">
			<iconify-icon icon="ion:search-sharp" />
		</label>
		<input
			id={inputId}
			type="text"
			placeholder="Search"
			class="input input-bordered h-9 w-24 pl-0 bg-white border-l-0 md:w-auto"
		/>
	</div>
</div>
