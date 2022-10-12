


import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { hendelDelete } from '../Redux/action';
import { EditMovie } from './EditMovie';

import StarRatingp from "./StarRating";

export const CardMovie = ({film}) => {

    const dispatch = useDispatch();



  return (
    <div>
    



    <div>
      <figure className="image">
        <p>
          <h2 className="name"> {film.name}</h2>
        </p>
        <img src={film.image} alt="W3docs" />

        {/* <p className="rating"> {film.rating}</p> */}

        <div className="divratting">
          {" "}
          <StarRatingp rating={film.rating} />
          
        </div>
       

        <div  className="dateinstant">{film.date} </div>


     
        <div className="btnDitDelete">
         <div> <Button
            as="input"
            type="submit"
            value="Delete"
            className="btnDelete"
            onClick={() => dispatch(hendelDelete(film.id))}
            
          /></div>

{/* 
         <div>
         <Button
            as="input"
            type="submit"
            value="Edit"
            className="btnEdit"
           
          />
         </div> */}

          <EditMovie  film={film}  />
          
      </div>

         
        


       
        <figcaption>
          <h3>New Movie</h3>
        </figcaption>
      </figure>
    </div>


    </div>
  )
}
