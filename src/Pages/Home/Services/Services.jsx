import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services ,setServices]=useState([])
    const [asc , setAsc]=useState(true)
    const searchRef =useRef(null)
    const [search,setSearch]=useState("")

    useEffect(()=>{
        // fetch('services.json')
        fetch(`http://localhost:5000/service?search=${search}&sort=${asc ? 'asc': 'desc'}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[asc,search])


const handleSearch=()=>{
    console.log(searchRef.current.value)
    setSearch(searchRef.current.value)
}



    return (
        <div>
            <div className='text-center mt-4'>
                <h3 className='text-orange-500 text-xl'>Services</h3>
                <h1 className='text-5xl font-bold'>Our Services Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

                <div className="form-control">
  <div className="input-group">
    <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
    <button onClick={handleSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
<button className='btn btn-primary' onClick={()=>setAsc(!asc)}>{asc ? 'price: high to low':'price: low to high'}</button>

            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                  services.map(service=><ServiceCard
                  key={service._id}
                  service={service}
                  ></ServiceCard>)  
                }
            </div>
        </div>
    );
};

export default Services;