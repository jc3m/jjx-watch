function generateData() {
  const media = {
    movies: [
      { title: 'La La Land', ref: '/la-la-land.mp4' },
    ],
    shows: [
      { title: 'Rick and Morty', ref: '/rick-and-morty' },
      { title: 'How I Met Your Mother', ref: '/how-i-met-your-mother' },
    ],
  }

  return {
    media
  }
}

module.exports = generateData;