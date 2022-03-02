import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css'
const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

            <ProductCard product={product} className='bg-dark text-white'>
                <ProductCard.Image  className='custom-image'/>
                <ProductCard.Title title={'Cafe'} className="text-bold" />
                <ProductCard.Buttons className='custom-buttons'  /> 
            </ProductCard>

            <ProductCard product={product} className='bg-dark text-white' >
                <ProductImage className='custom-image' style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                <ProductTitle className="text-bold" />
                <ProductButtons className='custom-buttons' style={{display: 'flex', justifyContent: 'center'}} />
            </ProductCard>

            <ProductCard product={product} style={{backgroundColor: '#70D1F8'}} >
                <ProductImage style={{boxShadow: '20px 20px 20px rgba(0,0,0,0.2)'}} />
                <ProductTitle style={{fontWeight: 'bold'}} />
                <ProductButtons style={{display: 'flex', justifyContent: 'center'}}/>
            </ProductCard>
        </div>
    </div>
  )
}
