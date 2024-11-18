<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import Skull from 'lucide-svelte/icons/skull';
	import Github from 'lucide-svelte/icons/github';

	let { imgSrc, name, title, githubUrl, tagline } = $props();
</script>

<div class="flex justify-center p-4">
	<Avatar src={imgSrc} {name} background="preset-filled-primary-500" size="size-24">
		<Skull size={24} />
	</Avatar>
</div>
<div class="flex flex-col items-center">
	<p><strong>{name}</strong></p>
	<p><em>{title}</em></p>
	<p>{tagline}</p>
</div>

<div class="flex justify-center p-4">
	<a href={githubUrl} type="button" class="btn-icon preset-filled">
		<Github />
	</a>
</div>
