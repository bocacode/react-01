import React from 'react'
import { Layout } from 'antd'
import NavMenu from '../components/Menu'
import Welcome from '../components/Welcome'
import Clicker from '../components/Clicker'
import Coffees from '../components/Coffees'
import Message from '../components/Message'
import Footer from '../components/Footer'

function Home() {
  return (
    <React.Fragment>
      <Layout.Header>
        <NavMenu />
      </Layout.Header>
      <Layout.Content style={{ padding: '16px 40px', textAlign: 'center' }}>
        <Welcome age={25} name="Jan" />
        <Clicker />
        <Coffees />
        <Message />
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        <Footer />
      </Layout.Footer>
    </React.Fragment>
    )
}

export default Home