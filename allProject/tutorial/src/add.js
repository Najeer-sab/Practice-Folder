import React from "react"


const AddPlan = () => {

    return (
        <div className="card " style={{ width: "400px", height: "550px", display: "flex", position: "relative", left: "400px" }} >
            <div className="containe mt-4">
                <h6 className="text-center">AddPlan</h6>
                <div className="row g-2 mt-4 mx-4 p-2">
                    <div className="col-6">
                        <label for="name" className="form-label">Plan Name</label>
                        <input type="email" className="form-control" id="name" placeholder="Free Trial" />
                    </div>
                    <div className="col-6">
                        <label for="Amount" className="form-label">Plan Amount</label>
                        <input type="password" className="form-control" id="Amount" />
                    </div>
                    {/* <!--drop down1--> */}
                    <div className="col-6">
                        <label for="name" className="form-label">Plan Type</label>
                        <select id="name" className="form-select" p-5>
                            <option selected>Monthly</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                        </select>
                    </div>
                    {/* <!--drop down2--> */}
                    <div className="col-6">
                        <label for="user" className="form-label"> NO of Users</label>
                        <select id="user" className="form-select">
                            <option selected> 5 Users</option>
                            <option>4 Users</option>
                            <option>6 Users</option>
                        </select>


                    </div>
                    {/* <!-- drop down 3 --> */}
                    <div className="col-6">
                        <label for="project" className="form-label">No of Projects</label>
                        <select id="project" className="form-select">
                            <option>5 Projects</option>
                            <option>6 Projects</option>
                            <option>7 Projects</option>

                        </select>
                    </div>
                    {/* <!--drop down4--> */}
                    <div className="col-6">
                        <label for="gb" className="form-label"> No of Storage Space</label>
                        <select id="gb" className="form-select">
                            <option selected>5 GB</option>
                            <option>6 GB</option>
                            <option>7 Gb</option>
                        </select>


                    </div>
                    {/* <!-- Text area --> */}
                    <div className="textarea">
                        <label for="area" className="form-label"> Plan Description</label>
                        <textarea className="form-control" id="area" rows="3"></textarea>
                    </div>
                    <div className="col  bg-danger ">
                        <div className="form-check form-switch  bg-primary">
                            <p className=""> Status</p>       
                           <input className="form-check-input" type="checkbox" role="switch" checked />
                            

                        </div>

                    </div>
                    <div className="button mx-5"></div>
                    <div className="col-auto text-center mb-2 bg-secdary">
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>
                </div>
            </div>

        </div>


    )


}

export default AddPlan;



<div className="col-4">
<div className="card  border-0 shadow-lg ">
    <div className="card-body">
      <h4 className=" text-center ">Enterprise</h4>
      <h3 className=" text-center mb-5">$399/mo</h3>
      <p> <i className="bi bi-check-lg text-success"></i><strong>Unlimited User</strong> </p>
      <p><i className="bi bi-check-lg text-success"></i> Unlimited Projects</p>
      <p> <i className="bi bi-check-lg text-success"></i>500 GB Storage</p>
      <p> <i className="bi bi-check-lg text-success"></i>Unlimited Message</p>
      <p> <i className="bi bi-check-lg text-success"></i>Voice and Video Call</p>
      <p> <i className="bi bi-check-lg text-success"></i>24/7 Customer Support</p>
      <div className="d-grid gap-2 mb-4 div-btn3">
        <button className="btn btn-secondary" type="button">Edit </button>
      </div>

    </div>
  </div>
</div>





// 2nd
<div className="col-4">
<div className="card  border-0 shadow-lg  ">
  <div className="card-body">
    <div>
      <h4 className="card-title text-center">Professional</h4>
      <h3 className="card-title text-center mb-5">$199/mo</h3>
      <p> <i className="bi bi-check-lg text-success"></i><strong>30 User</strong> </p>
      <p><i className="bi bi-check-lg text-success"></i> 50 Projects</p>
      <p> <i className="bi bi-check-lg text-success"></i>100 GB Storage</p>
      <p> <i className="bi bi-check-lg text-success"></i>Unlimited Message</p>
      <p> <i className="bi bi-check-lg text-success"></i>24/7 Customer Support</p>
    </div>

    <div className="d-grid gap-2 mb-4 div-btn2">
      <button className="btn btn-secondary " type="button">Edit </button>
    </div>
  </div>
</div>
</div>