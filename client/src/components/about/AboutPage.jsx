import React from 'react'
import { Link } from "react-router-dom";

import Aboutus from "./Aboutus";
import CardSection from "./CardSection";
import Team from "./Team";
import Footer from '../Footer';


export default function AboutPage() {
  return (
    <div>
      <Aboutus />
      <CardSection />
      <Team />
     
      <Footer />
    </div>
  )
}
