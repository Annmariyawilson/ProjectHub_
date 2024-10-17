import React , {useState} from 'react'


function Profile() {
    const [status , setstaus] = useState(false)

    const changestatus=()=>{
        setstaus(!status)
    }
  return (
    <>
    <div className="container-fluid mt-5 p-3 d-flex justify-content-center align-items-center " >
        {
            status ?
        
        <div className="border shadow border-dark p-3">
            <h5 className="text-center">Profile</h5>
            <div>
                <label>
                    <input type="file" style={{display:"none"}} />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J_Zvt3w2VyOOjPzdAesOLDzrs0FKw3N4Fw&s" 
                    className='img-fluid' alt="" />
                </label>
                <input type="text" placeholder='Username' className="form-control mb-3" />
                <input type="text" placeholder='Github URL' className="form-control mb-3" />
                <input type="text" placeholder='Linkedln URL' className="form-control mb-3" />
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-success'>Upload</button>
                    <button className='btn btn-danger' onClick={changestatus}>Cancel</button>
                </div>
            </div>
        </div>

        :
        <h5 onClick={changestatus} style={{textDecoration:"underline" , color:"blue" , cursor:"pointer"}}>Edit user profile</h5>

        }
        
        </div>
    </>
  )
}

export default Profile