import Image from "next/image"
import { HomeContainer, Product } from "./home"

import camiseta1 from '../assets/tshirt1.svg'
import camiseta2 from '../assets/tshirt2.svg'
import camiseta3 from '../assets/tshirt3.svg'



export default function Home() {
    return (
        <HomeContainer>
        <Product>
          <Image src={camiseta1} width={520} height={480} alt="" />
  
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
  
        <Product>
          <Image src={camiseta2} width={520} height={480} alt="" />
  
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </HomeContainer>
    )
}