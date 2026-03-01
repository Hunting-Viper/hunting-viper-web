export interface FulfillmentItem {
  _id: number;
  customer: string;
  item: string;
  orderDate: string;
  isShipped: boolean;
  shippedAt?: string;
}

const fulfillmentData: { fulfillment: FulfillmentItem[] } = {
  fulfillment: [
    {
      _id: 101,
      customer: 'Alice Johnson',
      item: 'Nike Shirt',
      orderDate: '03/01/2026',
      isShipped: true,
      shippedAt: '03/02/2026'
    },
    {
      _id: 102,
      customer: 'Bob Smith',
      item: 'Pants',
      orderDate: '03/01/2026',
      isShipped: false,
      shippedAt: undefined
    },
    {
      _id: 103,
      customer: 'Charlie Davis',
      item: 'Nike Shirt',
      orderDate: '03/02/2026',
      isShipped: false,
      shippedAt: undefined
    },
    {
        _id: 104,
        customer: 'Taylor Swift',
        item: 'Hoodie',
        orderDate: '03/02/2026',
        isShipped: true,
        shippedAt: '03/03/2026'
      }
  ]
};

export default fulfillmentData;