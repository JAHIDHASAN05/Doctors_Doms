import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Bookings = () => {


    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    console.log(bookings);
    return (
        <div>
            Bookings {bookings.length}


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                          
                            <th>Name</th>
                            <th >E-Mail</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(bookItem => <tr key={bookItem._id}>
                                
                                <td>
                                    <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={bookItem.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{bookItem.service}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    {bookItem.email}
                                </td>
                                <td>{bookItem.date}</td>
                                <th>
                                    <button className="btn btn-error btn-xs text-white">Pending</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default Bookings;