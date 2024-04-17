import { db } from '../lib/db'
import { MenuType, TableStatus } from '@prisma/client'

async function main (): Promise<void> {
  // userId is hardcoded
  await db.menu.createMany({
    data: [
      {
        name: 'Classic Cheeseburger',
        amount: '9.99',
        category: 'Burgers',
        description:
          'Juicy beef patty topped with melted cheddar cheese, lettuce, tomato, onion, and pickles.',
        image: 'https://utfs.io/f/5c0578c1-8aa2-4456-b822-6669f2d1cc64-4xzcyv.jpg',
        isFeatured: true,
        type: MenuType.nonVegeterian,
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Margarita Cocktail',
        amount: '7.50',
        category: 'Drinks',
        description:
          'Refreshing cocktail made with tequila, lime juice, and triple sec, served with a salt rim.',
        image: 'https://utfs.io/f/922627c6-ccfc-48f2-986a-4925b53d2112-lj7gln.jpg',
        isFeatured: false,
        type: MenuType.nonVegeterian,
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Vegetable Stir-Fry',
        amount: '11.99',
        category: 'Main Course',
        description:
          'Assorted vegetables stir-fried in a savory sauce, served over steamed rice.',
        image: 'https://utfs.io/f/e226dfc3-0cac-4029-b3e7-46ab291db727-5w2xjm.jpg',
        isFeatured: true,
        type: MenuType.Vegeterian,
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Chocolate Brownie Sundae',
        amount: '6.99',
        category: 'Desserts',
        description:
          'Warm chocolate brownie topped with vanilla ice cream, whipped cream, and chocolate sauce.',
        image: 'https://utfs.io/f/40ff6adb-d8cf-4123-8ab5-87e16a84b7bf-86zex7.jpg',
        isFeatured: true,
        type: MenuType.Vegeterian,
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Spicy Tofu Ramen',
        amount: '10.99',
        category: 'Noodles',
        description:
          'Spicy ramen noodles with tofu, mushrooms, green onions, and nori seaweed.',
        image: 'https://utfs.io/f/1511ea73-df09-404a-84ca-a92987de4e7c-s960bv.jpg',
        isFeatured: false,
        type: MenuType.Vegeterian,
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'BBQ Pulled Pork Sandwich',
        amount: '12.50',
        category: 'Sandwiches',
        description:
          'Slow-cooked pulled pork smothered in barbecue sauce, served on a toasted bun with coleslaw.',
        image: 'https://utfs.io/f/eafd0fba-e9c4-43d4-9a9d-07ce8f827cbc-u3cmfp.jpg',
        isFeatured: true,
        type: MenuType.nonVegeterian,
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Caprese Salad',
        amount: '8.99',
        category: 'Salads',
        description:
          'Fresh salad made with tomatoes, mozzarella cheese, basil leaves, olive oil, and balsamic glaze.',
        image: 'https://utfs.io/f/0ba6ed96-04dc-46f5-b52c-14a532f47cfc-eon33s.jpg',
        isFeatured: false,
        type: MenuType.Vegeterian,
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Chicken Tikka Masala',
        amount: '14.99',
        category: 'Curries',
        description:
          'Tender chicken pieces cooked in a creamy tomato-based sauce with Indian spices, served with naan bread.',
        image: 'https://utfs.io/f/aa435c1b-bb7f-429b-b956-dfb064551b00-6yf31n.jpg',
        isFeatured: true,
        type: MenuType.nonVegeterian,
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Fruit Smoothie Bowl',
        amount: '9.50',
        category: 'Breakfast',
        description:
          'Smoothie bowl topped with assorted fresh fruits, granola, and honey.',
        image: 'https://utfs.io/f/bf296177-a9f1-422c-9359-659ebcc4f52b-qgyuqp.jpg',
        isFeatured: true,
        type: MenuType.Vegeterian,
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Sushi Platter',
        amount: '18.99',
        category: 'Sushi',
        description:
          'Assortment of fresh sushi rolls including tuna, salmon, and avocado, served with soy sauce and wasabi.',
        image: 'https://utfs.io/f/45a71b2f-f5de-4275-ab3b-1ebb85e0a6df-cd12qk.jpg',
        isFeatured: false,
        type: MenuType.nonVegeterian,
        userId: 'clv3odel70000egmuu45avxsb'
      }
    ]
  })

  await db.table.createMany({
    data: [
      {
        tableNumber: 'T001',
        tableSize: '4',
        tableStatus: TableStatus.Vacant,
        userId: 'clv3odel70000egmuu45avxsb',
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350'
      },
      {
        tableNumber: 'T002',
        tableSize: '6',
        tableStatus: TableStatus.Vacant,
        userId: 'clv3odel70000egmuu45avxsb',
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350'
      },
      {
        tableNumber: 'T003',
        tableSize: '2',
        tableStatus: TableStatus.Vacant,
        userId: 'clv3odel70000egmuu45avxsb',
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350'
      },
      {
        tableNumber: 'T004',
        tableSize: '8',
        tableStatus: TableStatus.Vacant,
        userId: 'clv3odel70000egmuu45avxsb',
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350'
      },
      {
        tableNumber: 'T005',
        tableSize: '5',
        tableStatus: TableStatus.Vacant,
        userId: 'clv3odel70000egmuu45avxsb',
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350'
      },
      {
        tableNumber: 'T006',
        tableSize: '3',
        tableStatus: TableStatus.Vacant,
        userId: 'clv3odel70000egmuu45avxsb',
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350'
      },
      {
        tableNumber: 'T007',
        tableSize: '4',
        tableStatus: TableStatus.Vacant,
        userId: 'clv3odel70000egmuu45avxsb',
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350'
      },
      {
        tableNumber: 'T008',
        tableSize: '6',
        tableStatus: TableStatus.Vacant,
        userId: 'clv3odel70000egmuu45avxsb',
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350'
      },
      {
        tableNumber: 'T009',
        tableSize: '2',
        tableStatus: TableStatus.Vacant,
        userId: 'clv3odel70000egmuu45avxsb',
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350'
      },
      {
        tableNumber: 'T010',
        tableSize: '8',
        tableStatus: TableStatus.Vacant,
        userId: 'clv3odel70000egmuu45avxsb',
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350'
      }
    ]
  })
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })
