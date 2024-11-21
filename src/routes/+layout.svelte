<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="h-auto grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header class="grid grid-cols-1 sm:grid-cols-3 p-4 gap-4 bg-surface-100-900">
		<section class="hidden sm:block content-center mx-4">
			<h3 class="h3">WumboTech</h3>
		</section>
		<section class="content-center">
						<nav class="justify-center btn-group p-2 md:flex-row">
							<a type="button" class="btn hover:preset-tonal" href="/">Home</a>
							<a type="button" class="btn hover:preset-tonal" href="/about">About</a>
						</nav>
		</section>
<!--		<section class="bg-green-500">asdf</section>-->
	</header>

	<!-- Main -->

	<div class="container mx-auto">
		{@render children()}
	</div>

	<!-- Footer -->
</div>
