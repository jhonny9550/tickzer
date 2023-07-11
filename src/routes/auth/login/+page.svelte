<script lang="ts">
	import AuthCard from '$components/Auth/AuthCard.svelte';
	import AuthCardHeader from '$components/Auth/AuthCardHeader.svelte';
	import GoogleButton from '$components/Auth/GoogleButton.svelte';
	import Checkbox from '$components/Checkbox.svelte';
	import Input from '$components/Input.svelte';
	import { error } from '@sveltejs/kit';
	import 'iconify-icon';
	import ROUTES from '../..';

	const handleGoogleLogin = () => {
		console.log('Google login');
		throw error(404, {
			code: 'not-found',
			message: 'Not found',
			id: '123'
		});
	};
</script>

<div class="container flex items-center justify-center min-h-screen">
	<AuthCard>
		<AuthCardHeader title="Hello Tickzeter!" />
		<div class="p-9">
			<p class="mt-4">We are happy to have you here! <br /> Please enter your details to log in.</p>
			<form action="" class="mt-4">
				<Input label="Email" type="email" />
				<Input label="Password" type="password" />
				<div class="flex items-center">
					<Checkbox label="Remember me" />
					<a href={ROUTES.FORGOT_PASSWORD} class="ml-auto link link-hover">Forgot password?</a>
				</div>
				<div class="mt-8 flex flex-col gap-2">
					<button class="btn btn-secondary btn-block">Log in</button>
					<GoogleButton label="Sign in with Google" onClick={handleGoogleLogin} />
				</div>
			</form>
		</div>
		<div class="p-4">
			<span class="flex justify-center gap-2 label-text">
				Don't have an account yet? <a class="link link-hover font-medium" href={ROUTES.SIGNUP}
					>Sign Up</a
				>
			</span>
		</div>
	</AuthCard>
</div>
