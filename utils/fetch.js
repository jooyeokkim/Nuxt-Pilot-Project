function flattenObject(obj) {
  const result = {}
  for (const i in obj) {
    if (
      typeof obj[i] === 'object' &&
      !(Array.isArray(obj[i]) && obj[i].every((i) => typeof i === 'string'))
    ) {
      if (Array.isArray(obj[i])) {
        obj[i].forEach((item, index) => {
          const flattenedObj = flattenObject(item)
          for (const j in flattenedObj) {
            result[i + '.' + index + '.' + j] = flattenedObj[j]
          }
        })
      } else {
        const flattenedObj = flattenObject(obj[i])
        for (const j in flattenedObj) {
          result[i + '.' + j] = flattenedObj[j]
        }
      }
    } else {
      result[i] = obj[i]
    }
  }
  return result
}

export const apiFetch = (url, options, formkitNode) => {
  const config = useRuntimeConfig()
  return $fetch
    .create({
      baseURL: config.public.apiUrl
    })(url, options)
    .catch((error) => {
      if (error.status === 400) {
        console.log(error.data)
        formkitNode.setErrors([], flattenObject(error.data))
      } else {
        throw error
      }
    })
}