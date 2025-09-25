// List of Chinese movies with details
const chinese_movies = [
  // ====== 悬疑片 (10) ======
  {
    title: "The Message (风声)",
    year: 2009,
    genre: ["Suspense","Thriller","War"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt1434443/",
    youtube: "https://www.youtube.com/watch?v=hDnU1xP4u6Q"
  },
  {
    title: "Black Coal, Thin Ice (白日焰火)",
    year: 2014,
    genre: ["Crime","Mystery","Thriller"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt3469910/",
    youtube: "https://www.youtube.com/watch?v=Vprr2Pz1Ljc"
  },
  {
    title: "The Devotion of Suspect X (嫌疑人X的献身)",
    year: 2017,
    genre: ["Suspense","Mystery","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt5942864/",
    youtube: "https://www.youtube.com/watch?v=2p0VxZg5Q6E"
  },
  {
    title: "The Looming Storm (暴雪将至)",
    year: 2017,
    genre: ["Crime","Thriller","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt7589198/",
    youtube: "https://www.youtube.com/watch?v=w9DKq8I3tow"
  },
  {
    title: "The Whistleblower (吹哨人)",
    year: 2019,
    genre: ["Suspense","Thriller"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt10692334/",
    youtube: "https://www.youtube.com/watch?v=V2CVhGfj4MQ"
  },
  {
    title: "The Dead End (烈日灼心)",
    year: 2015,
    genre: ["Crime","Suspense","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt4781612/",
    youtube: "https://www.youtube.com/watch?v=lXYRjPUGHUM"
  },
  {
    title: "Silent Witness (全民目击)",
    year: 2013,
    genre: ["Suspense","Mystery","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt3063636/",
    youtube: "https://www.youtube.com/watch?v=SYVmXWuJQW0"
  },
  {
    title: "Caught in Time (除暴)",
    year: 2020,
    genre: ["Crime","Thriller","Action"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt11329164/",
    youtube: "https://www.youtube.com/watch?v=edMIpRBXmcY"
  },
  {
    title: "Sheep Without a Shepherd (误杀)",
    year: 2019,
    genre: ["Suspense","Crime","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt11210032/",
    youtube: "https://www.youtube.com/watch?v=Erhwf_jwNRg"
  },
  {
    title: "A Murderous Affair in Horizon Tower (摩天大楼, TV series)",
    year: 2020,
    genre: ["Suspense","Mystery","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt12707748/",
    youtube: "https://www.youtube.com/watch?v=G7EHLGR3X8U"
  },

  // ====== 文艺片 (10) ======
  {
    title: "Spring Fever (春风沉醉的夜晚)",
    year: 2009,
    genre: ["Art","Drama","Romance"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt1441952/",
    youtube: "https://www.youtube.com/watch?v=_aO0cJ_StXg"
  },
  {
    title: "A Touch of Sin (天注定)",
    year: 2013,
    genre: ["Art","Drama","Crime"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt2852400/",
    youtube: "https://www.youtube.com/watch?v=1s32rLgP9N4"
  },
  {
    title: "So Long, My Son (地久天长)",
    year: 2019,
    genre: ["Art","Drama","Family"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt9581076/",
    youtube: "https://www.youtube.com/watch?v=Yd3Gx_cLqUI"
  },
  {
    title: "Farewell My Concubine (霸王别姬)",
    year: 1993,
    genre: ["Art","Drama","History"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt0106332/",
    youtube: "https://www.youtube.com/watch?v=U1ly3ZtoT9Q"
  },
  {
    title: "Platform (站台)",
    year: 2000,
    genre: ["Art","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt0250640/",
    youtube: "https://www.youtube.com/watch?v=5l4F2PzBf1g"
  },
  {
    title: "Still Life (三峡好人)",
    year: 2006,
    genre: ["Art","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt0859765/",
    youtube: "https://www.youtube.com/watch?v=_W3oeHL2oJU"
  },
  {
    title: "Under the Hawthorn Tree (山楂树之恋)",
    year: 2010,
    genre: ["Art","Drama","Romance"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt1684555/",
    youtube: "https://www.youtube.com/watch?v=E4FMP_Cy6MM"
  },
  {
    title: "The Blue Kite (蓝风筝)",
    year: 1993,
    genre: ["Art","Drama","Family"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt0107358/",
    youtube: "https://www.youtube.com/watch?v=Ry1clHNaDxA"
  },
  {
    title: "Mountains May Depart (山河故人)",
    year: 2015,
    genre: ["Art","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt3741316/",
    youtube: "https://www.youtube.com/watch?v=MYJypzM2ECw"
  },
  {
    title: "Peach Blossom Land (暗恋桃花源)",
    year: 1992,
    genre: ["Art","Drama","Comedy"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt0103670/",
    youtube: "https://www.youtube.com/watch?v=zyczVhFmgPY"
  },

  // ====== 历史片 (10) ======
  {
    title: "Hero (英雄)",
    year: 2002,
    genre: ["History","Action","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt0299977/",
    youtube: "https://www.youtube.com/watch?v=2h26y2rN_6c"
  },
  {
    title: "The Emperor and the Assassin (荆轲刺秦王)",
    year: 1998,
    genre: ["History","Drama","War"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt0162866/",
    youtube: "https://www.youtube.com/watch?v=v4rdg16wREU"
  },
  {
    title: "The Banquet (夜宴)",
    year: 2006,
    genre: ["History","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt0808357/",
    youtube: "https://www.youtube.com/watch?v=7xt1iE_GMgE"
  },
  {
    title: "City of Life and Death (南京!南京!)",
    year: 2009,
    genre: ["History","War","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt1124052/",
    youtube: "https://www.youtube.com/watch?v=EmOPgKibmyM"
  },
  {
    title: "The Founding of a Republic (建国大业)",
    year: 2009,
    genre: ["History","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt1438461/",
    youtube: "https://www.youtube.com/watch?v=rNw7xVsh0ns"
  },
  {
    title: "The Great Wall (长城)",
    year: 2016,
    genre: ["History","Fantasy","Action"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt2034800/",
    youtube: "https://www.youtube.com/watch?v=6SKIed8Y3Vs"
  },
  {
    title: "Dragon Blade (天将雄师)",
    year: 2015,
    genre: ["History","Action","Adventure"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt3672840/",
    youtube: "https://www.youtube.com/watch?v=shsPjzNMV2k"
  },
  {
    title: "The Eight Hundred (八佰)",
    year: 2020,
    genre: ["History","War","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt10649370/",
    youtube: "https://www.youtube.com/watch?v=ujqG0cWqhWQ"
  },
  {
    title: "Red Cliff (赤壁)",
    year: 2008,
    genre: ["History","War","Epic"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt0425637/",
    youtube: "https://www.youtube.com/watch?v=nh3L8X6FjWk"
  },
  {
    title: "Mulan (花木兰, 2009)",
    year: 2009,
    genre: ["History","Drama","War"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt1326972/",
    youtube: "https://www.youtube.com/watch?v=aw1F6MZ5cQY"
  },

  // ====== 动漫 (10) ======
  {
    title: "Ne Zha (哪吒之魔童降世)",
    year: 2019,
    genre: ["Animation","Fantasy"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt9421576/",
    youtube: "https://www.youtube.com/watch?v=K6W9C4T8YCE"
  },
  {
    title: "Big Fish & Begonia (大鱼海棠)",
    year: 2016,
    genre: ["Animation","Fantasy","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt1920885/",
    youtube: "https://www.youtube.com/watch?v=GxU7o2fTAzU"
  },
  {
    title: "White Snake (白蛇：缘起)",
    year: 2019,
    genre: ["Animation","Romance","Fantasy"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt9288776/",
    youtube: "https://www.youtube.com/watch?v=pv9dXkJX4K4"
  },
  {
    title: "Green Snake (白蛇2：青蛇劫起)",
    year: 2021,
    genre: ["Animation","Fantasy"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt15096336/",
    youtube: "https://www.youtube.com/watch?v=Ww4n8h8y5wk"
  },
  {
    title: "Monkey King: Hero Is Back (西游记之大圣归来)",
    year: 2015,
    genre: ["Animation","Fantasy","Adventure"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt5273624/",
    youtube: "https://www.youtube.com/watch?v=oyHf3uJpX8E"
  },
  {
    title: "The King of Tibetan Antelope (藏獒多吉)",
    year: 2011,
    genre: ["Animation","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt2076216/",
    youtube: "https://www.youtube.com/watch?v=E4bLe_rzPGI"
  },
  {
    title: "Lotus Lantern (宝莲灯)",
    year: 1999,
    genre: ["Animation","Fantasy","Adventure"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt1099251/",
    youtube: "https://www.youtube.com/watch?v=8Eom0RoxZ1U"
  },
  {
    title: "Storm Rider: Clash of the Evils (风云决)",
    year: 2008,
    genre: ["Animation","Action","Fantasy"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt1259771/",
    youtube: "https://www.youtube.com/watch?v=5uQuj_f1Rco"
  },
  {
    title: "Legend of a Rabbit (兔侠传奇)",
    year: 2011,
    genre: ["Animation","Comedy"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt1835882/",
    youtube: "https://www.youtube.com/watch?v=YwQWsycF5is"
  },
  {
    title: "I Am What I Am (雄狮少年)",
    year: 2021,
    genre: ["Animation","Drama"],
    language: "Chinese",
    imdb: "https://www.imdb.com/title/tt16105232/",
    youtube: "https://www.youtube.com/watch?v=ByuH_CXnUeI"
  }
];
