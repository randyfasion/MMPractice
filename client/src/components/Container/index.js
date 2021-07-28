// import React, { useEffect } from 'react';
// import ProductItem from '../ProductItem';
// import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_PRODUCTS } from '../../utils/actions';
// import { useQuery } from '@apollo/client';
// import { QUERY_PRODUCTS } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import spinner from '../../assets/spinner.gif';

// function ProductList() {
//   const [state, dispatch] = useStoreContext();

//   const { currentCategory } = state;

//   const { loading, data } = useQuery(QUERY_PRODUCTS);

//   useEffect(() => {
//     if (data) {
//       dispatch({
//         type: UPDATE_PRODUCTS,
//         products: data.products,
//       });
//       data.products.forEach((product) => {
//         idbPromise('products', 'put', product);
//       });
//     } else if (!loading) {
//       idbPromise('products', 'get').then((products) => {
//         dispatch({
//           type: UPDATE_PRODUCTS,
//           products: products,
//         });
//       });
//     }
//   }, [data, loading, dispatch]);

//   function filterProducts() {
//     if (!currentCategory) {
//       return state.products;
//     }

//     return state.products.filter(
//       (product) => product.category._id === currentCategory
//     );
//   }

//   return (
//     <div className="my-2">
//       <h2>Our Products:</h2>
//       {state.products.length ? (
//         <div className="flex-row">
//           {filterProducts().map((product) => (
//             <ProductItem
//               key={product._id}
//               _id={product._id}
//               image={product.image}
//               name={product.name}
//               price={product.price}
//               quantity={product.quantity}
//             />
//           ))}
//         </div>
//       ) : (
//         <h3>You haven't added any products yet!</h3>
//       )}
//       {loading ? <img src={spinner} alt="loading" /> : null}
//     </div>
//   );
// }

import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import  pic1  from '../../assets/IMG_0334.jpeg'
import { Link } from 'react-router-dom'


const Containerpic = () => {
  return (
    <div>
      <Container className="mx-0">
  <Row>
    <Col id="piccol" md={12} lg={6}>
      <Image className="mainpic" src={pic1} style={{height:"100%", width: "100%" }} />
    </Col>
    
    <Col>
      <Container className="subheader" >
        <h1 style={{fontSize: '60px', fontFamily: "permanent marker",  color: 'white'}}>Workout With me</h1>
        <h2 style={{fontFamily:'Encode Sans SC', color: 'white'}}>JOIN TODAY!</h2>

      </Container>

            <Link to="/Login">
              <Button style={{fontFamily:'Encode Sans SC'}} variant="outline-secondary" size="lg">
                Log on
              </Button>
            </Link>
      {" "}

      <Link to="Signup">
    <Button style={{fontFamily:'Encode Sans SC'}} variant="outline-secondary" size="lg">
      Sign up
    </Button>
    </Link>
    </Col>
 
  </Row>
</Container>
    </div>
  )
}

export default Containerpic
