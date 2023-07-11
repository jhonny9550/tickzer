<script>
	import AuthCard from '$components/Auth/AuthCard.svelte';
	import AuthCardHeader from '$components/Auth/AuthCardHeader.svelte';
	import Input from '$components/Input.svelte';
	import ROUTES from '$routes';
</script>

<div class="container flex items-center justify-center min-h-screen">
	<AuthCard>
		<AuthCardHeader title="Forgot your password?" />
		<div class="p-9">
			<p class="mt-4 mx-auto">
				Enter the email address that you used to register.
				<br />
				We'll send you an email to help recover your account.
			</p>
			<form action="" class="mt-4">
				<Input label="Email" type="email" />
				<button class="btn btn-secondary mt-4">Send Email</button>
			</form>
		</div>
		<div class="p-4">
			<span class="flex justify-center gap-1 label-text">
				In case you need extra help, check out<a
					class="link link-hover font-medium"
					href={ROUTES.SUPPORT}>Tickzer Support</a
				>
			</span>
		</div>
	</AuthCard>
</div>
