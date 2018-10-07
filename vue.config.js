module.exports = {
  baseUrl: (process.env.NODE_ENV === 'production')
    ? '/todo-list/'
    : '/'
};