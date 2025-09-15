import Hero from '@/sections/Hero'
import Services from '@/sections/Services'

import Edge from '@/sections/Edge'
import Order from '@/sections/Order'
import Request from '@/sections/Request'
import About from '@/sections/About'
import Seo from '@/sections/Seo'

export const metadata = {
  title: '',
}

export default () => {
  return (
    <>
      <Hero />
      <Services />
      <Order />
      <Request />
      <Edge />
      <About />
      <Seo />
    </>
  )
}
