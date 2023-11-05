import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  isLightTheme: true,
  addVideo: () => {},
  removeVideo: () => {},
  changeTheme: () => {},
})

export default SavedVideosContext
