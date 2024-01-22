const setItem = (name, value) => {
  localStorage.setItem(name, value)
}

const getItem = name => {
  localStorage.getItem(name)
}

const removeItem = name => {
  localStorage.removeItem(name)
}

export default { setItem, getItem, removeItem }
