

document.write(`
<ul>
${(() => {
		let list; for (const name in links) {
			list += `<li><a href="${links[name]}">${name}</a></li>`;
		}
		return list;
	})()}
</ul>`);