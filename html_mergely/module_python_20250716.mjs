// a2e
[Array, "a2e"].reduce((a, e) => { a.prototype[e] = function () { return this.reduce((e, f) => { f(e); return e; }); }; Object.defineProperty(a.prototype, e, { enumerable: false }); });

// html_mergelyに追加するpythonモジュール
export const python = {
	// 課題ファイル、html_mergelyに定義されているkadaisを上書きする。
	_kadais: {

		"py42_string_num.py": {
			code0: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCmEgPSAxICsgMQ0KYiA9ICIxIiArICIxIg0KYyA9IGludChpbnB1dCgi5pWw5a2XMSIpKSArIGludChpbnB1dCgi5pWw5a2XMiIpKQ0KDQpwcmludChhKQ0KcHJpbnQoYikNCnByaW50KGMpDQoNCiMgMiAxMSDjga7jgYLjgajjgavjgIHmlbDlrZcx44Go5pWw5a2XMuOBruWQiOioiOWApOOBjOWHuuWKm+OBleOCjOOBvuOBmQ0K",
			code1: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCmEgPSAxICsgMQ0KYiA9ICIxIiArICIxIg0KYyA9IGludChpbnB1dCgiaW50IikpICsgaW50KGlucHV0KCJpbnQiKSkNCmQgPSBpbnB1dCgiMSIpICsgaW5wdXQoIjIiKQ0KDQpwcmludChhKQ0KcHJpbnQoYikNCnByaW50KGMpDQpwcmludChkKQ0KDQojIA0K",
			quests: { "py42_string_num_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjoNCuWkieaVsCBkIOOCkuS9nOOCiuOAgeaWh+Wtl+OCkjLjgaTlhaXlipvjgZfjgabjgIHjgZ3jgozjgpLjgaTjgarjgZLjgZ/mloflrZfjgpIgZCDjgavlhaXjgozjgabjgY/jgaDjgZXjgYTjgIINCmQgPSBpbnB1dCgiMSIpICsgaW5wdXQoIjIiKQ0K44GT44GT44Gn44CBaW5wdXQoIjEiKSDjgoQgaW5wdXQoIjIiKSDjga/jgIHjgZ3jgozjgZ7jgozmloflrZfjgpLlhaXlipvjgZnjgovmrITjgpLkvZzjgovlkb3ku6TjgafjgZnjgILjgZ3jga4y44Gk44Gu5paH5a2X44KSICsg44Gn57WQ5ZCI44GX44G+44GZ44CCIjEi44KEIjIi44Gv55S76Z2i44Gr6KGo56S644GV44KM44KL44Op44OZ44Or44Gn44GZ44CC44OX44Ot44Kw44Op44Og44Gu5YuV44GN44Gr44Gv6Zai5L+C44Gv44GC44KK44G+44Gb44KT44CCDQoNCuacgOW+jOOBq+OAgeWkieaVsCBkIOOCkuWHuuWKm+OBl+OBpuOBj+OBoOOBleOBhA0KcHJpbnQoZCkNCg0K5L6LOiDlhaXlipvjgYwgMSAyIGEgYiDjga7jgajjgY3jga7lh7rlipsNCjINCjExDQozDQphYg0KDQrilqDnorroqo06IOiqsumhjOODgeOCp+ODg+OCr+ODnOOCv+ODs+OCkuaKvOOBl+OBpuOAgeeiuuiqjeOCkuOBl+OBpuOBj+OBoOOBleOBhOOAgg0K" },
			inputs_array: [["1", "2", "a", "b"], ["3", "4", "5", "6"]],
		},

		"py43_string.py": {
			code0: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCmEgPSBpbnB1dCgi5Li76KqeIikNCg0KcHJpbnQoYSkNCg0KIyDlhaXlipvmrITjga7mloflrZfjgYzjgZ3jga7jgb7jgb7lh7rlipvjgZXjgozjgb7jgZkNCg==",
			code1: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCmEgPSBpbnB1dCgi5Li76KqeIikNCmIgPSBpbnB1dCgi6KOc6KqeIikNCg0KcHJpbnQoYSsi44Gv44CBIitiKyLjgafjgZkiKQ0KDQojIA0K",
			quests: { "py43_string_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjoNCuWFpeWKm+ashOOCkjHjgaTlopfjgoTjgZfjgIHlhaXlipvmrITjgpLlt6bjgYvjgonjgIzlhaXlipsx44CN44CM5YWl5YqbMuOAjeOBqOOBl+OBn+OBqOOBjeOAgQ0K44CM5YWl5YqbMeOAjeOBr+OAgeOAjOWFpeWKmzLjgI3jgafjgZkNCuOBqOWHuuWKm+OBmeOCi+OCiOOBhuOBq+OBl+OBpuOBj+OBoOOBleOBhOOAgg0KDQrkvosxOiDlhaXlipvjgYwg44OG44K544OIIOewoeWNmCDjga7loLTlkIgNCuODhuOCueODiOOBr+OAgeewoeWNmOOBp+OBmQ0KDQrkvosyOiDlhaXlipvjgYwg5aSn5a2mIOaYpeS8keOBv+OBjOmVt+OBhCDjga7loLTlkIgNCuWkp+WtpuOBr+OAgeaYpeS8keOBv+OBjOmVt+OBhOOBp+OBmQ0KDQrjg5Ljg7Pjg4g6IOaWh+Wtl+OCkue1kOWQiOOBmeOCi+OBruOBr+OAgSArIOOBp+OBmeOAguS+i+OBiOOBsOOAgWErIuOBr+OAgSIrYiDjgajjgZnjgovjgajjgIHlpInmlbBh44Gr5YWl44Gj44Gm44GE44KL5paH5a2X44GrICLjga/jgIEiIOOBjOOBpOOBquOBjOOBo+OBpuOAgeOBleOCieOBq+WkieaVsGLjga7mloflrZfjgYzjgaTjgarjgYzjgorjgb7jgZnjgIINCg0K4pag56K66KqNOiDoqrLpoYzjg4Hjgqfjg4Pjgq/jg5zjgr/jg7PjgpLmirzjgZfjgabjgIHnorroqo3jgpLjgZfjgabjgY/jgaDjgZXjgYTjgIINCg==" },
			inputs_array: [["テスト", "簡単"], ["大学", "春休みが長い"]],
		},

		"py44_if_string1.py": {
			code0: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCmEgPSBpbnB1dCgi5ZWG5ZOBIikNCg0KaWYgYSA9PSAi44KC44Gj44Gh44KF44KK44KTIjoNCiAgcHJpbnQoIuODn+OCueOCv+ODvOODieODvOODiuODhCIpDQplbGlmIGEgPT0gIumHkeOBruODkOOCv+ODvOODgeOCreODs+OCq+ODrOODvCI6DQogIHByaW50KCLjgrvjg5bjg7PjgqTjg6zjg5bjg7MiKQ0KDQojIOOCguOBo+OBoeOCheOCiuOCkyDjgajlhaXlipvjgZnjgovjgajjgIEg44Of44K544K/44O844OJ44O844OK44OEDQojIOmHkeOBruODkOOCv+ODvOODgeOCreODs+OCq+ODrOODvCDjgajlhaXlipvjgZnjgovjgajjgIEg44K744OW44Oz44Kk44Os44OW44Oz44Go5Ye65Yqb44GV44KM44G+44GZ44CCDQo=",
			code1: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCmEgPSBpbnB1dCgic3RyaW5nMSIpDQoNCmlmIGEgPT0gIuOCguOBo+OBoeOCheOCiuOCkyI6DQogIHByaW50KCLjg5/jgrnjgr/jg7zjg4njg7zjg4rjg4QiKQ0KZWxpZiBhID09ICLph5Hjga7jg5Djgr/jg7zjg4Hjgq3jg7Pjgqvjg6zjg7wiOg0KICBwcmludCgi44K744OW44Oz44Kk44Os44OW44OzIikNCmVsaWYgYSA9PSAi44OV44Kh44Of44OB44KtIjoNCiAgcHJpbnQoIuODleOCoeODn+ODquODvOODnuODvOODiCIpDQplbGlmIGEgPT0gIuOBi+OCieOBguOBkuOCr+ODsyI6DQogIHByaW50KCLjg63jg7zjgr3jg7MiKQ0KDQojIA0K",
			quests: { "py44_if_string1_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjoNCuOCguOBo+OBoeOCheOCiuOCkyAtPiDjg5/jgrnjgr/jg7zjg4njg7zjg4rjg4TjgIENCumHkeOBruODkOOCv+ODvOODgeOCreODs+OCq+ODrOODvCAtPiDjgrvjg5bjg7PjgqTjg6zjg5bjg7PjgIENCuOBqOOBhOOBhuWHuuWKm+OBr+OBneOBruOBvuOBvuOBq+OAgeasoeOBruWFpeWHuuWKm+OBrumWouS/guOCkui/veWKoOOBl+OBpuOBj+OBoOOBleOBhOOAgg0KDQrjg5XjgqHjg5/jg4Hjgq0gLT4g44OV44Kh44Of44Oq44O844Oe44O844OIDQrjgYvjgonjgYLjgZLjgq/jg7MgLT4g44Ot44O844K944OzDQoNCuS+i+OBiOOBsOODleOCoeODn+ODgeOCreOBqOWFpeWKm+OBmeOCi+OBqOOAgeODleOCoeODn+ODquODvOODnuODvOODiOOBqOWHuuWKm+OBleOCjOOBvuOBmeOAgg0KDQrilqDnorroqo06IOiqsumhjOODgeOCp+ODg+OCr+ODnOOCv+ODs+OCkuaKvOOBl+OBpuOAgeeiuuiqjeOCkuOBl+OBpuOBj+OBoOOBleOBhOOAgg0K" },
			inputs_array: [["もっちゅりん"], ["金のバターチキンカレー"], ["ファミチキ"], ["からあげクン"], ["その他"]],
		},

		"py45_if_string2.py": {
			code0: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCmEgPSBpbnB1dCgi6YOo5ZOBMSIpDQpiID0gaW5wdXQoIumDqOWTgTIiKQ0KDQppZiBhID09ICLjgqjjg7Pjgrjjg7MiOg0KICBwcmludCgi6LuKIikNCmlmIGIgPT0gIue/vCI6DQogIHByaW50KCLjgrDjg6njgqTjg4Djg7wiKQ0KDQojIOWFpeWKmzEo6YOo5ZOBMSnjgYzjgqjjg7Pjgrjjg7Pjgarjgonou4oNCiMg5YWl5YqbMijpg6jlk4EyKeOBjOe/vOOBquOCieOCsOODqeOCpOODgOODvA0KIyDjgZ3jgZfjgaYg44Ko44Oz44K444OzIOe/vCDjgajjgZfjgZ/loLTlkIjjgIHkuKHmlrnlh7rlipvjgZXjgozjgb7jgZnjgIINCg==",
			code1: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCmEgPSBpbnB1dCgic3RyaW5nMSIpDQpiID0gaW5wdXQoInN0cmluZzIiKQ0KDQppZiBhID09ICLjgqjjg7Pjgrjjg7MiIGFuZCBiID09ICLnv7wiOg0KICBwcmludCgi6aOb6KGM5qmfIikNCmVsaWYgYSA9PSAi44Ko44Oz44K444OzIjoNCiAgcHJpbnQoIui7iiIpDQplbGlmIGIgPT0gIue/vCI6DQogIHByaW50KCLjgrDjg6njgqTjg4Djg7wiKQ0KDQojIA0K",
			quests: { "py45_if_string2_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjoNCuWFpeWKmzHjgasg44Ko44Oz44K444OzIOWFpeWKmzLjgasg57+8IOOBjOWFpeWKm+OBleOCjOOBn+OBqOOBjeOAgQ0K6aOb6KGM5qmfIOOBqOOBoOOBkeWHuuWKm+OBmeOCi+OCiOOBhuOBq+OBl+OBpuOBj+OBoOOBleOBhOOAgg0KDQrkvosxOiDlhaXlipsxIOOCqOODs+OCuOODsyDlhaXlipsyIOe/vA0K6aOb6KGM5qmfDQoo6LuK44KE44Kw44Op44Kk44OA44O844Gv5Ye65Yqb44GV44KM44G+44Gb44KTKQ0KDQrkvosyOiDlhaXlipsxIOOCqOODs+OCuOODsyDlhaXlipsyICjnqbrmrIQpDQrou4oNCg0K5L6LMzog5YWl5YqbMSAo56m65qyEKSDlhaXlipsyIOe/vA0K44Kw44Op44Kk44OA44O8DQoNCuODkuODs+ODiDoNCuOCqOODs+OCuOODs+OBqOe/vOOBruS4oeaWueOBjOWFpeWKm+OBleOCjOOBpuOBhOOCi+OBi+OCkuiqv+OBueOCi+OBq+OBr+OAgWFuZCDjgpLkvb/jgYTjgb7jgZnjgILjgb7jgZrmnIDliJ3jgavjgIFpZiDjgafjgIzkuKHmlrnjgYLjgovloLTlkIjjgI3jgpLjg4Hjgqfjg4Pjgq/jgZfjgb7jgZnjgIINCmlmIGEgPT0gIuOCqOODs+OCuOODsyIgYW5kIGIgPT0gIue/vCI6DQrjgZ3jga7jgYLjgajjgasgZWxpZiDjgpLkvb/jgaPjgabjgIHjgIzjgqjjg7Pjgrjjg7PjgaDjgZHjgI3jgoTjgIznv7zjgaDjgZHjgI3jga7loLTlkIjjgpIx44Gk44Ga44Gk6Kq/44G544Gm44GE44GN44G+44GZ44CC44Gk44G+44KK44CB44KC44Go44KC44Go44GuIGlmIOOBryBlbGlmIOOBq+abuOOBjeOBi+OBiOOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAgg0KDQrilqDnorroqo06IOiqsumhjOODgeOCp+ODg+OCr+ODnOOCv+ODs+OCkuaKvOOBl+OBpuOAgeeiuuiqjeOCkuOBl+OBpuOBj+OBoOOBleOBhOOAgg0K" },
			inputs_array: [["エンジン", "翼"], ["エンジン", ""], ["", "翼"], ["", ""]],
		},

		"py46_if_string3.py": {
			code0: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCmEgPSBpbnB1dCgi54m55b60IikNCg0KaWYgYSA9PSAi44Ot44Oc44OD44OIIjoNCiAgcHJpbnQoIuODieODqeOBiOOCguOCkyIpDQplbHNlOg0KICBwcmludCgi44Gu44Gz5aSqIikNCg0KIyDlhaXlipvjgYwg44Ot44Oc44OD44OIIOOBoOOBqCDjg4njg6njgYjjgoLjgpMg44Go5Ye65Yqb44GV44KM44G+44GZDQoNCg==",
			code1: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCmEgPSBpbnB1dCgic3RyaW5nMSIpDQoNCmlmIGEgPT0gIuODreODnOODg+ODiCIgb3IgYSA9PSAi5pyq5p2lIiBvciBhID09ICLjgbLjgb/jgaTpgZPlhbciOg0KICBwcmludCgi44OJ44Op44GI44KC44KTIikNCmVsc2U6DQogIHByaW50KCLjga7jgbPlpKoiKQ0KDQojIA0K",
			quests: { "py46_if_string3_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjoNCuODieODqeOBiOOCguOCk+OBqOOBruOBs+WkquOCkuWMuuWIpeOBmeOCi+ODl+ODreOCsOODqeODoOOBp+OBmeOAgg0K5YWl5Yqb5qyE44Gr44CB44Ot44Oc44OD44OIIOacquadpSDjgbLjgb/jgaTpgZPlhbcg44Gu44Gp44KM44GL44GM5YWl5Yqb44GV44KM44Gf44Go44GNIOODieODqeOBiOOCguOCk+OAgeOBneOCjOS7peWkluOBruOBqOOBjSDjga7jgbPlpKog44Go5Ye65Yqb44GZ44KL44KI44GG44Gr44GX44Gm44GP44Gg44GV44GE44CCDQoNCuS+izE6IOWFpeWKmyDjg63jg5zjg4Pjg4gNCuODieODqeOBiOOCguOCkw0KDQrkvosyOiDlhaXlipsg5pyq5p2lDQrjg4njg6njgYjjgoLjgpMNCg0K5L6LMzog5YWl5YqbIOOBsuOBv+OBpOmBk+WFtw0K44OJ44Op44GI44KC44KTDQoNCuS+izQ6IOWFpeWKmyDjg4bjgrnjg4gw54K5DQrjga7jgbPlpKoNCg0K44OS44Oz44OIOiBvcuOCkuS9v+OBo+OBpuOBv+OBpuOBj+OBoOOBleOBhOOAguOBvuOBnyDjga7jgbPlpKog44Gv44CBZWxzZeOBruOBqOOBk+OCjeOBp+WHuuWKm+OBl+OBvuOBmeOAgg0KDQrilqDnorroqo06IOiqsumhjOODgeOCp+ODg+OCr+ODnOOCv+ODs+OCkuaKvOOBl+OBpuOAgeeiuuiqjeOCkuOBl+OBpuOBj+OBoOOBleOBhOOAgg0K" },
			inputs_array: [["ロボット"], ["未来"], ["ひみつ道具"], ["その他"], [""]],
		},

		"py47_assign1.py": {
			code0: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCiMg6aOf5ZOBKOi7vea4m+eojueOhyA4JSkNCmxvdyA9IGludChpbnB1dCgibG93IikpDQoNCiMg44Gd44Gu5LuWKDEwJSkNCmhpZ2ggPSA1MDANCg0KdG90YWwgPSBsb3cgKiAxLjA4ICsgaGlnaCAqIDEuMQ0KcHJpbnQodG90YWwpDQoNCiMg5raI6LK756iOOCXjga7nqI7mipzjgY3ph5HpoY3jga/lhaXlipvmrITjgYvjgonlhaXlipvjgZfjgIHjgZ3jgozjgavmtojosrvnqI4xMCXjga7llYblk4EoNTAw5YaGKeOCkuWKoOOBiOOBn+e3j+aUr+aJlemhjeOCkuWHuuWKm+OBl+OBvuOBmeOAgg0KDQo=",
			code1: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCiMg6aOf5ZOBKOi7vea4m+eojueOhyA4JSkNCmxvdyA9IGludChpbnB1dCgibG93IikpDQoNCiMg44Gd44Gu5LuWKDEwJSkNCmhpZ2ggPSBpbnQoaW5wdXQoImhpZ2giKSkNCg0KdG90YWwgPSBsb3cgKiAxLjA4ICsgaGlnaCAqIDEuMQ0KcHJpbnQodG90YWwpDQoNCiMgDQo=",
			quests: { "py47_assign1_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjog44Gd44Gu5LuWKDEwJSnjga7nqI7mipzjgY3ph5HpoY3jgoLjgIHlhaXlipvmrITjgYvjgonlhaXlipvjgZnjgovjgojjgYbjgavjgZfjgabjgY/jgaDjgZXjgYTjgIINCg0K5L6LIOWFpeWKmzEoOCUpIDIxNeOAgeWFpeWKmzIoMTAlKSA0MTPjga7jgajjgY3jga7lh7rlipsNCjY4Ni41DQoNCuODkuODs+ODiDoNCuePvueKtuOBruODl+ODreOCsOODqeODoOOBp+OBr+OAgTEw77yF44Gu56iO546H44GM44GL44GL44KL5ZWG5ZOB77yI5aSJ5pWwIGhpZ2jvvInjga/jgIE1MDDlhobjgaflm7rlrprjgZXjgozjgabjgYTjgb7jgZnjgILjgZPjga7jgIw1MDDjgI3jga7pg6jliIbjgpLjgIHmrKHjga7jgojjgYbjgavmm7jjgY3mj5vjgYjjgabjgY/jgaDjgZXjgYTjgIINCmludChpbnB1dCgiaCIpKQ0K44GT44GT44GnICJoIiDjga/jgIHlhaXlipvmrITjgavooajnpLrjgZXjgozjgovjg6njg5njg6vjgafjgZnjgILjgo/jgYvjgorjgoTjgZnjgY/jgarjgovjgojjgYbjgavjgIHoh6rliIbjgaflpb3jgY3jgarooajnpLrvvIjkvovvvJrjgIzph5HpoY3jgI3jgarjganvvInjgavlpInjgYjjgabjgoLmp4vjgYTjgb7jgZvjgpPjgIINCg0K4pag56K66KqNOiDoqrLpoYzjg4Hjgqfjg4Pjgq/jg5zjgr/jg7PjgpLmirzjgZfjgabjgIHnorroqo3jgpLjgZfjgabjgY/jgaDjgZXjgYTjgIINCg==" },
			inputs_array: [["1000", "1000"], ["500", "300"], ["200", "600"]],
		},

		"py48_assign2.py": {
			code0: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCiMg6Kqy6aGMIDE1JQ0KIyDoqrLpoYzjga/jgIHjgr/jgqTjg5Tjg7PjgrDlpKfkvJrjgpLpmaTjgYTjgabjgIHjgZnjgbnjgabjga7mj5Dlh7roqrLpoYzjga7lubPlnYfngrnjgpLlhaXlipvjgZfjgb7jgZnjgIINCiMgIuaPkOWHuua4iOOBvyLjgajooajnpLrjgZXjgozjgabjgYTjgovjgajjgZPjgo3jga/jgIExMDDngrnjgajjgZfjgaboia/jgYTjgafjgZnjgIINCmthZGFpID0gaW50KGlucHV0KCLoqrLpoYwiKSkNCg0KIyDkuK3plpPoqabpqJMgMzUlDQoNCiMg5pyf5pyr6Kmm6aiTIDUwJQ0KDQp0b3RhbCA9IGthZGFpICogMC4xNQ0KcHJpbnQodG90YWwpDQoNCiMg5bCP5pWw54K556ysMeS9jeOCkuWbm+aNqOS6lOWFpeOBl+OBpuOAgTYw54K55Lul5LiK44Gn5Y2Y5L2N5Y+W5b6X44Gn44GZ44CCDQo=",
			code1: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCiMg6Kqy6aGMIDE1JQ0KIyDoqrLpoYzjga/jgIHjgr/jgqTjg5Tjg7PjgrDlpKfkvJrjgpLpmaTjgYTjgabjgIHjgZnjgbnjgabjga7mj5Dlh7roqrLpoYzjga7lubPlnYfngrnjgpLlhaXlipvjgZfjgb7jgZnjgIINCiMgIuaPkOWHuua4iOOBvyLjgajooajnpLrjgZXjgozjgabjgYTjgovjgajjgZPjgo3jga/jgIExMDDngrnjgajjgZfjgaboia/jgYTjgafjgZnjgIINCmthZGFpID0gaW50KGlucHV0KCLoqrLpoYwiKSkNCg0KIyDkuK3plpPoqabpqJMgMzUlDQptaWRfdGVzdCA9IGludChpbnB1dCgi5Lit6ZaT6Kmm6aiTIikpDQoNCiMg5pyf5pyr6Kmm6aiTIDUwJQ0KZmluYWxfdGVzdCA9IGludChpbnB1dCgi5pyf5pyr6Kmm6aiTIikpDQoNCnRvdGFsID0ga2FkYWkgKiAwLjE1ICsgbWlkX3Rlc3QgKiAwLjM1ICsgZmluYWxfdGVzdCAqIDAuNQ0KcHJpbnQodG90YWwpDQoNCiMg5bCP5pWw54K556ysMeS9jeOCkuWbm+aNqOS6lOWFpeOBl+OBpuOAgTYw54K55Lul5LiK44Gn5Y2Y5L2N5Y+W5b6X44Gn44GZ44CCDQo=",
			quests: { "py48_assign2_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjoNCuS4remWk+ippumok+OBruWkieaVsCBtaWRfdGVzdCDjgpLkvZzmiJDjgZfjgIHlhaXlipvlgKTjgYvjgonjgrvjg4Pjg4jjgZfjgabjgY/jgaDjgZXjgYTjgIINCm1pZF90ZXN0ID0gaW50KGlucHV0KCLkuK3plpPoqabpqJMiKSkNCg0K5pyf5pyr6Kmm6aiT44Gu5aSJ5pWwIGZpbmFsX3Rlc3Qg44KS5L2c5oiQ44GX44CB5YWl5Yqb5YCk44GL44KJ44K744OD44OI44GX44Gm44GP44Gg44GV44GE44CCDQpmaW5hbF90ZXN0ID0gaW50KGlucHV0KCLmnJ/mnKvoqabpqJMiKSkNCg0K5aSJ5pWwdG90YWzjga7oqIjnrpfjga/jgIHmnKzorJvnvqnjga7jgrfjg6njg5DjgrnjgYvjgonmipznsovjgZfku6XkuIvjga7jgojjgYbjgavjgZfjgabjgY/jgaDjgZXjgYTjgIINCnRvdGFsID0ga2FkYWkgKiAwLjE1ICsgbWlkX3Rlc3QgKiAwLjM1ICsgZmluYWxfdGVzdCAqIDAuNQ0KDQrkvosxOiDoqrLpoYwgOTDjgIHkuK3plpPoqabpqJMgNTDjgIHmnJ/mnKvoqabpqJMgMzANCjQ2LjANCg0K5L6LMjog6Kqy6aGMIDQw44CB5Lit6ZaT6Kmm6aiTIDM144CB5pyf5pyr6Kmm6aiTIDY1DQo1MC43NQ0KDQrilqDnorroqo06IOiqsumhjOODgeOCp+ODg+OCr+ODnOOCv+ODs+OCkuaKvOOBl+OBpuOAgeeiuuiqjeOCkuOBl+OBpuOBj+OBoOOBleOBhOOAgg0K" },
			inputs_array: [["90", "50", "30"], ["40", "35", "65"], ["100", "100", "100"]],
		},

		"py49_assign3.py": {
			code0: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCnRvdGFsID0gaW50KGlucHV0KCLnt4/lvpfngrkiKSkNCg0KZ3JhZGUgPSAiUyINCg0KcHJpbnQoZ3JhZGUpDQoNCiMg5a6f6KGM44GZ44KL44Go5bi444GrIFMg44Go5Ye65Yqb44GV44KM44G+44GZDQoNCg==",
			code1: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCnRvdGFsID0gaW50KGlucHV0KCLnt4/lvpfngrkiKSkNCg0KaWYgdG90YWwgPj0gOTA6DQogIGdyYWRlID0gIlMiDQplbGlmIHRvdGFsID49IDgwOg0KICBncmFkZSA9ICJBIg0KZWxpZiB0b3RhbCA+PSA3MDoNCiAgZ3JhZGUgPSAiQiINCmVsaWYgdG90YWwgPj0gNjA6DQogIGdyYWRlID0gIkMiDQplbHNlOg0KICBncmFkZSA9ICJEIg0KDQpwcmludChncmFkZSkNCg0KIyANCg==",
			quests: { "py49_assign3_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjoNCuWkieaVsHRvdGFs44Gr5YWl5Yqb44GV44KM44KL5pWw5YCk44Gr44KI44Gj44Gm44CB5qyh44Gu44Or44O844Or44Gr5b6T44Gj44Gf5Ye65Yqb44KS44GX44Gm44GP44Gg44GV44GE44CCDQoNCjkw5Lul5LiKIFMNCjgw5Lul5LiKODnku6XkuIsgQQ0KNzDku6XkuIo3OeS7peS4iyBCDQo2MOS7peS4ijY55Lul5LiLIEMNCjU55Lul5LiLIEQNCg0K5YWl5Yqb44GMMTAw44KS6LaF44GI44KL44CB44Oe44Kk44OK44K544Gr44Gq44KL44GT44Go44Gv6ICD5oWu44GX44Gq44GP44Gm6Imv44GE44Gn44GZ44CCDQoNCuODkuODs+ODiDoNCuOBmeOBp+OBq+abuOOBi+OCjOOBpuOBhOOCiyBncmFkZSA9ICJTIiDjga7ooYzjga7jgYLjgajjgasNCmlmIHRvdGFsID49IDkwOg0KICBncmFkZSA9ICJTIg0KZWxpZiB0b3RhbCA+PSA4MDoNCiAgZ3JhZGUgPSAiQSINCg0K44Go5pu444GP44Go44CB5aSJ5pWwIGdyYWRlIOOBq+OBr+acgOWIneOBqyAiUyIg44GM5YWl44Gj44Gm44GE44G+44GZ44GM44CBOTDku6XkuIrjgafjga/jgarjgY84MOS7peS4iuOBruOBqOOBjeOBqyAiQSIg44Gr5LiK5pu444GN44GV44KM44G+44GZ44CC44GT44Gu44KI44GG44Gr44CB54K55pWw44Gr5b+c44GY44GmIGdyYWRlIOOCkuOBqeOCk+OBqeOCk+S4iuabuOOBjeOBl+OBpuOBhOOBj+OBl+OBj+OBv+OBp+OBmeOAguWQjOOBmOOCiOOBhuOBq+OBl+OBpuOAgSJCIuOAgSJDIuOAgSJEIiDjgavjgaTjgYTjgabjgoLmnaHku7bjgpLov73liqDjgZfjgIFncmFkZSDjgpLkuIrmm7jjgY3jgZfjgabjgY/jgaDjgZXjgYTjgIINCg0K4pag56K66KqNOiDoqrLpoYzjg4Hjgqfjg4Pjgq/jg5zjgr/jg7PjgpLmirzjgZfjgabjgIHnorroqo3jgpLjgZfjgabjgY/jgaDjgZXjgYTjgIINCg==" },
			inputs_array: [["100"], ["99"], ["90"], ["89"], ["80"], ["79"], ["70"], ["69"], ["60"], ["59"], ["0"]],
		},

		"py50_range.py": {
			code0: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCm4gPSBpbnQoaW5wdXQoIuaVsOWtlyIpKQ0KZm9yIGkgaW4gcmFuZ2Uobik6DQogIHByaW50KGkrMSkNCg0KIyAx44GL44KJ5YWl5Yqb44GX44Gf5pWw5a2X44G+44Gn44GM5Ye65Yqb44GV44KM44G+44GZ44CCDQo=",
			code1: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCm4gPSBpbnQoaW5wdXQoIuaVsOWtlyIpKQ0KZm9yIGkgaW4gcmFuZ2UobisxKToNCiAgcHJpbnQoaSkNCg0KIyAw44GL44KJ5YWl5Yqb44GX44Gf5pWw5a2X44G+44Gn44GM57im44Gr5Ye65Yqb44GV44KM44G+44GZ44CCDQo=",
			quests: { "py50_range_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjE6IDHjgYvjgonjgafjga/jgarjgY/jgIEw44GL44KJ44K544K/44O844OI44GZ44KL44KI44GG44Gr44GX44Gm44GP44Gg44GV44GE44CCDQoNCuS+izog5YWl5Yqb44GMIDMg44Gu5aC05ZCI44Gu5Ye65YqbDQowDQoxDQoyDQozDQoNCuODkuODs+ODiDogcmFuZ2UoMynjga/lh6bnkIYocHJpbnQp44KSM+Wbnue5sOOCiui/lOOBl+OBvuOBmeOAguOBk+OBruaUuemAoOOBp+OBr+WFpeWKm+OBjDPjga7jgajjgY3jgIE044Gk44Gu5pWw5a2X44GM5Ye65Yqb44GV44KM44Gm44GE44KL44GT44Go44Gr5rOo5oSP44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCuKWoOeiuuiqjTog6Kqy6aGM44OB44Kn44OD44Kv44Oc44K/44Oz44KS5oq844GX44Gm44CB56K66KqN44KS44GX44Gm44GP44Gg44GV44GE44CCDQo=" },
			inputs_array: [["3"], ["10"], ["20"]],
		},

		"py51_odd.py": {
			code0: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCm4gPSBpbnQoaW5wdXQoIuaVsOWtlyIpKQ0KZm9yIGkgaW4gcmFuZ2UobiArIDEpOg0KICBpZiBpICUgMiA9PSAxOg0KICAgIHByaW50KGksIuWlh+aVsCIpDQoNCiMgMOOBi+OCieWFpeWKm+OBl+OBn+aVsOWtl+OBvuOBp+OBruOBhuOBoeOAgeWlh+aVsOOBoOOBkeOBjOWHuuWKm+OBleOCjOOBvuOBmeOAgg0KIyAlIDIg44Gv44CBMuOBp+WJsuOBo+OBn+OBguOBvuOCiuOCkuioiOeul+OBl+OBvuOBmeOAguOCiOOBo+OBpiBpICUgMiA9PSAx44GvaeOCkjLjgaflibLjgaPjgZ/jgYLjgb7jgorjgYwx44Gu44Go44GN44CB44Go44GE44GG5oSP5ZGz44Gr44Gq44KK44G+44GZ44CCDQojIOOBvuOBn3ByaW50KGksIuWlh+aVsCIpIOOBr+WkieaVsGnjga7lgKTjga7mqKrjgavjgIHlpYfmlbDjgajjgYTjgYbmloflrZfjgpLlh7rlipvjgZnjgovjgajjgYTjgYbmhI/lkbPjgafjgZnjgIINCg0K",
			code1: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCm4gPSBpbnQoaW5wdXQoIuaVsOWtlyIpKQ0KZm9yIGkgaW4gcmFuZ2UobiArIDEpOg0KICBpZiBpICUgMiA9PSAxOg0KICAgIHByaW50KGksICLlpYfmlbAiKQ0KICBlbHNlOg0KICAgIHByaW50KGksICLlgbbmlbAiKQ0KDQojIDDjgYvjgonlhaXlipvjgZfjgZ/mlbDlrZfjgb7jgafjga7jgYbjgaHjgIHlpYfmlbDjgaDjgZHjgYzlh7rlipvjgZXjgozjgb7jgZnjgIINCg0K",
			quests: { "py51_odd_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjE6IOWlh+aVsOOBoOOBkeOBp+OBquOBj+OAgeWBtuaVsOOCgiDmlbDlrZcg5YG25pWwIOOBqOWHuuWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgg0KDQrkvos6IOWFpeWKm+OBjCAzIOOBruWgtOWQiOOBruWHuuWKmw0KMCDlgbbmlbANCjEg5aWH5pWwDQoyIOWBtuaVsA0KMyDlpYfmlbANCg0K44OS44Oz44OI77ya44K544Oa44O844K577yI44Kk44Oz44OH44Oz44OI77yJ44Gr5rOo5oSPDQpQeXRob27jgafjga/jgIHooYzjga7lhYjpoK3jgavjgYLjgovjgrnjg5rjg7zjgrnvvIjjgqTjg7Pjg4fjg7Pjg4jvvInjgYzjgajjgabjgoLlpKfliIfjgafjgZnjgILjganjga7jgrPjg7zjg4njgYwgaWYg44Gu5Lit44Gq44Gu44GL44Gv44CB44Kk44Oz44OH44Oz44OI44Gn5rG644G+44KK44G+44GZ44CC44GG44G+44GP44GE44GL44Gq44GE44Go44GN44Gv44CB6KGM44Gu5pyA5Yid44Gu44K544Oa44O844K544KS56K66KqN44GX44Gm44G/44G+44GX44KH44GG44CCDQoNCuOBn+OBqOOBiOOBsOOAgeasoeOBruOCiOOBhuOBquOCs+ODvOODieOBp+OBme+8mg0KICBpZiBpICUgMiA9PSAxOg0KICAgIHByaW50KGkpDQogIGVsc2U6DQogICAgcHJpbnQoaSkNCuOBk+OBruOCs+ODvOODieOBp+OBr+OAgWlmIOOBqCBlbHNlIOOBruWJjeOBq+OCueODmuODvOOCueOBjDLjgaRwcmludCDjga7liY3jgavjgrnjg5rjg7zjgrnjgYw044Gk44GC44KK44G+44GZ44CC44GT44Gu44Kk44Oz44OH44Oz44OI44GM5q2j44GX44GP44Gq44GE44Go44CB44Ko44Op44O844GM5Ye644Gf44KK44CB5oSP5Zuz44GX44Gf44Go44GK44KK44Gr5YuV44GL44Gq44GL44Gj44Gf44KK44GX44G+44GZ44CCDQoNCuKWoOeiuuiqjTog6Kqy6aGM44OB44Kn44OD44Kv44Oc44K/44Oz44KS5oq844GX44Gm44CB56K66KqN44KS44GX44Gm44GP44Gg44GV44GE44CCDQo=" },
			inputs_array: [["3"], ["10"], ["20"]],
		},

		"py52_multiple.py": {
			code0: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCm4gPSBpbnQoaW5wdXQoIuaVsOWtlyIpKQ0KZm9yIGkgaW4gcmFuZ2UobiArIDEpOg0KICBpZiBpICUgMiA9PSAwOg0KICAgIHByaW50KGksIjLjga7lgI3mlbAiKQ0KICBpZiBpICUgMyA9PSAwOg0KICAgIHByaW50KGksIjPjga7lgI3mlbAiKQ0KDQojIDPjgpLlhaXlipvjgZfjgZ/loLTlkIjjgIHmrKHjga7jgojjgYbjgavlh7rlipvjgZXjgozjgb7jgZnjgIIw44GvMuOBruWAjeaVsOOBp+OBguOCijPjga7lgI3mlbDjgafjgoLjgYLjgovjga7jgacy44Gk5Ye65Yqb44GV44KM44G+44GZ44CCDQojIDAgMuOBruWAjeaVsA0KIyAwIDPjga7lgI3mlbANCiMgMiAy44Gu5YCN5pWwDQojIDMgM+OBruWAjeaVsA0K",
			code1: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCm4gPSBpbnQoaW5wdXQoIuaVsOWtlyIpKQ0KZm9yIGkgaW4gcmFuZ2UobiArIDEpOg0KICBpZiBpICUgMiA9PSAwIGFuZCBpICUgMyA9PSAwOg0KICAgIHByaW50KGksIjLjgagz44Gu5YCN5pWwIikNCiAgZWxpZiBpICUgMiA9PSAwOg0KICAgIHByaW50KGksIjLjga7lgI3mlbAiKQ0KICBlbGlmIGkgJSAzID09IDA6DQogICAgcHJpbnQoaSwiM+OBruWAjeaVsCIpDQoNCg==",
			quests: { "py52_multiple_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjE6IDLjga7lgI3mlbDjgafjgYLjgorjgIHjgYvjgaTjgIEz44Gu5YCN5pWw44Gn44KC44GC44KLIDAg44Gv44CB5qyh44Gu44KI44GG44Gr5Ye65Yqb44GV44KM44Gm44GE44G+44GX44Gf44CCDQowIDLjga7lgI3mlbANCjAgM+OBruWAjeaVsA0K44GT44KM44KS44G+44Go44KB44Gm44CBDQowIDLjgagz44Gu5YCN5pWwDQrjgajlh7rlipvjgZnjgovjgojjgYbjgavjgZfjgabjgY/jgaDjgZXjgYTjgIINCg0K5L6LOiDlhaXlipvjgYwgMyDjga7loLTlkIjjga7lh7rlipsNCjAgMuOBqDPjga7lgI3mlbANCjIgMuOBruWAjeaVsA0KMyAz44Gu5YCN5pWwDQoNCuODkuODs+ODiDE6IHByaW50KGksIjLjgagz44Gu5YCN5pWwIikg44KS5paw44GX44GP6L+95Yqg44GX44G+44GZ44CCDQoNCuODkuODs+ODiDI6IOOBi+OBpOOAgeOBr+OAgSBhbmQg44Gn5L2c44KL44GT44Go44GM44Gn44GN44G+44GZ44CCDQoNCuODkuODs+ODiDM6IGlmIOOBoOOBkeOBp+OBquOBj+OAgSBlbGlmIChpZuOBp+eEoeOBhOOBqOOBjS4uLi4p44KC5L2/44GE44G+44GZ44CCZWxzZeOBr+S9v+OBhOOBvuOBm+OCk+OAgg0KDQrilqDnorroqo06IOiqsumhjOODgeOCp+ODg+OCr+ODnOOCv+ODs+OCkuaKvOOBl+OBpuOAgeeiuuiqjeOCkuOBl+OBpuOBj+OBoOOBleOBhOOAgg0K" },
			inputs_array: [["3"], ["10"], ["20"]],
		},

		"py53_sum.py": {
			code0: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCnRvdGFsID0gMA0KbiA9IGludChpbnB1dCgi5pWw5a2XIikpDQpmb3IgaSBpbiByYW5nZShuICsgMSk6DQogIHRvdGFsICs9IGkNCg0KcHJpbnQodG90YWwpDQoNCiMgMOOBi+OCieWFpeWKm+OBl+OBn+aVsOWtl+OBvuOBp+OBruWQiOioiOOCkuioiOeul+OBl+OBvuOBmeOAgg0KIyDkvovjgYjjgbAgMTAg44Go5YWl5Yqb44GZ44KL44Go44CBIDU1IOOBjOWHuuWKm+OBleOCjOOBvuOBmeOAgg0K",
			code1: "IyDjgb7jgZrjga/jgIHlt6blgbTjga7mloflrZfjgpLjgZnjgbnjgablj7PlgbTjgasNCiMg5pu444GN5YaZ44GX44Gm44G/44Gm44GP44Gg44GV44GE44CCDQoNCnRvdGFsID0gMA0KbiA9IGludChpbnB1dCgi5pWw5a2XIikpDQpmb3IgaSBpbiByYW5nZShuICsgMSk6DQogIGlmIGkgJSAyID09IDA6DQogICAgdG90YWwgKz0gaQ0KDQpwcmludCh0b3RhbCkNCg0K",
			quests: { "py53_sum_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjE6IDDjgYvjgonlhaXlipvjgZfjgZ/mlbDlrZfjgb7jgafjga7jgIHlgbbmlbDjgaDjgZHjga7lkIjoqIjjgpLmsYLjgoHjgovjg5fjg63jgrDjg6njg6DjgavjgZfjgabjgY/jgaDjgZXjgYTjgIINCg0K5L6LMTog5YWl5Yqb44GMIDEwIOOBruWgtOWQiOOAgQ0KMzANCg0K5L6LMjog5YWl5Yqb44GMIDEwMCDjga7loLTlkIjjgIENCjI1NTANCg0K44OS44Oz44OIOiDlgbbmlbDjga8y44Gn5Ymy44Gj44Gf44GC44G+44KK44GMMOOBruOBqOOBjShpJTI9PTAp44Go44GX44G+44GZ44CC44Gd44GuaeOBruOBqOOBjeOBoOOBkXRvdGFs44GraeOCkuWKoOeul+OBmeOCi+OCiOOBhuOBq+OBmeOCjOOBsOOCiOOBhOOBp+OBmeOAgg0KDQrilqDnorroqo06IOiqsumhjOODgeOCp+ODg+OCr+ODnOOCv+ODs+OCkuaKvOOBl+OBpuOAgeeiuuiqjeOCkuOBl+OBpuOBj+OBoOOBleOBhOOAgg0K" },
			inputs_array: [["1"], ["10"], ["100"]],
		},

		"py54_count.py": {
			code0: "IyDjgZPjgozjga/jgIEw44GL44KJ44OX44Ot44Kw44Op44Og44KS5pu444GP6Kqy6aGM44Gn44GZ44CCDQojIOaUuemAoOimgeaxguOCkumWi+OBhOOBpuOBj+OBoOOBleOBhOOAgg0KIyDjgb7jgZ/jgIHjgZPjgozjgb7jgafjga7oqrLpoYzjgoLlj4LogIPjgavjgZfjgabjgb/jgabjgY/jgaDjgZXjgYTjgIINCg0KDQo=",
			code1: "DQpjID0gMA0KbiA9IGludChpbnB1dCgi5pWw5a2XIikpDQpmb3IgaSBpbiByYW5nZShuICsgMSk6DQogIGlmIGkgJSA1ID09IDAgYW5kIGkgJSA3ID09IDA6DQogICAgYyArPSAxDQpwcmludChjKQ0K",
			quests: { "py54_count_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjE6IDDjgYvjgonlhaXlipvjgZfjgZ/mlbDlrZfjgb7jgafjga7jgIE144Gn5Ymy44KK5YiH44KM44Gm44CB44GL44Gk44CBN+OBp+WJsuOCiuWIh+OCjOOCi+aVsOOBriDlgIvmlbAg44KS5Ye65Yqb44GZ44KL44OX44Ot44Kw44Op44Og44KS5L2c5oiQ44GX44Gm44GP44Gg44GV44GE44CCDQoNCuS+izE6IOWFpeWKm+OBjCAxMDAg44Gu5aC05ZCI44CBDQozDQoNCuS+izI6IOWFpeWKm+OBjCAxMDAwIOOBruWgtOWQiOOAgQ0KMjkNCg0K44OS44Oz44OIOiDjgb7jgZrmlbDjgYjjgovmlbDjgpLkv53lrZjjgZnjgovlpInmlbDjgpLkvZzmiJDjgZfjgaYw44KS44K744OD44OI44GX44G+44GZKOS+i+OBiOOBsCBjPTAp44CCDQrlhaXlipvjgZnjgovmlbDlrZfjga/jgIHjgZ3jga7kv53lrZjjgZnjgovlpInmlbDjgpJu44Go44GZ44KL44Go44CBbj1pbnQoaW5wdXQoIuaVsOWtlyIpKSDjgajjgZfjgb7jgZnjgIINCue5sOOCiui/lOOBl+OBr2ZvcuOAgTDjgYvjgonjgZ3jga7mlbDlrZfjgb7jgafjga9yYW5nZShuKzEp44CBaWbjga7mnaHku7bjga/jgYvjgaQoYW5kKeOAgeOBneOBl+OBpjHjgaTmlbDjgpLlopfjgoTjgZnjga9jKz0x44Gn44GZ44CCDQoNCuKWoOeiuuiqjTog6Kqy6aGM44OB44Kn44OD44Kv44Oc44K/44Oz44KS5oq844GX44Gm44CB56K66KqN44KS44GX44Gm44GP44Gg44GV44GE44CCDQo=" },
			inputs_array: [["1"], ["10"], ["100"], ["1000"]],
		},

		"py55_if_for.py": {
			code0: "Z2FtZXMgPSBbIuOCueODnuODluODqSIsIuOCueODl+ODqSIsIuODouODs+ODj+ODsyIsIuODneOCseODouODsyIsIuODnuOCpOOCr+ODqSJdDQprYWRhaSA9IFsi44OX44Ot44Kw44Op44Of44Oz44KwIiwi6Iux6KqeIl0NCg0KeWFydWtpID0gaW5wdXQoIuOChOOCi+awlyIpDQoNCmlmIHlhcnVraSA9PSAi44GC44KLIjoNCiAgZm9yIGsgaW4ga2FkYWk6DQogICAgcHJpbnQoaysi6Kqy6aGM57WC5LqGIikNCg0KIyDjgoTjgovmsJfjgYzjgYLjgovjgajjgY3jgIHjgZnjgbnjgabjga7oqrLpoYzjgYzntYLjgo/jgorjgb7jgZnjgIINCg==",
			code1: "Z2FtZXMgPSBbIuOCueODnuODluODqSIsIuOCueODl+ODqSIsIuODouODs+ODj+ODsyIsIuODneOCseODouODsyIsIuODnuOCpOOCr+ODqSJdDQprYWRhaSA9IFsi44OX44Ot44Kw44Op44Of44Oz44KwIiwi6Iux6KqeIl0NCg0KeWFydWtpID0gaW5wdXQoIuOChOOCi+awlyIpDQoNCmlmIHlhcnVraSA9PSAi44GC44KLIjoNCiAgZm9yIGsgaW4ga2FkYWk6DQogICAgcHJpbnQoaysi6Kqy6aGM57WC5LqGIikNCmVsc2U6DQogIGZvciBnIGluIGdhbWVzOg0KICAgIHByaW50KGcrIuOCkuODl+ODrOOCpCIpDQo=",
			quests: { "py55_if_for_quest.txt": "5pS56YCg6KaB5rGCDQoNCuKWoOimgeaxgjoNCuOChOOCi+awl+OBjOOBquOBhOOBqOOBje+8iOOBguOCiyDku6XlpJbjgYzlhaXlipvjgZXjgozjgZ/jgajjgY3vvInjgIHjgZnjgbnjgabjga7jgrLjg7zjg6DjgpLjg5fjg6zjgqTjgZnjgovjgojjgYbjgavjgZfjgabjgY/jgaDjgZXjgYTjgIINCg0K5L6LMTog5YWl5YqbIOOBquOBhA0K44K544Oe44OW44Op44KS44OX44Os44KkDQrjgrnjg5fjg6njgpLjg5fjg6zjgqQNCuODouODs+ODj+ODs+OCkuODl+ODrOOCpA0K44Od44Kx44Oi44Oz44KS44OX44Os44KkDQrjg57jgqTjgq/jg6njgpLjg5fjg6zjgqQNCg0K5L6LMjog5YWl5YqbIOOBguOCiw0K44OX44Ot44Kw44Op44Of44Oz44Kw6Kqy6aGM57WC5LqGDQroi7Hoqp7oqrLpoYzntYLkuoYNCg0K44OS44Oz44OIOiDjgYLjgosg5Lul5aSW44Gv44CBZWxzZTog44Gn44OX44Ot44Kw44Op44Og44KS5L2c44KL44GT44Go44GM44Gn44GN44G+44GZ44CC44G+44Gf44CBZm9y5paH44KS5L2/44GG44Go44Ky44O844Og5LiA6Kan44KS5Ye65Yqb44GZ44KL44Gu44GM5qW944Gr44Gq44KK44G+44GZ44CCDQoNCg0K4pag56K66KqNOiDoqrLpoYzjg4Hjgqfjg4Pjgq/jg5zjgr/jg7PjgpLmirzjgZfjgabjgIHnorroqo3jgpLjgZfjgabjgY/jgaDjgZXjgYTjgIINCg==" },
			inputs_array: [["ある"], ["ない"], [""]],
		}

	},
	// pythonモジュールで使用するcss
	_set_css: function (head_elem) {
		const style_elem = head_elem.querySelector("style") ?? head_elem.appendChild(document.createElement("style"));
		style_elem.appendChild(document.createTextNode(`
			label { margin: 6px }
			input { width: 60px }
			#output_panel > div { height: 20px }
		`));
	},
	// pyodide adapter
	_adapter: undefined,
	// html_mergely.htmlの状態（現在の課題ファイル名、コードなど）を取得
	_get_kadai_status: undefined,
	// 課題状況のセット
	_set_kadai_status: undefined,
	// 親エレメントの保存
	_elems: {
		output: undefined,
		header: undefined,
		contents: undefined,
		button_panel: undefined,
	},
	// python制御用ボタン、ハンドラはkeyに_を接頭語で付けたこのオブジェクトの関数になる。
	_buttons: {
		run_python: { name: "実行", type: "button" },
		check_python: { name: "課題チェック", type: "button" },
		reset_python: { name: "🔄", type: "icon" },
	},
	// Python制御ボタンの有効/無効化
	_toggle_python_buttons: function (enable) {
		Array.from(this._elems.button_panel.querySelectorAll("button")).forEach(e => {
			e.disabled = !enable;
		})
	},
	_find_common_prefix: function (strs) {
		if (strs === undefined || strs.length === 0) {
			return "";
		}
		let prefix = strs[0];
		for (let i = 1; i < strs.length; i++) {
			while (strs[i].indexOf(prefix) !== 0) {
				prefix = prefix.slice(0, -1);
				if (prefix === "") {
					return "";
				}
			}
		}
		return prefix;
	},
	// 課題のpyとans.pyファイルを選択して、kadaisの要素を作成する。
	// html_mergelyでcreate_encoded_htmlというURL引数で起動したときに使用する。
	create_encoded_code: async function (files, encoded_html_elem) {
		files = Array.from(files);
		files.sort((a, b) => {
			const a0 = a.name.replace(/\.[^/.]+$/, "");
			const b0 = b.name.replace(/\.[^/.]+$/, "");
			return a0.localeCompare(b0, undefined, { sensitivity: 'base' });
		});

		if (files.length % 3 !== 0) {
			alert("1つの課題につき、3ファイルをまとめて指定してください。複数の課題を一度に変換する場合は、指定するファイル数を3の倍数にしてください。");
			return;
		}

		const ps = files.map(file => {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onload = e => {
					const encoded = btoa(unescape(encodeURIComponent(e.target.result)));
					resolve({ name: file.name, encoded });
				}
				reader.onerror = reject;
				reader.readAsText(file);
			})
		});

		const results = await Promise.all(ps);
		const chunks = [];
		for (let i = 0; i < results.length; i += 3) {
			chunks.push(results.slice(i, i + 3));
		}
		encoded_html_elem.value = chunks.map(chunk => `
		"${chunk[0].name}": {
			code0: "${chunk[0].encoded}",
			code1: "${chunk[1].encoded}",
			quests: { "${chunk[2].name}": "${chunk[2].encoded}" },
			inputs_array: ${this._kadais[chunk[0].name] ? JSON.stringify(this._kadais[chunk[0].name].inputs_array) : "[[]]"},
		}`).join(",\n");
	},
	// 初期化
	init: async function ({ output_elem, button_panel_elem, button_classes, kadais, kadai_quests, get_kadai_status, set_kadai_status }) {
		// kadaisの入れ替え
		Object.keys(kadais).forEach(k => { delete kadais[k] });
		Object.keys(kadai_quests).forEach(k => { delete kadai_quests[k] })
		Object.keys(this._kadais).forEach(k => {
			kadais[k] = this._kadais[k].code0;
			kadai_quests[k] = this._kadais[k].quests;
		});

		// cssの設定
		this._set_css(output_elem.ownerDocument.head);

		// メイン画面の状態取得、セット
		this._get_kadai_status = get_kadai_status;
		this._set_kadai_status = set_kadai_status;

		// 実行等のボタンを配置
		this._elems.button_panel = button_panel_elem;
		Object.entries(this._buttons).forEach(([id, item]) => {
			this._elems.button_panel.appendChild([
				document.createElement("button"),
				e => e.id = id,
				e => e.classList.add(button_classes[item.type]),
				e => e.textContent = item.name,
				e => e.addEventListener("click", this[`_${id}`].bind(this)),
			].a2e())
		});

		// 入出力部分のhtml構築
		this._elems.output = output_elem;
		this._elems.output.appendChild([
			document.createElement("div"),
			e => e.id = "header",
		].a2e());
		this._elems.output.appendChild([
			document.createElement("div"),
			e => e.id = "contents",
		].a2e());
		this._elems.header = this._elems.output.querySelector("#header");
		this._elems.contents = this._elems.output.querySelector("#contents");

		// pyodide adapterの生成
		const { adapter } = await import("./adapter_pyodide.mjs");
		this._adapter = adapter;
		this._toggle_python_buttons(false);
		this._adapter.init().then(() => {
			this._toggle_python_buttons(true);
		});
	},
	// html_mergelyでコードが変更されたときに呼ばれる
	update: function (code) {
		// console.log("update")
		// pythonのinput部分を抽出する
		const { inputs } = this._adapter.create_inputs_modified_code(code);
		// 出力欄に入力フィールドを作成する。
		const input_elems = this._elems.output.querySelectorAll(".input");
		for (let i = 0; i < inputs.length; i += 1) {
			if (input_elems[i] === undefined || input_elems[i].name !== inputs[i]) {
				input_elems[i]?.closest("label").remove();
				this._elems.header.appendChild([
					document.createElement("label"),
					e => e.setAttribute("for", `input${i}`),
					e => e.textContent = inputs[i],
					e => e.appendChild([
						document.createElement("input"),
						e => e.id = `input${i}`,
						e => e.name = inputs[i],
						e => e.classList.add("input"),
					].a2e()),
				].a2e())
			}
		}
		for (let i = inputs.length; i < input_elems.length; i += 1) {
			input_elems[i].closest("label").remove();
		}
	},
	// 改造課題の正解/不正解を確認する
	_check_python: async function () {
		const { kadai_filename, code } = this._get_kadai_status();
		if (kadai_filename.length === 0) {
			alert("画面左上の課題を選択してください。");
			return;
		}

		const { code1, inputs_array } = this._kadais[kadai_filename];
		const { modified_code } = this._adapter.create_inputs_modified_code(
			decodeURIComponent(escape(atob(code1))));
		console.log(modified_code)
		const expected_outputs_array = await Promise.all(inputs_array.map(async inputs => {
			return await this._adapter.run({ code: modified_code, inputs });
		}));
		if (expected_outputs_array[0][0] === this._adapter.get_error_str()) {
			alert("模範解答でエラー");
			return;
		}

		this._adapter.create_inputs_modified_code(code);
		const outputs_array = await Promise.all(inputs_array.map(async inputs => {
			return await this._adapter.run_cached_code({ inputs });
		}));

		console.log("expected", expected_outputs_array);
		console.log("outputs", outputs_array)

		if (JSON.stringify(expected_outputs_array) === JSON.stringify(outputs_array)) {
			alert("成功!\n\nあとでGoogle Classroomから提出できるように、ファイルをダウンロードしておいてください。");
			this._set_kadai_status({ kadai_filename, status: "finished" });
		} else {
			alert("失敗!");
		}
	},
	_run_python: async function () {
		const outputs = await this._adapter.run_cached_code({
			inputs: Array.from(document.getElementById("editor_output").
				contentDocument.querySelectorAll(".input")).map(e => e.value),
		});
		this._elems.contents.querySelector("#output_panel")?.remove();
		this._elems.contents.appendChild([
			document.createElement("div"),
			e => e.id = "output_panel",
			e => outputs.forEach(o => e.appendChild([
				document.createElement("div"),
				e => e.textContent = o.length === 0 ? " " : o,
			].a2e())),
		].a2e())
	},
	_reset_python: function () {
		this._toggle_python_buttons(false);
		this._adapter.reset().then(e => {
			this._toggle_python_buttons(true);
		});
	},
}
