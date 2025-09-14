import { GetServerSidePropsContext } from "next"
import { items } from "../../lib/food"
import { FoodItem } from "../../types"
import Image from "next/image"
import Link from "next/link"

export const getServerSideProps = async function (context: GetServerSidePropsContext) {
  console.log('context', context)
  const item = items.find(item => item.id === context.params?.id)
  console.log('item', item)
  return {
    props: {
      item
    }
  }
}

export default function DetailPage (props: {
  item: FoodItem
}) {
  return (
    <div className="dish-details-container">
      <h1>{props.item.name} (${props.item.price})</h1>
      <div className='dish-image'>
        <Image
          alt={props.item.name}
          src={props.item.image}
          width={300}
          height={200}
        />
        <p>Ingredients: {props.item.ingredients.join(', ')}</p>
        <Link href='/menu'>Menu</Link>
      </div>
    </div>
  )
}