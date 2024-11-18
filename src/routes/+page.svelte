<script lang="ts">
	import Bio from '$lib/components/bio.svelte';
	import XpRole from '$lib/components/xp-role.svelte';
	export const roles = [
		{
			companyName: 'Velir',
			companyLogo: '/img/velir.png',
			companyUrl: 'https://www.velir.com',
			title: 'Associate Director, Digital Analytics',
			tenure: '2022 - Present',
			bullets: ['Bullet 1', 'Bullet 2', 'Bullet 3']
		}
	];
</script>

<div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 md:grid-cols-[auto_1fr]">
	<aside class="max-w-[250px] p-4">
		<Bio
			imgSrc="/img/muaddib.png"
			name="Chris Vo"
			title="Chief Wumbologist"
			githubUrl="https://github.com/cqvo"
			tagline=""
		/>
	</aside>

	<main class="flex-auto space-y-4 p-4">
		<article class="card p-4">
			<h1 class="h3">Skills</h1>
			<p>Cenaculum vergo vespillo terra. Subnecto ulterius ustilo peior. Accommodo colo ceno.</p>
		</article>
		<article class="card p-4">
			<h1 class="h3">Work Experience</h1>
			{#each roles as role}
				<section class="card preset-filled-surface-100-900">
					<XpRole
						companyName={role.companyName}
						companyLogo={role.companyLogo}
						companyUrl={role.companyUrl}
						title={role.title}
						tenure={role.tenure}
						bullets={role.bullets}
					/>
				</section>
			{/each}
		</article>
	</main>
</div>
