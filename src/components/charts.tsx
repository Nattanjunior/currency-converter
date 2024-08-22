'use client'

import React from "react";
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartState {
  series: Array<{ data: Array<{ x: number, y: number }> }>;
  options: object;
  selection: string;
}

//PU1W7JUNDG05R3UG

class ApexChart extends React.Component<{}, ChartState> {
  constructor(props: any) {
    super(props);

    this.state = {

      series: [{
        data: [
          {
            x: new Date("2018-02-12").getTime(),
            y: 5.18,
          },
          {
            x: new Date("2018-02-13").getTime(),
            y: 5.3,
          },
          {
            x: new Date("2018-02-14").getTime(),
            y: 5.18,
          },
          {
            x: new Date("2018-02-15").getTime(),
            y: 5.11,
          },
          {
            x: new Date("2018-02-16").getTime(),
            y: 5.18,
          },
          {
            x: new Date("2018-02-17").getTime(),
            y: 5.25,
          },
          {
            x: new Date("2018-02-18").getTime(),
            y: 5.18,
          },
          {
            x: new Date("2018-02-19").getTime(),
            y: 5.2,
          },
        ]
      }],
      options: {
        chart: {
          id: 'area-datetime',
          type: 'area',
          height: 450,
          zoom: {
            autoScaleYaxis: true
          },
          toolbar: {
            show: false,
          },
        },
        axisTicks: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },

        yaxis: {
          min: 5,
          tickAmount: 4,
          labels: {
            formatter: (value: any) => {
              return value.toFixed(1).replace('.', ',')
            },
          }
        },
        xaxis: {
          type: 'datetime',
          labels: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          axisTicks: {
            show: false,
          },
        },
        colors: ["#7C3AED"],
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
            return `<div class= "tooltip">
          <span>${String(series[seriesIndex][dataPointIndex]).replace('.', ',')}</span>
          <span>${new Date(
              w.globals.seriesX[seriesIndex][dataPointIndex]
            ).toLocaleDateString("pt-BR", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}</span>
            </div>`
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
      },


      selection: 'one_year',

    };
  }

  async fetchData(flag: string) {

  }

  updateData(timeline: any) {
    this.setState({
      selection: timeline
    })

    // switch (timeline) {
    //   case 'one_day':
    //     ApexCharts.exec(
    //       'area-datetime',
    //       'zoomX',
    //       new Date('28 Jan 2013').getTime(),
    //       new Date('27 Feb 2013').getTime()
    //     )
    //     break
    //   case 'five_days':
    //     ApexCharts.exec(
    //       'area-datetime',
    //       'zoomX',
    //       new Date('27 Sep 2012').getTime(),
    //       new Date('27 Feb 2013').getTime()
    //     )
    //     break
    //   case 'one_year':
    //     ApexCharts.exec(
    //       'area-datetime',
    //       'zoomX',
    //       new Date('27 Feb 2012').getTime(),
    //       new Date('27 Feb 2013').getTime()
    //     )
    //     break
    //   case 'ytd':
    //     ApexCharts.exec(
    //       'area-datetime',
    //       'zoomX',
    //       new Date('01 Jan 2013').getTime(),
    //       new Date('27 Feb 2013').getTime()
    //     )
    //     break
    //   case 'all':
    //     ApexCharts.exec(
    //       'area-datetime',
    //       'zoomX',
    //       new Date('23 Jan 2012').getTime(),
    //       new Date('27 Feb 2013').getTime()
    //     )
    //     break
    //   default:
    // }
  }


  render() {
    return (
      <div className='w-[80%] max-md:w-full max-md:h-[25.6rem]'>
        <h2 className="text-4xl max-md:px-6">Taxa de câmbio</h2>
        <div id="chart" >

          <div id="chart-timeline">
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={256} />
          </div>
          <div className="flex justify-between pl-[3rem] max-md:w-[25.6rem] max-md:pl-[3rem] max-md:-mt-4 ">
            <button id="one_day"
              onClick={() => { }}>
              1D
            </button>

            <button id="five_days"

              onClick={() => { }}>
              5D
            </button>

            <button id="one_months"


              onClick={() => { }}>
              1M
            </button>

            <button id="ytd"

              onClick={() => { }}>
              1A
            </button>

            <button id="all"

              onClick={() => { }}>
              5A
            </button>
            <button

              onClick={() => { }}>
              MÁX
            </button>
          </div>
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart
// <h2 className="text-4xl max-md:px-6">Taxa de câmbio</h2>
//className='w-[80%] max-md:w-full max-md:px-10'
