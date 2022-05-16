import React from 'react';
import { useState } from "react";
import {Component }from 'react';
import { Button, WhiteSpace, WingBlank, Flex} from 'antd-mobile';
import ReactFC from "react-fusioncharts";
import './userStat.less'
// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
// Preparing the chart data
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


    const chartData =   [
                            {
                            label: "Venezuela",
                            value: "290"
                            },
                            {
                            label: "Saudi",
                            value: "260"
                            },
                            {
                            label: "Canada",
                            value: "180"
                            },
                            {
                            label: "Iran",
                            value: "140"
                            },
      
                      ];

 // Create a JSON object to store the chart configurations
const chartConfigs = {
    type: "column2d", // The chart type
    width: "400", // Width of the chart
    height: "300", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stay Time at Gym of Last Week",    //Set the chart caption
        // subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
        // xAxisName: "Country",           //Set the x-axis name
        // yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
        numberSuffix: "K",
        theme: "fusion"                 //Set the theme for your chart
      },
      // Chart Data - from step 2
            data:chartData
    }
  };

class UserStat extends Component {
    

    
    render() { 
        return (
            <div style={{backgroundColor: "#FFF3D4" }}>
                <h1 class ="UserTittle">Statistic</h1>
                <WhiteSpace size ="xs"/>
                <Button type="primary"  className = "UserButtonRed1"  inline style={{ marginLeft: '80px' }} >
                  <h1 style={{ color: 'white' }}>1.5 <h class ="UserButton"  style={{ color: 'white' }}>hours</h>
                  <p class ="UserButton"  style={{ color: 'white' }}>Average Stay Time</p></h1>
                  <WhiteSpace size ="xs"/>
                  </Button>
                {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <Button type="primary" className = "UserButtonOrange1" inline style={{marginLeft: '10px',marginRight :'10px' }}>
                  <h1 style={{ color: 'black' }}>7500 <h class ="UserButton" style={{ color: 'black' }}>hours</h><br></br>
                  <p class ="UserButton" style={{ color: 'black' }}>Total calories burned</p></h1>
                </Button>
                <WhiteSpace size ="xs"/>
                <WhiteSpace size ="xs"/>
                <Button type="primary" className = "UserButtonOrange2" inline style={{ marginLeft: '80px' }}>
                  <h1 style={{ color: 'black' }}>Leg<br></br>
                  <p class ="UserButton" style={{ color: 'black' }}>Most trained part</p></h1>
                </Button>
                {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <Button type="primary" className = "UserButtonRed2"  inline style={{ marginLeft: '10px',marginRight :'10px' }}>
                  <h1 style={{ color: 'white' }}>Back <br></br>
                  <p class ="UserButton" style={{ color: 'white' }}>Least trained part</p></h1>
                </Button>
                <WhiteSpace size ="xs"/>
                <br></br> 
                <ReactFC {...chartConfigs } className ="UserGraph"  />
                <br></br>
                <br></br>
                <ReactFC {...chartConfigs } className ="UserGraph" />
         

  
            </div>


        );
    }
}
 
export default UserStat;