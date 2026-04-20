
export const ImageIcon = {
	params: {
		frame_src: "images/neko/nekos.png",
		states: {
			walking: {
				start_frame: 0,
				frame_num: 5,
				fps: 5,
			},
			sleeping: {
				start_frame: 5,
				frame_num: 2,
				fps: 1,
			},
		},
		current_state: "walking",
		frame_wh: [58, 55],
		frame_transition: "left 0.4s ease, top 0.4s ease",
	},
	create: function ({ pos = { left: 0, top: 0 }, visibility = "visible" } = {}) {
		// a2e
		[Array, "a2e"].reduce((a, e) => { a.prototype[e] = function () { return this.reduce((e, f) => { f(e); return e; }); }; Object.defineProperty(a.prototype, e, { enumerable: false }); });

		// アイコンの生成
		const img = [
			document.createElement("div"),
			e => e.style.position = "absolute",
			e => e.style.transition = this.params.frame_transition,
			e => e.style.zIndex = 10,
			e => e.style.width = `${this.params.frame_wh[0]}px`,
			e => e.style.height = `${this.params.frame_wh[1]}px`,
			e => e.style.backgroundPosition = "0px 0px",
			e => e.style.backgroundImage = `url('${this.params.frame_src}')`,
			e => e.style.backgroundRepeat = "no-repeat",
			e => e.style.visibility = visibility,
			e => e.addEventListener('dragstart', e => {
				e.preventDefault();
			}),
			e => e.addEventListener('mouseenter', () => {
				e.style.cursor = "pointer";
			}),
			e => e.addEventListener('mouseleave', () => {
				e.style.cursor = "default";
			}),
		].a2e();
		const set_pos = (pos) => {
			img.style.left = `${pos.left - this.params.frame_wh[0] / 2}px`;
			img.style.top = `${pos.top - this.params.frame_wh[1] / 2}px`;
		};
		set_pos(pos);
		// bodyの子要素として追加しないと、移動後に見えなくなってしまう。
		document.body.appendChild(img);

		// アニメーション
		let frame = 0;
		const timer_func = () => {
			const state = this.params.states[this.params.current_state];
			img.style.backgroundPosition = `${-1 * this.params.frame_wh[0] * (frame + state.start_frame)}px 0px`;
			frame = (frame + 1) % state.frame_num;
			setTimeout(timer_func, 1000 / state.fps)
		};
		setTimeout(timer_func, 0);
		// setTimeout(() => {
		// 	this.params.current_state = "sleeping";
		// }, 10000)

		// ドラッグによるアイコンの移動
		const offset = { x: 0, y: 0 };
		let dragging = false;
		img.addEventListener("mousedown", e => {
			dragging = true;
			offset.x = e.clientX - img.offsetLeft;
			offset.y = e.clientY - img.offsetTop;
			img.style.transition = "none";
		});
		document.addEventListener("mousemove", e => {
			if (dragging) {
				img.style.left = (e.clientX - offset.x) + "px";
				img.style.top = (e.clientY - offset.y) + "px";
			}
		});
		document.addEventListener("mouseup", () => {
			img.style.transition = this.params.frame_transition;
			dragging = false;
		});

		// codemirrorのカーソル位置にアイコンを移動する。
		return {
			set_visibility: function (visibility) {
				img.style.visibility = visibility;
			},
			set_pos: function (cm) {
				if (cm === undefined) {
					set_pos(pos);
				} else {
					const cursor = cm.getCursor();
					const coords = cm.cursorCoords(cursor, "page");
					set_pos({ left: coords.left, top: `${(coords.top + coords.bottom) / 2}` });
				}
			},
			set_state: (state) => {
				this.params.current_state = state;
			},
		};
	},
}