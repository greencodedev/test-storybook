const React = require('react')
const reactRedux = jest.requireActual('react-redux')

module.exports = {
    ...reactRedux,
    useSelector: jest.fn().mockImplementation(cb => {
        return cb({user: {}, windowSize: {height: 1024, width: 1024}})
    }),
}
