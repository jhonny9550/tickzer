<script>
	import ROUTES from '$routes';
	import Logo from './Logo.svelte';
	import Searchbar from './Searchbar.svelte';

	const handleLogout = () => {};
</script>

<header>
	<nav class="navbar bg-secondary">
		<div class="flex-1">
			<Logo />
		</div>
		<div class="flex-none gap-2">
			<Searchbar />
			<div class="dropdown dropdown-end">
				<button tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img
							alt="Profile Avatar"
							src="https://api.dicebear.com/6.x/bottts-neutral/svg?seed=Aneka"
						/>
					</div>
				</button>
				<ul
					class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
				>
					<li>
						<a href={ROUTES.PROFILE} class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a href={ROUTES.SETTINGS}>Settings</a></li>
					<li><button on:click={handleLogout}>Logout</button></li>
				</ul>
			</div>
		</div>
	</nav>
</header>
