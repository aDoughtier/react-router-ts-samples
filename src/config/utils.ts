const sleep = async (delay: number) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => { resolve("awake") }, delay * 1000)
  })
}

export {
  sleep
}