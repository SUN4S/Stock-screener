import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { selectStatus } from '../../features/charts/interdaySlice';
import { useTypedSelector } from "../../app/store";
import * as d3 from "d3";

export const InterdayData = () => {
  const interdayData = useSelector((state: RootState) => state.interday.data);
  const interdayError = useSelector((state: RootState) => state.interday.error);

  console.log(interdayData);

  const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


    const svg = d3.select("#my_chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

    let xScale = d3.scaleTime()
      .range([0, width]);
    let xAxis = d3.axisBottom(xScale);
    let xAxisGroup = svg.append('g')
      .classed('x', true)
      .classed('axis', true)
      .attr('transform', `translate(${0},${height})`)
      .call(xAxis);

      let yScale = d3.scaleLinear()
        .range([height, 0]);
      let yAxis = d3.axisLeft(yScale);
      let yAxisGroup = svg.append('g')
        .classed('y', true)
        .classed('axis', true)
        .call(yAxis);

      let pointsGroup = svg.append('g')
      .classed('points', true);


  // console.log(interdayError);
  // if(interdayError === null) {
  //   for( const [key, object] of Object.entries(interdayData["Time Series (5min)"])) {
  //     console.log(`${key}, ${object["1. open"]}`);
  //     console.log(`${key}, ${object["2. high"]}`);
  //     console.log(`${key}, ${object["5. volume"]}`);
  //     break;
  //   }
  // }


  return (
    <>
      { interdayError === null && 
        <>
          <div className="mostRecent">
            <h1>Most Recent: </h1>
            {interdayData}
          </div>
          <div className="drawChart" id="my_chart">

          </div>
        </>
      }
    </>
  )
}