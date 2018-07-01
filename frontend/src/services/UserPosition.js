let options = {

    /** If not set the request might run forever */
    timeout: 10000
}

/** Executed when getCurrentPosition succeeds */

function success(position) {
    return position
}

function error(err) {

  console.warn(`ERROR(${err.code}): ${err.message}`);
}

/** Check Geolocation */

navigator.geolocation.getCurrentPosition(success, error, options);

export default success
