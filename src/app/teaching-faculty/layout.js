"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";



export default function DashboardLayout({ children }) {
  return <section>
    <Header/>
    {children}
    <Footer/>
    </section>
}