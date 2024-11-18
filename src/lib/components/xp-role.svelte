<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	let { companyUrl, companyLogo, companyName, title, tenure, bullets } = $props();
</script>

<div class="flex card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full gap-2">
	<aside class="grid grid-cols-1 p-4">
		<div class="justify-items-center">
			<a href={companyUrl}>
				<Avatar
					src={companyLogo}
					name={companyName}
					background="preset-filled-surface-500"
					size="size-12"
				/>
			</a>
		</div>
	</aside>
	<section class="grid grid-cols-1 p-4">
		<span class="type-scale-2"><strong><a href={companyUrl}>{companyName}</a></strong></span>
		<span class="type-scale-1">{tenure}</span>
		<h1 class="h5">{title}</h1>
		{#if bullets}
			<ul class="list-inside list-disc space-y-1">
				{#each bullets as text}
					<li>{text}</li>
				{/each}
			</ul>
		{/if}
	</section>
</div>
