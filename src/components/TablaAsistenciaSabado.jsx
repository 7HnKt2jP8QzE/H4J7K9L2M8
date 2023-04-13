import React from 'react'

const TablaAsistenciaSabado = ({asistencia}) => {
  console.log(asistencia[0]?.Leccion1);

  

  return (
    <div>
      <div className="tablaAsistenciaViernes">
        <h2>Tabla de Asistencia</h2>

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
              <td>{asistencia[0]?.Leccion1}</td>
              <td>{asistencia[0]?.Leccion2}</td>
              <td>{asistencia[0]?.Leccion3}</td>
              <td>{asistencia[0]?.Leccion4}</td>
              <td>{asistencia[0]?.Leccion5}</td>
              <td>{asistencia[0]?.Leccion6}</td>
              <td>{asistencia[0]?.Leccion7}</td>
              <td>{asistencia[0]?.Leccion8}</td>
              <td>{asistencia[0]?.Leccion9}</td>
              <td>{asistencia[0]?.Leccion10}</td>
              <td>{asistencia[0]?.Leccion11}</td>
              <td>{asistencia[0]?.Leccion11}</td>
              <td>{asistencia[0]?.Leccion12}</td>
              <td>{asistencia[0]?.Leccion13}</td>
              <td>{asistencia[0]?.Leccion14}</td>
              <td>{asistencia[0]?.Leccion15}</td>
              <td>{asistencia[0]?.Leccion16}</td>
              <td>{asistencia[0]?.Leccion17}</td>
              <td>{asistencia[0]?.Leccion18}</td>
              <td>{asistencia[0]?.Leccion19}</td>
              <td>{asistencia[0]?.Leccion20}</td>
              <td>{asistencia[0]?.Leccion21}</td>
              <td>{asistencia[0]?.Leccion22}</td>
              <td>{asistencia[0]?.Leccion23}</td>
            </tr>
            <tr>
              <th className='nombre'>{asistencia[1]?.Usuario}</th>
              <td>{asistencia[1]?.Leccion1}</td>
              <td>{asistencia[1]?.Leccion2}</td>
              <td>{asistencia[1]?.Leccion3}</td>
              <td>{asistencia[1]?.Leccion4}</td>
              <td>{asistencia[1]?.Leccion5}</td>
              <td>{asistencia[1]?.Leccion6}</td>
              <td>{asistencia[1]?.Leccion7}</td>
              <td>{asistencia[1]?.Leccion8}</td>
              <td>{asistencia[1]?.Leccion9}</td>
              <td>{asistencia[1]?.Leccion10}</td>
              <td>{asistencia[1]?.Leccion11}</td>
              <td>{asistencia[1]?.Leccion11}</td>
              <td>{asistencia[1]?.Leccion12}</td>
              <td>{asistencia[1]?.Leccion13}</td>
              <td>{asistencia[1]?.Leccion14}</td>
              <td>{asistencia[1]?.Leccion15}</td>
              <td>{asistencia[1]?.Leccion16}</td>
              <td>{asistencia[1]?.Leccion17}</td>
              <td>{asistencia[1]?.Leccion18}</td>
              <td>{asistencia[1]?.Leccion19}</td>
              <td>{asistencia[1]?.Leccion20}</td>
              <td>{asistencia[1]?.Leccion21}</td>
              <td>{asistencia[1]?.Leccion22}</td>
              <td>{asistencia[1]?.Leccion23}</td>
            </tr>
            <tr>
              <th className='nombre'>{asistencia[2]?.Usuario}</th>
              <td>{asistencia[2]?.Leccion1}</td>
              <td>{asistencia[2]?.Leccion2}</td>
              <td>{asistencia[2]?.Leccion3}</td>
              <td>{asistencia[2]?.Leccion4}</td>
              <td>{asistencia[2]?.Leccion5}</td>
              <td>{asistencia[2]?.Leccion6}</td>
              <td>{asistencia[2]?.Leccion7}</td>
              <td>{asistencia[2]?.Leccion8}</td>
              <td>{asistencia[2]?.Leccion9}</td>
              <td>{asistencia[2]?.Leccion10}</td>
              <td>{asistencia[2]?.Leccion11}</td>
              <td>{asistencia[2]?.Leccion11}</td>
              <td>{asistencia[2]?.Leccion12}</td>
              <td>{asistencia[2]?.Leccion13}</td>
              <td>{asistencia[2]?.Leccion14}</td>
              <td>{asistencia[2]?.Leccion15}</td>
              <td>{asistencia[2]?.Leccion16}</td>
              <td>{asistencia[2]?.Leccion17}</td>
              <td>{asistencia[2]?.Leccion18}</td>
              <td>{asistencia[2]?.Leccion19}</td>
              <td>{asistencia[2]?.Leccion20}</td>
              <td>{asistencia[2]?.Leccion21}</td>
              <td>{asistencia[2]?.Leccion22}</td>
              <td>{asistencia[2]?.Leccion23}</td>
            </tr>
            <tr>
              <th className='nombre'>{asistencia[3]?.Usuario}</th>
              <td>{asistencia[3]?.Leccion1}</td>
              <td>{asistencia[3]?.Leccion2}</td>
              <td>{asistencia[3]?.Leccion3}</td>
              <td>{asistencia[3]?.Leccion4}</td>
              <td>{asistencia[3]?.Leccion5}</td>
              <td>{asistencia[3]?.Leccion6}</td>
              <td>{asistencia[3]?.Leccion7}</td>
              <td>{asistencia[3]?.Leccion8}</td>
              <td>{asistencia[3]?.Leccion9}</td>
              <td>{asistencia[3]?.Leccion10}</td>
              <td>{asistencia[3]?.Leccion11}</td>
              <td>{asistencia[3]?.Leccion11}</td>
              <td>{asistencia[3]?.Leccion12}</td>
              <td>{asistencia[3]?.Leccion13}</td>
              <td>{asistencia[3]?.Leccion14}</td>
              <td>{asistencia[3]?.Leccion15}</td>
              <td>{asistencia[3]?.Leccion16}</td>
              <td>{asistencia[3]?.Leccion17}</td>
              <td>{asistencia[3]?.Leccion18}</td>
              <td>{asistencia[3]?.Leccion19}</td>
              <td>{asistencia[3]?.Leccion20}</td>
              <td>{asistencia[3]?.Leccion21}</td>
              <td>{asistencia[3]?.Leccion22}</td>
              <td>{asistencia[3]?.Leccion23}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[4]?.Usuario}</th>
              <td>{asistencia[4]?.Leccion1}</td>
              <td>{asistencia[4]?.Leccion2}</td>
              <td>{asistencia[4]?.Leccion3}</td>
              <td>{asistencia[4]?.Leccion4}</td>
              <td>{asistencia[4]?.Leccion5}</td>
              <td>{asistencia[4]?.Leccion6}</td>
              <td>{asistencia[4]?.Leccion7}</td>
              <td>{asistencia[4]?.Leccion8}</td>
              <td>{asistencia[4]?.Leccion9}</td>
              <td>{asistencia[4]?.Leccion10}</td>
              <td>{asistencia[4]?.Leccion11}</td>
              <td>{asistencia[4]?.Leccion11}</td>
              <td>{asistencia[4]?.Leccion12}</td>
              <td>{asistencia[4]?.Leccion13}</td>
              <td>{asistencia[4]?.Leccion14}</td>
              <td>{asistencia[4]?.Leccion15}</td>
              <td>{asistencia[4]?.Leccion16}</td>
              <td>{asistencia[4]?.Leccion17}</td>
              <td>{asistencia[4]?.Leccion18}</td>
              <td>{asistencia[4]?.Leccion19}</td>
              <td>{asistencia[4]?.Leccion20}</td>
              <td>{asistencia[4]?.Leccion21}</td>
              <td>{asistencia[4]?.Leccion22}</td>
              <td>{asistencia[4]?.Leccion23}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[5]?.Usuario}</th>
              <td>{asistencia[5]?.Leccion1}</td>
              <td>{asistencia[5]?.Leccion2}</td>
              <td>{asistencia[5]?.Leccion3}</td>
              <td>{asistencia[5]?.Leccion4}</td>
              <td>{asistencia[5]?.Leccion5}</td>
              <td>{asistencia[5]?.Leccion6}</td>
              <td>{asistencia[5]?.Leccion7}</td>
              <td>{asistencia[5]?.Leccion8}</td>
              <td>{asistencia[5]?.Leccion9}</td>
              <td>{asistencia[5]?.Leccion10}</td>
              <td>{asistencia[5]?.Leccion11}</td>
              <td>{asistencia[5]?.Leccion11}</td>
              <td>{asistencia[5]?.Leccion12}</td>
              <td>{asistencia[5]?.Leccion13}</td>
              <td>{asistencia[5]?.Leccion14}</td>
              <td>{asistencia[5]?.Leccion15}</td>
              <td>{asistencia[5]?.Leccion16}</td>
              <td>{asistencia[5]?.Leccion17}</td>
              <td>{asistencia[5]?.Leccion18}</td>
              <td>{asistencia[5]?.Leccion19}</td>
              <td>{asistencia[5]?.Leccion20}</td>
              <td>{asistencia[5]?.Leccion21}</td>
              <td>{asistencia[5]?.Leccion22}</td>
              <td>{asistencia[5]?.Leccion23}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[6]?.Usuario}</th>
              <td>{asistencia[6]?.Leccion1}</td>
              <td>{asistencia[6]?.Leccion2}</td>
              <td>{asistencia[6]?.Leccion3}</td>
              <td>{asistencia[6]?.Leccion4}</td>
              <td>{asistencia[6]?.Leccion5}</td>
              <td>{asistencia[6]?.Leccion6}</td>
              <td>{asistencia[6]?.Leccion7}</td>
              <td>{asistencia[6]?.Leccion8}</td>
              <td>{asistencia[6]?.Leccion9}</td>
              <td>{asistencia[6]?.Leccion10}</td>
              <td>{asistencia[6]?.Leccion11}</td>
              <td>{asistencia[6]?.Leccion11}</td>
              <td>{asistencia[6]?.Leccion12}</td>
              <td>{asistencia[6]?.Leccion13}</td>
              <td>{asistencia[6]?.Leccion14}</td>
              <td>{asistencia[6]?.Leccion15}</td>
              <td>{asistencia[6]?.Leccion16}</td>
              <td>{asistencia[6]?.Leccion17}</td>
              <td>{asistencia[6]?.Leccion18}</td>
              <td>{asistencia[6]?.Leccion19}</td>
              <td>{asistencia[6]?.Leccion20}</td>
              <td>{asistencia[6]?.Leccion21}</td>
              <td>{asistencia[6]?.Leccion22}</td>
              <td>{asistencia[6]?.Leccion23}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[7]?.Usuario}</th>
              <td>{asistencia[7]?.Leccion1}</td>
              <td>{asistencia[7]?.Leccion2}</td>
              <td>{asistencia[7]?.Leccion3}</td>
              <td>{asistencia[7]?.Leccion4}</td>
              <td>{asistencia[7]?.Leccion5}</td>
              <td>{asistencia[7]?.Leccion6}</td>
              <td>{asistencia[7]?.Leccion7}</td>
              <td>{asistencia[7]?.Leccion8}</td>
              <td>{asistencia[7]?.Leccion9}</td>
              <td>{asistencia[7]?.Leccion10}</td>
              <td>{asistencia[7]?.Leccion11}</td>
              <td>{asistencia[7]?.Leccion11}</td>
              <td>{asistencia[7]?.Leccion12}</td>
              <td>{asistencia[7]?.Leccion13}</td>
              <td>{asistencia[7]?.Leccion14}</td>
              <td>{asistencia[7]?.Leccion15}</td>
              <td>{asistencia[7]?.Leccion16}</td>
              <td>{asistencia[7]?.Leccion17}</td>
              <td>{asistencia[7]?.Leccion18}</td>
              <td>{asistencia[7]?.Leccion19}</td>
              <td>{asistencia[7]?.Leccion20}</td>
              <td>{asistencia[7]?.Leccion21}</td>
              <td>{asistencia[7]?.Leccion22}</td>
              <td>{asistencia[7]?.Leccion23}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[8]?.Usuario}</th>
              <td>{asistencia[8]?.Leccion1}</td>
              <td>{asistencia[8]?.Leccion2}</td>
              <td>{asistencia[8]?.Leccion3}</td>
              <td>{asistencia[8]?.Leccion4}</td>
              <td>{asistencia[8]?.Leccion5}</td>
              <td>{asistencia[8]?.Leccion6}</td>
              <td>{asistencia[8]?.Leccion7}</td>
              <td>{asistencia[8]?.Leccion8}</td>
              <td>{asistencia[8]?.Leccion9}</td>
              <td>{asistencia[8]?.Leccion10}</td>
              <td>{asistencia[8]?.Leccion11}</td>
              <td>{asistencia[8]?.Leccion11}</td>
              <td>{asistencia[8]?.Leccion12}</td>
              <td>{asistencia[8]?.Leccion13}</td>
              <td>{asistencia[8]?.Leccion14}</td>
              <td>{asistencia[8]?.Leccion15}</td>
              <td>{asistencia[8]?.Leccion16}</td>
              <td>{asistencia[8]?.Leccion17}</td>
              <td>{asistencia[8]?.Leccion18}</td>
              <td>{asistencia[8]?.Leccion19}</td>
              <td>{asistencia[8]?.Leccion20}</td>
              <td>{asistencia[8]?.Leccion21}</td>
              <td>{asistencia[8]?.Leccion22}</td>
              <td>{asistencia[8]?.Leccion23}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[9]?.Usuario}</th>
              <td>{asistencia[9]?.Leccion1}</td>
              <td>{asistencia[9]?.Leccion2}</td>
              <td>{asistencia[9]?.Leccion3}</td>
              <td>{asistencia[9]?.Leccion4}</td>
              <td>{asistencia[9]?.Leccion5}</td>
              <td>{asistencia[9]?.Leccion6}</td>
              <td>{asistencia[9]?.Leccion7}</td>
              <td>{asistencia[9]?.Leccion8}</td>
              <td>{asistencia[9]?.Leccion9}</td>
              <td>{asistencia[9]?.Leccion10}</td>
              <td>{asistencia[9]?.Leccion11}</td>
              <td>{asistencia[9]?.Leccion11}</td>
              <td>{asistencia[9]?.Leccion12}</td>
              <td>{asistencia[9]?.Leccion13}</td>
              <td>{asistencia[9]?.Leccion14}</td>
              <td>{asistencia[9]?.Leccion15}</td>
              <td>{asistencia[9]?.Leccion16}</td>
              <td>{asistencia[9]?.Leccion17}</td>
              <td>{asistencia[9]?.Leccion18}</td>
              <td>{asistencia[9]?.Leccion19}</td>
              <td>{asistencia[9]?.Leccion20}</td>
              <td>{asistencia[9]?.Leccion21}</td>
              <td>{asistencia[9]?.Leccion22}</td>
              <td>{asistencia[9]?.Leccion23}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[10]?.Usuario}</th>
              <td>{asistencia[10]?.Leccion1}</td>
              <td>{asistencia[10]?.Leccion2}</td>
              <td>{asistencia[10]?.Leccion3}</td>
              <td>{asistencia[10]?.Leccion4}</td>
              <td>{asistencia[10]?.Leccion5}</td>
              <td>{asistencia[10]?.Leccion6}</td>
              <td>{asistencia[10]?.Leccion7}</td>
              <td>{asistencia[10]?.Leccion8}</td>
              <td>{asistencia[10]?.Leccion9}</td>
              <td>{asistencia[10]?.Leccion10}</td>
              <td>{asistencia[10]?.Leccion11}</td>
              <td>{asistencia[10]?.Leccion11}</td>
              <td>{asistencia[10]?.Leccion12}</td>
              <td>{asistencia[10]?.Leccion13}</td>
              <td>{asistencia[10]?.Leccion14}</td>
              <td>{asistencia[10]?.Leccion15}</td>
              <td>{asistencia[10]?.Leccion16}</td>
              <td>{asistencia[10]?.Leccion17}</td>
              <td>{asistencia[10]?.Leccion18}</td>
              <td>{asistencia[10]?.Leccion19}</td>
              <td>{asistencia[10]?.Leccion20}</td>
              <td>{asistencia[10]?.Leccion21}</td>
              <td>{asistencia[10]?.Leccion22}</td>
              <td>{asistencia[10]?.Leccion23}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[11]?.Usuario}</th>
              <td>{asistencia[11]?.Leccion1}</td>
              <td>{asistencia[11]?.Leccion2}</td>
              <td>{asistencia[11]?.Leccion3}</td>
              <td>{asistencia[11]?.Leccion4}</td>
              <td>{asistencia[11]?.Leccion5}</td>
              <td>{asistencia[11]?.Leccion6}</td>
              <td>{asistencia[11]?.Leccion7}</td>
              <td>{asistencia[11]?.Leccion8}</td>
              <td>{asistencia[11]?.Leccion9}</td>
              <td>{asistencia[11]?.Leccion10}</td>
              <td>{asistencia[11]?.Leccion11}</td>
              <td>{asistencia[11]?.Leccion11}</td>
              <td>{asistencia[11]?.Leccion12}</td>
              <td>{asistencia[11]?.Leccion13}</td>
              <td>{asistencia[11]?.Leccion14}</td>
              <td>{asistencia[11]?.Leccion15}</td>
              <td>{asistencia[11]?.Leccion16}</td>
              <td>{asistencia[11]?.Leccion17}</td>
              <td>{asistencia[11]?.Leccion18}</td>
              <td>{asistencia[11]?.Leccion19}</td>
              <td>{asistencia[11]?.Leccion20}</td>
              <td>{asistencia[11]?.Leccion21}</td>
              <td>{asistencia[11]?.Leccion22}</td>
              <td>{asistencia[11]?.Leccion23}</td>
            </tr>

            <tr>
              <th className='nombre'>{asistencia[12]?.Usuario}</th>
              <td>{asistencia[12]?.Leccion1}</td>
              <td>{asistencia[12]?.Leccion2}</td>
              <td>{asistencia[12]?.Leccion3}</td>
              <td>{asistencia[12]?.Leccion4}</td>
              <td>{asistencia[12]?.Leccion5}</td>
              <td>{asistencia[12]?.Leccion6}</td>
              <td>{asistencia[12]?.Leccion7}</td>
              <td>{asistencia[12]?.Leccion8}</td>
              <td>{asistencia[12]?.Leccion9}</td>
              <td>{asistencia[12]?.Leccion10}</td>
              <td>{asistencia[12]?.Leccion11}</td>
              <td>{asistencia[12]?.Leccion11}</td>
              <td>{asistencia[12]?.Leccion12}</td>
              <td>{asistencia[12]?.Leccion13}</td>
              <td>{asistencia[12]?.Leccion14}</td>
              <td>{asistencia[12]?.Leccion15}</td>
              <td>{asistencia[12]?.Leccion16}</td>
              <td>{asistencia[12]?.Leccion17}</td>
              <td>{asistencia[12]?.Leccion18}</td>
              <td>{asistencia[12]?.Leccion19}</td>
              <td>{asistencia[12]?.Leccion20}</td>
              <td>{asistencia[12]?.Leccion21}</td>
              <td>{asistencia[12]?.Leccion22}</td>
              <td>{asistencia[12]?.Leccion23}</td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>
  )
}

export default TablaAsistenciaSabado