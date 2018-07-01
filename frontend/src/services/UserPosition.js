import Api from './Api';
let receivedData;

/** Check for Geolocation support */
if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(
      position => {

        /** Send coordinates to backend server */
        Api().get(`nearby-shops?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`)
        .then(response => {
            console.log(response);
            receivedData = response.data.results;
            console.log(receivedData);
        })
        .catch(error => {
            console.log(error);
        });

    }, err => {

        /** Error handling */
        console.log(`${err.message}, Error code: ${err.code}`);

    },

       /** If not set the request might run forever */
       {timeout: 10000}
    );

} else {

    console.log('Geolocation is not supported for this Browser/OS.');

}

export { receivedData as default};