// Exercise #5
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
async function FailedMessage(){
  try {
    const Pass = await getJohnOrders();
    console.log(Pass);
  }catch (error){
  const Failed = await getJohnProfile();
  console.log(error);
  }
}

FailedMessage();

