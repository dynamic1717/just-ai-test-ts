const useParsedDate = (date: string) => {
  const parsed = new Date(date)

  const addZero = (number: number) => {
    if (number < 10) {
      return '0' + number
    } else {
      return number
    }
  }

  const day = addZero(parsed.getDate())
  const month = addZero(parsed.getMonth() + 1)

  return day + '.' + month + '.' + parsed.getFullYear()
}

export default useParsedDate
