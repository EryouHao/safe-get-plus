const safeGet = require('./index')

const response = {
  data: {
    user: {
      name: 'eryou',
      age: 18,
      friends: ['xiaoming', 'xiaohong'],
    },
    list: [1, 2, 3],
  }
}

test('safe get existing attribute', () => {
  expect(safeGet(response, 'data.user.friends', [])).toEqual(['xiaoming', 'xiaohong'])
})

test('safe get non-existent attribute', () => {
  expect(safeGet(response, 'data.user.address', '')).toEqual('')
})