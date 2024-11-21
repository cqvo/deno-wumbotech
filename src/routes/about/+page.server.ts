import type { PageServerLoad } from './$types';

const roles = [
	{
		"companyName": "Velir",
		"companyLogo": "/img/velir.png",
		"companyUrl": "https://www.velir.com",
		"title": "Associate Director, Digital Analytics",
		"tenure": "2022 - Present",
		"bullets": [
			"I do a lot of data strategizing and data engineering."
		]
	},
	{
		"companyName": "Publicis Sapient AI Labs",
		"companyLogo": "/img/psail.png",
		"companyUrl": "https://www.psail.com",
		"title": "Senior Data Analyst",
		"tenure": "2020 - 2022",
		"bullets": [
			"I did a lot of data science-y stuff and a little bit of data strategy."
		]
	},
	{
		"companyName": "BlueGranite (acquired by 3Cloud)",
		"companyLogo": "/img/bluegranite.jpeg",
		"companyUrl": "https://www.3cloudsolutions.com",
		"title": "Solution Consultant",
		"tenure": "2019 - 2020",
		"bullets": [
			"I did a lot of data storytelling and some analytics engineering."
		]
	},
	{
		"companyName": "Monster Worldwide",
		"companyLogo": "/img/monster.jpeg",
		"companyUrl": "https://www.monster.com",
		"title": "Senior Web Analyst",
		"tenure": "2016 - 2019",
		"bullets": [
			"I did a lot of web and marketing data analysis."
		]
	}
];

export const load: PageServerLoad = async () => {
	try {
		return { roles };
	} catch (error) {
		console.error(error);
	}
}