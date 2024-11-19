<script lang="ts">
	import type { PageData } from './$types';
	import Bio from '$lib/components/bio.svelte';
	import XpRole from '$lib/components/xp-role.svelte';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import Skull from 'lucide-svelte/icons/skull';
	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 md:grid-cols-[auto_1fr]">
<!--	<aside class="max-w-[250px] p-4">-->
<!--		<Bio-->
<!--			imgSrc="/img/muaddib.png"-->
<!--			name="Chris Vo"-->
<!--			title="Chief Wumbologist"-->
<!--			githubUrl="https://github.com/cqvo"-->
<!--			email="chris.q.vo@gmail.com"-->
<!--			tagline=""-->
<!--		/>-->
<!--	</aside>-->

	<main class="flex-auto space-y-4 p-4">

		<section class="grid grid-cols-1 p-4 gap-2">
			<h1 class="h1">Welcome to <span class="bg-gradient-to-r from-tertiary-500 to-primary-500 box-decoration-clone bg-clip-text text-transparent">WumboTech</span>!</h1>
			<h3 class="h3">The worldwide leader in <span class="bg-gradient-to-r from-secondary-500 to-primary-500 box-decoration-clone bg-clip-text text-transparent">wumbology</span>.</h3>
			<section class="grid grid-cols-2 p-4 gap-4 justify-evenly">
				<blockquote class="blockquote">
					"All my life I have dared to go past what is possible. To the place where the possible and
					the impossible meet, to become... <strong>the possimpible."</strong>
				</blockquote>
				<div class="justify-self-end">
					<Avatar src="/img/muaddib.png" name="Chris Vo" background="preset-filled-primary-500" size="size-24">
						<Skull size={24} />
					</Avatar></div>
			</section>
			<p>Cupio appono statua odio ait praesentium. Thymum provident universe. Sortitus tamquam cruentus crastinus doloribus eaque.</p>
			<p>Placeat succurro studio caecus deludo color. Uxor tempus eveniet sulum volubilis sumptus vitae vobis sequi. Laudantium aestus antepono admoneo.</p>
			<p>Concido pax spargo cicuta acceptus sumo. Cubo tantillus damno vicinus civitas. Quisquam dolores socius valde stips magni totidem.</p>
		</section>
	</main>
</div>
