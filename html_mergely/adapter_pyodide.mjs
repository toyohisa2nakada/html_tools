/*
	pyodide (ブラウザで実行できるpython)
	https://pyodide.org/
	日本語サンプル https://news.mynavi.jp/techplus/article/zeropython-99/
*/
export const adapter = {
	_pyodide: undefined,
	_modified_code: undefined,
	_params: {
		error_str: "ERROR",
	},
	get_error_str: function () {
		return this._params.error_str;
	},
	init: async function () {
		await this._load_script("https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js");
		await this.reset();
	},
	reset: async function () {
		this._pyodide = await loadPyodide();
	},
	run_cached_code: async function ({ inputs }) {
		// console.log("cached_code")
		// console.log(this._modified_code)
		return await this.run({ inputs, code: this._modified_code });
	},
	run: async function ({ inputs, code }) {
		// console.log(inputs)
		// console.log(code);
		const stdin = (function () {
			let count = 0;
			return {
				stdin: () => {
					const val = inputs[count];
					count += 1;
					return val;
				}
			}
		})();
		const stdout = (function () {
			const outputs = [];
			return {
				batched: (str) => {
					outputs.push(str);
				},
				outputs,
			}
		})();
		this._pyodide.setStdin(stdin);
		this._pyodide.setStdout(stdout);
		try {
			await this._pyodide.runPython(code);
			return stdout.outputs;
		} catch (e) {
		}
		return [this._params.error_str];
	},
	create_inputs_modified_code: function (code) {
		let modified_code = code;
		const inputPattern = /input\s*\(\s*(?:(["'])(.*?)(?<!\\)\1)?\s*\)/gs;
		const inputs = [];
		for (const match of code.matchAll(inputPattern)) {
			inputs.push((match[2] ?? "").replace(/\\(["'\\])/g, "$1"));
			modified_code = modified_code.replace(match[0], "input()");
		}
		this._modified_code = modified_code;

		return { modified_code, inputs }
	},
	_load_script: function (fname) {
		return new Promise((resolve, reject) => {
			const sc = document.createElement("script");
			sc.type = "text/javascript";
			sc.src = fname;
			sc.onload = () => resolve();
			sc.onerror = (e) => reject(e);
			const s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(sc, s);
		});
	},
}