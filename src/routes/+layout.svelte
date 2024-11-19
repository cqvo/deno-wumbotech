<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="h-auto grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header>
		<AppBar>
			{#snippet lead()}
				<span class="h5 content-center">WumboTech</span>
			{/snippet}
			{#snippet trail()}{/snippet}
<!--			<nav class="btn-group justify-center p-2 md:flex-row">-->
<!--				<a type="button" class="btn hover:preset-tonal" href="/blog">Blog</a>-->
<!--				<a type="button" class="btn hover:preset-tonal" href="/about">About</a>-->
<!--				<a type="button" class="btn hover:preset-tonal" href="/contact">Contact</a>-->
<!--			</nav>-->
		</AppBar>
	</header>
	<!-- Main -->

	<div class="container mx-auto">
		{@render children()}
	</div>

	<!-- Footer -->
</div>
