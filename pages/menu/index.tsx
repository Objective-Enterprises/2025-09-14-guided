import Link from "next/link"
import { items } from "../../lib/food"
import { FoodItem } from "../../types"
import Image from 'next/image'

export const getServerSideProps = async function () {
  // const response = await fetch()
  // const data = await response.json()
  return {
    props: {
      items
    }
  }
}

export default function MenuPage (props: {
  items: FoodItem[]
}) {
  const items = props.items.map(item => {
    const path = `/menu/${item.id}`
    return (
      <div className="menu-item">
        <div>
          <Link href={path}>
            <h3>{item.name}</h3>
          </Link>
          <p>${item.price}</p>
        </div>
        <Image alt={item.name} src={item.image} width={300} height={200} />
      </div>
    )
  })
  return (
    <div className='container'>
      <h1>Menu</h1>
      {items}
    </div>
  )
}