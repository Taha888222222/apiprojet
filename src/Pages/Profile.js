import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

const Profile = () => {
    const [user, setUser]=useState({});
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
        .then((res)=>setUser(res.data[0]))
        .catch((err)=> console.log(err));
    }
    );
    const { id } = useParams();
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8BAQEAAAD8/Pz5+fl8fHzu7u6mpqbS0tLf39/l5eWdnZ2rq6vOzs4mJiZUVFQdHR11dXWQkJDFxcU+Pj5JSUm1tbVbW1uIiIhOTk44ODjZ2dmXl5cPDw8uLi4zMzNsbGxkZGSYzX7vAAAFKElEQVRoge1be5e6LBDWUUmtXO9p977/l/yJmIIijLvQ+/7RnLN7rISngcdhbjnOV77yla/8T8Vj8nHccJ+1N2BSZfvj55DjnKG6vbDrPO5Wwj501LgTsjt9gSayDk2CAZihvy+B4gfELnaRznQW1E8Lm9iHDnoVnMIf7GKrBCyixxrsHt4W7SoQWSZcDq+hsoN91Ordw9sxOBkOPLOBTfQ7zhbextPeoLA79MY8Nkmw4Il51QuKrWc7/TNv5wKk4lbW/QcP/mMa2y/x4KVvGJw88OBn04wjdzzhHsbBN2huHvy8Yc9Ng3sVHrw17kme8OAn09hOjgfPjYMf8Ww3f6KTG/ZgSc0fLD7WvsKPaQPnOBecL0HRL8bBazzhzB+pIZ5woXFwhNM+KO7GxsGdFxb8ZR7buSJVh70F8AiruY2AyTsDhnBQWklQXHFBg41V72wcIkjtAhZLmZlCh06xrSUntA4FQGsLG6G6PcUd/ywzp9M/MO+yc6JJylhNCKnjFrAQqwhyVKfCLOdgVcGqjbSAIH4Ka4SD1OqiU7nMk74j2ayl4DjZrzAedvaxV505qD8CvrLsnwAnqRzcQqwgkRxYen/GdvMRmkximeqfULzf1/0SHBjXrW77NaX/vXbOORjSX6m9tSfPIbW5CCAA+kCBJPC0s/penQDcWBBYg5D3f/sQlxtAUltw4oq2L94Nnopg5uDtsRb9La1pb6Yuma6jtzDFLzBid74GcyJLg8SL8ql2GYxfZypnjpoG41uQGzllSN1y5xicxw/iE6uiniaK3bnVgKr+I/dI8Uz48mV3zX1KafBTcAXc2a3Jq/glfjfj5Xmfl2yHZ+p9z1Hwm4QnsK+uQvL8XaYgesGyeKl0zCVuPd2WX6Roml7n5WwKl0Fidnv4xttWWifl2qmtKJtJC2+wOQHvr1aq4b4+aq3+BNuOvNO6izrQPeSmIwPtAGbh00T8DbngFU+JTdfz58Lnu0Lqt3rde6uDNjh4vtxRGqahBta7TaaOGrYbJdRONQrt0zeqmKgPSzrjdh/XvTtI+2VV1jux0Uy0EhYMs5w8quN0mtAzhjoynjIzDC7O2AfKIBzAj3oL8F5I6s3ScMUf7YJsKPD7pFBck1iHqK94TM8cK3q9NHk6uGGyorpSNbRMned7wJNppkvYYHZdn/BiXsX08NQwvqsepif8DtsgMD7oIXaEPpIsYc4yeVI9GbcwTmSp+MUsLpQ67Bib3q3Gg8rH1vtARznpsSibiLPW2HofXNXY6Kolz110K0elPtaR/SicD+3gaz+6LpYDch4h64VrHZp9Y4lkkshbRmHBkYxBMko2i7p7CE/cG7eCMbrSWansDL5+xRfoCbaZA5QPG373XhxxPXRtXVnvUzkj4izC7uH6xVy1482eWBThhNM5QBJOfbI16D0XjBW6q0CZssIvu+CN4q2MatnxhBNCtsII4UiidB65WYToT+WxC6PUrXJXdVftNI0wC0F6E7pqY5MKEb4rXr5fz1wiH5Zl1sXrLmLTZuniXbJo4l4q4S7AdUrD/YCKFsMcNPjwEE5mb71rCxgy5BtSBGFeqb7AvNlvLVhhKaN2CzLThhyepdDBz086a02QtTSwsWVWk9+lJElUZ20y/HSBT7LPY59MJByTpA3q6I8Fp/h4yO7Je8bhUZjxtuFBu1uSR3AIjTWN+JdiF5Tj7HM/9Dp9UgWH4q/6ysWLit01Oz3mmudQnrLrrog+8aOW+S9n/oNf0nzlK1/5ilb+AUy6NfPnwoheAAAAAElFTkSuQmCC" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.username}
        </Card.Text>
        <Button variant="primary">
            <Link to='/users'>Go somewhere</Link>
            </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile