import Api from './Api';

/** Check for Geolocation support */
if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(
      position => {

        /** Send coordinates to backend server */
        Api().post('nearby-shops', [position.coords.latitude, position.coords.longitude])
        .then(response => {
            console.log('data sent');
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
