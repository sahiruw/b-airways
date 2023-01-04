import React, { useEffect, useState } from "react";
import MuiPhoneNumber from 'material-ui-phone-number';

function SeatSelection(props) {
  const [phoneNumber, setphoneNumber] = useState("");

  return (
    <div class="input-group mb-3">
      <MuiPhoneNumber defaultCountry={'us'} />

      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">
          @
        </span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  );
}

export default SeatSelection;
