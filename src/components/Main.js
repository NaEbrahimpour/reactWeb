import React from 'react'
import { Link } from 'react-router-dom';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, CardColumns 
  } from 'reactstrap';
  


function Main() {
    return (
        <>
        <p >برترین ها </p>
        <CardDeck style={{display: 'flex', flexDirection: 'row', gap:"size-200"} } >
      <Card  style={{ bg:"primary", flex: 1, textAlign:"center", justifyContent: 'center', alignItems: 'center', padding: "1em",border: "1em"}}>
        <CardImg top width="400px" height="250px" src="images/img1.jpg" alt="Card image cap" />
        <CardBody style={{ border:'primary'}}>
          <CardTitle tag="h5" >کمپیر سیب زمینی خوشمزه</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">غذای ترکیه ای</CardSubtitle>
        </CardBody>
      </Card>
      <Card style={{bg:"primary", flex: 1, textAlign:"center", justifyContent: 'center', alignItems: 'center', padding: "1em",border: "1em"}}>
        <CardImg top width="400px" height="250px"src="https://irancook.ir/wp-content/uploads/2020/03/%D8%AE%D9%88%D8%B1%D8%B4-%D9%85%D8%B1%D8%AC%D9%88-%D8%B4%D8%A7%D8%AE%D8%B5-min.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">خورش مرجو</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">غذای شهر طالقان</CardSubtitle>
        </CardBody>
      </Card>
      <Card style={{bg:"primary", flex: 1, textAlign:"center", justifyContent: 'center', alignItems: 'center', padding: "1em",border: "1em"}}>
        <CardImg top width="400px" height="250px" src="https://www.talab.org/wp-content/uploads/2018/08/2140133698-talab-org.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">ساندویچ عصرانه </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">میان وعده</CardSubtitle>
        </CardBody>
      </Card>
      
    </CardDeck>
    
        

        </>
    )
}

export default Main
