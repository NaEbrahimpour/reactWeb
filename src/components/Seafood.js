import React from 'react'
import './Seafood.css'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, CardColumns 
  } from 'reactstrap';

function Seafood() {
    return (
        <>
        <CardDeck style={{display: 'flex', flexDirection: 'row', gap:"size-200"} } >
      <Card  style={{ bg:"primary", flex: 1, textAlign:"center", justifyContent: 'center', alignItems: 'center', padding: "1em",border: "1em"}}>
        <CardImg top width="400px" height="250px" src="images/هواری.jpg" alt="Card image cap" />
        <CardBody style={{ border:'primary'}}>
          <CardTitle tag="h5" >هواری سور</CardTitle>
        </CardBody>
      </Card>
      <Card style={{bg:"primary", flex: 1, textAlign:"center", justifyContent: 'center', alignItems: 'center', padding: "1em",border: "1em"}}>
        <CardImg top width="400px" height="250px"src="https://mamifood.org/images/files/0000-11/138-40/29-min.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">میگو کباب شده با سس مخصوص</CardTitle>
        </CardBody>
      </Card>
      <Card style={{bg:"primary", flex: 1, textAlign:"center", justifyContent: 'center', alignItems: 'center', padding: "1em",border: "1em"}}>
        <CardImg top width="400px" height="250px" src="https://mamifood.org/images/files/Article/ART9390.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">میگو سیخی </CardTitle>
        </CardBody>
      </Card>
          </CardDeck>

      <CardDeck style={{display: 'flex', flexDirection: 'row', gap:"size-200"} } >
      <Card  style={{ bg:"primary", flex: 1, textAlign:"center", justifyContent: 'center', alignItems: 'center', padding: "1em",border: "1em"}}>
        <CardImg top width="400px" height="250px" src="https://mamifood.org/images/files/Article/ART9954.jpg" alt="Card image cap" />
        <CardBody style={{ border:'primary'}}>
          <CardTitle tag="h5" >پاته دریایی</CardTitle>
        </CardBody>
      </Card>
      <Card style={{bg:"primary", flex: 1, textAlign:"center", justifyContent: 'center', alignItems: 'center', padding: "1em",border: "1em"}}>
        <CardImg top width="400px" height="250px"src="https://mamifood.org/images/files/Article/ART9296.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">میگو سوخاری</CardTitle>
        </CardBody>
      </Card>
      <Card style={{bg:"primary", flex: 1, textAlign:"center", justifyContent: 'center', alignItems: 'center', padding: "1em",border: "1em"}}>
        <CardImg top width="400px" height="250px" src="https://mamifood.org/images/files/Article/ART13069.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">ماهی قرل آرا</CardTitle>
        </CardBody>
      </Card>
      </CardDeck>

        </>
    )
}
export default Seafood
