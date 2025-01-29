import type { PageServerLoad } from './$types';

const roles = [
	{
		"companyName": "Velir",
		"companyLogo": "/img/velir.png",
		"companyUrl": "https://www.velir.com",
		"title": "Associate Director, Digital Analytics",
		"tenure": "October 2022 - Present",
		"bullets": [
			"Lead and manage the behavioral analytics team, growing the team from one to five direct reports",
			"Expand team capabilities from web and marketing analytics to also include product analytics and Customer Data Platforms (CDP)",
			"Consult directly with clients to understand their needs and guide their analytics deployments, including workshops to define and document digital goals and KPIs",
			"Create and execute plan for implementing web analytics (Google Tag Manager, Google Analytics 4)",
			"Create and execute plan for implementing CDPs using (Segment, mParticle)",
			"Assess existing analytics and data configurations and provide recommendations for best-practices",
		]
	},
	{
		"companyName": "Publicis Sapient AI Labs",
		"companyLogo": "/img/psail.png",
		"companyUrl": "https://www.psail.com",
		"title": "Senior Data Analyst",
		"tenure": "July 2020 - October 2022",
		"bullets": [
			"Led a team of data scientists and analysts to enhance in-app product offers for a major fast-food business to increase conversion through in-app and in-store funnels",
			"Audited marketing spend for major entertainment company, analyzing accuracy of vendor data and marketing spend trends, and using data to discover edge cases and outliers for future report automation"
		]
	},
	{
		"companyName": "BlueGranite (acquired by 3Cloud)",
		"companyLogo": "/img/bluegranite.jpeg",
		"companyUrl": "https://www.3cloudsolutions.com",
		"title": "Solution Consultant",
		"tenure": "May 2019 - February 2020",
		"bullets": [
			"Developed reports and dashboards using Microsoft Power BI, turning data into compelling stories",
			"Created ETL processes using Power Query to merge data from multiple sources and created custom dashboard measures using DAX",
			"Provided training, ranging from entry-level Power BI training to advanced DAX workshops",
		]
	},
	{
		"companyName": "Monster Worldwide",
		"companyLogo": "/img/monster.jpeg",
		"companyUrl": "https://www.monster.com",
		"title": "Senior Web Analyst",
		"tenure": "June 2016 - February 2019",
		"bullets": [
			"Optimized web product conversion funnels using Adobe Analytics and Target",
			"Created analysis plans for A/B testing and targeted experiments",
			"Transformed manual, labor-intensive reports into automated processes",
			"Produced ad hoc reports and documents for executive-level review",
		]
	}
];

const schools = [
	{
		"companyName": "Boston University",
		"companyLogo": "/img/bu.png",
		"companyUrl": "https://www.bu.edu",
		"title": "MS, Applied Data Analytics",
		"tenure": "Spring 2024 - Spring 2025",
		"bullets": [
			"CS 677 Data Science with Python",
			"CS 688 Web Mining and Graph Analytics",
			"CS 689 Data Warehouse Design and Implementation",
			"CS 699 Data Mining",
			"CS 779 Advanced Database Management",
		]
	},
	{
		"companyName": "University of Massachusetts Boston",
		"companyLogo": "/img/umb.png",
		"companyUrl": "https://www.umassb.edu",
		"title": "Master of Business Administration",
		"tenure": "Spring 2016 - Fall 2018",
		"bullets": [
			"Concentration: Business Analytics",
			"MSIS 670 Enterprise Business Intelligence",
			"MSIS 671 Enterprise Data Warehousing for BI",
			"MSIS 672 Enterprise Data Mining and Predictive Analytics",
			"MBAAF 636 Quantitative Analysis",
		]
	},
	{
		"companyName": "Suffolk University",
		"companyLogo": "/img/su.png",
		"companyUrl": "https://www.suffolk.edu",
		"title": "BSBA, Information Systems",
		"tenure": "Fall 2011 - Spring 2015",
		"bullets": [
			"Concentration: Big Data and Business Analytics",
			"ISOM 330 Applied Predictive Analytics",
			"ISOM 445 Data Mining and Business Intelligence",
			"ISOM 423 Database Management",
			"ISOM 424 Systems Prototyping and Design"
		]
	},
];

export const load: PageServerLoad = async () => {
	try {
		return { roles, schools };
	} catch (error) {
		console.error(error);
	}
}