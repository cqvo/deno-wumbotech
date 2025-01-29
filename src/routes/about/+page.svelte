<script lang="ts">
	import type { PageData } from './$types';
	import Bio from '$lib/components/bio.svelte';
	import XpRole from '$lib/components/xp-role.svelte';
	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 md:grid-cols-[auto_1fr] print:p-0 print:gap-0">
	<aside class="print:hidden max-w-[250px] p-4">
		<Bio
			imgSrc="/img/muaddib.png"
			name="Chris Vo"
			title="Chief Wumbologist"
			githubUrl="https://github.com/cqvo"
			email="chris.q.vo@gmail.com"
			tagline=""
		/>
	</aside>

	<main class="flex-auto space-y-4 p-4">
		<article class="hidden card p-4 print:block print:p-0 print:gap-0">
			<h1 class="h3">Chris Vo</h1>
			<p>chris.q.vo@gmail.com</p>
		</article>
		<article class="card p-4 grid grid-cols-1 gap-4 print:p-0 print:gap-0">
			<h1 class="h3">Work Experience</h1>
			{#each data.roles as role}
					<XpRole
						companyName={role.companyName}
						companyLogo={role.companyLogo}
						companyUrl={role.companyUrl}
						title={role.title}
						tenure={role.tenure}
						bullets={role.bullets}
					/>
			{/each}
		</article>
		<article class="card p-4 grid grid-cols-1 gap-4 print:p-0 print:gap-0">
			<h1 class="h3">Education</h1>
			{#each data.schools as school}
				<XpRole
					companyName={school.companyName}
					companyLogo={school.companyLogo}
					companyUrl={school.companyUrl}
					title={school.title}
					tenure={school.tenure}
					bullets={school.bullets}
				/>
			{/each}
		</article>
	</main>
</div>
