import React from 'react'
import { useEffect } from 'react'
import{ useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from './productActions'

export default function Products() {

  
    const dispatch = useDispatch();
    const {id}  = useParams();

    useEffect(() =>{
        dispatch(getProductDetails(id));
    }, [dispatch, id]);


  return (
    // <BOX>
    //   {
    //     loading &&
    //       <BOX>
    //         <BOX>

    //         </BOX>
    //         <BOX>
    //           <Typography>{Products.title.longTitle}</Typography>
    //         </BOX>
    //       </BOX>
    //   }
    // </BOX>
    <div>
      pop
    </div>
  )
}
