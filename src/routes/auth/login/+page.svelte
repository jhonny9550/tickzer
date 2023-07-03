<script lang="ts">
	import Checkbox from '$components/Checkbox.svelte';
	import Input from '$components/Input.svelte';
	import 'iconify-icon';
</script>

<div class="container flex items-center justify-center min-h-screen">
	<div class="bg-white shadow-lg rounded-lg text-center overflow-hidden min-w-[450px]">
		<div class="p-4 bg-secondary text-secondary-content">
			<img alt="Tickzer logo" src="/tickzer-logo.svg" height="auto" width="96" class="mx-auto" />
			<h1>Hello Tickzeter!</h1>
		</div>
		<div class="p-9">
			<p class="mt-4">We are happy to have you here! <br /> Please enter your details to log in.</p>
			<form action="" class="mt-4">
				<Input label="Email" type="email" />
				<Input label="Password" type="password" />
				<div class="flex items-center">
					<Checkbox label="Remember me" />
					<a href="/forgot-password" class="ml-auto link link-hover">Forgot password?</a>
				</div>
				<div class="mt-8 flex flex-col gap-2">
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
				Don't have an account yet? <a class="link link-hover font-medium" href="/register"
					>Sign Up</a
				>
			</div>
		</div>
	</div>
</div>
