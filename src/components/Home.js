import React from "react";

export default class Home extends React.Component {
  render() {
    return (
     <div style={{ background: "#8E15F6", height: "100vh"}}>
       <div style={{background: "#fff", display:'flex', justifyContent:'space-between', alignItems:'center', padding:'30ox 300px'}}>
     <div style={{ color: '#8E15F6', fontSize: 20, fontWeight: 700}}>
         LOGO
     </div>
     <div style={{display:'flex', alignItems:'center'}}>
            <div style={{ fontSize: 18, margin: "0 12px" }}>Home</div>
            <div style={{ fontSize: 18, margin: "0 12px" }}>My Portfolio</div>
            <div style={{ fontSize: 18, margin: "0 12px" }}>Clients</div>
            <div style={{ fontSize: 18, margin: "0 12px"}}><button>Get In Touch</button></div>
     </div>
     </div>
     {/* Card Content */}
     <div style={{margin:"50px 300px 0", display:'flex', justifyContent:'space-between'}}>
      <div style={{flex: 0.48, height:'80vh', background:'white', overflow:'scroll', borderRadius: 5, padding:'10px'}}>
       
      </div>
      <div style={{flex:0.48, height:"80vh", background:"white", overflow:"scroll",borderRadius: 5, padding:"10px"}}>

      </div>
     </div>
     </div>
    );
  }
}
