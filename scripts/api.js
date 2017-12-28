function generateData() {
  const media = {
    movies: [
      { title: 'Fight Club', ref: '/fight-club.mp4' },
      { title: 'Inception', ref: '/inception.mp4' },
      { title: 'La La Land', ref: '/la-la-land.mp4' },
      { title: 'Star Wars: The Last Jedi', ref: '/star-wars-tlj.mp4' },
    ],
    shows: [
      { title: 'How I Met Your Mother', ref: '/how-i-met-your-mother' },
      { title: 'Rick and Morty', ref: '/rick-and-morty' },
      { title: 'The Office', ref: '/the-office' },
    ],
  }

  return {
    media
  }
}

module.exports = generateData;