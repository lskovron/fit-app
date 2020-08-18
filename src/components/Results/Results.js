import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router';

import { sampleResults } from '../sampleResults';
import { useStateValue } from '../../state';
import { CircularProgress } from "@material-ui/core";

const Results = () =>  {
  const [{answers}] = useStateValue();

  let average = array => {
    let avg = array.reduce((a, b) => a + b) / array.length;
    return parseFloat(avg.toFixed(2));
  };

  const formatForURL = results => {
    let urlObj = {};
    let grandTotal = [];
    for (var sub in results) {
      let dimTotal = [];
      for (var property in results[sub]){
        let key = `${sub.substr(0,1)}-${property}`;
        urlObj[key] = average(results[sub][property])*4;
        dimTotal.push(average(results[sub][property])*4);
        grandTotal.push(average(results[sub][property])*4);
      }
      urlObj[`t-${sub}-score`] = average(dimTotal);
    }
    urlObj['t-overall-score'] = average(grandTotal);
    return urlObj;
  }

  function toQueryString(obj) {
    var parts = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
        }
    }
    return parts.join("&");
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


  useEffect(() => {
    const dataSend = formatForURL(sampleResults);
    if(dataSend){
      dataSend.nodupe = randomNumber(1,999999)
      window.location = `http://localhost:8888/fit-backend/results?${toQueryString(dataSend)}`
    }
  }, [])

  return (
    <CircularProgress />
  );
}

export default withRouter(Results);