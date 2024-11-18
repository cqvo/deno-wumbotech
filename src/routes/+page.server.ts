import type { PageServerLoad } from './$types';

const roles = [
	{
		"companyName": "Velir",
		"companyLogo": "/img/velir.png",
		"companyUrl": "https://www.velir.com",
		"title": "Associate Director, Digital Analytics",
		"tenure": "2022 - Present",
		"bullets": [
			"Transformed a web analytics team into a comprehensive behavioral analytics data team and expanded from one direct report to five",
			"Consulted with clients to understand their needs and digital goals, define KPIs, assess and audit existing implementations",
			"Evaluated various analytics vendors on behalf of clients and provided recommendations",
			"Managed and executed end-to-end implementations of customer data platforms",
			"Promoted within the agency greater analytics understanding and adoption across internal departments and clients",
			"Performed in-depth data analysis and reporting, providing actionable recommendations aligned with defined goals and KPIs",
			"Promoted client governance around analytics tracking and usage, ensuring best practices and consistent data quality"
		]
	},
	{
		"companyName": "Publicis Sapient AI Labs",
		"companyLogo": "/img/psail.png",
		"companyUrl": "https://www.psail.com",
		"title": "Senior Data Analyst",
		"tenure": "2020 - 2022",
		"bullets": [
			"Lead analyst for project where in-app product offers were used to increase conversion through in-app and in-store funnels, leading to 11% lift in new app registrations and 20% lift in new registrant retention",
			"Led technical implementation of Tealium iQ and Adobe Analytics for major retailer pivoting away from Google Tag Manager and Google Analytics",
			"Audited and performed statistical analysis on marketing campaign spend for major entertainment company",
			"Analyzed qualitative consumer data and quantitative campaign data for CPG company looking to create new product variants"
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