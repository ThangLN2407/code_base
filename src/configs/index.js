const getAppConfig = env => {
  const data = require(`../configs/${env}`)

  return {
    ...data,
    ENV: env,
  }
}

const Config = { ...getAppConfig(process.env.NODE_ENV) }

export default Config
