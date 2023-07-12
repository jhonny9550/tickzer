<script>
	import clsx from 'clsx';
	import 'iconify-icon';
	export let open = false;

	const toggleOpen = () => (open = !open);
</script>

<nav
	class={clsx(
		'relative shadow-md h-full min-h-full z-10 bg-secondary-focus bg-opacity-80',
		'transition-width duration-300 ease-in-out',
		open ? 'w-64' : 'w-4'
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
	<div
		class={clsx([
			'absolute top-0 right-0 w-64 z-10 h-full transition-transform duration-300 ease-in-out',
			open ? 'translate-x-0' : '-translate-x-full'
		])}
	>
		<div>
			<div class="flex items-center p-4 border-b border-solid border-base-300 border-opacity-30">
				<div class="flex-grow flex gap-2 items-center">
					<img
						alt="Board Avatar"
						src="https://api.dicebear.com/6.x/initials/svg?seed=Buddy"
						height="auto"
						width="32"
						class="rounded-md"
					/>
					<div>
						<p class="text-secondary-content font-medium">Buddy</p>
						<p class="text-xs text-secondary-content">Team Lad</p>
					</div>
				</div>
				<button class="btn btn-square btn-secondary btn-sm" on:click={toggleOpen}>
					<iconify-icon icon="ion:chevron-back" />
				</button>
			</div>
			<div class="mt-2">
				<ul class="menu h-full p-0">
					<li class="menu-title">
						<p class="subheading-1 text-secondary-content font-normal">Menu title</p>
					</li>
					<li>
						<a class="text-secondary-content" href="#1">
							<iconify-icon icon="ion:grid" />
							Boards
						</a>
					</li>
					<li>
						<a class="text-secondary-content" href="#2">
							<iconify-icon icon="ion:person" />
							Members
							<button class="btn btn-square btn-ghost btn-sm">
								<iconify-icon icon="ion:plus" />
							</button>
						</a>
					</li>
					<li>
						<a class="text-secondary-content" href="#2">
							<iconify-icon icon="ion:settings-sharp" />
							Settings
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
