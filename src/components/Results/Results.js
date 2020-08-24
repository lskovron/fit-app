import React, { useEffect } from "react";
import { withRouter } from 'react-router';

// eslint-disable-next-line
import { sampleResults } from '../sampleResults';
import { useStateValue } from '../../state';
import { CircularProgress } from "@material-ui/core";
import { postsUrl } from '../Config';

const Results = ({history}) =>  {
  const [{
    answers,
    name,
    email,
    age,
    income,
    weight,
    height,
    gender,
    occupation,
    marital
  }] = useStateValue();

  let average = array => {
    let avg = array.reduce((a, b) => parseInt(a) + parseInt(b)) / array.length;
    return parseFloat(avg.toFixed(2));
  };

  const formatForURL = results => {
    console.log(results)
    let urlObj = {};
    let grandTotal = [];
    for (var sub in results) {
      let dimTotal = [];
      for (var property in results[sub]){
        let arr = results[sub][property].filter(item => item !== 'skip')
        if(arr.length){
          let key = `${sub.substr(0,1)}-${property}`;
          let avg = average(arr)*4;
          urlObj[key] = avg;
          dimTotal.push(avg);
          grandTotal.push(avg);
        }
      }
      if(dimTotal.length){
        urlObj[`t-${sub}-score`] = average(dimTotal);
      }
    }
    urlObj['t-overall-score'] = average(grandTotal);
    console.log(urlObj);
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

const addDemoData = obj => {
  [{'participant': name}, {email: email}, {age: age}, {income: income}, {weight: weight}, {height: height}, {gender: gender}, {occupation: occupation}, {marital: marital}].forEach((demo)=> {
    let key = Object.keys(demo)[0];
    if(demo[key] !== ''){
      obj[key] = demo[key]
    }
  })
  return obj;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

  useEffect(() => {
    let proceed = false;
    Object.keys(answers).forEach(key => {
      if(Object.entries(answers[key]).length > 0){
        proceed = true;
        return;
      }
    });
    if(proceed){
      let dataSend = formatForURL(answers);
      dataSend = addDemoData(dataSend);
      if(dataSend){
        dataSend.nodupe = randomNumber(1,999999)
        window.location = `${postsUrl}/results?${toQueryString(dataSend)}`
      }
    } else {
      history.push('/');
    }
    // eslint-disable-next-line
  }, [])

  return (
    <CircularProgress />
  );
}

export default withRouter(Results);