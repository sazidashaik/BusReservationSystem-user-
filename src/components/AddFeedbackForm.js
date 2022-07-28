import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addFeedback } from '../actions/feedbacks';

export default function AddFeedbackForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
   feedBackId:0,
   driverRating:0,
   serviceRating:0,
   overallRating:0,
   comments:'',
   


}
 
const [feedback,setFeedback]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setFeedback({...feedback,[name]:value});
}
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
if( !feedback.driverRating || !feedback.serviceRating || 
    !feedback.overallRating || !feedback.comments ) return;
 console.log(feedback+'from addfeedbackform')
props.addFeedback(feedback);
//dispatch(addFeedback(feedback));
setFeedback(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

<label>feedBackId</label><br/>
<input 
type='number'
name='feedBackId'
value={feedback.feedBackId}
onChange={handleInputChange}/>
<br/>

<label>driverRating</label><br/>
<input 
type='number'
name='driverRating'
value={feedback.driverRating}
onChange={handleInputChange}/>
<br/>

<label>serviceRating</label><br/>
<input 
type='number'
name='serviceRating'
value={feedback.serviceRating}
onChange={handleInputChange}/>
<br/>

<label>overallRating</label><br/>
<input 
type='number'
name='overallRating'
value={feedback.overallRating}
onChange={handleInputChange}/>
<br/>

<label>comments</label><br/>
<input 
type='text'
name='comments'
value={feedback.comments}
onChange={handleInputChange}/>
<br/>





<button>Add New feedback</button>

</form>


</>
)


}