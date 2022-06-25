import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export function getDirectoryPath (key : "reviews") {
	const directoryMap = {
		"reviews" : "reviews"
	}

	return path.join(process.cwd(), directoryMap[key]);
}

export function getSortedPostsData(key : "reviews") {
	// Get file names under /posts

	const fileNames = fs.readdirSync(getDirectoryPath(key));
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, "");

		// Read markdown file as string
		const fullPath = path.join(getDirectoryPath(key), fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			id,
			...(matterResult.data as { date : string; title: string})
		};
	});
	// Sort posts by date
	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1
		} else {
			return -1
		}
	})
}

export function getAllPostIds(key : "reviews") {
	const fileNames = fs.readdirSync(getDirectoryPath(key));

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		};
	});
}

export async function getPostData(id : string, key : "reviews") {
	const fullPath = path.join(getDirectoryPath(key), `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	const processedContent = await remark().use(html).process(matterResult.content);
	const contentHtml = processedContent.toString();

	// Combine the data with the id
	return {
		id,
		contentHtml,
		...(matterResult.data as { date : string; title: string })
	};
}
