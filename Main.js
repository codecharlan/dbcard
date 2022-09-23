import React from "react"
import ReactDOM from "react-dom"

export default function Main(){
  return(<div className="layout">
    <div className="main">
    <h2 className="text h2">Nwatu Ernest</h2>
    <h3 className="text h3">Frontend Developer</h3>
    <h4 className="text h4">www.webdemo.com/codecharlan</h4>
    <div className="buttons">
    <div className="email"><img src="Group145.png" className="eicon"></img><h6>Email</h6></div>
    <div className="linkedin"><img src="/link/linkedin.png" className="linkin"></img><h4 className="linktext">LinkedIn</h4></div></div>
    <h2 className="about">About</h2>
    <p className="bodytext">I am a frontend developer with a particular interest in web 3.0 and its potential in transforming the internet via decentralization. I try to position my self to be in the frontline of development with security and best practices, and am always willing to learn new technology and adopt the most efficient and effective ways of getting things done.</p>
    <h2 className="about">Interest</h2>
    <p className="bodytext">Tech Capacity Building. Charity. Internet & Web 3. Crypto & Blockcahin Enthusiats. Entrepreneur. Travel geek.</p>
    </div></div>)
}