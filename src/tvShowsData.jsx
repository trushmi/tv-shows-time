const listOfTvShows = [
  {
    title: "Breaking Bad",
    externalIds: {
      tvrage: 18164,
      thetvdb: 81189,
      imdb: "tt0903747",
      tvmazeId: 169,
    },
    rating: "9.5",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg",
    },
    totalEpisodes: 62,
    totalMinutes: 3720,
    seasons: [
      {
        name: 1,
        episodes: 7,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 13,
      },
      {
        name: 5,
        episodes: 16,
      },
    ],
    id: 0,
  },
  {
    title: "Chernobyl",
    externalIds: {
      tvrage: null,
      thetvdb: 360893,
      imdb: "tt7366338",
      tvmazeId: 30770,
    },
    rating: "9.4",
    status: "Ended",
    averageEpisodeRunTime: 70,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/193/482599.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/193/482599.jpg",
    },
    totalEpisodes: 5,
    totalMinutes: 350,
    seasons: [
      {
        name: 1,
        episodes: 5,
      },
    ],
    id: 1,
  },
  {
    title: "The Wire",
    externalIds: {
      tvrage: 6296,
      thetvdb: 79126,
      imdb: "tt0306414",
      tvmazeId: 179,
    },
    rating: "9.3",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/1/2527.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/1/2527.jpg",
    },
    totalEpisodes: 60,
    totalMinutes: 3600,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 12,
      },
      {
        name: 3,
        episodes: 12,
      },
      {
        name: 4,
        episodes: 13,
      },
      {
        name: 5,
        episodes: 10,
      },
    ],
    id: 2,
  },
  {
    title: "The Sopranos",
    externalIds: {
      tvrage: 6206,
      thetvdb: 75299,
      imdb: "tt0141842",
      tvmazeId: 527,
    },
    rating: "9.2",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/4/11341.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/4/11341.jpg",
    },
    totalEpisodes: 86,
    totalMinutes: 5160,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 13,
      },
      {
        name: 5,
        episodes: 13,
      },
      {
        name: 6,
        episodes: 21,
      },
    ],
    id: 3,
  },
  {
    title: "Game of Thrones",
    externalIds: {
      tvrage: 24493,
      thetvdb: 121361,
      imdb: "tt0944947",
      tvmazeId: 82,
    },
    rating: "9.2",
    status: "Ended",
    averageEpisodeRunTime: 61,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/190/476117.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg",
    },
    totalEpisodes: 73,
    totalMinutes: 4453,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 10,
      },
      {
        name: 5,
        episodes: 10,
      },
      {
        name: 6,
        episodes: 10,
      },
      {
        name: 7,
        episodes: 7,
      },
      {
        name: 8,
        episodes: 6,
      },
    ],
    id: 44,
  },
  {
    title: "Rick and Morty",
    externalIds: {
      tvrage: 33381,
      thetvdb: 275274,
      imdb: "tt2861424",
      tvmazeId: 216,
    },
    rating: "9.1",
    status: "Running",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/423/1059147.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/423/1059147.jpg",
    },
    totalEpisodes: 61,
    totalMinutes: 1830,
    seasons: [
      {
        name: 1,
        episodes: 11,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 10,
      },
      {
        name: 5,
        episodes: 10,
      },
      {
        name: 6,
        episodes: 10,
      },
    ],
    id: 4,
  },
  {
    title: "The Office",
    externalIds: {
      tvrage: 6061,
      thetvdb: 73244,
      imdb: "tt0386676",
      tvmazeId: 526,
    },
    rating: "9",
    status: "Ended",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/4/11322.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/4/11322.jpg",
    },
    totalEpisodes: 203,
    totalMinutes: 6090,
    seasons: [
      {
        name: 1,
        episodes: 6,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 25,
      },
      {
        name: 4,
        episodes: 19,
      },
      {
        name: 5,
        episodes: 28,
      },
      {
        name: 6,
        episodes: 26,
      },
      {
        name: 7,
        episodes: 26,
      },
      {
        name: 8,
        episodes: 24,
      },
      {
        name: 9,
        episodes: 27,
      },
    ],
    id: 34,
  },
  {
    title: "Fargo",
    externalIds: {
      tvrage: 35276,
      thetvdb: 269613,
      imdb: "tt2802850",
      tvmazeId: 32,
    },
    rating: "8.9",
    status: "Running",
    averageEpisodeRunTime: 68,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/267/669639.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/267/669639.jpg",
    },
    totalEpisodes: 51,
    totalMinutes: 3468,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 11,
      },
    ],
    id: 6,
  },
  {
    title: "Friends",
    externalIds: {
      tvrage: 3616,
      thetvdb: 79168,
      imdb: "tt0108778",
      tvmazeId: 431,
    },
    rating: "8.9",
    status: "Ended",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/41/104550.jpg",
    },
    totalEpisodes: 236,
    totalMinutes: 7080,
    seasons: [
      {
        name: 1,
        episodes: 24,
      },
      {
        name: 2,
        episodes: 24,
      },
      {
        name: 3,
        episodes: 25,
      },
      {
        name: 4,
        episodes: 24,
      },
      {
        name: 5,
        episodes: 24,
      },
      {
        name: 6,
        episodes: 25,
      },
      {
        name: 7,
        episodes: 24,
      },
      {
        name: 8,
        episodes: 24,
      },
      {
        name: 9,
        episodes: 24,
      },
      {
        name: 10,
        episodes: 18,
      },
    ],
    id: 15,
  },
  {
    title: "True Detective",
    externalIds: {
      tvrage: 31369,
      thetvdb: 270633,
      imdb: "tt2356777",
      tvmazeId: 5,
    },
    rating: "8.9",
    status: "Running",
    averageEpisodeRunTime: 62,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/178/445621.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/178/445621.jpg",
    },
    totalEpisodes: 24,
    totalMinutes: 1488,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 8,
      },
      {
        name: 3,
        episodes: 8,
      },
    ],
    id: 49,
  },
  {
    title: "Black Mirror",
    externalIds: {
      tvrage: 30348,
      thetvdb: 253463,
      imdb: "tt2085059",
      tvmazeId: 305,
    },
    rating: "8.8",
    status: "Running",
    averageEpisodeRunTime: 63,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/240/601964.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/240/601964.jpg",
    },
    totalEpisodes: 21,
    totalMinutes: 1323,
    seasons: [
      {
        name: 1,
        episodes: 3,
      },
      {
        name: 2,
        episodes: 3,
      },
      {
        name: 3,
        episodes: 6,
      },
      {
        name: 4,
        episodes: 6,
      },
      {
        name: 5,
        episodes: 3,
      },
      {
        name: 6,
        episodes: 5,
      },
    ],
    id: 7,
  },
  {
    title: "Peaky Blinders",
    externalIds: {
      tvrage: 37240,
      thetvdb: 270915,
      imdb: "tt2442560",
      tvmazeId: 269,
    },
    rating: "8.8",
    status: "Ended",
    averageEpisodeRunTime: 61,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/48/122213.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/48/122213.jpg",
    },
    totalEpisodes: 30,
    totalMinutes: 1830,
    seasons: [
      {
        name: 1,
        episodes: 6,
      },
      {
        name: 2,
        episodes: 6,
      },
      {
        name: 3,
        episodes: 6,
      },
      {
        name: 4,
        episodes: 6,
      },
      {
        name: 5,
        episodes: 6,
      },
      {
        name: 6,
        episodes: 6,
      },
    ],
    id: 18,
  },
  {
    title: "Narcos",
    externalIds: {
      tvrage: 37241,
      thetvdb: 282670,
      imdb: "tt2707408",
      tvmazeId: 2705,
    },
    rating: "8.8",
    status: "Ended",
    averageEpisodeRunTime: 52,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/166/416516.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/166/416516.jpg",
    },
    totalEpisodes: 30,
    totalMinutes: 1560,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
    ],
    id: 23,
  },
  {
    title: "Twin Peaks",
    externalIds: {
      tvrage: 6450,
      thetvdb: 70533,
      imdb: "tt0098936",
      tvmazeId: 156,
    },
    rating: "8.8",
    status: "Ended",
    averageEpisodeRunTime: 62,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/397/992910.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/397/992910.jpg",
    },
    totalEpisodes: 48,
    totalMinutes: 2976,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 18,
      },
    ],
    id: 75,
  },
  {
    title: "Succession",
    externalIds: {
      tvrage: null,
      thetvdb: 338186,
      imdb: "tt7660850",
      tvmazeId: 23470,
    },
    rating: "8.8",
    status: "Running",
    averageEpisodeRunTime: 61,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/392/982394.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/392/982394.jpg",
    },
    totalEpisodes: 39,
    totalMinutes: 2379,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 9,
      },
      {
        name: 4,
        episodes: 10,
      },
    ],
    id: 113,
  },
  {
    title: "House",
    externalIds: {
      tvrage: 3908,
      thetvdb: 73255,
      imdb: "tt0412142",
      tvmazeId: 118,
    },
    rating: "8.7",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/357/894990.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/357/894990.jpg",
    },
    totalEpisodes: 176,
    totalMinutes: 10560,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 24,
      },
      {
        name: 3,
        episodes: 24,
      },
      {
        name: 4,
        episodes: 16,
      },
      {
        name: 5,
        episodes: 24,
      },
      {
        name: 6,
        episodes: 21,
      },
      {
        name: 7,
        episodes: 23,
      },
      {
        name: 8,
        episodes: 22,
      },
    ],
    id: 5,
  },
  {
    title: "The Mandalorian",
    externalIds: {
      tvrage: null,
      thetvdb: 361753,
      imdb: "tt8111088",
      tvmazeId: 38963,
    },
    rating: "8.7",
    status: "Running",
    averageEpisodeRunTime: 40,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/273/683813.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/273/683813.jpg",
    },
    totalEpisodes: 24,
    totalMinutes: 960,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 8,
      },
      {
        name: 3,
        episodes: 8,
      },
    ],
    id: 13,
  },
  {
    title: "Dexter",
    externalIds: {
      tvrage: 7926,
      thetvdb: 79349,
      imdb: "tt0773262",
      tvmazeId: 161,
    },
    rating: "8.7",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/145/363769.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/145/363769.jpg",
    },
    totalEpisodes: 96,
    totalMinutes: 5760,
    seasons: [
      {
        name: 1,
        episodes: 12,
      },
      {
        name: 2,
        episodes: 12,
      },
      {
        name: 3,
        episodes: 12,
      },
      {
        name: 4,
        episodes: 12,
      },
      {
        name: 5,
        episodes: 12,
      },
      {
        name: 6,
        episodes: 12,
      },
      {
        name: 7,
        episodes: 12,
      },
      {
        name: 8,
        episodes: 12,
      },
    ],
    id: 14,
  },
  {
    title: "Stranger Things",
    externalIds: {
      tvrage: 48493,
      thetvdb: 305288,
      imdb: "tt4574334",
      tvmazeId: 2993,
    },
    rating: "8.7",
    status: "Running",
    averageEpisodeRunTime: 62,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/396/991288.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/396/991288.jpg",
    },
    totalEpisodes: 34,
    totalMinutes: 2108,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 9,
      },
      {
        name: 3,
        episodes: 8,
      },
      {
        name: 4,
        episodes: 9,
      },
    ],
    id: 16,
  },
  {
    title: "The Crown",
    externalIds: {
      tvrage: null,
      thetvdb: 305574,
      imdb: "tt4786824",
      tvmazeId: 3594,
    },
    rating: "8.7",
    status: "Running",
    averageEpisodeRunTime: 56,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/430/1075007.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/430/1075007.jpg",
    },
    totalEpisodes: 50,
    totalMinutes: 2800,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 10,
      },
      {
        name: 5,
        episodes: 10,
      },
    ],
    id: 21,
  },
  {
    title: "South Park",
    externalIds: {
      tvrage: 5266,
      thetvdb: 75897,
      imdb: "tt0121955",
      tvmazeId: 112,
    },
    rating: "8.7",
    status: "Running",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/935.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/0/935.jpg",
    },
    totalEpisodes: 313,
    totalMinutes: 9390,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 18,
      },
      {
        name: 3,
        episodes: 17,
      },
      {
        name: 4,
        episodes: 17,
      },
      {
        name: 5,
        episodes: 14,
      },
      {
        name: 6,
        episodes: 17,
      },
      {
        name: 7,
        episodes: 15,
      },
      {
        name: 8,
        episodes: 14,
      },
      {
        name: 9,
        episodes: 14,
      },
      {
        name: 10,
        episodes: 14,
      },
      {
        name: 11,
        episodes: 14,
      },
      {
        name: 12,
        episodes: 14,
      },
      {
        name: 13,
        episodes: 14,
      },
      {
        name: 14,
        episodes: 14,
      },
      {
        name: 15,
        episodes: 14,
      },
      {
        name: 16,
        episodes: 14,
      },
      {
        name: 17,
        episodes: 10,
      },
      {
        name: 18,
        episodes: 10,
      },
      {
        name: 19,
        episodes: 10,
      },
      {
        name: 20,
        episodes: 10,
      },
      {
        name: 21,
        episodes: 10,
      },
      {
        name: 22,
        episodes: 10,
      },
      {
        name: 23,
        episodes: 10,
      },
      {
        name: 24,
        episodes: 4,
      },
      {
        name: 25,
        episodes: 6,
      },
      {
        name: 26,
        episodes: 6,
      },
    ],
    id: 24,
  },
  {
    title: "Yellowstone",
    externalIds: {
      tvrage: null,
      thetvdb: 341164,
      imdb: "tt4236770",
      tvmazeId: 27848,
    },
    rating: "8.7",
    status: "Running",
    averageEpisodeRunTime: 66,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/429/1074022.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/429/1074022.jpg",
    },
    totalEpisodes: 43,
    totalMinutes: 2838,
    seasons: [
      {
        name: 1,
        episodes: 9,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 10,
      },
      {
        name: 5,
        episodes: 8,
      },
    ],
    id: 41,
  },
  {
    title: "House of Cards",
    externalIds: {
      tvrage: 27822,
      thetvdb: 262980,
      imdb: "tt1856010",
      tvmazeId: 175,
    },
    rating: "8.7",
    status: "Ended",
    averageEpisodeRunTime: 52,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/169/424482.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/169/424482.jpg",
    },
    totalEpisodes: 73,
    totalMinutes: 3796,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 13,
      },
      {
        name: 5,
        episodes: 13,
      },
      {
        name: 6,
        episodes: 8,
      },
    ],
    id: 42,
  },
  {
    title: "Dark",
    externalIds: {
      tvrage: null,
      thetvdb: 334824,
      imdb: "tt5753856",
      tvmazeId: 17861,
    },
    rating: "8.7",
    status: "Ended",
    averageEpisodeRunTime: 56,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/422/1056088.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/422/1056088.jpg",
    },
    totalEpisodes: 26,
    totalMinutes: 1456,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 8,
      },
      {
        name: 3,
        episodes: 8,
      },
    ],
    id: 52,
  },
  {
    title: "The Simpsons",
    externalIds: {
      tvrage: 6190,
      thetvdb: 71663,
      imdb: "tt0096697",
      tvmazeId: 83,
    },
    rating: "8.7",
    status: "Running",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058261.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/423/1058261.jpg",
    },
    totalEpisodes: 728,
    totalMinutes: 21840,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 24,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 25,
      },
      {
        name: 7,
        episodes: 25,
      },
      {
        name: 8,
        episodes: 25,
      },
      {
        name: 9,
        episodes: 25,
      },
      {
        name: 10,
        episodes: 23,
      },
      {
        name: 11,
        episodes: 22,
      },
      {
        name: 12,
        episodes: 21,
      },
      {
        name: 13,
        episodes: 22,
      },
      {
        name: 14,
        episodes: 22,
      },
      {
        name: 15,
        episodes: 22,
      },
      {
        name: 16,
        episodes: 21,
      },
      {
        name: 17,
        episodes: 22,
      },
      {
        name: 18,
        episodes: 22,
      },
      {
        name: 19,
        episodes: 20,
      },
      {
        name: 20,
        episodes: 21,
      },
      {
        name: 21,
        episodes: 23,
      },
      {
        name: 22,
        episodes: 22,
      },
      {
        name: 23,
        episodes: 22,
      },
      {
        name: 24,
        episodes: 22,
      },
      {
        name: 25,
        episodes: 22,
      },
      {
        name: 26,
        episodes: 22,
      },
      {
        name: 27,
        episodes: 22,
      },
      {
        name: 28,
        episodes: 22,
      },
      {
        name: 29,
        episodes: 21,
      },
      {
        name: 30,
        episodes: 23,
      },
      {
        name: 31,
        episodes: 22,
      },
      {
        name: 32,
        episodes: 22,
      },
      {
        name: 33,
        episodes: 22,
      },
      {
        name: 34,
        episodes: 22,
      },
    ],
    id: 65,
  },
  {
    title: "This Is Us",
    externalIds: {
      tvrage: null,
      thetvdb: 311714,
      imdb: "tt5555260",
      tvmazeId: 17128,
    },
    rating: "8.7",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/401/1003345.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/401/1003345.jpg",
    },
    totalEpisodes: 106,
    totalMinutes: 6360,
    seasons: [
      {
        name: 1,
        episodes: 18,
      },
      {
        name: 2,
        episodes: 18,
      },
      {
        name: 3,
        episodes: 18,
      },
      {
        name: 4,
        episodes: 18,
      },
      {
        name: 5,
        episodes: 16,
      },
      {
        name: 6,
        episodes: 18,
      },
    ],
    id: 79,
  },
  {
    title: "Severance",
    externalIds: {
      tvrage: null,
      thetvdb: 371980,
      imdb: "tt11280740",
      tvmazeId: 44933,
    },
    rating: "8.7",
    status: "Running",
    averageEpisodeRunTime: 48,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/384/960582.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/384/960582.jpg",
    },
    totalEpisodes: 18,
    totalMinutes: 864,
    seasons: [
      {
        name: 1,
        episodes: 9,
      },
    ],
    id: 87,
  },
  {
    title: "Better Call Saul",
    externalIds: {
      tvrage: 37780,
      thetvdb: 273181,
      imdb: "tt3032476",
      tvmazeId: 618,
    },
    rating: "8.6",
    status: "Ended",
    averageEpisodeRunTime: 64,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/399/998743.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/399/998743.jpg",
    },
    totalEpisodes: 63,
    totalMinutes: 4032,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 10,
      },
      {
        name: 5,
        episodes: 10,
      },
      {
        name: 6,
        episodes: 13,
      },
    ],
    id: 10,
  },
  {
    title: "The X-Files",
    externalIds: {
      tvrage: 6312,
      thetvdb: 77398,
      imdb: "tt0106179",
      tvmazeId: 430,
    },
    rating: "8.6",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/422/1056103.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/422/1056103.jpg",
    },
    totalEpisodes: 218,
    totalMinutes: 13080,
    seasons: [
      {
        name: 1,
        episodes: 24,
      },
      {
        name: 2,
        episodes: 25,
      },
      {
        name: 3,
        episodes: 24,
      },
      {
        name: 4,
        episodes: 24,
      },
      {
        name: 5,
        episodes: 20,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 22,
      },
      {
        name: 8,
        episodes: 21,
      },
      {
        name: 9,
        episodes: 20,
      },
      {
        name: 10,
        episodes: 6,
      },
      {
        name: 11,
        episodes: 10,
      },
    ],
    id: 11,
  },
  {
    title: "The Queen's Gambit",
    externalIds: {
      tvrage: null,
      thetvdb: 387115,
      imdb: "tt10048342",
      tvmazeId: 41428,
    },
    rating: "8.6",
    status: "Ended",
    averageEpisodeRunTime: 56,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/275/687956.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/275/687956.jpg",
    },
    totalEpisodes: 7,
    totalMinutes: 392,
    seasons: [
      {
        name: 1,
        episodes: 7,
      },
    ],
    id: 17,
  },
  {
    title: "Marvel's Daredevil",
    externalIds: {
      tvrage: 38796,
      thetvdb: 281662,
      imdb: "tt3322312",
      tvmazeId: 1369,
    },
    rating: "8.6",
    status: "Ended",
    averageEpisodeRunTime: 55,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/171/429391.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/171/429391.jpg",
    },
    totalEpisodes: 39,
    totalMinutes: 2145,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
    ],
    id: 19,
  },
  {
    title: "Shameless",
    externalIds: {
      tvrage: 25117,
      thetvdb: 161511,
      imdb: "tt1586680",
      tvmazeId: 150,
    },
    rating: "8.6",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/133/332796.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/133/332796.jpg",
    },
    totalEpisodes: 134,
    totalMinutes: 8040,
    seasons: [
      {
        name: 1,
        episodes: 12,
      },
      {
        name: 2,
        episodes: 12,
      },
      {
        name: 3,
        episodes: 12,
      },
      {
        name: 4,
        episodes: 12,
      },
      {
        name: 5,
        episodes: 12,
      },
      {
        name: 6,
        episodes: 12,
      },
      {
        name: 7,
        episodes: 12,
      },
      {
        name: 8,
        episodes: 12,
      },
      {
        name: 9,
        episodes: 14,
      },
      {
        name: 10,
        episodes: 12,
      },
      {
        name: 11,
        episodes: 12,
      },
    ],
    id: 20,
  },
  {
    title: "The Bridge",
    externalIds: {
      tvrage: 30477,
      thetvdb: 252019,
      imdb: "tt1733785",
      tvmazeId: 1910,
    },
    rating: "8.6",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/11/27700.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/11/27700.jpg",
    },
    totalEpisodes: 38,
    totalMinutes: 2280,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 8,
      },
    ],
    id: 25,
  },
  {
    title: "Sons of Anarchy",
    externalIds: {
      tvrage: 18174,
      thetvdb: 82696,
      imdb: "tt1124373",
      tvmazeId: 76,
    },
    rating: "8.6",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/537.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/0/537.jpg",
    },
    totalEpisodes: 92,
    totalMinutes: 5520,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 14,
      },
      {
        name: 5,
        episodes: 13,
      },
      {
        name: 6,
        episodes: 13,
      },
      {
        name: 7,
        episodes: 13,
      },
    ],
    id: 31,
  },
  {
    title: "Mindhunter",
    externalIds: {
      tvrage: null,
      thetvdb: 328708,
      imdb: "tt5290382",
      tvmazeId: 10822,
    },
    rating: "8.6",
    status: "Ended",
    averageEpisodeRunTime: 54,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/207/518594.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/207/518594.jpg",
    },
    totalEpisodes: 19,
    totalMinutes: 1026,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 9,
      },
    ],
    id: 32,
  },
  {
    title: "Doctor Who",
    externalIds: {
      tvrage: 3332,
      thetvdb: 78804,
      imdb: "tt0436992",
      tvmazeId: 210,
    },
    rating: "8.6",
    status: "Running",
    averageEpisodeRunTime: 48,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/375/938172.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/375/938172.jpg",
    },
    totalEpisodes: 156,
    totalMinutes: 7488,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 13,
      },
      {
        name: 5,
        episodes: 13,
      },
      {
        name: 6,
        episodes: 13,
      },
      {
        name: 7,
        episodes: 13,
      },
      {
        name: 8,
        episodes: 12,
      },
      {
        name: 9,
        episodes: 12,
      },
      {
        name: 10,
        episodes: 12,
      },
      {
        name: 11,
        episodes: 10,
      },
      {
        name: 12,
        episodes: 10,
      },
      {
        name: 13,
        episodes: 7,
      },
    ],
    id: 35,
  },
  {
    title: "Mr. Robot",
    externalIds: {
      tvrage: 42422,
      thetvdb: 289590,
      imdb: "tt4158110",
      tvmazeId: 1871,
    },
    rating: "8.6",
    status: "Ended",
    averageEpisodeRunTime: 61,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/211/528026.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/211/528026.jpg",
    },
    totalEpisodes: 45,
    totalMinutes: 2745,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 12,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 13,
      },
    ],
    id: 36,
  },
  {
    title: "The Haunting of Hill House",
    externalIds: {
      tvrage: null,
      thetvdb: 345246,
      imdb: "tt6763664",
      tvmazeId: 29191,
    },
    rating: "8.6",
    status: "Ended",
    averageEpisodeRunTime: 58,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/168/420526.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/168/420526.jpg",
    },
    totalEpisodes: 10,
    totalMinutes: 580,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
    ],
    id: 37,
  },
  {
    title: "Futurama",
    externalIds: {
      tvrage: 3628,
      thetvdb: 73871,
      imdb: "tt0149460",
      tvmazeId: 538,
    },
    rating: "8.5",
    status: "Running",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/4/11403.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/4/11403.jpg",
    },
    totalEpisodes: 144,
    totalMinutes: 4320,
    seasons: [
      {
        name: 1,
        episodes: 9,
      },
      {
        name: 2,
        episodes: 20,
      },
      {
        name: 3,
        episodes: 15,
      },
      {
        name: 4,
        episodes: 12,
      },
      {
        name: 5,
        episodes: 16,
      },
      {
        name: 6,
        episodes: 26,
      },
      {
        name: 7,
        episodes: 26,
      },
      {
        name: 8,
        episodes: 20,
      },
    ],
    id: 8,
  },
  {
    title: "Vikings",
    externalIds: {
      tvrage: 31136,
      thetvdb: 260449,
      imdb: "tt2306299",
      tvmazeId: 29,
    },
    rating: "8.5",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/286/715906.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/286/715906.jpg",
    },
    totalEpisodes: 89,
    totalMinutes: 5340,
    seasons: [
      {
        name: 1,
        episodes: 9,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 20,
      },
      {
        name: 5,
        episodes: 20,
      },
      {
        name: 6,
        episodes: 20,
      },
    ],
    id: 12,
  },
  {
    title: "Marvel's The Punisher",
    externalIds: {
      tvrage: null,
      thetvdb: 331980,
      imdb: "tt5675620",
      tvmazeId: 16544,
    },
    rating: "8.5",
    status: "Ended",
    averageEpisodeRunTime: 57,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/179/448895.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/179/448895.jpg",
    },
    totalEpisodes: 26,
    totalMinutes: 1482,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 13,
      },
    ],
    id: 29,
  },
  {
    title: "Silicon Valley",
    externalIds: {
      tvrage: 33759,
      thetvdb: 277165,
      imdb: "tt2575988",
      tvmazeId: 143,
    },
    rating: "8.5",
    status: "Ended",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/215/538434.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/215/538434.jpg",
    },
    totalEpisodes: 53,
    totalMinutes: 1590,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 10,
      },
      {
        name: 5,
        episodes: 8,
      },
      {
        name: 6,
        episodes: 7,
      },
    ],
    id: 33,
  },
  {
    title: "The Last Kingdom",
    externalIds: {
      tvrage: 43545,
      thetvdb: 298566,
      imdb: "tt4179452",
      tvmazeId: 2759,
    },
    rating: "8.5",
    status: "Ended",
    averageEpisodeRunTime: 57,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/353/883061.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/353/883061.jpg",
    },
    totalEpisodes: 46,
    totalMinutes: 2622,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 8,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 10,
      },
      {
        name: 5,
        episodes: 10,
      },
    ],
    id: 40,
  },
  {
    title: "Ozark",
    externalIds: {
      tvrage: null,
      thetvdb: 329089,
      imdb: "tt5071412",
      tvmazeId: 13417,
    },
    rating: "8.5",
    status: "Ended",
    averageEpisodeRunTime: 61,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/398/996611.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/398/996611.jpg",
    },
    totalEpisodes: 44,
    totalMinutes: 2684,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 14,
      },
    ],
    id: 47,
  },
  {
    title: "Westworld",
    externalIds: {
      tvrage: 37537,
      thetvdb: 296762,
      imdb: "tt0475784",
      tvmazeId: 1371,
    },
    rating: "8.5",
    status: "Ended",
    averageEpisodeRunTime: 63,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/411/1029332.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/411/1029332.jpg",
    },
    totalEpisodes: 36,
    totalMinutes: 2268,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 8,
      },
      {
        name: 4,
        episodes: 8,
      },
    ],
    id: 48,
  },
  {
    title: "Suits",
    externalIds: {
      tvrage: 27518,
      thetvdb: 247808,
      imdb: "tt1632701",
      tvmazeId: 172,
    },
    rating: "8.5",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/393/983536.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/393/983536.jpg",
    },
    totalEpisodes: 134,
    totalMinutes: 8040,
    seasons: [
      {
        name: 1,
        episodes: 12,
      },
      {
        name: 2,
        episodes: 16,
      },
      {
        name: 3,
        episodes: 16,
      },
      {
        name: 4,
        episodes: 16,
      },
      {
        name: 5,
        episodes: 16,
      },
      {
        name: 6,
        episodes: 16,
      },
      {
        name: 7,
        episodes: 16,
      },
      {
        name: 8,
        episodes: 16,
      },
      {
        name: 9,
        episodes: 10,
      },
    ],
    id: 51,
  },
  {
    title: "Big Little Lies",
    externalIds: {
      tvrage: null,
      thetvdb: 305719,
      imdb: "tt3920596",
      tvmazeId: 3080,
    },
    rating: "8.5",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/196/490640.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/196/490640.jpg",
    },
    totalEpisodes: 14,
    totalMinutes: 840,
    seasons: [
      {
        name: 1,
        episodes: 7,
      },
      {
        name: 2,
        episodes: 7,
      },
    ],
    id: 82,
  },
  {
    title: "House of the Dragon",
    externalIds: {
      tvrage: null,
      thetvdb: 371572,
      imdb: "tt11198330",
      tvmazeId: 44778,
    },
    rating: "8.5",
    status: "Running",
    averageEpisodeRunTime: 65,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058597.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/423/1058597.jpg",
    },
    totalEpisodes: 20,
    totalMinutes: 1300,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
    ],
    id: 88,
  },
  {
    title: "Modern Family",
    externalIds: {
      tvrage: 22622,
      thetvdb: 95011,
      imdb: "tt1442437",
      tvmazeId: 80,
    },
    rating: "8.5",
    status: "Ended",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/359/898320.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/359/898320.jpg",
    },
    totalEpisodes: 250,
    totalMinutes: 7500,
    seasons: [
      {
        name: 1,
        episodes: 24,
      },
      {
        name: 2,
        episodes: 24,
      },
      {
        name: 3,
        episodes: 24,
      },
      {
        name: 4,
        episodes: 24,
      },
      {
        name: 5,
        episodes: 24,
      },
      {
        name: 6,
        episodes: 24,
      },
      {
        name: 7,
        episodes: 22,
      },
      {
        name: 8,
        episodes: 22,
      },
      {
        name: 9,
        episodes: 22,
      },
      {
        name: 10,
        episodes: 22,
      },
      {
        name: 11,
        episodes: 18,
      },
    ],
    id: 102,
  },
  {
    title: "Veronica Mars",
    externalIds: {
      tvrage: 6507,
      thetvdb: 73730,
      imdb: "tt0412253",
      tvmazeId: 473,
    },
    rating: "8.4",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/204/512460.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/204/512460.jpg",
    },
    totalEpisodes: 72,
    totalMinutes: 4320,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 20,
      },
      {
        name: 4,
        episodes: 8,
      },
    ],
    id: 22,
  },
  {
    title: "Supernatural",
    externalIds: {
      tvrage: 5410,
      thetvdb: 78901,
      imdb: "tt0460681",
      tvmazeId: 19,
    },
    rating: "8.4",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/268/672051.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/268/672051.jpg",
    },
    totalEpisodes: 327,
    totalMinutes: 19620,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 16,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 23,
      },
      {
        name: 8,
        episodes: 23,
      },
      {
        name: 9,
        episodes: 23,
      },
      {
        name: 10,
        episodes: 23,
      },
      {
        name: 11,
        episodes: 23,
      },
      {
        name: 12,
        episodes: 23,
      },
      {
        name: 13,
        episodes: 23,
      },
      {
        name: 14,
        episodes: 20,
      },
      {
        name: 15,
        episodes: 20,
      },
    ],
    id: 27,
  },
  {
    title: "Mare of Easttown",
    externalIds: {
      tvrage: null,
      thetvdb: 370112,
      imdb: "tt10155688",
      tvmazeId: 40546,
    },
    rating: "8.4",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/301/753981.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/301/753981.jpg",
    },
    totalEpisodes: 7,
    totalMinutes: 420,
    seasons: [
      {
        name: 1,
        episodes: 7,
      },
    ],
    id: 62,
  },
  {
    title: "Brooklyn Nine-Nine",
    externalIds: {
      tvrage: 35774,
      thetvdb: 269586,
      imdb: "tt2467372",
      tvmazeId: 49,
    },
    rating: "8.4",
    status: "Ended",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/402/1007484.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/402/1007484.jpg",
    },
    totalEpisodes: 153,
    totalMinutes: 4590,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 23,
      },
      {
        name: 3,
        episodes: 23,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 18,
      },
      {
        name: 7,
        episodes: 13,
      },
      {
        name: 8,
        episodes: 10,
      },
    ],
    id: 63,
  },
  {
    title: "Sex Education",
    externalIds: {
      tvrage: null,
      thetvdb: 356317,
      imdb: "tt7767422",
      tvmazeId: 36795,
    },
    rating: "8.4",
    status: "Running",
    averageEpisodeRunTime: 53,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/351/878414.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/351/878414.jpg",
    },
    totalEpisodes: 32,
    totalMinutes: 1696,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 8,
      },
      {
        name: 3,
        episodes: 8,
      },
      {
        name: 4,
        episodes: 8,
      },
    ],
    id: 78,
  },
  {
    title: "Barry",
    externalIds: {
      tvrage: null,
      thetvdb: 333072,
      imdb: "tt5348176",
      tvmazeId: 11538,
    },
    rating: "8.4",
    status: "Running",
    averageEpisodeRunTime: 31,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/403/1007647.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/403/1007647.jpg",
    },
    totalEpisodes: 32,
    totalMinutes: 992,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 8,
      },
      {
        name: 3,
        episodes: 8,
      },
      {
        name: 4,
        episodes: 8,
      },
    ],
    id: 101,
  },
  {
    title: "The Handmaid's Tale",
    externalIds: {
      tvrage: null,
      thetvdb: 321239,
      imdb: "tt5834204",
      tvmazeId: 16579,
    },
    rating: "8.4",
    status: "Running",
    averageEpisodeRunTime: 52,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/422/1055237.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/422/1055237.jpg",
    },
    totalEpisodes: 56,
    totalMinutes: 2912,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 10,
      },
      {
        name: 5,
        episodes: 10,
      },
    ],
    id: 107,
  },
  {
    title: "Scrubs",
    externalIds: {
      tvrage: 5118,
      thetvdb: 76156,
      imdb: "tt0285403",
      tvmazeId: 532,
    },
    rating: "8.4",
    status: "Ended",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/4/11371.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/4/11371.jpg",
    },
    totalEpisodes: 182,
    totalMinutes: 5460,
    seasons: [
      {
        name: 1,
        episodes: 24,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 25,
      },
      {
        name: 5,
        episodes: 24,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 11,
      },
      {
        name: 8,
        episodes: 19,
      },
      {
        name: 9,
        episodes: 13,
      },
    ],
    id: 145,
  },
  {
    title: "Wednesday",
    externalIds: {
      tvrage: null,
      thetvdb: 397060,
      imdb: "tt13443470",
      tvmazeId: 53647,
    },
    rating: "8.3",
    status: "Running",
    averageEpisodeRunTime: 51,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/433/1082578.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/433/1082578.jpg",
    },
    totalEpisodes: 8,
    totalMinutes: 408,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
    ],
    id: 9,
  },
  {
    title: "Buffy the Vampire Slayer",
    externalIds: {
      tvrage: 2930,
      thetvdb: 70327,
      imdb: "tt0118276",
      tvmazeId: 427,
    },
    rating: "8.3",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/2/7490.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/2/7490.jpg",
    },
    totalEpisodes: 143,
    totalMinutes: 8580,
    seasons: [
      {
        name: 1,
        episodes: 12,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 21,
      },
      {
        name: 7,
        episodes: 22,
      },
    ],
    id: 30,
  },
  {
    title: "The Originals",
    externalIds: {
      tvrage: 34166,
      thetvdb: 266883,
      imdb: "tt2632424",
      tvmazeId: 62,
    },
    rating: "8.3",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/156/391233.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/156/391233.jpg",
    },
    totalEpisodes: 92,
    totalMinutes: 5520,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 13,
      },
      {
        name: 5,
        episodes: 13,
      },
    ],
    id: 39,
  },
  {
    title: "Lost",
    externalIds: {
      tvrage: 4284,
      thetvdb: 73739,
      imdb: "tt0411008",
      tvmazeId: 123,
    },
    rating: "8.3",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/0/1389.jpg",
    },
    totalEpisodes: 121,
    totalMinutes: 7260,
    seasons: [
      {
        name: 1,
        episodes: 25,
      },
      {
        name: 2,
        episodes: 24,
      },
      {
        name: 3,
        episodes: 23,
      },
      {
        name: 4,
        episodes: 14,
      },
      {
        name: 5,
        episodes: 17,
      },
      {
        name: 6,
        episodes: 18,
      },
    ],
    id: 45,
  },
  {
    title: "Prison Break",
    externalIds: {
      tvrage: 4895,
      thetvdb: 360115,
      imdb: "tt0455275",
      tvmazeId: 541,
    },
    rating: "8.3",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/104/261034.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/104/261034.jpg",
    },
    totalEpisodes: 88,
    totalMinutes: 5280,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 9,
      },
    ],
    id: 50,
  },
  {
    title: "Homeland",
    externalIds: {
      tvrage: 27811,
      thetvdb: 247897,
      imdb: "tt1796960",
      tvmazeId: 7,
    },
    rating: "8.3",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/230/575652.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/230/575652.jpg",
    },
    totalEpisodes: 96,
    totalMinutes: 5760,
    seasons: [
      {
        name: 1,
        episodes: 12,
      },
      {
        name: 2,
        episodes: 12,
      },
      {
        name: 3,
        episodes: 12,
      },
      {
        name: 4,
        episodes: 12,
      },
      {
        name: 5,
        episodes: 12,
      },
      {
        name: 6,
        episodes: 12,
      },
      {
        name: 7,
        episodes: 12,
      },
      {
        name: 8,
        episodes: 12,
      },
    ],
    id: 53,
  },
  {
    title: "30 Rock",
    externalIds: {
      tvrage: 11215,
      thetvdb: 79488,
      imdb: "tt0496424",
      tvmazeId: 537,
    },
    rating: "8.3",
    status: "Ended",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/64/160233.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/64/160233.jpg",
    },
    totalEpisodes: 138,
    totalMinutes: 4140,
    seasons: [
      {
        name: 1,
        episodes: 21,
      },
      {
        name: 2,
        episodes: 15,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 23,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 13,
      },
    ],
    id: 73,
  },
  {
    title: "The Good Fight",
    externalIds: {
      tvrage: null,
      thetvdb: 320766,
      imdb: "tt5853176",
      tvmazeId: 18206,
    },
    rating: "8.3",
    status: "Ended",
    averageEpisodeRunTime: 57,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/325/814334.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/325/814334.jpg",
    },
    totalEpisodes: 60,
    totalMinutes: 3420,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 7,
      },
      {
        name: 5,
        episodes: 10,
      },
      {
        name: 6,
        episodes: 10,
      },
    ],
    id: 80,
  },
  {
    title: "How I Met Your Mother",
    externalIds: {
      tvrage: 3918,
      thetvdb: 75760,
      imdb: "tt0460649",
      tvmazeId: 171,
    },
    rating: "8.3",
    status: "Ended",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/2451.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/0/2451.jpg",
    },
    totalEpisodes: 208,
    totalMinutes: 6240,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 20,
      },
      {
        name: 4,
        episodes: 24,
      },
      {
        name: 5,
        episodes: 24,
      },
      {
        name: 6,
        episodes: 24,
      },
      {
        name: 7,
        episodes: 24,
      },
      {
        name: 8,
        episodes: 24,
      },
      {
        name: 9,
        episodes: 24,
      },
    ],
    id: 81,
  },
  {
    title: "Why Women Kill",
    externalIds: {
      tvrage: null,
      thetvdb: 365069,
      imdb: "tt9054904",
      tvmazeId: 38870,
    },
    rating: "8.3",
    status: "Ended",
    averageEpisodeRunTime: 49,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/323/807952.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/323/807952.jpg",
    },
    totalEpisodes: 20,
    totalMinutes: 980,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
    ],
    id: 104,
  },
  {
    title: "The Last of Us",
    externalIds: {
      tvrage: null,
      thetvdb: 392256,
      imdb: "tt3581920",
      tvmazeId: 46562,
    },
    rating: "8.3",
    status: "Running",
    averageEpisodeRunTime: 59,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/444/1110831.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/444/1110831.jpg",
    },
    totalEpisodes: 9,
    totalMinutes: 534,
    seasons: [
      {
        name: 1,
        episodes: 9,
      },
    ],
    id: 155,
  },
  {
    title: "Sense8",
    externalIds: {
      tvrage: 35197,
      thetvdb: 268156,
      imdb: "tt2431438",
      tvmazeId: 1367,
    },
    rating: "8.2",
    status: "Ended",
    averageEpisodeRunTime: 59,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/154/387311.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/154/387311.jpg",
    },
    totalEpisodes: 22,
    totalMinutes: 1298,
    seasons: [
      {
        name: 1,
        episodes: 12,
      },
      {
        name: 2,
        episodes: 10,
      },
    ],
    id: 54,
  },
  {
    title: "Gilmore Girls",
    externalIds: {
      tvrage: 3683,
      thetvdb: 76568,
      imdb: "tt0238784",
      tvmazeId: 525,
    },
    rating: "8.2",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/4/11308.jpg",
    },
    totalEpisodes: 153,
    totalMinutes: 9180,
    seasons: [
      {
        name: 1,
        episodes: 21,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 22,
      },
    ],
    id: 57,
  },
  {
    title: "Loki",
    externalIds: {
      tvrage: null,
      thetvdb: 362472,
      imdb: "tt9140554",
      tvmazeId: 41007,
    },
    rating: "8.2",
    status: "Running",
    averageEpisodeRunTime: 48,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/320/801227.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/320/801227.jpg",
    },
    totalEpisodes: 6,
    totalMinutes: 288,
    seasons: [
      {
        name: 1,
        episodes: 6,
      },
    ],
    id: 61,
  },
  {
    title: "The Big Bang Theory",
    externalIds: {
      tvrage: 8511,
      thetvdb: 80379,
      imdb: "tt0898266",
      tvmazeId: 66,
    },
    rating: "8.2",
    status: "Ended",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/173/433868.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/173/433868.jpg",
    },
    totalEpisodes: 279,
    totalMinutes: 8370,
    seasons: [
      {
        name: 1,
        episodes: 17,
      },
      {
        name: 2,
        episodes: 23,
      },
      {
        name: 3,
        episodes: 23,
      },
      {
        name: 4,
        episodes: 24,
      },
      {
        name: 5,
        episodes: 24,
      },
      {
        name: 6,
        episodes: 24,
      },
      {
        name: 7,
        episodes: 24,
      },
      {
        name: 8,
        episodes: 24,
      },
      {
        name: 9,
        episodes: 24,
      },
      {
        name: 10,
        episodes: 24,
      },
      {
        name: 11,
        episodes: 24,
      },
      {
        name: 12,
        episodes: 24,
      },
    ],
    id: 67,
  },
  {
    title: "Money Heist",
    externalIds: {
      tvrage: null,
      thetvdb: 327417,
      imdb: "tt6468322",
      tvmazeId: 27436,
    },
    rating: "8.2",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/376/940830.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/376/940830.jpg",
    },
    totalEpisodes: 41,
    totalMinutes: 2460,
    seasons: [
      {
        name: 1,
        episodes: 15,
      },
      {
        name: 3,
        episodes: 8,
      },
      {
        name: 4,
        episodes: 8,
      },
      {
        name: 5,
        episodes: 10,
      },
    ],
    id: 77,
  },
  {
    title: "The Good Place",
    externalIds: {
      tvrage: 50383,
      thetvdb: 311711,
      imdb: "tt4955642",
      tvmazeId: 2790,
    },
    rating: "8.2",
    status: "Ended",
    averageEpisodeRunTime: 31,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/395/989291.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/395/989291.jpg",
    },
    totalEpisodes: 53,
    totalMinutes: 1643,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 14,
      },
    ],
    id: 92,
  },
  {
    title: "Family Guy",
    externalIds: {
      tvrage: 3506,
      thetvdb: 75978,
      imdb: "tt0182576",
      tvmazeId: 84,
    },
    rating: "8.2",
    status: "Running",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058269.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/423/1058269.jpg",
    },
    totalEpisodes: 389,
    totalMinutes: 11670,
    seasons: [
      {
        name: 1,
        episodes: 7,
      },
      {
        name: 2,
        episodes: 21,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 30,
      },
      {
        name: 5,
        episodes: 18,
      },
      {
        name: 6,
        episodes: 12,
      },
      {
        name: 7,
        episodes: 16,
      },
      {
        name: 8,
        episodes: 21,
      },
      {
        name: 9,
        episodes: 18,
      },
      {
        name: 10,
        episodes: 23,
      },
      {
        name: 11,
        episodes: 22,
      },
      {
        name: 12,
        episodes: 21,
      },
      {
        name: 13,
        episodes: 18,
      },
      {
        name: 14,
        episodes: 20,
      },
      {
        name: 15,
        episodes: 20,
      },
      {
        name: 16,
        episodes: 20,
      },
      {
        name: 17,
        episodes: 20,
      },
      {
        name: 18,
        episodes: 20,
      },
      {
        name: 19,
        episodes: 20,
      },
      {
        name: 20,
        episodes: 20,
      },
      {
        name: 21,
        episodes: 11,
      },
    ],
    id: 106,
  },
  {
    title: "Watchmen",
    externalIds: {
      tvrage: null,
      thetvdb: 360733,
      imdb: "tt7049682",
      tvmazeId: 29575,
    },
    rating: "8.2",
    status: "Ended",
    averageEpisodeRunTime: 59,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/212/530211.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/212/530211.jpg",
    },
    totalEpisodes: 9,
    totalMinutes: 531,
    seasons: [
      {
        name: 1,
        episodes: 9,
      },
    ],
    id: 131,
  },
  {
    title: "Lucifer",
    externalIds: {
      tvrage: 45076,
      thetvdb: 295685,
      imdb: "tt4052886",
      tvmazeId: 1859,
    },
    rating: "8.1",
    status: "Ended",
    averageEpisodeRunTime: 58,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/346/865655.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/346/865655.jpg",
    },
    totalEpisodes: 93,
    totalMinutes: 5394,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 18,
      },
      {
        name: 3,
        episodes: 26,
      },
      {
        name: 4,
        episodes: 10,
      },
      {
        name: 5,
        episodes: 16,
      },
      {
        name: 6,
        episodes: 10,
      },
    ],
    id: 28,
  },
  {
    title: "The Mentalist",
    externalIds: {
      tvrage: 18967,
      thetvdb: 82459,
      imdb: "tt1196946",
      tvmazeId: 116,
    },
    rating: "8.1",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/1239.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/0/1239.jpg",
    },
    totalEpisodes: 151,
    totalMinutes: 9060,
    seasons: [
      {
        name: 1,
        episodes: 23,
      },
      {
        name: 2,
        episodes: 23,
      },
      {
        name: 3,
        episodes: 24,
      },
      {
        name: 4,
        episodes: 24,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 13,
      },
    ],
    id: 38,
  },
  {
    title: "Criminal Minds",
    externalIds: {
      tvrage: 3171,
      thetvdb: 75710,
      imdb: "tt0452046",
      tvmazeId: 81,
    },
    rating: "8.1",
    status: "Running",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/431/1079853.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/431/1079853.jpg",
    },
    totalEpisodes: 334,
    totalMinutes: 20040,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 23,
      },
      {
        name: 3,
        episodes: 20,
      },
      {
        name: 4,
        episodes: 26,
      },
      {
        name: 5,
        episodes: 23,
      },
      {
        name: 6,
        episodes: 24,
      },
      {
        name: 7,
        episodes: 24,
      },
      {
        name: 8,
        episodes: 24,
      },
      {
        name: 9,
        episodes: 24,
      },
      {
        name: 10,
        episodes: 23,
      },
      {
        name: 11,
        episodes: 22,
      },
      {
        name: 12,
        episodes: 22,
      },
      {
        name: 13,
        episodes: 22,
      },
      {
        name: 14,
        episodes: 15,
      },
      {
        name: 15,
        episodes: 10,
      },
      {
        name: 16,
        episodes: 10,
      },
    ],
    id: 58,
  },
  {
    title: "Castle",
    externalIds: {
      tvrage: 19267,
      thetvdb: 83462,
      imdb: "tt1219024",
      tvmazeId: 68,
    },
    rating: "8.1",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/13/34761.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/13/34761.jpg",
    },
    totalEpisodes: 173,
    totalMinutes: 10380,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 24,
      },
      {
        name: 3,
        episodes: 24,
      },
      {
        name: 4,
        episodes: 23,
      },
      {
        name: 5,
        episodes: 24,
      },
      {
        name: 6,
        episodes: 23,
      },
      {
        name: 7,
        episodes: 23,
      },
      {
        name: 8,
        episodes: 22,
      },
    ],
    id: 60,
  },
  {
    title: "The Walking Dead",
    externalIds: {
      tvrage: 25056,
      thetvdb: 153021,
      imdb: "tt1520211",
      tvmazeId: 73,
    },
    rating: "8.1",
    status: "Ended",
    averageEpisodeRunTime: 62,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061900.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/424/1061900.jpg",
    },
    totalEpisodes: 177,
    totalMinutes: 10974,
    seasons: [
      {
        name: 1,
        episodes: 6,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 16,
      },
      {
        name: 4,
        episodes: 16,
      },
      {
        name: 5,
        episodes: 16,
      },
      {
        name: 6,
        episodes: 16,
      },
      {
        name: 7,
        episodes: 16,
      },
      {
        name: 8,
        episodes: 16,
      },
      {
        name: 9,
        episodes: 16,
      },
      {
        name: 10,
        episodes: 22,
      },
      {
        name: 11,
        episodes: 24,
      },
    ],
    id: 68,
  },
  {
    title: "Orange Is the New Black",
    externalIds: {
      tvrage: 32950,
      thetvdb: 264586,
      imdb: "tt2372162",
      tvmazeId: 170,
    },
    rating: "8.1",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/203/508250.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/203/508250.jpg",
    },
    totalEpisodes: 91,
    totalMinutes: 5460,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 13,
      },
      {
        name: 5,
        episodes: 13,
      },
      {
        name: 6,
        episodes: 13,
      },
      {
        name: 7,
        episodes: 13,
      },
    ],
    id: 70,
  },
  {
    title: "The End of the F***ing World",
    externalIds: {
      tvrage: null,
      thetvdb: 336522,
      imdb: "tt6257970",
      tvmazeId: 28866,
    },
    rating: "8.1",
    status: "Ended",
    averageEpisodeRunTime: 21,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/348/870850.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/348/870850.jpg",
    },
    totalEpisodes: 16,
    totalMinutes: 336,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 8,
      },
    ],
    id: 83,
  },
  {
    title: "The Good Doctor",
    externalIds: {
      tvrage: null,
      thetvdb: 328634,
      imdb: "tt6470478",
      tvmazeId: 21845,
    },
    rating: "8.1",
    status: "Running",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061046.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/424/1061046.jpg",
    },
    totalEpisodes: 94,
    totalMinutes: 5640,
    seasons: [
      {
        name: 1,
        episodes: 18,
      },
      {
        name: 2,
        episodes: 18,
      },
      {
        name: 3,
        episodes: 20,
      },
      {
        name: 4,
        episodes: 20,
      },
      {
        name: 5,
        episodes: 18,
      },
      {
        name: 6,
        episodes: 22,
      },
    ],
    id: 95,
  },
  {
    title: "11.22.63",
    externalIds: {
      tvrage: 45210,
      thetvdb: 301824,
      imdb: "tt2879552",
      tvmazeId: 5529,
    },
    rating: "8.1",
    status: "Ended",
    averageEpisodeRunTime: 56,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/63/157675.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/63/157675.jpg",
    },
    totalEpisodes: 8,
    totalMinutes: 448,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
    ],
    id: 99,
  },
  {
    title: "How to Get Away with Murder",
    externalIds: {
      tvrage: 37307,
      thetvdb: 281620,
      imdb: "tt3205802",
      tvmazeId: 52,
    },
    rating: "8.1",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/212/531512.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/212/531512.jpg",
    },
    totalEpisodes: 90,
    totalMinutes: 5400,
    seasons: [
      {
        name: 1,
        episodes: 15,
      },
      {
        name: 2,
        episodes: 15,
      },
      {
        name: 3,
        episodes: 15,
      },
      {
        name: 4,
        episodes: 15,
      },
      {
        name: 5,
        episodes: 15,
      },
      {
        name: 6,
        episodes: 15,
      },
    ],
    id: 108,
  },
  {
    title: "Sharp Objects",
    externalIds: {
      tvrage: null,
      thetvdb: 346602,
      imdb: "tt2649356",
      tvmazeId: 15112,
    },
    rating: "8.1",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/156/391025.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/156/391025.jpg",
    },
    totalEpisodes: 8,
    totalMinutes: 480,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
    ],
    id: 129,
  },
  {
    title: "The Witcher",
    externalIds: {
      tvrage: null,
      thetvdb: 362696,
      imdb: "tt5180504",
      tvmazeId: 28276,
    },
    rating: "8.1",
    status: "Running",
    averageEpisodeRunTime: 58,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/465/1163193.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/465/1163193.jpg",
    },
    totalEpisodes: 24,
    totalMinutes: 1381,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 8,
      },
      {
        name: 3,
        episodes: 8,
      },
    ],
    id: 153,
  },
  {
    title: "Squid Game",
    externalIds: {
      tvrage: null,
      thetvdb: 383275,
      imdb: "tt10919420",
      tvmazeId: 43687,
    },
    rating: "8",
    status: "Running",
    averageEpisodeRunTime: 55,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/362/906711.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/362/906711.jpg",
    },
    totalEpisodes: 9,
    totalMinutes: 495,
    seasons: [
      {
        name: 1,
        episodes: 9,
      },
    ],
    id: 46,
  },
  {
    title: "The Blacklist",
    externalIds: {
      tvrage: 35048,
      thetvdb: 266189,
      imdb: "tt2741602",
      tvmazeId: 69,
    },
    rating: "8",
    status: "Running",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/401/1003370.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/401/1003370.jpg",
    },
    totalEpisodes: 218,
    totalMinutes: 13080,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 23,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 19,
      },
      {
        name: 8,
        episodes: 22,
      },
      {
        name: 9,
        episodes: 22,
      },
      {
        name: 10,
        episodes: 22,
      },
    ],
    id: 64,
  },
  {
    title: "Travelers",
    externalIds: {
      tvrage: null,
      thetvdb: 314544,
      imdb: "tt5651844",
      tvmazeId: 15996,
    },
    rating: "8",
    status: "Ended",
    averageEpisodeRunTime: 56,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/176/441314.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/176/441314.jpg",
    },
    totalEpisodes: 34,
    totalMinutes: 1904,
    seasons: [
      {
        name: 1,
        episodes: 12,
      },
      {
        name: 2,
        episodes: 12,
      },
      {
        name: 3,
        episodes: 10,
      },
    ],
    id: 66,
  },
  {
    title: "Dead to Me",
    externalIds: {
      tvrage: null,
      thetvdb: 361857,
      imdb: "tt8064302",
      tvmazeId: 35846,
    },
    rating: "8",
    status: "Ended",
    averageEpisodeRunTime: 31,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/429/1072654.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/429/1072654.jpg",
    },
    totalEpisodes: 30,
    totalMinutes: 930,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
    ],
    id: 96,
  },
  {
    title: "American Horror Story",
    externalIds: {
      tvrage: 28776,
      thetvdb: 250487,
      imdb: "tt1844624",
      tvmazeId: 30,
    },
    rating: "8",
    status: "Running",
    averageEpisodeRunTime: 61,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/427/1068035.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/427/1068035.jpg",
    },
    totalEpisodes: 123,
    totalMinutes: 7503,
    seasons: [
      {
        name: 1,
        episodes: 12,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 13,
      },
      {
        name: 5,
        episodes: 12,
      },
      {
        name: 6,
        episodes: 10,
      },
      {
        name: 7,
        episodes: 11,
      },
      {
        name: 8,
        episodes: 10,
      },
      {
        name: 9,
        episodes: 9,
      },
      {
        name: 10,
        episodes: 10,
      },
      {
        name: 11,
        episodes: 10,
      },
    ],
    id: 105,
  },
  {
    title: "The Gilded Age",
    externalIds: {
      tvrage: null,
      thetvdb: 364412,
      imdb: "tt4406178",
      tvmazeId: 34685,
    },
    rating: "8",
    status: "Running",
    averageEpisodeRunTime: 61,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/389/974073.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/389/974073.jpg",
    },
    totalEpisodes: 18,
    totalMinutes: 1098,
    seasons: [
      {
        name: 1,
        episodes: 9,
      },
    ],
    id: 132,
  },
  {
    title: "The Night Agent",
    externalIds: {
      tvrage: null,
      thetvdb: 407281,
      imdb: "tt13918776",
      tvmazeId: 56512,
    },
    rating: "8",
    status: "Running",
    averageEpisodeRunTime: 49,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/453/1132519.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/453/1132519.jpg",
    },
    totalEpisodes: 10,
    totalMinutes: 490,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
    ],
    id: 154,
  },
  {
    title: "Humans",
    externalIds: {
      tvrage: 41875,
      thetvdb: 292124,
      imdb: "tt4122068",
      tvmazeId: 1363,
    },
    rating: "7.9",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/182/457420.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/182/457420.jpg",
    },
    totalEpisodes: 24,
    totalMinutes: 1440,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 8,
      },
      {
        name: 3,
        episodes: 8,
      },
    ],
    id: 43,
  },
  {
    title: "Angel",
    externalIds: {
      tvrage: 2610,
      thetvdb: 71035,
      imdb: "tt0162065",
      tvmazeId: 428,
    },
    rating: "7.9",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/3/7507.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/3/7507.jpg",
    },
    totalEpisodes: 110,
    totalMinutes: 6600,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
    ],
    id: 55,
  },
  {
    title: "The Umbrella Academy",
    externalIds: {
      tvrage: null,
      thetvdb: 353764,
      imdb: "tt1312171",
      tvmazeId: 30386,
    },
    rating: "7.9",
    status: "Running",
    averageEpisodeRunTime: 50,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/409/1023534.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/409/1023534.jpg",
    },
    totalEpisodes: 36,
    totalMinutes: 1800,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 10,
      },
    ],
    id: 71,
  },
  {
    title: "Marvel's Jessica Jones",
    externalIds: {
      tvrage: 38797,
      thetvdb: 284190,
      imdb: "tt2357547",
      tvmazeId: 1370,
    },
    rating: "7.9",
    status: "Ended",
    averageEpisodeRunTime: 54,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/200/502332.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/200/502332.jpg",
    },
    totalEpisodes: 39,
    totalMinutes: 2106,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
    ],
    id: 72,
  },
  {
    title: "Monster: The Jeffrey Dahmer Story",
    externalIds: {
      tvrage: null,
      thetvdb: 389492,
      imdb: "tt13207736",
      tvmazeId: 50907,
    },
    rating: "7.9",
    status: "Running",
    averageEpisodeRunTime: 53,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058446.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/423/1058446.jpg",
    },
    totalEpisodes: 10,
    totalMinutes: 530,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
    ],
    id: 125,
  },
  {
    title: "Devious Maids",
    externalIds: {
      tvrage: 30826,
      thetvdb: 261802,
      imdb: "tt2226342",
      tvmazeId: 201,
    },
    rating: "7.8",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/1/3005.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/1/3005.jpg",
    },
    totalEpisodes: 10,
    totalMinutes: 600,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 10,
      },
    ],
    id: 76,
  },
  {
    title: "iZombie",
    externalIds: {
      tvrage: 38804,
      thetvdb: 281470,
      imdb: "tt3501584",
      tvmazeId: 1589,
    },
    rating: "7.8",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/192/480555.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/192/480555.jpg",
    },
    totalEpisodes: 71,
    totalMinutes: 4260,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 19,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 13,
      },
      {
        name: 5,
        episodes: 13,
      },
    ],
    id: 84,
  },
  {
    title: "Gotham",
    externalIds: {
      tvrage: 38049,
      thetvdb: 274431,
      imdb: "tt3749900",
      tvmazeId: 11,
    },
    rating: "7.8",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/189/474715.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/189/474715.jpg",
    },
    totalEpisodes: 100,
    totalMinutes: 6000,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 12,
      },
    ],
    id: 91,
  },
  {
    title: "Revenge",
    externalIds: {
      tvrage: 28387,
      thetvdb: 248837,
      imdb: "tt1837642",
      tvmazeId: 9,
    },
    rating: "7.8",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/82/206879.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/82/206879.jpg",
    },
    totalEpisodes: 89,
    totalMinutes: 5340,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 23,
      },
    ],
    id: 94,
  },
  {
    title: "New Girl",
    externalIds: {
      tvrage: 28304,
      thetvdb: 248682,
      imdb: "tt1826940",
      tvmazeId: 58,
    },
    rating: "7.8",
    status: "Ended",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/145/364581.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/145/364581.jpg",
    },
    totalEpisodes: 146,
    totalMinutes: 4380,
    seasons: [
      {
        name: 1,
        episodes: 24,
      },
      {
        name: 2,
        episodes: 25,
      },
      {
        name: 3,
        episodes: 23,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 8,
      },
    ],
    id: 123,
  },
  {
    title: "The White Lotus",
    externalIds: {
      tvrage: null,
      thetvdb: 390430,
      imdb: "tt13406094",
      tvmazeId: 51394,
    },
    rating: "7.8",
    status: "Running",
    averageEpisodeRunTime: 62,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/434/1085967.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/434/1085967.jpg",
    },
    totalEpisodes: 13,
    totalMinutes: 806,
    seasons: [
      {
        name: 1,
        episodes: 6,
      },
      {
        name: 2,
        episodes: 7,
      },
    ],
    id: 138,
  },
  {
    title: "CSI: Crime Scene Investigation",
    externalIds: {
      tvrage: 3183,
      thetvdb: 72546,
      imdb: "tt0247082",
      tvmazeId: 109,
    },
    rating: "7.7",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/887.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/0/887.jpg",
    },
    totalEpisodes: 337,
    totalMinutes: 20220,
    seasons: [
      {
        name: 1,
        episodes: 23,
      },
      {
        name: 2,
        episodes: 23,
      },
      {
        name: 3,
        episodes: 23,
      },
      {
        name: 4,
        episodes: 23,
      },
      {
        name: 5,
        episodes: 25,
      },
      {
        name: 6,
        episodes: 24,
      },
      {
        name: 7,
        episodes: 24,
      },
      {
        name: 8,
        episodes: 17,
      },
      {
        name: 9,
        episodes: 24,
      },
      {
        name: 10,
        episodes: 23,
      },
      {
        name: 11,
        episodes: 22,
      },
      {
        name: 12,
        episodes: 22,
      },
      {
        name: 13,
        episodes: 22,
      },
      {
        name: 14,
        episodes: 22,
      },
      {
        name: 15,
        episodes: 18,
      },
      {
        name: 16,
        episodes: 2,
      },
    ],
    id: 26,
  },
  {
    title: "The Vampire Diaries",
    externalIds: {
      tvrage: 21766,
      thetvdb: 95491,
      imdb: "tt1405406",
      tvmazeId: 63,
    },
    rating: "7.7",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/88/220908.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/88/220908.jpg",
    },
    totalEpisodes: 171,
    totalMinutes: 10260,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 23,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 22,
      },
      {
        name: 8,
        episodes: 16,
      },
    ],
    id: 69,
  },
  {
    title: "You",
    externalIds: {
      tvrage: null,
      thetvdb: 336924,
      imdb: "tt7335184",
      tvmazeId: 26856,
    },
    rating: "7.7",
    status: "Running",
    averageEpisodeRunTime: 49,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/432/1080371.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/432/1080371.jpg",
    },
    totalEpisodes: 30,
    totalMinutes: 1470,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 10,
      },
    ],
    id: 110,
  },
  {
    title: "Once Upon a Time",
    externalIds: {
      tvrage: 28385,
      thetvdb: 248835,
      imdb: "tt1843230",
      tvmazeId: 111,
    },
    rating: "7.7",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/127/319360.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/127/319360.jpg",
    },
    totalEpisodes: 156,
    totalMinutes: 9360,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 23,
      },
      {
        name: 5,
        episodes: 23,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 22,
      },
    ],
    id: 115,
  },
  {
    title: "Titans",
    externalIds: {
      tvrage: null,
      thetvdb: 341663,
      imdb: "tt1043813",
      tvmazeId: 27557,
    },
    rating: "7.6",
    status: "Running",
    averageEpisodeRunTime: 49,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/427/1068040.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/427/1068040.jpg",
    },
    totalEpisodes: 49,
    totalMinutes: 2401,
    seasons: [
      {
        name: 1,
        episodes: 11,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 12,
      },
    ],
    id: 86,
  },
  {
    title: "Grey's Anatomy",
    externalIds: {
      tvrage: 3741,
      thetvdb: 73762,
      imdb: "tt0413573",
      tvmazeId: 67,
    },
    rating: "7.6",
    status: "Running",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061065.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/424/1061065.jpg",
    },
    totalEpisodes: 379,
    totalMinutes: 22740,
    seasons: [
      {
        name: 1,
        episodes: 9,
      },
      {
        name: 2,
        episodes: 27,
      },
      {
        name: 3,
        episodes: 25,
      },
      {
        name: 4,
        episodes: 17,
      },
      {
        name: 5,
        episodes: 24,
      },
      {
        name: 6,
        episodes: 24,
      },
      {
        name: 7,
        episodes: 22,
      },
      {
        name: 8,
        episodes: 24,
      },
      {
        name: 9,
        episodes: 24,
      },
      {
        name: 10,
        episodes: 24,
      },
      {
        name: 11,
        episodes: 24,
      },
      {
        name: 12,
        episodes: 24,
      },
      {
        name: 13,
        episodes: 24,
      },
      {
        name: 14,
        episodes: 24,
      },
      {
        name: 15,
        episodes: 25,
      },
      {
        name: 16,
        episodes: 21,
      },
      {
        name: 17,
        episodes: 17,
      },
      {
        name: 18,
        episodes: 20,
      },
      {
        name: 19,
        episodes: 20,
      },
    ],
    id: 89,
  },
  {
    title: "The 100",
    externalIds: {
      tvrage: 34770,
      thetvdb: 268592,
      imdb: "tt2661044",
      tvmazeId: 6,
    },
    rating: "7.6",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/257/642675.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/257/642675.jpg",
    },
    totalEpisodes: 100,
    totalMinutes: 6000,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 16,
      },
      {
        name: 3,
        episodes: 16,
      },
      {
        name: 4,
        episodes: 13,
      },
      {
        name: 5,
        episodes: 13,
      },
      {
        name: 6,
        episodes: 13,
      },
      {
        name: 7,
        episodes: 16,
      },
    ],
    id: 90,
  },
  {
    title: "Desperate Housewives",
    externalIds: {
      tvrage: 3294,
      thetvdb: 73800,
      imdb: "tt0410975",
      tvmazeId: 550,
    },
    rating: "7.6",
    status: "Ended",
    averageEpisodeRunTime: 55,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/39/98716.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/39/98716.jpg",
    },
    totalEpisodes: 23,
    totalMinutes: 1265,
    seasons: [
      {
        name: 1,
        episodes: 23,
      },
      {
        name: 2,
        episodes: 24,
      },
      {
        name: 3,
        episodes: 23,
      },
      {
        name: 4,
        episodes: 17,
      },
      {
        name: 5,
        episodes: 24,
      },
      {
        name: 6,
        episodes: 23,
      },
      {
        name: 7,
        episodes: 23,
      },
      {
        name: 8,
        episodes: 23,
      },
    ],
    id: 93,
  },
  {
    title: "The Flash",
    externalIds: {
      tvrage: 36939,
      thetvdb: 279121,
      imdb: "tt3107288",
      tvmazeId: 13,
    },
    rating: "7.6",
    status: "Running",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/439/1098374.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/439/1098374.jpg",
    },
    totalEpisodes: 184,
    totalMinutes: 11040,
    seasons: [
      {
        name: 1,
        episodes: 23,
      },
      {
        name: 2,
        episodes: 23,
      },
      {
        name: 3,
        episodes: 23,
      },
      {
        name: 4,
        episodes: 23,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 19,
      },
      {
        name: 7,
        episodes: 18,
      },
      {
        name: 8,
        episodes: 20,
      },
      {
        name: 9,
        episodes: 13,
      },
    ],
    id: 98,
  },
  {
    title: "See",
    externalIds: {
      tvrage: null,
      thetvdb: 361565,
      imdb: "tt7949218",
      tvmazeId: 34345,
    },
    rating: "7.6",
    status: "Ended",
    averageEpisodeRunTime: 54,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/416/1042167.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/416/1042167.jpg",
    },
    totalEpisodes: 24,
    totalMinutes: 1296,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 8,
      },
      {
        name: 3,
        episodes: 8,
      },
    ],
    id: 117,
  },
  {
    title: "Young Sheldon",
    externalIds: {
      tvrage: null,
      thetvdb: 328724,
      imdb: "tt6226232",
      tvmazeId: 26020,
    },
    rating: "7.6",
    status: "Running",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/424/1060718.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/424/1060718.jpg",
    },
    totalEpisodes: 105,
    totalMinutes: 3150,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 21,
      },
      {
        name: 4,
        episodes: 18,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 22,
      },
    ],
    id: 121,
  },
  {
    title: "Timeless",
    externalIds: {
      tvrage: null,
      thetvdb: 311713,
      imdb: "tt5511582",
      tvmazeId: 8873,
    },
    rating: "7.6",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/146/367481.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/146/367481.jpg",
    },
    totalEpisodes: 28,
    totalMinutes: 1680,
    seasons: [
      {
        name: 1,
        episodes: 16,
      },
      {
        name: 2,
        episodes: 12,
      },
    ],
    id: 122,
  },
  {
    title: "Your Honor",
    externalIds: {
      tvrage: null,
      thetvdb: 359579,
      imdb: "tt7440726",
      tvmazeId: 32791,
    },
    rating: "7.6",
    status: "Running",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/431/1077582.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/431/1077582.jpg",
    },
    totalEpisodes: 20,
    totalMinutes: 1200,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
    ],
    id: 136,
  },
  {
    title: "Smallville",
    externalIds: {
      tvrage: 5227,
      thetvdb: 72218,
      imdb: "tt0279600",
      tvmazeId: 435,
    },
    rating: "7.5",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/79/199609.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/79/199609.jpg",
    },
    totalEpisodes: 217,
    totalMinutes: 13020,
    seasons: [
      {
        name: 1,
        episodes: 21,
      },
      {
        name: 2,
        episodes: 23,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 20,
      },
      {
        name: 8,
        episodes: 22,
      },
      {
        name: 9,
        episodes: 21,
      },
      {
        name: 10,
        episodes: 22,
      },
    ],
    id: 56,
  },
  {
    title: "Marvel's Agents of S.H.I.E.L.D.",
    externalIds: {
      tvrage: 32656,
      thetvdb: 263365,
      imdb: "tt2364582",
      tvmazeId: 31,
    },
    rating: "7.5",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/142/356776.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/142/356776.jpg",
    },
    totalEpisodes: 136,
    totalMinutes: 8160,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 13,
      },
      {
        name: 7,
        episodes: 13,
      },
    ],
    id: 74,
  },
  {
    title: "Lupin",
    externalIds: {
      tvrage: null,
      thetvdb: 375921,
      imdb: "tt2531336",
      tvmazeId: 50701,
    },
    rating: "7.5",
    status: "Running",
    averageEpisodeRunTime: 46,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/315/788449.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/315/788449.jpg",
    },
    totalEpisodes: 5,
    totalMinutes: 230,
    seasons: [
      {
        name: 1,
        episodes: 5,
      },
      {
        name: 2,
        episodes: 5,
      },
    ],
    id: 111,
  },
  {
    title: "Arrow",
    externalIds: {
      tvrage: 30715,
      thetvdb: 257655,
      imdb: "tt2193021",
      tvmazeId: 4,
    },
    rating: "7.5",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg",
    },
    totalEpisodes: 170,
    totalMinutes: 10200,
    seasons: [
      {
        name: 1,
        episodes: 23,
      },
      {
        name: 2,
        episodes: 23,
      },
      {
        name: 3,
        episodes: 23,
      },
      {
        name: 4,
        episodes: 23,
      },
      {
        name: 5,
        episodes: 23,
      },
      {
        name: 6,
        episodes: 23,
      },
      {
        name: 7,
        episodes: 22,
      },
      {
        name: 8,
        episodes: 10,
      },
    ],
    id: 114,
  },
  {
    title: "Gossip Girl",
    externalIds: {
      tvrage: 15619,
      thetvdb: 80547,
      imdb: "tt0397442",
      tvmazeId: 567,
    },
    rating: "7.5",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/42/106320.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/42/106320.jpg",
    },
    totalEpisodes: 121,
    totalMinutes: 7260,
    seasons: [
      {
        name: 1,
        episodes: 18,
      },
      {
        name: 2,
        episodes: 25,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 24,
      },
      {
        name: 6,
        episodes: 10,
      },
    ],
    id: 120,
  },
  {
    title: "All of Us Are Dead",
    externalIds: {
      tvrage: null,
      thetvdb: 382142,
      imdb: "tt14169960",
      tvmazeId: 47199,
    },
    rating: "7.5",
    status: "Running",
    averageEpisodeRunTime: 61,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/394/985544.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/394/985544.jpg",
    },
    totalEpisodes: 12,
    totalMinutes: 732,
    seasons: [
      {
        name: 1,
        episodes: 12,
      },
    ],
    id: 126,
  },
  {
    title: "13 Reasons Why",
    externalIds: {
      tvrage: null,
      thetvdb: 323168,
      imdb: "tt1837492",
      tvmazeId: 7194,
    },
    rating: "7.5",
    status: "Ended",
    averageEpisodeRunTime: 59,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/258/646815.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/258/646815.jpg",
    },
    totalEpisodes: 49,
    totalMinutes: 2891,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 13,
      },
      {
        name: 3,
        episodes: 13,
      },
      {
        name: 4,
        episodes: 10,
      },
    ],
    id: 127,
  },
  {
    title: "Pretty Little Liars",
    externalIds: {
      tvrage: 25591,
      thetvdb: 146711,
      imdb: "tt1578873",
      tvmazeId: 177,
    },
    rating: "7.4",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/125/314775.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/125/314775.jpg",
    },
    totalEpisodes: 40,
    totalMinutes: 2400,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 25,
      },
      {
        name: 3,
        episodes: 24,
      },
      {
        name: 4,
        episodes: 24,
      },
      {
        name: 5,
        episodes: 25,
      },
      {
        name: 6,
        episodes: 20,
      },
      {
        name: 7,
        episodes: 20,
      },
    ],
    id: 100,
  },
  {
    title: "Chilling Adventures of Sabrina",
    externalIds: {
      tvrage: null,
      thetvdb: 338947,
      imdb: "tt7569592",
      tvmazeId: 32649,
    },
    rating: "7.4",
    status: "Ended",
    averageEpisodeRunTime: 57,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/291/728576.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/291/728576.jpg",
    },
    totalEpisodes: 36,
    totalMinutes: 2052,
    seasons: [
      {
        name: 1,
        episodes: 11,
      },
      {
        name: 2,
        episodes: 9,
      },
      {
        name: 3,
        episodes: 8,
      },
      {
        name: 4,
        episodes: 8,
      },
    ],
    id: 109,
  },
  {
    title: "Bridgerton",
    externalIds: {
      tvrage: null,
      thetvdb: 366668,
      imdb: "tt8740790",
      tvmazeId: 42966,
    },
    rating: "7.4",
    status: "Running",
    averageEpisodeRunTime: 62,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/398/995479.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/398/995479.jpg",
    },
    totalEpisodes: 24,
    totalMinutes: 1488,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 8,
      },
    ],
    id: 119,
  },
  {
    title: "Ginny & Georgia",
    externalIds: {
      tvrage: null,
      thetvdb: 393625,
      imdb: "tt10813940",
      tvmazeId: 47549,
    },
    rating: "7.4",
    status: "To Be Determined",
    averageEpisodeRunTime: 57,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/434/1087416.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/434/1087416.jpg",
    },
    totalEpisodes: 20,
    totalMinutes: 1140,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
    ],
    id: 141,
  },
  {
    title: "Elite",
    externalIds: {
      tvrage: null,
      thetvdb: 346328,
      imdb: "tt7134908",
      tvmazeId: 37854,
    },
    rating: "7.3",
    status: "Running",
    averageEpisodeRunTime: 50,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/432/1080374.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/432/1080374.jpg",
    },
    totalEpisodes: 56,
    totalMinutes: 2800,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 8,
      },
      {
        name: 3,
        episodes: 8,
      },
      {
        name: 4,
        episodes: 8,
      },
      {
        name: 5,
        episodes: 8,
      },
      {
        name: 6,
        episodes: 8,
      },
    ],
    id: 112,
  },
  {
    title: "Blindspot",
    externalIds: {
      tvrage: 44628,
      thetvdb: 295647,
      imdb: "tt4474344",
      tvmazeId: 1855,
    },
    rating: "7.3",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/250/625131.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/250/625131.jpg",
    },
    totalEpisodes: 100,
    totalMinutes: 6000,
    seasons: [
      {
        name: 1,
        episodes: 23,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 11,
      },
    ],
    id: 116,
  },
  {
    title: "Sex and the City",
    externalIds: {
      tvrage: 5155,
      thetvdb: 76648,
      imdb: "tt0159206",
      tvmazeId: 676,
    },
    rating: "7.3",
    status: "Ended",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/107/269795.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/107/269795.jpg",
    },
    totalEpisodes: 94,
    totalMinutes: 2820,
    seasons: [
      {
        name: 1,
        episodes: 12,
      },
      {
        name: 2,
        episodes: 18,
      },
      {
        name: 3,
        episodes: 18,
      },
      {
        name: 4,
        episodes: 18,
      },
      {
        name: 5,
        episodes: 8,
      },
      {
        name: 6,
        episodes: 20,
      },
    ],
    id: 130,
  },
  {
    title: "Dynasty",
    externalIds: {
      tvrage: null,
      thetvdb: 328749,
      imdb: "tt6128300",
      tvmazeId: 21656,
    },
    rating: "7.3",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/401/1003369.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/401/1003369.jpg",
    },
    totalEpisodes: 64,
    totalMinutes: 3840,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 20,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
    ],
    id: 135,
  },
  {
    title: "The Librarians",
    externalIds: {
      tvrage: 41032,
      thetvdb: 281709,
      imdb: "tt3663490",
      tvmazeId: 340,
    },
    rating: "7.2",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/135/338167.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/135/338167.jpg",
    },
    totalEpisodes: 42,
    totalMinutes: 2520,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
      {
        name: 4,
        episodes: 12,
      },
    ],
    id: 124,
  },
  {
    title: "Charmed",
    externalIds: {
      tvrage: 3039,
      thetvdb: 70626,
      imdb: "tt0158552",
      tvmazeId: 506,
    },
    rating: "7.1",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/90/226251.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/90/226251.jpg",
    },
    totalEpisodes: 178,
    totalMinutes: 10680,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 23,
      },
      {
        name: 6,
        episodes: 23,
      },
      {
        name: 7,
        episodes: 22,
      },
      {
        name: 8,
        episodes: 22,
      },
    ],
    id: 59,
  },
  {
    title: "The Flight Attendant",
    externalIds: {
      tvrage: null,
      thetvdb: 366625,
      imdb: "tt7569576",
      tvmazeId: 42843,
    },
    rating: "7.1",
    status: "To Be Determined",
    averageEpisodeRunTime: 44,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/402/1007355.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/402/1007355.jpg",
    },
    totalEpisodes: 16,
    totalMinutes: 704,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
      {
        name: 2,
        episodes: 8,
      },
    ],
    id: 128,
  },
  {
    title: "The Staircase",
    externalIds: {
      tvrage: null,
      thetvdb: 400269,
      imdb: "tt11324406",
      tvmazeId: 54439,
    },
    rating: "7.1",
    status: "Ended",
    averageEpisodeRunTime: 65,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/406/1015974.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/406/1015974.jpg",
    },
    totalEpisodes: 8,
    totalMinutes: 520,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
    ],
    id: 142,
  },
  {
    title: "The Lord of the Rings:The Rings of Power",
    externalIds: {
      tvrage: null,
      thetvdb: 367506,
      imdb: "tt7631058",
      tvmazeId: 33352,
    },
    rating: "6.9",
    status: "Running",
    averageEpisodeRunTime: 70,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/425/1062924.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/425/1062924.jpg",
    },
    totalEpisodes: 16,
    totalMinutes: 1120,
    seasons: [
      {
        name: 1,
        episodes: 8,
      },
    ],
    id: 118,
  },
  {
    title: "Emily in Paris",
    externalIds: {
      tvrage: null,
      thetvdb: 364439,
      imdb: "tt8962124",
      tvmazeId: 41632,
    },
    rating: "6.9",
    status: "Running",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/436/1090560.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/436/1090560.jpg",
    },
    totalEpisodes: 30,
    totalMinutes: 900,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 10,
      },
      {
        name: 3,
        episodes: 10,
      },
    ],
    id: 133,
  },
  {
    title: "Glee",
    externalIds: {
      tvrage: 21704,
      thetvdb: 83610,
      imdb: "tt1327801",
      tvmazeId: 8,
    },
    rating: "6.8",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/73.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/0/73.jpg",
    },
    totalEpisodes: 121,
    totalMinutes: 7260,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 20,
      },
      {
        name: 6,
        episodes: 13,
      },
    ],
    id: 134,
  },
  {
    title: "Inventing Anna",
    externalIds: {
      tvrage: null,
      thetvdb: 371944,
      imdb: "tt8740976",
      tvmazeId: 44818,
    },
    rating: "6.8",
    status: "Ended",
    averageEpisodeRunTime: 68,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/377/944126.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/377/944126.jpg",
    },
    totalEpisodes: 9,
    totalMinutes: 612,
    seasons: [
      {
        name: 1,
        episodes: 9,
      },
    ],
    id: 137,
  },
  {
    title: "BEEF",
    externalIds: {
      tvrage: null,
      thetvdb: 399838,
      imdb: "tt14403178",
      tvmazeId: 54285,
    },
    rating: "6.8",
    status: "Ended",
    averageEpisodeRunTime: 35,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/455/1139179.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/455/1139179.jpg",
    },
    totalEpisodes: 10,
    totalMinutes: 348,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
    ],
    id: 151,
  },
  {
    title: "Sabrina, the Teenage Witch",
    externalIds: {
      tvrage: 5084,
      thetvdb: 76876,
      imdb: "tt0115341",
      tvmazeId: 976,
    },
    rating: "6.7",
    status: "Ended",
    averageEpisodeRunTime: 30,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/214/536178.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/214/536178.jpg",
    },
    totalEpisodes: 0,
    totalMinutes: 0,
    seasons: [
      {
        name: 1,
        episodes: 24,
      },
      {
        name: 2,
        episodes: 25,
      },
      {
        name: 3,
        episodes: 25,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 22,
      },
    ],
    id: 97,
  },
  {
    title: "Xena: Warrior Princess",
    externalIds: {
      tvrage: 6668,
      thetvdb: 77799,
      imdb: "tt0112230",
      tvmazeId: 437,
    },
    rating: "6.7",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/3/9021.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/3/9021.jpg",
    },
    totalEpisodes: 134,
    totalMinutes: 8040,
    seasons: [
      {
        name: 1,
        episodes: 24,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 22,
      },
      {
        name: 5,
        episodes: 22,
      },
      {
        name: 6,
        episodes: 22,
      },
    ],
    id: 103,
  },
  {
    title: "Riverdale",
    externalIds: {
      tvrage: null,
      thetvdb: 311954,
      imdb: "tt5420376",
      tvmazeId: 5262,
    },
    rating: "6.6",
    status: "Running",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/415/1038092.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/415/1038092.jpg",
    },
    totalEpisodes: 117,
    totalMinutes: 7020,
    seasons: [
      {
        name: 1,
        episodes: 13,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 22,
      },
      {
        name: 4,
        episodes: 19,
      },
      {
        name: 5,
        episodes: 19,
      },
      {
        name: 6,
        episodes: 22,
      },
      {
        name: 7,
        episodes: 18,
      },
    ],
    id: 139,
  },
  {
    title: "Beverly Hills, 90210",
    externalIds: {
      tvrage: 2776,
      thetvdb: 74936,
      imdb: "tt0098749",
      tvmazeId: 818,
    },
    rating: "6.5",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/6/15698.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/6/15698.jpg",
    },
    totalEpisodes: 293,
    totalMinutes: 17580,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 28,
      },
      {
        name: 3,
        episodes: 30,
      },
      {
        name: 4,
        episodes: 32,
      },
      {
        name: 5,
        episodes: 32,
      },
      {
        name: 6,
        episodes: 32,
      },
      {
        name: 7,
        episodes: 32,
      },
      {
        name: 8,
        episodes: 32,
      },
      {
        name: 9,
        episodes: 26,
      },
      {
        name: 10,
        episodes: 27,
      },
    ],
    id: 140,
  },
  {
    title: "Dark Desire",
    externalIds: {
      tvrage: null,
      thetvdb: 383611,
      imdb: "tt12540080",
      tvmazeId: 48748,
    },
    rating: "6.5",
    status: "Ended",
    averageEpisodeRunTime: 34,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/389/972735.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/389/972735.jpg",
    },
    totalEpisodes: 33,
    totalMinutes: 1122,
    seasons: [
      {
        name: 1,
        episodes: 18,
      },
      {
        name: 2,
        episodes: 15,
      },
    ],
    id: 144,
  },
  {
    title: "Ghost Whisperer",
    externalIds: {
      tvrage: 3677,
      thetvdb: 78817,
      imdb: "tt0460644",
      tvmazeId: 566,
    },
    rating: "6.4",
    status: "Ended",
    averageEpisodeRunTime: 60,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/4/11745.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/4/11745.jpg",
    },
    totalEpisodes: 107,
    totalMinutes: 6420,
    seasons: [
      {
        name: 1,
        episodes: 22,
      },
      {
        name: 2,
        episodes: 22,
      },
      {
        name: 3,
        episodes: 18,
      },
      {
        name: 4,
        episodes: 23,
      },
      {
        name: 5,
        episodes: 22,
      },
    ],
    id: 85,
  },
  {
    title: "Love & Death",
    externalIds: {
      tvrage: null,
      thetvdb: 402181,
      imdb: "tt14586350",
      tvmazeId: 55085,
    },
    rating: "6.1",
    status: "Ended",
    averageEpisodeRunTime: 54,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/458/1146402.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/458/1146402.jpg",
    },
    totalEpisodes: 7,
    totalMinutes: 379,
    seasons: [
      {
        name: 1,
        episodes: 7,
      },
    ],
    id: 152,
  },
  {
    title: "And Just Like That...",
    externalIds: {
      tvrage: null,
      thetvdb: 394924,
      imdb: "tt13819960",
      tvmazeId: 52904,
    },
    rating: "5.7",
    status: "Running",
    averageEpisodeRunTime: 39,
    img: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/379/948751.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/379/948751.jpg",
    },
    totalEpisodes: 10,
    totalMinutes: 390,
    seasons: [
      {
        name: 1,
        episodes: 10,
      },
      {
        name: 2,
        episodes: 11,
      },
    ],
    id: 143,
  },
];
export default listOfTvShows;
