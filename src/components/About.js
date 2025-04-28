import React, {useState}  from 'react'

export default function About(props) {
  //  const [mystyle,setMyStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  //  });

  let mystyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
  }
  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className="my-3">About US</h1>
<div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      TextUtils is a versatile app designed to help you analyze your text efficiently. Whether you need to count words and characters, adjust the case, or remove unnecessary spaces, TextUtils provides a range of tools to streamline your text editing process. It's particularly useful for writers, editors, and anyone who frequently works with text, ensuring your content is clean, concise, and ready for publication or further analysis. With a user-friendly interface and robust functionality, TextUtils makes text manipulation easy and effective.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        
TextUtils is a free-to-use application that offers powerful text analysis and editing tools without any cost. Users can enjoy a wide range of features, from counting words and characters to converting case and removing extra spaces, all without paying a dime. Its accessible nature makes it an ideal choice for students, professionals, and anyone in need of reliable text manipulation tools. By providing these services for free, TextUtils ensures that everyone can enhance their text processing efficiency and accuracy without worrying about budget constraints.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        
TextUtils is fully browser-compatible, ensuring that you can access its powerful text analysis and editing tools from any web browser, without the need for downloads or installations. This flexibility allows users to seamlessly utilize the app on various devices, including desktops, laptops, tablets, and smartphones. Whether you're at home, in the office, or on the go, TextUtils provides a consistent and efficient experience across all platforms. Its browser compatibility makes it a convenient choice for anyone looking to enhance their text processing capabilities from any location.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
