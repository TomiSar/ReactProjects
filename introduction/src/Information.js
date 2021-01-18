import React from 'react'

//Create a new file in src folder called Information.js key combination rce
function MyInfo(props) {
    return (
    <div>
        <div>
            <h1 className="firstline" >Welcome to Tomi's website</h1>
            <p className="aboutme">Hello my name is {props.name}. I'm live in Helsinki Finland.</p>
            <p className="aboutme">I am  {props.education} by education, but I work as {props.position}.</p>
        </div>
        <img className="ownimage" src="https://media-exp1.licdn.com/dms/image/C4D03AQHz5fAD6mC3qA/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=jCDdrR7LcYNNuENFK28_TxIel_agz4UxH90rG7u1hgY" 
         img="tag" alt="linkedInPhoto"/>
        <div>
            <b className="personal">Contact Information</b>
            <ul>
                <li className="information">Mobile phone : {props.number}</li> 
                <li className="information">Reach me via <a href='mailto:tomppa.sarjamo@gmail.com'>Gmail</a> </li> 
            </ul>
        </div>
    </div>
    )
}

function LinksToMe() {
    return (
        <div>
            <h3 className="contact">Personal profiles on WEB</h3>
            <ul>
                <ol>
                    <li className="profiles">My account on <a href="https://www.linkedin.com/in/tomi-sarjamo-2394151b/">LinkedIn</a></li>
                    <li className="profiles">My account on <a href="https://github.com/TomiSar">Github</a> </li>
                </ol>
            </ul>        
        </div> 
    )
}

const Information = (props) => {
        return (
        <div>
            <MyInfo name="Tomi Sarjamo" education="Electronics Design Engineer"  position="Software Developer" 
                    number="(+358)-503679695" email="tomppa.sarjamo@gmail.com"/>
            <LinksToMe />
        </div>
        )
}

export default Information
