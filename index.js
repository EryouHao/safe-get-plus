function safeGetPlus(obj, path, defaultValue = null) {
  const isDict = v => {
    return (
      typeof v === 'object' &&
      v !== null &&
      !(v instanceof Array) &&
      !(v instanceof Date)
    )
  }

  return path
    ? path.split('.').reduce((pv, ck) => {
        if (isDict(pv)) {
          return typeof pv[ck] === 'undefined' || pv[ck] === null
            ? defaultValue
            : pv[ck]
        } else {
          return defaultValue
        }
      }, obj)
    : obj
}

module.exports = safeGetPlus