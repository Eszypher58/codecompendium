import React, { Component } from 'react'
import * as d3 from "d3";
import { select } from 'd3-selection';

class BubbleChart extends Component {
    constructor(props){
       super(props)
           this.state = {
           data : {
            "children": [
              { "id": 1,
                "title": "NPM",
                "size": 20,
                "url": "www.google.com",
                "g": 50,
              },
              { "id": 2,
                "title": "APIs",
                "size": 20,
                "g": 50,
              },
              { "id": 3,
                "title": "C++",
                "size": 20,
                "g": 50,
              },
              { "id": 4,
                "title": "CSS",
                "size": 20,
                "g": 50,
              },
              { "id": 5,
                "title": "Databases",
                "size": 30,
                "g": 50,
              },
              { "id": 6,
                "title": "Design",
                "size": 30,
                "g": 50,
              },
              { "id": 7,
                "title": "React",
                "size": 30,
                "g": 50,
              },
              { "id": 8,
                "title": "HTML",
                "size": 20,
                "g": 50,
              },
              { "id": 9,
                "title": "Humor",
                "size": 20,
                "g": 50,
              },
              { "id": 10,
                "title": "Ruby",
                "size": 10,
                "g": 50,
              },
              { "id": 11,
                "title": "Jobs",
                "size": 20,
                "g": 50,
              },
              { "id": 12,
                "title": "jQuery",
                "size": 30,
                "g": 50,
              },
              { "id": 13,
                "title": "Misc.",
                "size": 20,
                "g": 50,
              },
              { "id": 14,
                "title": "NodeJS",
                "size": 30,
                "g": 50,
              },
              { "id": 15,
                "title": "Angular",
                "size": 20,
                "g": 50,
              },
              { "id": 16,
                "title": "Python",
                "size": 30,
                "g": 150,
              },
              { "id": 17,
                "title": "Javascript",
                "size": 30,
                "g": 150,
              },
              { "id": 18,
                "title": "Frameworks",
                "size": 30,
                "g": 150,
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
        .padding(5);

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
        .attr("id", function(d) { return d.data.id; })
        .attr("r", function(d) { return d.r; })
        .on("click", function(d) { window.open(d.data.url); })
        .style("fill", function(d) { return color(d.data.id); })
        .style("stroke", function(d) { return color(d.data.id)})
        .style("fill-opacity", .3)
        .style("stroke-width", 4)
        .on("mouseover", function(d) {
           d3.select(this).style("fill-opacity", 1)
        .on("mouseout", function(d) {
           d3.select(this).style("fill-opacity", .3)
            });;
    });

getSelect.append("text")
         .attr("dy", "0em")
         .on("click", function(d) { window.open(d.data.url); })
         .attr("font-size","1px")
         .style("text-anchor", "middle")
         .style("font-size", function(d) { return d.r/3 + "px"; })
         .style("font-weight", function(d) {return "bold"})
         .text(function(d) {
             return d.data.title
         });


      getSelect.append("text")
         .attr("dy", "1.2em")
         .on("click", function(d) { window.open(d.data.url); })
         .attr("font-size","1px")
         .style("text-anchor", "middle")
         .style("font-size", function(d) { return d.r/4 + "px"; })
         .text(function(d) {
             return "(" + d.data.size + ")"
         });
}

render(){
    return(
        <div>
            <svg ref={node => this.node = node} width={800} height={800}>
            </svg>

        </div>
    );
  }
}
export default BubbleChart