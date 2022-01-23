import { remark } from 'remark';
import html from 'remark-html';
import emoji from 'remark-emoji';

export async function markdownToHtml(markdown) {
	const result = await remark().use(emoji).use(html).process(markdown);
	return result.toString();
}
