//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here
function dataSet(data){
  console.log(data);
}

function failMessage(message){
  console.log(message);
}
getJohnProfile().then(dataSet).catch(failMessage);