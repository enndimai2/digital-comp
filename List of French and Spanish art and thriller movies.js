// List of French and Spanish art and thriller movies with details

const french_spanish_art_thriller = [
  // ====== 法国（10） ======
  {
    title: "Portrait of a Lady on Fire",
    year: 2019,
    genre: ["Art","Drama","Romance"],
    language: "French",
    imdb: "https://www.imdb.com/title/tt8613070/",
    youtube: "https://www.youtube.com/watch?v=R-fQPTwma9o" // Official trailer
  },
  {
    title: "Elle",
    year: 2016,
    genre: ["Thriller","Drama","Psychological"],
    language: "French",
    imdb: "https://www.imdb.com/title/tt3716530/",
    youtube: "https://www.youtube.com/watch?v=8kSdOm5PqdA" // Trailer
  },
  {
    title: "Blue Is the Warmest Color",
    year: 2013,
    genre: ["Art","Drama","Romance"],
    language: "French",
    imdb: "https://www.imdb.com/title/tt2278871/",
    youtube: "https://www.youtube.com/watch?v=1o47p7QF6xA" // Trailer
  },
  {
    title: "Amélie",
    year: 2001,
    genre: ["Art","Romance","Comedy"],
    language: "French",
    imdb: "https://www.imdb.com/title/tt0211915/",
    youtube: "https://www.youtube.com/watch?v=HUECWi5pX7o" // Trailer
  },
  {
    title: "The Diving Bell and the Butterfly",
    year: 2007,
    genre: ["Art","Drama","Biography"],
    language: "French",
    imdb: "https://www.imdb.com/title/tt0401383/",
    youtube: "https://www.youtube.com/watch?v=6Qm0WzGvGms" // Trailer
  },
  {
    title: "La Haine",
    year: 1995,
    genre: ["Art","Drama","Social"],
    language: "French",
    imdb: "https://www.imdb.com/title/tt0113247/",
    youtube: "https://www.youtube.com/watch?v=0yF8b6g7Jj0" // Trailer / clip
  },
  {
    title: "Caché (Hidden)",
    year: 2005,
    genre: ["Thriller","Drama","Mystery"],
    language: "French",
    imdb: "https://www.imdb.com/title/tt0387898/",
    youtube: "https://www.youtube.com/watch?v=1mBv30X6Q1M" // Trailer
  },
  {
    title: "Irréversible",
    year: 2002,
    genre: ["Thriller","Drama","Experimental"],
    language: "French",
    imdb: "https://www.imdb.com/title/tt0235873/",
    youtube: "https://www.youtube.com/watch?v=I2r8oQ5Yk0g" // Trailer / clip
  },
  {
    title: "Rust and Bone",
    year: 2012,
    genre: ["Art","Drama","Romance"],
    language: "French",
    imdb: "https://www.imdb.com/title/tt2053425/",
    youtube: "https://www.youtube.com/watch?v=4Xc3kKZq6QY" // Trailer
  },
  {
    title: "Elle s'en va (On My Way)",
    year: 2013,
    genre: ["Art","Drama","Comedy"],
    language: "French",
    imdb: "https://www.imdb.com/title/tt2436386/",
    youtube: "https://www.youtube.com/watch?v=Q4bqD4p3KkA" // Trailer/clip
  },

  // ====== 西班牙（10） ======
  {
    title: "The Invisible Guest (Contratiempo)",
    year: 2016,
    genre: ["Thriller","Mystery"],
    language: "Spanish",
    imdb: "https://www.imdb.com/title/tt4857264/",
    youtube: "https://www.youtube.com/watch?v=PcO7rjk3mRs" // Trailer
  },
  {
    title: "The Platform (El Hoyo)",
    year: 2019,
    genre: ["Thriller","Sci-Fi","Satire"],
    language: "Spanish",
    imdb: "https://www.imdb.com/title/tt8228288/",
    youtube: "https://www.youtube.com/watch?v=ugYd1TPvNQY" // Official trailer
  },
  {
    title: "The Skin I Live In (La piel que habito)",
    year: 2011,
    genre: ["Thriller","Drama"],
    language: "Spanish",
    imdb: "https://www.imdb.com/title/tt1189073/",
    youtube: "https://www.youtube.com/watch?v=q0nL2Q1qQ9A" // Trailer
  },
  {
    title: "Volver",
    year: 2006,
    genre: ["Art","Drama","Comedy"],
    language: "Spanish",
    imdb: "https://www.imdb.com/title/tt0441909/",
    youtube: "https://www.youtube.com/watch?v=1v7MbapbE6g" // Trailer/clip
  },
  {
    title: "All About My Mother (Todo sobre mi madre)",
    year: 1999,
    genre: ["Art","Drama"],
    language: "Spanish",
    imdb: "https://www.imdb.com/title/tt0185125/",
    youtube: "https://www.youtube.com/watch?v=FQZqJwzYf4M" // Trailer/clip
  },
  {
    title: "The Orphanage (El Orfanato)",
    year: 2007,
    genre: ["Thriller","Horror","Mystery"],
    language: "Spanish",
    imdb: "https://www.imdb.com/title/tt0464141/",
    youtube: "https://www.youtube.com/watch?v=4d5eQWSf9Jk" // Trailer
  },
  {
    title: "Marshland (La isla mínima)",
    year: 2014,
    genre: ["Thriller","Crime","Mystery"],
    language: "Spanish",
    imdb: "https://www.imdb.com/title/tt2908446/",
    youtube: "https://www.youtube.com/watch?v=9R4quxFv8X4" // Trailer
  },
  {
    title: "Pain and Glory (Dolor y gloria)",
    year: 2019,
    genre: ["Art","Drama"],
    language: "Spanish",
    imdb: "https://www.imdb.com/title/tt5989218/",
    youtube: "https://www.youtube.com/watch?v=2B4frZ0qQ7I" // Trailer
  },
  {
    title: "Julieta",
    year: 2016,
    genre: ["Art","Drama"],
    language: "Spanish",
    imdb: "https://www.imdb.com/title/tt4226388/",
    youtube: "https://www.youtube.com/watch?v=UZCtvRQZn38" // Trailer
  },
  {
    title: "Wild Tales (Relatos salvajes)",
    year: 2014,
    genre: ["Anthology","Thriller","Dark Comedy"],
    language: "Spanish",
    imdb: "https://www.imdb.com/title/tt3011894/",
    youtube: "https://www.youtube.com/watch?v=a_3VJ3hE8Ck" // Trailer
  }
];
