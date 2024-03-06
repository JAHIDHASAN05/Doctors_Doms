import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const CheakOut = () => {
    const singleData = useLoaderData()
    console.log(singleData);
    const { _id, title, price , img} = singleData;

    const {user} =useContext(AuthContext)
    console.log(user)


    const handlerBookingService=e=>{
        e.preventDefault();
        const form =e.target;
        const name= form.name.value;
        const date= form.date.value;
        const email= form.email.value;
        const price= form.price.value;
        const bookings={
            name, date, email, price, img, booking_id: _id,
            service :title
        }
        console.log(bookings);
        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                'content-type' :'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res=> res.json())
            .then(data=>console.log(data))

        
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>cheakouta : {title}</h1>


            <form onSubmit={handlerBookingService} className="card-body">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" placeholder="" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">date</span>
                        </label>
                        <input type="date" name='date' placeholder="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" required />
                    </div>
                   
                </div>
                <div className="form-control">
                 
                    <input type="text" name='yourMassage' placeholder="your message" className="input input-bordered"  />
                </div>
                <div className="form-control mt-6">
                    <input type='submit' value={'Confirm Order'} className="btn btn-primary btn-block"></input>
                </div>
            </form>

        </div>
    );
};

export default CheakOut;