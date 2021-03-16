/**
 *
 * @param {Object} validator An object of functions that determine if there's error given a value.  Value is from "value" object with same key
 * @param {Object} value An object of current value coming from Formik
 * @returns {Object} Error object
 * @example
 * A login form will have validator
 * {
 *   id: ({id})=> (id.length > 4 ? undefined : "Need at least 4 characters"),
 *   password: ({ password }) => password.length > 5 ? undefined : "Need at least 6 characters"
 * }
 * value is from Formik, {id: 'peter', pw: '123456'}
 */
const formikValidator = async (validator, value) => {
    try {
        let err = {}
        for (let k in validator) {
            if (Array.isArray(validator[k])) {
                for (let currentCheckFunction of validator[k]) {
                    const errMsg = await currentCheckFunction(value)
                    if (errMsg) {
                        err[k] = errMsg
                        break
                    }
                }
            } else {
                const errMsg = await validator[k](value)
                if (errMsg) err[k] = errMsg
            }
        }
        return err
    } catch (e) {
        console.log(e)
    }
}

export default formikValidator