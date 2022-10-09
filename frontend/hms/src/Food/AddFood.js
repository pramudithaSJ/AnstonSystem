import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from "axios";
import ProgressBar from "../comps/ProgressBar";
import '../CSS/ProgressBar/ProgressBar.css'
import AdminNav from '../Common/AdminSide/AdminNav'
import "./Css/Foodlist.css"
import addfood from "./Css/addfood.mp4"

const AddFood = () => {

    const history = useHistory();

    const[Code, setCode] = useState("");
    const[Name, setName] = useState("");
    const[Price, setPrice] = useState("");
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const codeSetter = (e) => {
            setCode(e.target.value);
        
    }
    const nameSetter = (e) => {
        setName(e.target.value);
    }
    const priceSetter = (e) => {
        setPrice(e.target.value);
    }

    const onSubmit = (e) => {
            e.preventDefault();
            const newFood = {
                Code: Code,
                Image: url,
                Name: Name,
                Price: Price
            };
            if(document.getElementById("name").value==""){
                alert("Please Enter a Food Code")
            }
            else{
                axios.post('http://localhost:8070/food/add', newFood).then(() => {
                    alert("Food item added");
                    console.log(url);
                     history.push('/foodManagement');
                }).catch((err) => {
                    alert(err);
                })
            }
            
    }

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image(.png, .jpeg, .jpg)');
        }
    };
    const checkEmpty=(e)=>{
        if(codeSetter.value==""){
          alert("")
        }
        
    }

    return (
        <div className="addFood" style={{paddingBottom: '200px'}}>
           <AdminNav/>                     
            <div >
                
                <div class=" col-sm-3 " style={{marginLeft: '550px'}}>
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center" >
                        <div>
                            <form onSubmit={onSubmit} class="card" style={{opacity: '0.95', marginTop:'100px'}}>
                                <br />
                                <h2 class="text-center">Add Food</h2>
                                <br />
                                <div className="container">
                                    <div><label>Food Code</label>
                                    
                                    <input 
                                    id='fcode'
                                    required
                                    class="form-control" 
                                    type="text" 
                                    placeholder="FC01" 
                                    onChange={codeSetter} />
                                    
                                    </div>
                                    <div class="form-group">
                                        <div><label >
                                            Add Image
                                        </label>
                                        <label className={"mylabel1"}>
                                            <input type="file" required id='img' onChange={handleChange} />
                                            <i id="image" className="fa fa-plus-circle" size="large" />
                                        </label>
                                        </div>
                                        <br />
                                        <img width="200px " src={url} />
                                        <div className="output">
                                            { error && <div className="error">{ error }</div>}
                                            { file && <div>{ file.name }</div> }
                                            { file && <ProgressBar file={file} setFile={setFile} setUrl={setUrl}/> }
                                            {file && <div> {file.url}</div>}
                                        </div>

                                        <div><label>Name</label>
                                        <input 
                                        required
                                        id='name'
                                        class="form-control" 
                                        type="text" 
                                        placeholder="Burger/Pizza..."
                                        onChange={nameSetter}/>
                                        </div>
                                        <div><label>Price(Rs)</label>
                                        <input 
                                        type="number"
                                        required
                                        class="form-control" 
                                        min="0" 
                                        placeholder='Rs.' 
                                        onChange={priceSetter} />
                                        </div>
                                        <br/>
                                        <button class="btn btn-primary" type="submit" onClick={checkEmpty}>&nbsp;Add Food</button>
                                        <br />
                                        <br />

                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                            
                </div>


                {/* <div className="col-md-1 image">*/}
                {/*    <img src={img} loading="auto" alt="center" height="400"*/}
                {/*         width="500" style={{paddingTop: '100px'}}/>*/}
                {/*</div> */}


            </div>
                            <div className='addcover'>
                                <video autoPlay loop muted>
                                    <source src={addfood} type="video/mp4"/>
                                </video>
                            </div>
        </div>
    )
}
export default AddFood;
