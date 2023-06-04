
import axios from 'axios';
import { RESTIOSN } from '../type';
let url =`http://demo4.progressiveaidata.in/api/login-user`
export function RestistonActtion(dispatch, data, Sp) {
    return axios
        .post(url,data).then((response) => {
            console.log("Redux api =---->>>", response.data)
            // Sp(response.data)
            // dispatch(RestistonActtioaaan(response.data))
            if (response.status_code == 200) {
                console.log('RESPONSE Status-------------->>>>', response)
                alert("Sufuly")
                Sp(response)
                dispatch(RestistonActtioaaan(response.data.result))
            }
            else if (response.status_code == 404) {
                alert("Errrrr")

                console.log('RESPONSE Status-------------->>>>', response)
                // Pushtime
            }
        }

        ).catch((error) => {
            console.error("ERROR FOUND" + error);
        })
}
export function RestistonActtioaaan(response) {
    console.log("Redux <<<<<--->>>", response)
    return {
        type: RESTIOSN,
        payload: response,
    }
}

// import axios from 'axios';
// import { RESTIOSN } from '../type';
// export function RestistonActtion(data, Sp, dispatch) {
//     // let url = `http://vscard.progressiveaidata.in/api/login`   //API to render signup
//     let url = `https://tada.progressiveaidata.in/api/user-login`  //API to render signup
//     var headers = {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     };
//     fetch(url, {
//         method: 'POST',
//         // credentials: 'same-origin',
//         mode: 'same-origin',
//         // body:
//         //     RestistonActtioaaan(),
//         headers: ({
//             'Content-type': 'application/json',
//         })
//         // headers: headers,/
//     })
//         .then((Response) => Response.json())
//         .then((Response) => {
//             console.log('RESPONSE apiiii-------------->>>>', Response)

//             console.log('RESPONSE apiiii-------------->>>>', Response.data)
//             Sp();
//             dispatch(RestistonActtioaaan(Response.data))

//             // if (Response.status == 201) {
//             //     console.log('RESPONSE Status-------------->>>>', Response.status)
//             //     dispatch(RestistonActtioaaan(Response.data))
//             //     // navigation.navigate('Login')
//             //    }
//             //   else if (Response.status == 401) {
//             //     console.log('RESPONSE Status-------------->>>>', Response.status)
//             //     // navigation.navigate('Home')
//             // }
//             // else {
//             //     alert("Please Enter the value");
//             // }
//         })
//         .catch((error) => {
//             console.error("ERROR FOUND" + error);
//         })
// }
// export function RestistonActtioaaan(Response) {
//     console.log("response >>>>>>>>>", Response)
//     return {
//         type: RESTIOSN,
//         payload: Response,
//     }
// }