import React, { useRef, useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import variablePie from "highcharts/modules/variable-pie.js";
import HighchartsReact from "highcharts-react-official";
import { withRouter } from 'react-router';

variablePie(Highcharts);

const Circumplex = ({options}) => {
  const chartComponent1 = useRef(null)

  if(!options) return;
  
  return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartComponent1}
        />
  )

}

export default Circumplex;