export async function load() {
	try {
		const filePath = './src/lib/components/roles.json';
		const text = await Deno.readTextFile(filePath);
		const roles = JSON.parse(text);
		return { roles };
	} catch (error) {
		console.error(error);
	}
}



// const filePath = 'src/lib/components/roles.json';
// async function readJsonFile(filePath: string) {
// 	try {
// 		const jsonText = await Deno.readTextFile(filePath);
// 		const jsonData = JSON.parse(jsonText);
// 		console.log(jsonData);
// 	} catch (error) {
// 		console.error("Error reading the JSON file:", error);
// 	}
// }

// readJsonFile(filePath);

// let text = `
// url,views,likes
// https://deno.land,10,7
// https://deno.land/x,20,15
// https://deno.dev,30,23
// `;
// let data = parse(text, {
// 	skipFirstRow: true,
// 	strip: true,
// });
// console.log(data[0].url); // https://deno.land
// console.log(data[0].views); // 10
// console.log(data[0].likes); // 7