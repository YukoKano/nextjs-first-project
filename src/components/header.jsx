import Link from "next/link";

const products = [{ name: "bag" }, { name: "shoe" }, { name: "socks" }];

const header = () => {
  <>
    <ul>
      <li>
        <Link href="/">home</Link>
      </li>
        {products.map((products) => {
          return (
            <li key={products.name}>
              <Link href={{
                pathname: `products/${products.name}`,
                // query: { name: "test" }
              }}
              >{ products.name }</Link>
            </li>
          )
        })}
        <li>
          <Link href="about">about</Link>
        </li>
      </ul>
    </>
}

export default header;