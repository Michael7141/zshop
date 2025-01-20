import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@iconify/react/dist/iconify.js';

const products = [
  {
    name: 'Tsiona Crispy Chips',
    price: '$99.99',
    rating: 4.5,
    reviews: 265,
    image:
      'https://images.unsplash.com/photo-1627662168223-7df99068099a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Tsiona Crispy Chips',
    price: '$99.99',
    rating: 4.5,
    reviews: 265,
    image:
      'https://images.unsplash.com/photo-1627662168223-7df99068099a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Tsiona Crispy Chips',
    price: '$99.99',
    rating: 4.5,
    reviews: 265,
    image:
      'https://images.unsplash.com/photo-1627662168223-7df99068099a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Tsiona Crispy Chips',
    price: '$99.99',
    rating: 4.5,
    reviews: 265,
    image:
      'https://images.unsplash.com/photo-1627662168223-7df99068099a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Tsiona Crispy Chips',
    price: '$99.99',
    rating: 4.5,
    reviews: 265,
    image:
      'https://images.unsplash.com/photo-1627662168223-7df99068099a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Tsiona Crispy Chips',
    price: '$99.99',
    rating: 4.5,
    reviews: 265,
    image:
      'https://images.unsplash.com/photo-1627662168223-7df99068099a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function TopProducts() {
  return (
    <Card className='col-span-2 rounded-lg flex flex-col w-full'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle>Top Products</CardTitle>
        <span className='text-sm text-primary hover:underline cursor-pointer'>
          View All
        </span>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {products.map((product, index) => (
            <div key={index} className='flex items-center gap-4'>
              <img
                src={product.image}
                alt={product.name}
                className='h-12 w-12 rounded-lg object-cover'
              />
              <div className='flex-1'>
                <h3 className='font-medium'>{product.name}</h3>
                <p className='text-sm text-gray-500'>{product.price}</p>
              </div>
              <div className='flex items-center gap-1'>
                <Icon icon='fluent-color:star-28' className='h-4 w-4' />
                <span className='text-sm font-medium'>{product.rating}</span>
                <span className='text-sm text-gray-500'>
                  ({product.reviews})
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
