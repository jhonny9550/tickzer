<script>
	import AuthCardHeader from '$components/Auth/AuthCardHeader.svelte';
	import GoogleButton from '$components/Auth/GoogleButton.svelte';
	import Checkbox from '$components/Checkbox.svelte';
	import Input from '$components/Input.svelte';
	import ROUTES from '../..';

	const handleGoogleSignup = () => {
		console.log('Google login');
	};
</script>

<div class="container flex items-center justify-center min-h-screen">
	<div class="auth-card">
		<AuthCardHeader title="Hello new Tickzeter!" />

		<div class="p-9">
			<p class="mt-4">
				We are happy to have you here! <br /> Please enter your details to sign up.
			</p>
			<form action="" class="mt-4">
				<Input label="Name" type="text" />
				<Input label="Email" type="email" />
				<Input label="Password" type="password" />
				<div class="flex items-center">
					<Checkbox
						label="I agree to terms the"
						link={{ href: ROUTES.TERMS_PRIVACY, text: 'Terms & Privacy' }}
					/>
				</div>
				<div class="mt-8 flex flex-col gap-2">
					<button class="btn btn-secondary btn-block">Sign up</button>
					<GoogleButton label="Sign up with Google" onClick={handleGoogleSignup} />
				</div>
			</form>
		</div>
		<div class="p-4">
			<div class="text-center text-sm flex justify-center gap-2">
				Already have an account? <a class="link link-hover font-medium" href={ROUTES.LOGIN}
					>Log in</a
				>
			</div>
		</div>
	</div>
</div>
