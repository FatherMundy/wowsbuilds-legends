
function getRank (x,y){
  return (y.findIndex(obj => obj.record==x) + 1)
};

function c(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

function verify (x){
  if (x == 1) {
    return '<img src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/617684d889f7617e1fd84c8a_Verified.svg" class="verify-icon">'
  } else {
    return '<img src="https://uploads-ssl.webflow.com/5f3b00acbb1ebd856f32d560/617684d889f76163e2d84c8b_Awaiting%20Verification.svg" class="verify-icon">'
  }
};

const style = {
    td: {
       background: '#061931',
       padding: '12px 8px',
       color: '#fff',
       'font-size': 16,
       'font-family': '\'Open Sans\',sans-serif',
       'border-top': '1px solid #0a284e',
       'border-bottom': '0px solid #061931',
       'border-right': '1px solid #061931',
        'border-left': '1px solid #061931'
    },
    table: {
        background: '#061931',
        width: '100%'
    },
    container: {
       'border-radius': '4px',
       'border': '0px solid #0a284e',
       'padding': '0px',
       background: '#061931'
    },
    th: {
        display: 'none',
    }
  }

new gridjs.Grid({
  columns: [{ id:'memberRank',
             hidden: true
            },
            { id:'username',
             hidden: true
            },
            { id:'memberPage',
             hidden: true
            },
            { id:'verified',
             hidden: true
            },
            { id:'username',
            width: '80%',
             formatter: (_, row) =>  gridjs.html(`<div class="flex-h-c"><b>${getRank(row.cells[5].data,xpRaw)}</b><img src='${row.cells[0].data}' class="verify-icon"> <a href='${row.cells[2].data}'  target="_blank">${row.cells[1].data}</a></div>`)
            },
            {
              id:'record',
              width:'20%',
              formatter: (cell, row) =>  gridjs.html(`<div class="flex-h-r"><div>${c(cell)}</div>${verify(row.cells[3].data)}</div>`),
            }
   ],
  data: xpRaw,
  style: style
}).render(document.getElementById("xpTable"));

new gridjs.Grid({
  columns: [{ id:'memberRank',
             hidden: true
            },
            { id:'username',
             hidden: true
            },
            { id:'memberPage',
             hidden: true
            },
            { id:'verified',
             hidden: true
            },
            { id:'username',
            width: '80%',
             formatter: (_, row) =>  gridjs.html(`<div class="flex-h-c"><b>${getRank(row.cells[5].data,damageRaw)}</b><img src='${row.cells[0].data}' class="verify-icon"> <a href='${row.cells[2].data}'  target="_blank">${row.cells[1].data}</a></div>`)
            },
            {
              id:'record',
             width: '20%',
              formatter: (cell, row) =>  gridjs.html(`<div class="flex-h-r"><div>${c(cell)}</div>${verify(row.cells[3].data)}</div>`),
            }
   ],
  data: damageRaw,
  style: style
}).render(document.getElementById("dmgTable"));