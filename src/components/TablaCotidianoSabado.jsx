import React from 'react'

const TablaCotidianoSabado = ({ asistencia }) => {



  return (
    <div>
      <div className="tablaAsistenciaViernes">
        <h2>Tabla de Cotidiano y Tareas</h2>

        <table>
          <thead>
            <tr>
              <th></th>
              <th>Leccion 1</th>
              <th>Leccion 2</th>
              <th>Leccion 3</th>
              <th>Leccion 4</th>
              <th>Leccion 5</th>
              <th>Leccion 6</th>
              <th>Leccion 7</th>
              <th>Leccion 8</th>
              <th>Leccion 9</th>
              <th>Leccion 10</th>
              <th>Leccion 11</th>
              <th>Leccion 12</th>
              <th>Leccion 13</th>
              <th>Leccion 14</th>
              <th>Leccion 15</th>
              <th>Leccion 16</th>
              <th>Leccion 17</th>
              <th>Leccion 18</th>
              <th>Leccion 19</th>
              <th>Leccion 20</th>
              <th>Leccion 21</th>
              <th>Leccion 22</th>
              <th>Leccion 23</th>
              <th>Leccion 24</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th className='nombre'>{asistencia[0]?.Usuario}</th>
              <td>{asistencia[0]?.Cotidiano1}<br /> {asistencia[0]?.Tarea1}</td>
              <td>{asistencia[0]?.Cotidiano2} <br /> {asistencia[0]?.Tarea2}</td>
              <td>{asistencia[0]?.Cotidiano3} <br /> {asistencia[0]?.Tarea3}</td>
              <td>{asistencia[0]?.Cotidiano4} <br /> {asistencia[0]?.Tarea4}</td>
              <td>{asistencia[0]?.Cotidiano5} <br /> {asistencia[0]?.Tarea5}</td>
              <td>{asistencia[0]?.Cotidiano6} <br /> {asistencia[0]?.Tarea6}</td>
              <td>{asistencia[0]?.Cotidiano7} <br /> {asistencia[0]?.Tarea7}</td>
              <td>{asistencia[0]?.Cotidiano8} <br /> {asistencia[0]?.Tarea8}</td>
              <td>{asistencia[0]?.Cotidiano9} <br /> {asistencia[0]?.Tarea9}</td>
              <td>{asistencia[0]?.Cotidiano10} <br /> {asistencia[0]?.Tarea10}</td>
              <td>{asistencia[0]?.Cotidiano11} <br /> {asistencia[0]?.Tarea11}</td>
              <td>{asistencia[0]?.Cotidiano12} <br /> {asistencia[0]?.Tarea12}</td>
              <td>{asistencia[0]?.Cotidiano13} <br /> {asistencia[0]?.Tarea13}</td>
              <td>{asistencia[0]?.Cotidiano14} <br /> {asistencia[0]?.Tarea14}</td>
              <td>{asistencia[0]?.Cotidiano15} <br /> {asistencia[0]?.Tarea15}</td>
              <td>{asistencia[0]?.Cotidiano16} <br /> {asistencia[0]?.Tarea16}</td>
              <td>{asistencia[0]?.Cotidiano17} <br /> {asistencia[0]?.Tarea17}</td>
              <td>{asistencia[0]?.Cotidiano18} <br /> {asistencia[0]?.Tarea18}</td>
              <td>{asistencia[0]?.Cotidiano19} <br /> {asistencia[0]?.Tarea19}</td>
              <td>{asistencia[0]?.Cotidiano20} <br /> {asistencia[0]?.Tarea20}</td>
              <td>{asistencia[0]?.Cotidiano21} <br /> {asistencia[0]?.Tarea21}</td>
              <td>{asistencia[0]?.Cotidiano22} <br /> {asistencia[0]?.Tarea22}</td>
              <td>{asistencia[0]?.Cotidiano23} <br /> {asistencia[0]?.Tarea23}</td>
              <td>{asistencia[0]?.Cotidiano23} <br /> {asistencia[0]?.Tarea24}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[1]?.Usuario}</th>
              <td>{asistencia[1]?.Cotidiano1}<br /> {asistencia[1]?.Tarea1}</td>
              <td>{asistencia[1]?.Cotidiano2} <br /> {asistencia[1]?.Tarea2}</td>
              <td>{asistencia[1]?.Cotidiano3} <br /> {asistencia[1]?.Tarea3}</td>
              <td>{asistencia[1]?.Cotidiano4} <br /> {asistencia[1]?.Tarea4}</td>
              <td>{asistencia[1]?.Cotidiano5} <br /> {asistencia[1]?.Tarea5}</td>
              <td>{asistencia[1]?.Cotidiano6} <br /> {asistencia[1]?.Tarea6}</td>
              <td>{asistencia[1]?.Cotidiano7} <br /> {asistencia[1]?.Tarea7}</td>
              <td>{asistencia[1]?.Cotidiano8} <br /> {asistencia[1]?.Tarea8}</td>
              <td>{asistencia[1]?.Cotidiano9} <br /> {asistencia[1]?.Tarea9}</td>
              <td>{asistencia[1]?.Cotidiano10} <br /> {asistencia[1]?.Tarea10}</td>
              <td>{asistencia[1]?.Cotidiano11} <br /> {asistencia[1]?.Tarea11}</td>
              <td>{asistencia[1]?.Cotidiano12} <br /> {asistencia[1]?.Tarea12}</td>
              <td>{asistencia[1]?.Cotidiano13} <br /> {asistencia[1]?.Tarea13}</td>
              <td>{asistencia[1]?.Cotidiano14} <br /> {asistencia[1]?.Tarea14}</td>
              <td>{asistencia[1]?.Cotidiano15} <br /> {asistencia[1]?.Tarea15}</td>
              <td>{asistencia[1]?.Cotidiano16} <br /> {asistencia[1]?.Tarea16}</td>
              <td>{asistencia[1]?.Cotidiano17} <br /> {asistencia[1]?.Tarea17}</td>
              <td>{asistencia[1]?.Cotidiano18} <br /> {asistencia[1]?.Tarea18}</td>
              <td>{asistencia[1]?.Cotidiano19} <br /> {asistencia[1]?.Tarea19}</td>
              <td>{asistencia[1]?.Cotidiano20} <br /> {asistencia[1]?.Tarea20}</td>
              <td>{asistencia[1]?.Cotidiano21} <br /> {asistencia[1]?.Tarea21}</td>
              <td>{asistencia[1]?.Cotidiano22} <br /> {asistencia[1]?.Tarea22}</td>
              <td>{asistencia[1]?.Cotidiano23} <br /> {asistencia[1]?.Tarea23}</td>
              <td>{asistencia[1]?.Cotidiano23} <br /> {asistencia[1]?.Tarea24}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[2]?.Usuario}</th>
              <td>{asistencia[2]?.Cotidiano1}<br /> {asistencia[2]?.Tarea1}</td>
              <td>{asistencia[2]?.Cotidiano2} <br /> {asistencia[2]?.Tarea2}</td>
              <td>{asistencia[2]?.Cotidiano3} <br /> {asistencia[2]?.Tarea3}</td>
              <td>{asistencia[2]?.Cotidiano4} <br /> {asistencia[2]?.Tarea4}</td>
              <td>{asistencia[2]?.Cotidiano5} <br /> {asistencia[2]?.Tarea5}</td>
              <td>{asistencia[2]?.Cotidiano6} <br /> {asistencia[2]?.Tarea6}</td>
              <td>{asistencia[2]?.Cotidiano7} <br /> {asistencia[2]?.Tarea7}</td>
              <td>{asistencia[2]?.Cotidiano8} <br /> {asistencia[2]?.Tarea8}</td>
              <td>{asistencia[2]?.Cotidiano9} <br /> {asistencia[2]?.Tarea9}</td>
              <td>{asistencia[2]?.Cotidiano10} <br /> {asistencia[2]?.Tarea10}</td>
              <td>{asistencia[2]?.Cotidiano11} <br /> {asistencia[2]?.Tarea11}</td>
              <td>{asistencia[2]?.Cotidiano12} <br /> {asistencia[2]?.Tarea12}</td>
              <td>{asistencia[2]?.Cotidiano13} <br /> {asistencia[2]?.Tarea13}</td>
              <td>{asistencia[2]?.Cotidiano14} <br /> {asistencia[2]?.Tarea14}</td>
              <td>{asistencia[2]?.Cotidiano15} <br /> {asistencia[2]?.Tarea15}</td>
              <td>{asistencia[2]?.Cotidiano16} <br /> {asistencia[2]?.Tarea16}</td>
              <td>{asistencia[2]?.Cotidiano17} <br /> {asistencia[2]?.Tarea17}</td>
              <td>{asistencia[2]?.Cotidiano18} <br /> {asistencia[2]?.Tarea18}</td>
              <td>{asistencia[2]?.Cotidiano19} <br /> {asistencia[2]?.Tarea19}</td>
              <td>{asistencia[2]?.Cotidiano20} <br /> {asistencia[2]?.Tarea20}</td>
              <td>{asistencia[2]?.Cotidiano21} <br /> {asistencia[2]?.Tarea21}</td>
              <td>{asistencia[2]?.Cotidiano22} <br /> {asistencia[2]?.Tarea22}</td>
              <td>{asistencia[2]?.Cotidiano23} <br /> {asistencia[2]?.Tarea23}</td>
              <td>{asistencia[2]?.Cotidiano23} <br /> {asistencia[2]?.Tarea24}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[3]?.Usuario}</th>
              <td>{asistencia[3]?.Cotidiano1}<br /> {asistencia[3]?.Tarea1}</td>
              <td>{asistencia[3]?.Cotidiano2} <br /> {asistencia[3]?.Tarea2}</td>
              <td>{asistencia[3]?.Cotidiano3} <br /> {asistencia[3]?.Tarea3}</td>
              <td>{asistencia[3]?.Cotidiano4} <br /> {asistencia[3]?.Tarea4}</td>
              <td>{asistencia[3]?.Cotidiano5} <br /> {asistencia[3]?.Tarea5}</td>
              <td>{asistencia[3]?.Cotidiano6} <br /> {asistencia[3]?.Tarea6}</td>
              <td>{asistencia[3]?.Cotidiano7} <br /> {asistencia[3]?.Tarea7}</td>
              <td>{asistencia[3]?.Cotidiano8} <br /> {asistencia[3]?.Tarea8}</td>
              <td>{asistencia[3]?.Cotidiano9} <br /> {asistencia[3]?.Tarea9}</td>
              <td>{asistencia[3]?.Cotidiano10} <br /> {asistencia[3]?.Tarea10}</td>
              <td>{asistencia[3]?.Cotidiano11} <br /> {asistencia[3]?.Tarea11}</td>
              <td>{asistencia[3]?.Cotidiano12} <br /> {asistencia[3]?.Tarea12}</td>
              <td>{asistencia[3]?.Cotidiano13} <br /> {asistencia[3]?.Tarea13}</td>
              <td>{asistencia[3]?.Cotidiano14} <br /> {asistencia[3]?.Tarea14}</td>
              <td>{asistencia[3]?.Cotidiano15} <br /> {asistencia[3]?.Tarea15}</td>
              <td>{asistencia[3]?.Cotidiano16} <br /> {asistencia[3]?.Tarea16}</td>
              <td>{asistencia[3]?.Cotidiano17} <br /> {asistencia[3]?.Tarea17}</td>
              <td>{asistencia[3]?.Cotidiano18} <br /> {asistencia[3]?.Tarea18}</td>
              <td>{asistencia[3]?.Cotidiano19} <br /> {asistencia[3]?.Tarea19}</td>
              <td>{asistencia[3]?.Cotidiano20} <br /> {asistencia[3]?.Tarea20}</td>
              <td>{asistencia[3]?.Cotidiano21} <br /> {asistencia[3]?.Tarea21}</td>
              <td>{asistencia[3]?.Cotidiano22} <br /> {asistencia[3]?.Tarea22}</td>
              <td>{asistencia[3]?.Cotidiano23} <br /> {asistencia[3]?.Tarea23}</td>
              <td>{asistencia[3]?.Cotidiano23} <br /> {asistencia[3]?.Tarea24}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[4]?.Usuario}</th>
              <td>{asistencia[4]?.Cotidiano1}<br /> {asistencia[4]?.Tarea1}</td>
              <td>{asistencia[4]?.Cotidiano2} <br /> {asistencia[4]?.Tarea2}</td>
              <td>{asistencia[4]?.Cotidiano3} <br /> {asistencia[4]?.Tarea3}</td>
              <td>{asistencia[4]?.Cotidiano4} <br /> {asistencia[4]?.Tarea4}</td>
              <td>{asistencia[4]?.Cotidiano5} <br /> {asistencia[4]?.Tarea5}</td>
              <td>{asistencia[4]?.Cotidiano6} <br /> {asistencia[4]?.Tarea6}</td>
              <td>{asistencia[4]?.Cotidiano7} <br /> {asistencia[4]?.Tarea7}</td>
              <td>{asistencia[4]?.Cotidiano8} <br /> {asistencia[4]?.Tarea8}</td>
              <td>{asistencia[4]?.Cotidiano9} <br /> {asistencia[4]?.Tarea9}</td>
              <td>{asistencia[4]?.Cotidiano10} <br /> {asistencia[4]?.Tarea10}</td>
              <td>{asistencia[4]?.Cotidiano11} <br /> {asistencia[4]?.Tarea11}</td>
              <td>{asistencia[4]?.Cotidiano12} <br /> {asistencia[4]?.Tarea12}</td>
              <td>{asistencia[4]?.Cotidiano13} <br /> {asistencia[4]?.Tarea13}</td>
              <td>{asistencia[4]?.Cotidiano14} <br /> {asistencia[4]?.Tarea14}</td>
              <td>{asistencia[4]?.Cotidiano15} <br /> {asistencia[4]?.Tarea15}</td>
              <td>{asistencia[4]?.Cotidiano16} <br /> {asistencia[4]?.Tarea16}</td>
              <td>{asistencia[4]?.Cotidiano17} <br /> {asistencia[4]?.Tarea17}</td>
              <td>{asistencia[4]?.Cotidiano18} <br /> {asistencia[4]?.Tarea18}</td>
              <td>{asistencia[4]?.Cotidiano19} <br /> {asistencia[4]?.Tarea19}</td>
              <td>{asistencia[4]?.Cotidiano20} <br /> {asistencia[4]?.Tarea20}</td>
              <td>{asistencia[4]?.Cotidiano21} <br /> {asistencia[4]?.Tarea21}</td>
              <td>{asistencia[4]?.Cotidiano22} <br /> {asistencia[4]?.Tarea22}</td>
              <td>{asistencia[4]?.Cotidiano23} <br /> {asistencia[4]?.Tarea23}</td>
              <td>{asistencia[4]?.Cotidiano23} <br /> {asistencia[4]?.Tarea24}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[5]?.Usuario}</th>
              <td>{asistencia[5]?.Cotidiano1}<br /> {asistencia[5]?.Tarea1}</td>
              <td>{asistencia[5]?.Cotidiano2} <br /> {asistencia[5]?.Tarea2}</td>
              <td>{asistencia[5]?.Cotidiano3} <br /> {asistencia[5]?.Tarea3}</td>
              <td>{asistencia[5]?.Cotidiano4} <br /> {asistencia[5]?.Tarea4}</td>
              <td>{asistencia[5]?.Cotidiano5} <br /> {asistencia[5]?.Tarea5}</td>
              <td>{asistencia[5]?.Cotidiano6} <br /> {asistencia[5]?.Tarea6}</td>
              <td>{asistencia[5]?.Cotidiano7} <br /> {asistencia[5]?.Tarea7}</td>
              <td>{asistencia[5]?.Cotidiano8} <br /> {asistencia[5]?.Tarea8}</td>
              <td>{asistencia[5]?.Cotidiano9} <br /> {asistencia[5]?.Tarea9}</td>
              <td>{asistencia[5]?.Cotidiano10} <br /> {asistencia[5]?.Tarea10}</td>
              <td>{asistencia[5]?.Cotidiano11} <br /> {asistencia[5]?.Tarea11}</td>
              <td>{asistencia[5]?.Cotidiano12} <br /> {asistencia[5]?.Tarea12}</td>
              <td>{asistencia[5]?.Cotidiano13} <br /> {asistencia[5]?.Tarea13}</td>
              <td>{asistencia[5]?.Cotidiano14} <br /> {asistencia[5]?.Tarea14}</td>
              <td>{asistencia[5]?.Cotidiano15} <br /> {asistencia[5]?.Tarea15}</td>
              <td>{asistencia[5]?.Cotidiano16} <br /> {asistencia[5]?.Tarea16}</td>
              <td>{asistencia[5]?.Cotidiano17} <br /> {asistencia[5]?.Tarea17}</td>
              <td>{asistencia[5]?.Cotidiano18} <br /> {asistencia[5]?.Tarea18}</td>
              <td>{asistencia[5]?.Cotidiano19} <br /> {asistencia[5]?.Tarea19}</td>
              <td>{asistencia[5]?.Cotidiano20} <br /> {asistencia[5]?.Tarea20}</td>
              <td>{asistencia[5]?.Cotidiano21} <br /> {asistencia[5]?.Tarea21}</td>
              <td>{asistencia[5]?.Cotidiano22} <br /> {asistencia[5]?.Tarea22}</td>
              <td>{asistencia[5]?.Cotidiano23} <br /> {asistencia[5]?.Tarea23}</td>
              <td>{asistencia[5]?.Cotidiano23} <br /> {asistencia[5]?.Tarea24}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[6]?.Usuario}</th>
              <td>{asistencia[6]?.Cotidiano1}<br /> {asistencia[0]?.Tarea1}</td>
              <td>{asistencia[6]?.Cotidiano2} <br /> {asistencia[6]?.Tarea2}</td>
              <td>{asistencia[6]?.Cotidiano3} <br /> {asistencia[6]?.Tarea3}</td>
              <td>{asistencia[6]?.Cotidiano4} <br /> {asistencia[6]?.Tarea4}</td>
              <td>{asistencia[6]?.Cotidiano5} <br /> {asistencia[6]?.Tarea5}</td>
              <td>{asistencia[6]?.Cotidiano6} <br /> {asistencia[6]?.Tarea6}</td>
              <td>{asistencia[6]?.Cotidiano7} <br /> {asistencia[6]?.Tarea7}</td>
              <td>{asistencia[6]?.Cotidiano8} <br /> {asistencia[6]?.Tarea8}</td>
              <td>{asistencia[6]?.Cotidiano9} <br /> {asistencia[6]?.Tarea9}</td>
              <td>{asistencia[6]?.Cotidiano10} <br /> {asistencia[6]?.Tarea10}</td>
              <td>{asistencia[6]?.Cotidiano11} <br /> {asistencia[6]?.Tarea11}</td>
              <td>{asistencia[6]?.Cotidiano12} <br /> {asistencia[6]?.Tarea12}</td>
              <td>{asistencia[6]?.Cotidiano13} <br /> {asistencia[6]?.Tarea13}</td>
              <td>{asistencia[6]?.Cotidiano14} <br /> {asistencia[6]?.Tarea14}</td>
              <td>{asistencia[6]?.Cotidiano15} <br /> {asistencia[6]?.Tarea15}</td>
              <td>{asistencia[6]?.Cotidiano16} <br /> {asistencia[6]?.Tarea16}</td>
              <td>{asistencia[6]?.Cotidiano17} <br /> {asistencia[6]?.Tarea17}</td>
              <td>{asistencia[6]?.Cotidiano18} <br /> {asistencia[6]?.Tarea18}</td>
              <td>{asistencia[6]?.Cotidiano19} <br /> {asistencia[6]?.Tarea19}</td>
              <td>{asistencia[6]?.Cotidiano20} <br /> {asistencia[6]?.Tarea20}</td>
              <td>{asistencia[6]?.Cotidiano21} <br /> {asistencia[6]?.Tarea21}</td>
              <td>{asistencia[6]?.Cotidiano22} <br /> {asistencia[6]?.Tarea22}</td>
              <td>{asistencia[6]?.Cotidiano23} <br /> {asistencia[6]?.Tarea23}</td>
              <td>{asistencia[6]?.Cotidiano23} <br /> {asistencia[6]?.Tarea24}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[7]?.Usuario}</th>
              <td>{asistencia[7]?.Cotidiano1}<br /> {asistencia[7]?.Tarea1}</td>
              <td>{asistencia[7]?.Cotidiano2} <br /> {asistencia[7]?.Tarea2}</td>
              <td>{asistencia[7]?.Cotidiano3} <br /> {asistencia[7]?.Tarea3}</td>
              <td>{asistencia[7]?.Cotidiano4} <br /> {asistencia[7]?.Tarea4}</td>
              <td>{asistencia[7]?.Cotidiano5} <br /> {asistencia[7]?.Tarea5}</td>
              <td>{asistencia[7]?.Cotidiano6} <br /> {asistencia[7]?.Tarea6}</td>
              <td>{asistencia[7]?.Cotidiano7} <br /> {asistencia[7]?.Tarea7}</td>
              <td>{asistencia[7]?.Cotidiano8} <br /> {asistencia[7]?.Tarea8}</td>
              <td>{asistencia[7]?.Cotidiano9} <br /> {asistencia[7]?.Tarea9}</td>
              <td>{asistencia[7]?.Cotidiano10} <br /> {asistencia[7]?.Tarea10}</td>
              <td>{asistencia[7]?.Cotidiano11} <br /> {asistencia[7]?.Tarea11}</td>
              <td>{asistencia[7]?.Cotidiano12} <br /> {asistencia[7]?.Tarea12}</td>
              <td>{asistencia[7]?.Cotidiano13} <br /> {asistencia[7]?.Tarea13}</td>
              <td>{asistencia[7]?.Cotidiano14} <br /> {asistencia[7]?.Tarea14}</td>
              <td>{asistencia[7]?.Cotidiano15} <br /> {asistencia[7]?.Tarea15}</td>
              <td>{asistencia[7]?.Cotidiano16} <br /> {asistencia[7]?.Tarea16}</td>
              <td>{asistencia[7]?.Cotidiano17} <br /> {asistencia[7]?.Tarea17}</td>
              <td>{asistencia[7]?.Cotidiano18} <br /> {asistencia[7]?.Tarea18}</td>
              <td>{asistencia[7]?.Cotidiano19} <br /> {asistencia[7]?.Tarea19}</td>
              <td>{asistencia[7]?.Cotidiano20} <br /> {asistencia[7]?.Tarea20}</td>
              <td>{asistencia[7]?.Cotidiano21} <br /> {asistencia[7]?.Tarea21}</td>
              <td>{asistencia[7]?.Cotidiano22} <br /> {asistencia[7]?.Tarea22}</td>
              <td>{asistencia[7]?.Cotidiano23} <br /> {asistencia[7]?.Tarea23}</td>
              <td>{asistencia[7]?.Cotidiano24} <br /> {asistencia[7]?.Tarea24}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[8]?.Usuario}</th>
              <td>{asistencia[8]?.Cotidiano1}<br /> {asistencia[8]?.Tarea1}</td>
              <td>{asistencia[8]?.Cotidiano2} <br /> {asistencia[8]?.Tarea2}</td>
              <td>{asistencia[8]?.Cotidiano3} <br /> {asistencia[8]?.Tarea3}</td>
              <td>{asistencia[8]?.Cotidiano4} <br /> {asistencia[8]?.Tarea4}</td>
              <td>{asistencia[8]?.Cotidiano5} <br /> {asistencia[8]?.Tarea5}</td>
              <td>{asistencia[8]?.Cotidiano6} <br /> {asistencia[8]?.Tarea6}</td>
              <td>{asistencia[8]?.Cotidiano7} <br /> {asistencia[8]?.Tarea7}</td>
              <td>{asistencia[8]?.Cotidiano8} <br /> {asistencia[8]?.Tarea8}</td>
              <td>{asistencia[8]?.Cotidiano9} <br /> {asistencia[8]?.Tarea9}</td>
              <td>{asistencia[8]?.Cotidiano10} <br /> {asistencia[8]?.Tarea10}</td>
              <td>{asistencia[8]?.Cotidiano11} <br /> {asistencia[8]?.Tarea11}</td>
              <td>{asistencia[8]?.Cotidiano12} <br /> {asistencia[8]?.Tarea12}</td>
              <td>{asistencia[8]?.Cotidiano13} <br /> {asistencia[8]?.Tarea13}</td>
              <td>{asistencia[8]?.Cotidiano14} <br /> {asistencia[8]?.Tarea14}</td>
              <td>{asistencia[8]?.Cotidiano15} <br /> {asistencia[8]?.Tarea15}</td>
              <td>{asistencia[8]?.Cotidiano16} <br /> {asistencia[8]?.Tarea16}</td>
              <td>{asistencia[8]?.Cotidiano17} <br /> {asistencia[8]?.Tarea17}</td>
              <td>{asistencia[8]?.Cotidiano18} <br /> {asistencia[8]?.Tarea18}</td>
              <td>{asistencia[8]?.Cotidiano19} <br /> {asistencia[8]?.Tarea19}</td>
              <td>{asistencia[8]?.Cotidiano20} <br /> {asistencia[8]?.Tarea20}</td>
              <td>{asistencia[8]?.Cotidiano21} <br /> {asistencia[8]?.Tarea21}</td>
              <td>{asistencia[8]?.Cotidiano22} <br /> {asistencia[8]?.Tarea22}</td>
              <td>{asistencia[8]?.Cotidiano23} <br /> {asistencia[8]?.Tarea23}</td>
              <td>{asistencia[8]?.Cotidiano23} <br /> {asistencia[8]?.Tarea24}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[9]?.Usuario}</th>
              <td>{asistencia[9]?.Cotidiano1}<br /> {asistencia[9]?.Tarea1}</td>
              <td>{asistencia[9]?.Cotidiano2} <br /> {asistencia[9]?.Tarea2}</td>
              <td>{asistencia[9]?.Cotidiano3} <br /> {asistencia[9]?.Tarea3}</td>
              <td>{asistencia[9]?.Cotidiano4} <br /> {asistencia[9]?.Tarea4}</td>
              <td>{asistencia[9]?.Cotidiano5} <br /> {asistencia[9]?.Tarea5}</td>
              <td>{asistencia[9]?.Cotidiano6} <br /> {asistencia[9]?.Tarea6}</td>
              <td>{asistencia[9]?.Cotidiano7} <br /> {asistencia[9]?.Tarea7}</td>
              <td>{asistencia[9]?.Cotidiano8} <br /> {asistencia[9]?.Tarea8}</td>
              <td>{asistencia[9]?.Cotidiano9} <br /> {asistencia[9]?.Tarea9}</td>
              <td>{asistencia[9]?.Cotidiano10} <br /> {asistencia[9]?.Tarea10}</td>
              <td>{asistencia[9]?.Cotidiano11} <br /> {asistencia[9]?.Tarea11}</td>
              <td>{asistencia[9]?.Cotidiano12} <br /> {asistencia[9]?.Tarea12}</td>
              <td>{asistencia[9]?.Cotidiano13} <br /> {asistencia[9]?.Tarea13}</td>
              <td>{asistencia[9]?.Cotidiano14} <br /> {asistencia[9]?.Tarea14}</td>
              <td>{asistencia[9]?.Cotidiano15} <br /> {asistencia[9]?.Tarea15}</td>
              <td>{asistencia[9]?.Cotidiano16} <br /> {asistencia[9]?.Tarea16}</td>
              <td>{asistencia[9]?.Cotidiano17} <br /> {asistencia[9]?.Tarea17}</td>
              <td>{asistencia[9]?.Cotidiano18} <br /> {asistencia[9]?.Tarea18}</td>
              <td>{asistencia[9]?.Cotidiano19} <br /> {asistencia[9]?.Tarea19}</td>
              <td>{asistencia[9]?.Cotidiano20} <br /> {asistencia[9]?.Tarea20}</td>
              <td>{asistencia[9]?.Cotidiano21} <br /> {asistencia[9]?.Tarea21}</td>
              <td>{asistencia[9]?.Cotidiano22} <br /> {asistencia[9]?.Tarea22}</td>
              <td>{asistencia[9]?.Cotidiano23} <br /> {asistencia[9]?.Tarea23}</td>
              <td>{asistencia[9]?.Cotidiano23} <br /> {asistencia[9]?.Tarea24}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[10]?.Usuario}</th>
              <td>{asistencia[10]?.Cotidiano1}<br /> {asistencia[10]?.Tarea1}</td>
              <td>{asistencia[10]?.Cotidiano2} <br /> {asistencia[10]?.Tarea2}</td>
              <td>{asistencia[10]?.Cotidiano3} <br /> {asistencia[10]?.Tarea3}</td>
              <td>{asistencia[10]?.Cotidiano4} <br /> {asistencia[10]?.Tarea4}</td>
              <td>{asistencia[10]?.Cotidiano5} <br /> {asistencia[10]?.Tarea5}</td>
              <td>{asistencia[10]?.Cotidiano6} <br /> {asistencia[10]?.Tarea6}</td>
              <td>{asistencia[10]?.Cotidiano7} <br /> {asistencia[10]?.Tarea7}</td>
              <td>{asistencia[10]?.Cotidiano8} <br /> {asistencia[10]?.Tarea8}</td>
              <td>{asistencia[10]?.Cotidiano9} <br /> {asistencia[10]?.Tarea9}</td>
              <td>{asistencia[10]?.Cotidiano10} <br /> {asistencia[10]?.Tarea10}</td>
              <td>{asistencia[10]?.Cotidiano11} <br /> {asistencia[10]?.Tarea11}</td>
              <td>{asistencia[10]?.Cotidiano12} <br /> {asistencia[10]?.Tarea12}</td>
              <td>{asistencia[10]?.Cotidiano13} <br /> {asistencia[10]?.Tarea13}</td>
              <td>{asistencia[10]?.Cotidiano14} <br /> {asistencia[10]?.Tarea14}</td>
              <td>{asistencia[10]?.Cotidiano15} <br /> {asistencia[10]?.Tarea15}</td>
              <td>{asistencia[10]?.Cotidiano16} <br /> {asistencia[10]?.Tarea16}</td>
              <td>{asistencia[10]?.Cotidiano17} <br /> {asistencia[10]?.Tarea17}</td>
              <td>{asistencia[10]?.Cotidiano18} <br /> {asistencia[10]?.Tarea18}</td>
              <td>{asistencia[10]?.Cotidiano19} <br /> {asistencia[10]?.Tarea19}</td>
              <td>{asistencia[10]?.Cotidiano20} <br /> {asistencia[10]?.Tarea20}</td>
              <td>{asistencia[10]?.Cotidiano21} <br /> {asistencia[10]?.Tarea21}</td>
              <td>{asistencia[10]?.Cotidiano22} <br /> {asistencia[10]?.Tarea22}</td>
              <td>{asistencia[10]?.Cotidiano23} <br /> {asistencia[10]?.Tarea23}</td>
              <td>{asistencia[10]?.Cotidiano23} <br /> {asistencia[10]?.Tarea24}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[11]?.Usuario}</th>
              <td>{asistencia[11]?.Cotidiano1}<br /> {asistencia[11]?.Tarea1}</td>
              <td>{asistencia[11]?.Cotidiano2} <br /> {asistencia[11]?.Tarea2}</td>
              <td>{asistencia[11]?.Cotidiano3} <br /> {asistencia[11]?.Tarea3}</td>
              <td>{asistencia[11]?.Cotidiano4} <br /> {asistencia[11]?.Tarea4}</td>
              <td>{asistencia[11]?.Cotidiano5} <br /> {asistencia[11]?.Tarea5}</td>
              <td>{asistencia[11]?.Cotidiano6} <br /> {asistencia[11]?.Tarea6}</td>
              <td>{asistencia[11]?.Cotidiano7} <br /> {asistencia[11]?.Tarea7}</td>
              <td>{asistencia[11]?.Cotidiano8} <br /> {asistencia[11]?.Tarea8}</td>
              <td>{asistencia[11]?.Cotidiano9} <br /> {asistencia[11]?.Tarea9}</td>
              <td>{asistencia[11]?.Cotidiano10} <br /> {asistencia[11]?.Tarea10}</td>
              <td>{asistencia[11]?.Cotidiano11} <br /> {asistencia[11]?.Tarea11}</td>
              <td>{asistencia[11]?.Cotidiano12} <br /> {asistencia[11]?.Tarea12}</td>
              <td>{asistencia[11]?.Cotidiano13} <br /> {asistencia[11]?.Tarea13}</td>
              <td>{asistencia[11]?.Cotidiano14} <br /> {asistencia[11]?.Tarea14}</td>
              <td>{asistencia[11]?.Cotidiano15} <br /> {asistencia[11]?.Tarea15}</td>
              <td>{asistencia[11]?.Cotidiano16} <br /> {asistencia[11]?.Tarea16}</td>
              <td>{asistencia[11]?.Cotidiano17} <br /> {asistencia[11]?.Tarea17}</td>
              <td>{asistencia[11]?.Cotidiano18} <br /> {asistencia[11]?.Tarea18}</td>
              <td>{asistencia[11]?.Cotidiano19} <br /> {asistencia[11]?.Tarea19}</td>
              <td>{asistencia[11]?.Cotidiano20} <br /> {asistencia[11]?.Tarea20}</td>
              <td>{asistencia[11]?.Cotidiano21} <br /> {asistencia[11]?.Tarea21}</td>
              <td>{asistencia[11]?.Cotidiano22} <br /> {asistencia[11]?.Tarea22}</td>
              <td>{asistencia[11]?.Cotidiano23} <br /> {asistencia[11]?.Tarea23}</td>
              <td>{asistencia[11]?.Cotidiano23} <br /> {asistencia[11]?.Tarea24}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[12]?.Usuario}</th>
              <td>{asistencia[12]?.Cotidiano1}<br /> {asistencia[12]?.Tarea1}</td>
              <td>{asistencia[12]?.Cotidiano2} <br /> {asistencia[12]?.Tarea2}</td>
              <td>{asistencia[12]?.Cotidiano3} <br /> {asistencia[12]?.Tarea3}</td>
              <td>{asistencia[12]?.Cotidiano4} <br /> {asistencia[12]?.Tarea4}</td>
              <td>{asistencia[12]?.Cotidiano5} <br /> {asistencia[12]?.Tarea5}</td>
              <td>{asistencia[12]?.Cotidiano6} <br /> {asistencia[12]?.Tarea6}</td>
              <td>{asistencia[12]?.Cotidiano7} <br /> {asistencia[12]?.Tarea7}</td>
              <td>{asistencia[12]?.Cotidiano8} <br /> {asistencia[12]?.Tarea8}</td>
              <td>{asistencia[12]?.Cotidiano9} <br /> {asistencia[12]?.Tarea9}</td>
              <td>{asistencia[12]?.Cotidiano10} <br /> {asistencia[12]?.Tarea10}</td>
              <td>{asistencia[12]?.Cotidiano11} <br /> {asistencia[12]?.Tarea11}</td>
              <td>{asistencia[12]?.Cotidiano12} <br /> {asistencia[12]?.Tarea12}</td>
              <td>{asistencia[12]?.Cotidiano13} <br /> {asistencia[12]?.Tarea13}</td>
              <td>{asistencia[12]?.Cotidiano14} <br /> {asistencia[12]?.Tarea14}</td>
              <td>{asistencia[12]?.Cotidiano15} <br /> {asistencia[12]?.Tarea15}</td>
              <td>{asistencia[12]?.Cotidiano16} <br /> {asistencia[12]?.Tarea16}</td>
              <td>{asistencia[12]?.Cotidiano17} <br /> {asistencia[12]?.Tarea17}</td>
              <td>{asistencia[12]?.Cotidiano18} <br /> {asistencia[12]?.Tarea18}</td>
              <td>{asistencia[12]?.Cotidiano19} <br /> {asistencia[12]?.Tarea19}</td>
              <td>{asistencia[12]?.Cotidiano20} <br /> {asistencia[12]?.Tarea20}</td>
              <td>{asistencia[12]?.Cotidiano21} <br /> {asistencia[12]?.Tarea21}</td>
              <td>{asistencia[12]?.Cotidiano22} <br /> {asistencia[12]?.Tarea22}</td>
              <td>{asistencia[12]?.Cotidiano23} <br /> {asistencia[12]?.Tarea23}</td>
              <td>{asistencia[12]?.Cotidiano23} <br /> {asistencia[12]?.Tarea24}</td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>
  )
}

export default TablaCotidianoSabado