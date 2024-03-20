export function handleFetch(asyncFunction, failureMessage, successCallback=()=>{}) {
    asyncFunction()
        .then(() => {
            successCallback();
            location.reload();
        })
        .catch(err => {
            alert(failureMessage);
            console.log(err)
        });
}