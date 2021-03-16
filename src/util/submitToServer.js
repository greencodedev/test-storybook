import axios from 'axios'
import {useEffect, useState} from 'react'
import {useSelector, shallowEqual} from 'react-redux'

/**
 * This react hook is for quickly getting ready to submit data to backend with JWT in header
 * Whenever you need to the REST API you can use this.  However submitting to GraphQL API should use gqlClient instead
 *
 * data should be FormData.
 *
 * Note: keep data = null to avoid wrong trigger to server.  Anything other than null will trigger this
 * @param {} URL
 */

const useSubmitToServer = URL => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const {jwt} = useSelector(state => state.user, shallowEqual)

    useEffect(() => {
        //if data is provided, execute below to send to server by axios, with jwt.
        if (data !== null) {
            ;(async function() {
                try {
                    //reset error first before proceed
                    setError(null)

                    const res = await axios.post(URL, data, {
                        headers: {Authorization: 'Bearer ' + jwt},
                    })

                    setData(res.data)
                } catch (e) {
                    console.error(e.response)
                    setError(e.response)
                }
            })()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return [{data, error}, setData]
}

export default useSubmitToServer
