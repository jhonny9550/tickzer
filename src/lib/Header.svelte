<script>
	import Logo from './Logo.svelte';
</script>

<header class="fixed inset-x-0 top-0 z-10">
	<nav class="navbar bg-base-100">
		<div class="flex-1">
			<Logo />
		</div>
		<div class="flex-none gap-2">
			<div class="dropdown dropdown-end">
				<label for="" tabindex="-1" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img alt="Profile avatar" src="https://api.dicebear.com/6.x/initials/svg?seed=Buster" />
					</div>
				</label>
				<ul
					tabindex="-1"
					class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
				>
					<li>
						<a class="justify-between" href="#q">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a>Settings</a></li>
					<li><a>Logout</a></li>
				</ul>
			</div>
		</div>
	</nav>
</header>
