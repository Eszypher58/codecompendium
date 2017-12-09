import React, { Component } from 'react'
//import './App.css'
import * as d3 from "d3";
import { select } from 'd3-selection';

class BubbleChart extends Component {
    constructor(props){
       super(props)
       this.state = {
           data : {
            "children": [
              { "id": 1,
                "title": "Angular",
                "size": 150,
              },
              { "id": 2,
                "title": "APIs",
                "size": 30,
              },
              { "id": 3,
                "title": "C++",
                "size": 70,
              },
              { "id": 4,
                "title": "CSS",
                "size": 50,
              },
              { "id": 5,
                "title": "Databases",
                "size": 150,
              },
              { "id": 6,
                "title": "Design",
                "size": 150,
              },
              { "id": 7,
                "title": "Frameworks",
                "size": 150,
              },
              { "id": 8,
                "title": "HTML",
                "size": 150,
              },
              { "id": 9,
                "title": "Humor",
                "size": 150,
              },
              { "id": 10,
                "title": "Javascript",
                "size": 150,
              },
              { "id": 11,
                "title": "Jobs",
                "size": 150,
              },
              { "id": 12,
                "title": "jQuery",
                "size": 150,
              },
              { "id": 13,
                "title": "Misc.",
                "size": 150,
              },
              { "id": 14,
                "title": "NodeJS",
                "size": 150,
              },
              { "id": 15,
                "title": "NPM Packages",
                "size": 150,
              },
              { "id": 16,
                "title": "Python",
                "size": 150,
              },
              { "id": 17,
                "title": "React",
                "size": 150,
              },
              { "id": 18,
                "title": "Ruby",
                "size": 150,
              },
            ]
          }
    };
       this.createBubbleChart = this.createBubbleChart.bind(this)
    }
 
    componentDidMount(){

     this.createBubbleChart()
 }
 
 componentDidUpdate(){
     this.createBubbleChart()
 }
 
 createBubbleChart(){
     const node = this.node;
     const data = this.state.data;
     const format = d3.format(",d");
     const svg = d3.select("svg"),
         width = +svg.attr("width"),
         height = +svg.attr("height");
 
     const color = d3.scaleOrdinal()
     .range(["#fbb217", "#e65c23", "#87c23f", "#6ac7b4", "#45c2e6"]);
 
     const bubble = d3.pack(data)
         .size([width, height])
         .padding(1.5);
 
     const nodes = d3.hierarchy(data)
         .sum(function(d) { return d.id; });
 
 
     let getSelect = select(node)
         .selectAll('circle')
         .data(bubble(nodes).descendants())
         .enter()
         .filter(function(d){
             return  !d.children
         })
         .append("g")
         .attr("class", "node")
         .attr("transform", function(d) {
             return "translate(" + d.x + "," + d.y + ")";
         });
 
     getSelect.append("circle")
         .attr("r", function(d) { return d.r; })
         .style("fill", function(d) { return color(d.data.title); })
         .style("stroke", function(d) { return color(d.data.title)})
         .style("fill-opacity", .3)
         .style("stroke-width", 3)
         .attr("xlink:href", d.data.url);
 
     getSelect.append("text")
         .attr("dy", ".3em")
         .attr("font-size","20px")
         .style("text-anchor", "middle")
         .text(function(d) {
             return d.data.title + ": " + d.data.size;
         });
 
 }
 
 render(){
     return(
         <div>
             <svg ref={node => this.node = node} width={1000} height={1000}>
             </svg>
 
         </div>
     );
 }
 }
 export default BubbleChart