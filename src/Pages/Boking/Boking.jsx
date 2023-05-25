import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provaider/AuthProvider';
import BookingRow from './BookingRow';
import { sendPasswordResetEmail } from 'firebase/auth';

const Boking = () => {


    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `https://gnius-car-server.vercel.app/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);


    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://gnius-car-server.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                   // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }



    const handleBookingConfirm = id => {
        fetch(`https://gnius-car-server.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
               // console.log(data);
                if (data.modifiedCount > 0) {
                    alert('update successful');
                    
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    console.log(remaining)
                    const updated = bookings.find(booking => booking._id === id);
                    console.log(updated)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    console.log(newBookings)
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div>
            <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                                
                                booking={booking}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Boking;