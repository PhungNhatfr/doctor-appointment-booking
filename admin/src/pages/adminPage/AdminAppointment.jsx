import React from 'react'
import { assets } from '../../assets_admin/assets'

const AllAppointments = () => {
 
  const appointments = [
    { patient: "Richard James", dept: "General", age: 28, dateTime: "24th July, 2024, 10:AM", doctor: "Dr. Richard James", fees: "$50" },
    { patient: "Richard James", dept: "General", age: 28, dateTime: "24th July, 2024, 10:AM", doctor: "Dr. Richard James", fees: "$50" }
  ]

  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-md font-medium'>All Appointments</p>

     
      <div className='bg-white border rounded-lg overflow-hidden shadow-sm'>
        <table className='w-full text-sm text-left'>
          
        
          <thead className='bg-gray-50 text-gray-700 border-b'>
            <tr>
              <th className='px-6 py-4 font-semibold'>#</th>
              <th className='px-6 py-4 font-semibold'>Patient</th>
              <th className='px-6 py-4 font-semibold'>Department</th>
              <th className='px-6 py-4 font-semibold'>Age</th>
              <th className='px-6 py-4 font-semibold whitespace-nowrap'>Date & Time</th>
              <th className='px-6 py-4 font-semibold'>Doctor</th>
              <th className='px-6 py-4 font-semibold'>Fees</th>
              <th className='px-6 py-4 font-semibold text-center'>Action</th>
            </tr>
          </thead>

          {/* Corps du tableau */}
          <tbody className='text-gray-600 divide-y'>
            {appointments.map((item, index) => (
              <tr key={index} className='hover:bg-gray-50 transition-colors'>
                <td className='px-6 py-4'>{index + 1}</td>
                
                {/* Cellule Patient */}
                <td className='px-6 py-4'>
                  <div className='flex items-center gap-2'>
                    <img className='w-8 h-8 rounded-full object-cover' src={assets.upload_area} alt="" />
                    <span className='text-gray-900 font-medium whitespace-nowrap'>{item.patient}</span>
                  </div>
                </td>

                <td className='px-6 py-4'>{item.dept}</td>
                <td className='px-6 py-4'>{item.age}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{item.dateTime}</td>

                {/* Cellule Docteur */}
                <td className='px-6 py-4'>
                  <div className='flex items-center gap-2'>
                    <img className='w-8 h-8 rounded-full bg-gray-100 object-cover' src={assets.doctor_img} alt="" />
                    <span className='whitespace-nowrap'>{item.doctor}</span>
                  </div>
                </td>

                <td className='px-6 py-4 font-medium text-gray-800'>{item.fees}</td>

                {/* Bouton d'action */}
                <td className='px-6 py-4 text-center'>
                  <div className='flex justify-center'>
                    <img 
                      className='w-10 cursor-pointer p-2 hover:bg-red-50 rounded-full transition-all border border-transparent active:scale-95' 
                      src={assets.cancel_icon} 
                      alt="cancel" 
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllAppointments