<script lang="ts">
	import type { PageData } from './$types';
	import Bio from '$lib/components/bio.svelte';
	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 md:grid-cols-[auto_1fr]">
	<aside class="max-w-[250px] p-4">
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
		<article class="card p-4 space-y-4">
			<h1 class="h3">Background</h1>
			<p>After graduating high school in 2007, I went to Bridgewater State College with an undeclared major but dropped out after six weeks in order to join the Marine Corps. After a few days of boot camp, I decided I was going to go back to school after my enlistment was finished. My time working as a radio repair technician in the Marines was pretty uneventful, but I did get to throw a grenade and shoot a rocket, so it all evened out.</p>
			<p>I gave college another shot and went to Suffolk University, this time as a computer science major. I quickly realized that computer science was really just telling a computer to do high-level math, and that I had forgotten all the calculus I learned in high school. I ended up switching to an information systems major, with a focus on data analytics.</p>
			<p>My first job wasn't actually in analytics, but was a technical support engineer role supporting IoT devices - a lot of troubleshooting HTTP requests and APIs. While I was there, I started a MBA program, focusing on business analytics, and shortly after started working as a web analyst for Monster.com.</p>
			<p>Shortly after finishing my MBA, I was laid off from Monster and entered the consulting world. I have been doing analytics consulting ever since, ranging from analyzing raw data, implementating analytics platforms, and architecting analytics solutions. A lot of what I do revolves around web and digital marketing analytics, requiring diving into the DOM and event listeners.</p>
			<p>I'm now 35, been married for 7 years, and have a 7 year old son. My son and I play golf in the summer and go skiing in the winter.</p>
		</article>
		<article class="card p-4">
			<h1 class="h3">Hobbies</h1>
			<ul class="list-inside list-disc space-y-2">
				<li>Skiing</li>
				<li>Golf</li>
				<li>Warhammer 40k</li>
			</ul>
		</article>
		<article class="card p-4">
			<h1 class="h3">Links</h1>
			<ul class="list-inside list-disc space-y-2">
				<li><a class="anchor" href="https://www.youtube.com/watch?v=UYwF-jdcVjY&pp=ygULcG9zdCBtYWxvbmU%3D">Post Malone - Better Now</a></li>
				<li><a class="anchor" href="https://www.youtube.com/watch?v=uY_uDzHjMSo&pp=ygUbZmFjZSB0byBmYWNlIHNob290IHRoZSBtb29u">Face to Face - Shoot the Moon</a></li>
			</ul>
		</article>
	</main>
</div>
