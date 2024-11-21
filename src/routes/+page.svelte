<script lang="ts">
	import type { PageData } from './$types';
	import Bio from '$lib/components/bio.svelte';
	import XpRole from '$lib/components/xp-role.svelte';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import Skull from 'lucide-svelte/icons/skull';
	let { data }: { data: PageData } = $props();
	import WumboDefinition from '$lib/components/wumbo-definition.svelte';
</script>

<header class="flex flex-col justify-center gap-4 p-4">
		<h2 class="h2 content-center text-center">
			The worldwide leader in <span
				class="bg-gradient-to-r from-primary-400 dark:from-secondary-500 to-secondary-600 dark:to-tertiary-500 box-decoration-clone bg-clip-text text-transparent"
				>wumbology</span
			>.
		</h2>
	<section class="justify-items-center">
		<WumboDefinition />
	</section>
</header>
