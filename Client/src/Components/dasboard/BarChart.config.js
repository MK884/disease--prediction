import { ApexOptions } from "apexcharts";

// CLASS_NAMES = ['Eczema','Melanoma','Basal Cell Carcinoma','Melanocytic Nevi']



export const predictionsOptions = {
  chart: {
    type: "bar",
    height: 380,
  },
  plotOptions: {
    bar: {
      barHeight: "100%",
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: "bottom",
      },
    },
  },
  colors: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa"],
  dataLabels: {
    enabled: true,
    textAnchor: "start",
    style: {
      colors: ["#fff"],
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
    },
    offsetX: 0,
    dropShadow: {
      enabled: true,
    },
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  xaxis: {
    categories: [
      "Eczema",
      "Melanoma",
      "Basal Cell Carcinoma",
      "Melanocytic Nevi",
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  title: {
    text: "Prediction Status",
    align: "center",
    floating: true,
  },
  
  tooltip: {
    theme: "dark",
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
  },
};


