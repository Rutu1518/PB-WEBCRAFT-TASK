import React from 'react';
import Header from "./../components/Header.js";
import Footer from "./../components/Footer.js";
import Account from "./../components/Account.js"


function sakshi() {
  return (
    <div>
    <Header />
    <main className="py-8">
        <Account/>
    </main>
    <Footer />
  </div>
  )
}

export default sakshi