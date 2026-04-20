const prefixes = ['neo', 'auto', 'micro', 'tech', 'syn', 'info'];
const middles = ['gen', 'plex', 'tron', 'nova', 'meta'];
const suffixes = ['ix', 'ity', 'os', 'oid', 'ium', 'ica'];

export function generateName() {
    const pre = prefixes[Math.floor(Math.random() * prefixes.length)];
    const mid = middles[Math.floor(Math.random() * middles.length)];
    const suf = suffixes[Math.floor(Math.random() * suffixes.length)];
    return pre + mid + suf;
}

const japaneseNames = [
    "坂本龍馬", "徳川家康", "織田信長", "武田信玄", "伊達政宗",
    "夏目漱石", "太宰治", "黒澤明", "宮本武蔵", "松尾芭蕉",
    "福沢諭吉", "芥川龍之介", "宮沢賢治", "小泉純一", "西郷隆盛",
    "高杉晋作", "渋沢栄一", "吉田松陰", "伊藤博文", "大久保利通",
    "本居宣長", "島崎藤村", "斎藤茂吉", "石川啄木", "森鴎外",
    "野口英世", "三島由紀夫", "橋本龍太", "新渡戸稲造", "和泉式部",
    "石田三成", "岡本太郎", "中江兆民", "柴田勝家", "大江健三",
    "松平定信", "平清盛", "豊臣秀吉", "北条時宗", "徳川家光",
    "菅原道真", "源義経", "菊池武光", "千利休", "細川幽斎",
    "足利尊氏", "南方熊楠", "岩崎弥太", "田中角栄", "樋口一葉"
];

const myanmarNames = [
    "アウン・サン", "アウン・サン・スー・チー", "バゴー王", "アラウンパヤー", "タンシュエ王",
    "ニャウンウー王", "ティラワット王", "ナヤン・ター王", "ミンガバウン", "タタマドー",
    "トゥボー王", "バガン王朝のアノーヤター", "シンナン・スエ", "タウングー王朝のタインウー", "ミン・ニャウン",
    "ニャウンシュエ王", "ワンラカン王", "ミン・トン", "タイン・ズィン", "ティラワット・ミン"
];

const koreanNames = [
    "李承晩", "金大中", "朴正煕", "文在寅", "金泳三", "金正恩", "鄭夢準", "崔泰源", "洪準杓", "盧武鉉",
    "金泳三", "韓昇洙", "朴槿恵", "李明博", "鄭東泳", "安哲秀", "鄭夢準", "崔建国", "柳賢慶", "姜昌浩"
];

const americanNames = [
    "George Washington", "Abraham Lincoln", "Thomas Jefferson", "Theodore Roosevelt", "Franklin D. Roosevelt",
    "John F. Kennedy", "Martin Luther King Jr.", "Barack Obama", "Benjamin Franklin", "Alexander Hamilton",
    "Mark Twain", "Ernest Hemingway", "Harper Lee", "F. Scott Fitzgerald", "Toni Morrison",
    "Maya Angelou", "Steve Jobs", "Elon Musk", "Bill Gates", "Oprah Winfrey"
];

export function selectName() {
    const names = [...japaneseNames, ...myanmarNames, ...koreanNames, ...americanNames];
    return names[Math.floor(Math.random() * names.length)];
}