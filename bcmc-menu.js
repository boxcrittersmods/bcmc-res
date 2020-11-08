let links = {
	Mods: "https://boxcrittersmods.ga/mods",
	Shader: "https://boxcrittersmods.ga/shaders",
	Docs: "https://docs.boxcrittersmods.ga",
	API: "https://docs.boxcrittersmods.ga",
	Toolbox: "https://docs.boxcrittersmods.ga"
};

document.write(`
<ul>
${(() => {
		let list; for (const name in links) {
			list += `<li><a href="${links[name]}">${name}</a></li>`;
		}
		return list;
	})()}
</ul>`);