<script>
	import clsx from 'clsx';
	import 'iconify-icon';
	export let open = false;

	const toggleOpen = () => (open = !open);
</script>

<nav
	class={clsx(
		'bg-secondary-focus bg-opacity-80 relative shadow-md h-full w-64 min-h-full z-10',
		'transition-transform duration-300 ease-in-out',
		open ? 'translate-x-0' : '-translate-x-[96%]'
	)}
>
	<input type="checkbox" class="drawer-toggle" bind:value={open} />
	<button
		class={clsx([
			'btn btn-circle btn-secondary absolute top-4 -right-3 btn-xs text-sm',
			'transition-opacity duration-300 ease-in-out',
			open ? 'opacity-0 pointer-events-none' : 'opacity-100'
		])}
		on:click={toggleOpen}
	>
		<iconify-icon icon="ion:chevron-forward" />
	</button>
	<div>
		<div class="flex items-center p-4 border-b border-solid border-base-300 border-opacity-30">
			<div class="flex-grow">
				<img
					alt="Board Avatar"
					src="https://api.dicebear.com/6.x/initials/svg?seed=Buddy"
					height="auto"
					width="32"
					class="rounded-md"
				/>
			</div>
			<button class="btn btn-circle btn-secondary btn-sm" on:click={toggleOpen}>
				<iconify-icon icon="ion:chevron-back" />
			</button>
		</div>
		<ul class="menu h-full p-0">
			<li><a class="text-secondary-content" href="#1">Sidebar Item 1</a></li>
			<li><a class="text-secondary-content" href="#2">Sidebar Item 2</a></li>
		</ul>
	</div>
</nav>
