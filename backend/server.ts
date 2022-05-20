import app from './src/app'

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log(`Listening port ${port}`)
})
