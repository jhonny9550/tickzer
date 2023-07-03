<script lang="ts">
	import 'iconify-icon';
</script>

<div class="container flex items-center justify-center min-h-screen">
	<div class="bg-white shadow-lg rounded-lg text-center overflow-hidden min-w-[400px]">
		<div class="p-4 bg-secondary text-secondary-content">
			<img alt="Tickzer logo" src="/tickzer-logo.svg" height="auto" width="96" class="mx-auto" />
			<h2>Hello Tickzeter!</h2>
		</div>
		<div class="p-9">
			<p class="mt-4">We are happy to have you here! <br /> Please enter your details to log in.</p>
			<form action="" class="mt-4">
				<div class="form-control">
					<label class="label"> Email </label>
					<input type="text" class="input input-bordered" />
				</div>
				<div class="form-control">
					<label class="label"> Password </label>
					<input type="password" class="input input-bordered" />
				</div>
				<div class="flex items-center">
					<label class="cursor-pointer label gap-1.5">
						<input type="checkbox" class="checkbox checkbox-secondary checkbox-xs" />
						<span class="label-text">Remember me</span>
					</label>
					<a href="/forgot-password" class="ml-auto link link-hover">Forgot password?</a>
				</div>
				<div class="mt-4 flex flex-col gap-2">
					<button class="btn btn-secondary btn-block">Log in</button>
					<button class="btn btn-tertiary btn-block bg-white">
						<iconify-icon icon="logos:google-icon" class="text-xl" />
						Sign in with Google
					</button>
				</div>
			</form>
		</div>
		<div class="p-4">
			<div class="text-center text-sm flex justify-center gap-2">
				Don't have an account yet? <a class="link link-hover" href="/register">Sign Up</a>
			</div>
		</div>
	</div>
</div>
