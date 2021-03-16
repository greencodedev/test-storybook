const React = require('react')
const react18Next = jest.requireActual('react-i18next')

module.exports = {
    ...react18Next,
    useTranslation: () => ({
        t: key => key,
        i18n: {language: 'en', changeLanguage: lang => lang},
    }),
}
