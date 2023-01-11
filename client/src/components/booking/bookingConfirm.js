import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import image from "../assets/img/AirBus1.jpg";
import "../assets/css/bkconfirm.css"

function BookingConfirm(props) {
  //this receives data from flight table and cards
  const location = useLocation();

  const [userSelectedSeats, setUserSelectedSeats] = useState([]);
  const [userData, setUserData] = useState({});
  const [flightID, setFlightID] = useState({});
  const [isloggeduserpassenger, setisloggeduserpassenger] = useState({});

  useEffect(() => {
    setUserSelectedSeats(location.state.userSelectedSeats);
    setUserData(location.state.userData);
    setFlightID(location.state.flightID);
    setisloggeduserpassenger(location.state.isloggeduserpassenger);
  }, [location.state]);

  const submit = (e) => {

    fetch("/api/getConfirmDetails", {
          method: "POST",
          body: JSON.stringify({ flightID, userData, isloggeduserpassenger}),
          headers: { "Content-Type": "application/json" },
        }).then((res) => res.json().then((data) => {}));
    // fetch("/api/book", {
    //   method: "POST",
    //   body: JSON.stringify({ flightID, dataforbackend }),
    //   headers: { "Content-Type": "application/json" },
    // }).then((res) => res.json().then((data) => {}));
  };

  const style_card = {
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
    paddingTop: 5,
  };

  return (
    <>
      {/* {JSON.stringify(userSelectedSeats)}
      {JSON.stringify(userData)}
      {JSON.stringify(flightID)} */}

<div>
    <div class="container bg-white rounded">
        <div class="row d-flex justify-content-center bg pb-5">
            <div class="col-sm-4 col-md-4 ml-1">
                <div class="d-flex flex-row py-4 pl-6">
                    <h5><span class="fa fa-check-square-o"></span><b>Safe</b> | </h5><span class="pl-2">Pay</span>
                </div>
                <div class="bg-white d-flex flex-column p-2" style = {{"border-radius":"20px","width":"332.513px",}}>
                    <div class="text-center mt-4"><img class="img-fluid" src={image} width="200" style = {{"margin-bottom":"16px",}} /></div>
                    <h5 style = {{"text-align":"center","font-size":"20px","font-weight":"bold","height":"20","margin-bottom":"0px",}}>Colombo - New York</h5>
                    <p style = {{"text-align":"center","margin-bottom":"13px",}}>Wednesday 11 January 2023</p><b><span style = {{"color":"rgb(63, 63, 63)",}}>23:00 Colombo</span><br /></b>
                    <p><span style = {{"color":"rgb(63, 63, 63)",}}>Bandaranaike International (CMB)</span><br /></p><b><span style = {{"color":"rgb(63, 63, 63)",}}>04:00 (+1Day) Abu Dhabi</span><br /></b>
                    <p>Abu Dhabi Airport (AUH)</p>
                    <h4 class="green" style = {{"color":"rgb(0,0,0)","font-size":"20px","font-family":"Helvetica",}}></h4>
                </div>
                <div class="bg-white d-flex flex-column p-2" style = {{"border-radius":"20px","width":"332.513px","margin-top":"20px"}}><b><span style = {{"color":"rgb(63, 63, 63)",}}>Duration</span><br /></b>
                    <p><span style = {{"color":"rgb(63, 63, 63)",}}>05:00 H</span><br /></p><b><span style = {{"color":"rgb(63, 63, 63)",}}>Air Craft</span><br /></b>
                    <p>Air Bus 3045</p><b><span style = {{"color":"rgb(63, 63, 63)",}}>Cabin</span><br /></b>
                    <p>Business</p>
                </div>
            </div>
            <div class="col-sm-5 col-md-6 mobile">
                <div class="d-flex justify-content-end py-4">
                    <h6 style = {{"color":"#08575c","text-decoration":"underline",}}><a class="link-href" href="#">Cancel and return to website</a></h6>
                </div>
                <div class="bg-white d-flex flex-column p-3" style = {{"border-radius":"14px", "margin-left":"100px","margin-right":"-100px"}}>
                    <div class="pt-2">
                        <h5>Passengers</h5>
                    </div>
                    <div class="d-flex">
                        <div class="col-8"><span>Rasula Gimhan Koralege</span></div>
                        <div class="ml-auto">
                            <p style = {{"margin-bottom":"-1px","text-align":"right",}}>S1253</p>
                        </div>
                        <div class="ml-auto" style = {{"text-align":"right",}}><b>$ 1000</b></div>
                    </div>
                    <div class="d-flex">
                        <div class="col-8"><span>Fathima Ifra Zaheer</span></div>
                        <div class="ml-auto">
                            <p style = {{"margin-bottom":"-1px","text-align":"right",}}>S1254</p>
                        </div>
                        <div class="ml-auto" style = {{"text-align":"right",}}><b>$ 1000</b></div>
                    </div>
                    <div class="pt-2">
                        <h5>Total </h5>
                    </div>
                    <div class="d-flex">
                        <div class="col-8"><span>Total Pricie</span></div>
                        <div class="ml-auto">
                            <p style = {{"margin-bottom":"-1px",}}></p>
                        </div>
                        <div class="ml-auto" style = {{"text-align":"right",}}>
                            <p style = {{"margin-bottom":"0px",}}>$ 2000</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="col-8"><span>Dicount</span></div>
                        <div class="ml-auto">
                            <p style = {{"margin-bottom":"-1px","text-align":"right",}}>10%</p>
                        </div>
                        <div class="ml-auto" style = {{"text-align":"right",}}>
                            <p style = {{"margin-bottom":"0px",}}>$ 100</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="col-8"><span>Final Price</span></div>
                        <div class="ml-auto">
                            <p style = {{"margin-bottom":"-1px",}}></p>
                        </div>
                        <div class="ml-auto" style = {{"text-align":"right","border-top-width":"1px","border-top-style":"solid","border-bottom-style":"double",}}><b>$ 1900</b></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center bg pb-5" style = {{"margin-top":"40px","padding-top":"10px"}}>
            <div class="col"><b style = {{"font-size":"25px",}}>Choose Your Payment Method</b>
                <div style = {{"margin-right":"100px","margin-left":"100px",}}>
                    <div class="row cc-type-error">
                        <div id="ccOptions" class="container">
                            <div class="form-group">
                                <fieldset id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons">
                                    <legend class="legend"></legend>
                                    <div class="radio"><input id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons1" name="ccTypesIcons" aria-describedby="tpl6_fopTemplate_error-message-purchaseForm-paymentForm-ccTypesIcons" type="radio" /><label for="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons1"><span class="plnext-sr-only">Visa</span><img src="https://book.srilankan.com/plnext/default/plnext_git_22.6.7/static/plnextv2/resources/img/creditCard/card-visa.png" alt="Visa" /></label></div>
                                    <div class="radio"><input id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons2" name="ccTypesIcons" aria-describedby="tpl6_fopTemplate_error-message-purchaseForm-paymentForm-ccTypesIcons" type="radio" /><label for="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons2"><span class="plnext-sr-only">MasterCard</span><img src="https://book.srilankan.com/plnext/default/plnext_git_22.6.7/static/plnextv2/resources/img/creditCard/card-ms.png" alt="MasterCard" /></label></div>
                                    <div class="radio"><input id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons3" name="ccTypesIcons" aria-describedby="tpl6_fopTemplate_error-message-purchaseForm-paymentForm-ccTypesIcons" type="radio" /><label for="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons3"><span class="plnext-sr-only">Amex</span><img src="https://book.srilankan.com/plnext/default/plnext_git_22.6.7/static/plnextv2/resources/img/creditCard/card-amex.png" alt="Amex" /></label></div>
                                    <div class="radio"><input id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons4" name="ccTypesIcons" aria-describedby="tpl6_fopTemplate_error-message-purchaseForm-paymentForm-ccTypesIcons" type="radio" /><label for="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons4"><span class="plnext-sr-only">Diners Club</span><img src="https://book.srilankan.com/plnext/default/plnext_git_22.6.7/static/plnextv2/resources/img/creditCard/dinersClub.png" alt="Diners Club" /></label></div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container bg-white rounded">
        <button class="btn-bk-confirm" type="button" >Back</button>
        <button class="btn-bk-confirm" style = {{ marginLeft: "890px", marginRight: "0px", width:"150px"}} type="button" >Checkout</button></div>
    <div class="container bg-white rounded">
        <div class="bg-white d-flex flex-column mt-4 p-3" style = {{"border-radius":"14px",}}>
            <div class="pt-2">
                <h5>Important<br /></h5>
            </div>
            <div class="pl-2">
                <div><span><br />The class payment confirmation process will take about 20 minutes (from the WhatsApp message sent). Please wait patiently and thank you.<br /></span></div>
            </div>
            <div class="pt-2">
                <h5><br />Need help? Contact Us<br /><br /></h5>
            </div>
            <div class="d-flex">
                <div class="col-8"><span>Admin</span></div>
                <div class="ml-auto"><span>Amila</span></div>
            </div>
            <div class="d-flex">
                <div class="col-8"><span>No. WhatsApp</span></div>
                <div class="ml-auto"><b>+94772626113</b></div>
            </div>
        </div>
    </div>
</div>
    </>
  );
}

export default BookingConfirm;
