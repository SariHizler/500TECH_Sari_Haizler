import React from 'react';

const Grid = ({ config, data }) => (

  <table>
    <thead>

      <tr>
        {config.map(function (item, i) {
          console.log('test')
          return <th key={i}>{item.title}</th>
        })}

      </tr>
    </thead>
    <tbody>

      {data.map((item) => {
        return <tr> {config.map((field, j) => {
          return <td key={j}>
            {item[field.field]}
          </td>
        })

        }</tr>
      })
      }

    </tbody>
  </table>
);

export default Grid;