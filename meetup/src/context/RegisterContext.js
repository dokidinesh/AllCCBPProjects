import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: '',
  onChangeInput: () => {},
})

export default RegisterContext
