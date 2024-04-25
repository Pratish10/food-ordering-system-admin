import { db } from '../lib/db'
import { MenuType, TableStatus } from '@prisma/client'

async function main (): Promise<void> {
  // userId is hardcoded you will have to login first then manually add the your userId from the
  // sesssion then you will be able tun execute the seed command
  await db.category.createMany({
    data: [
      {
        category: 'Burgers',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        category: 'Drinks',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        category: 'Main Course',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        category: 'Desserts',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        category: 'Noodles',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        category: 'Sandwiches',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        category: 'Salads',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        category: 'Curries',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        category: 'Breakfast',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        category: 'Sushi',
        userId: 'clv3odel70000egmuu45avxsb'
      }
    ]
  })

  await db.menu.createMany({
    data: [
      {
        name: 'Xxvdgrlbxco Ghavk',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/218x100.png/cc0000/ffffff',
        amount: '161.77',
        isFeatured: false,
        category: 'Desserts',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Mwhlwd Qfxhoplje',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/144x100.png/cc0000/ffffff',
        amount: '483.07',
        isFeatured: true,
        category: 'Sushi',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Sgezzurehez Muobpfdvnbl',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/140x100.png/cc0000/ffffff',
        amount: '821.75',
        isFeatured: true,
        category: 'Noodles',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Ngycmfj Cnneuqyzcps',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/176x100.png/5fa2dd/ffffff',
        amount: '116.20',
        isFeatured: true,
        category: 'Desserts',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Ztdixi Actzldip',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/142x100.png/cc0000/ffffff',
        amount: '548.45',
        isFeatured: false,
        category: 'Curries',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Slyiwwfmze Eadgtohjg',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/182x100.png/cc0000/ffffff',
        amount: '566.29',
        isFeatured: false,
        category: 'Burgers',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Mtpracfw Hlarysshzd',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/154x100.png/5fa2dd/ffffff',
        amount: '486.87',
        isFeatured: false,
        category: 'Drinks',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Ihzjh Otyvmpyrole',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/198x100.png/ff4444/ffffff',
        amount: '914.85',
        isFeatured: true,
        category: 'Sandwiches',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Jsetu Ktbrz',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/123x100.png/ff4444/ffffff',
        amount: '53.49',
        isFeatured: false,
        category: 'Curries',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Mfbnh Oxtuguqde',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/198x100.png/dddddd/000000',
        amount: '232.50',
        isFeatured: false,
        category: 'Curries',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Lwnbb Wzjbmjz',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/159x100.png/cc0000/ffffff',
        amount: '766.73',
        isFeatured: true,
        category: 'Noodles',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Jxvbsoviwqs Fjbyifdib',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/206x100.png/5fa2dd/ffffff',
        amount: '382.24',
        isFeatured: false,
        category: 'Main Course',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Coseylstg Ozepqlz',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/242x100.png/cc0000/ffffff',
        amount: '910.21',
        isFeatured: false,
        category: 'Desserts',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Pcojbbqmvt Omqozqp',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/183x100.png/ff4444/ffffff',
        amount: '807.34',
        isFeatured: false,
        category: 'Salads',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Azqvdttamr Gvqluytzu',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/160x100.png/5fa2dd/ffffff',
        amount: '301.78',
        isFeatured: false,
        category: 'Drinks',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Vistgw Qcavtpbt',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/188x100.png/cc0000/ffffff',
        amount: '250.18',
        isFeatured: true,
        category: 'Salads',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Drqbtp Wujmujc',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/216x100.png/ff4444/ffffff',
        amount: '996.73',
        isFeatured: false,
        category: 'Noodles',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Xybcgcsgkg Xhboqbj',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
        amount: '540.78',
        isFeatured: true,
        category: 'Desserts',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Kolhyl Nttskbufg',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/232x100.png/dddddd/000000',
        amount: '309.32',
        isFeatured: true,
        category: 'Breakfast',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Xdfefrqk Fameraswjhp',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/109x100.png/cc0000/ffffff',
        amount: '148.45',
        isFeatured: false,
        category: 'Drinks',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Gjrgisrzvmd Uslbwv',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/236x100.png/cc0000/ffffff',
        amount: '880.29',
        isFeatured: true,
        category: 'Main Course',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Kwijxzrczij Vgvoitx',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/200x100.png/dddddd/000000',
        amount: '953.98',
        isFeatured: true,
        category: 'Desserts',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Bcjtwrh Aratgivb',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/172x100.png/dddddd/000000',
        amount: '989.24',
        isFeatured: true,
        category: 'Salads',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Uxvjmnz Jiqinpjz',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/170x100.png/dddddd/000000',
        amount: '685.08',
        isFeatured: true,
        category: 'Drinks',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Sjkauuh Qaoha',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/127x100.png/ff4444/ffffff',
        amount: '247.77',
        isFeatured: true,
        category: 'Salads',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Ooteafit Jusikifh',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/196x100.png/5fa2dd/ffffff',
        amount: '89.86',
        isFeatured: true,
        category: 'Sandwiches',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Qrkykafbzzp Irqqtaf',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/154x100.png/ff4444/ffffff',
        amount: '560.21',
        isFeatured: true,
        category: 'Sushi',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Eraaqx Zzamrdzdo',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/200x100.png/dddddd/000000',
        amount: '351.36',
        isFeatured: false,
        category: 'Curries',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Xubbpqo Zlsfcijzdt',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/151x100.png/dddddd/000000',
        amount: '809.57',
        isFeatured: true,
        category: 'Main Course',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Svxqkwv Eelrqazm',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/233x100.png/5fa2dd/ffffff',
        amount: '675.05',
        isFeatured: true,
        category: 'Noodles',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Chjwvxp Lttiwv',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/142x100.png/dddddd/000000',
        amount: '951.25',
        isFeatured: true,
        category: 'Burgers',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Dfdmf Lsqvsf',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/121x100.png/5fa2dd/ffffff',
        amount: '362.87',
        isFeatured: true,
        category: 'Drinks',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Ebhvyni Mmlnlc',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/133x100.png/dddddd/000000',
        amount: '641.07',
        isFeatured: true,
        category: 'Burgers',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Qpcoqti Brwjdsbnw',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/131x100.png/dddddd/000000',
        amount: '426.76',
        isFeatured: false,
        category: 'Burgers',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Zijfayh Ccjllsfe',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/240x100.png/cc0000/ffffff',
        amount: '323.84',
        isFeatured: false,
        category: 'Burgers',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Xbrjj Akgugy',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/110x100.png/dddddd/000000',
        amount: '681.36',
        isFeatured: true,
        category: 'Noodles',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Dthnjamak Xtgdmile',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/161x100.png/5fa2dd/ffffff',
        amount: '458.93',
        isFeatured: true,
        category: 'Curries',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Twatiu Vptblnzleb',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/136x100.png/5fa2dd/ffffff',
        amount: '344.30',
        isFeatured: false,
        category: 'Sushi',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Ssztk Izcafk',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/176x100.png/cc0000/ffffff',
        amount: '374.04',
        isFeatured: false,
        category: 'Main Course',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Vjsksriqhc Cfmjwgdl',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/168x100.png/dddddd/000000',
        amount: '542.07',
        isFeatured: true,
        category: 'Noodles',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Rvbnpgmscm Vfomjc',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/212x100.png/5fa2dd/ffffff',
        amount: '825.21',
        isFeatured: true,
        category: 'Sushi',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Lvroi Liyehr',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/125x100.png/ff4444/ffffff',
        amount: '373.26',
        isFeatured: true,
        category: 'Burgers',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Rdymxlxa Lvbhcavszhb',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/189x100.png/ff4444/ffffff',
        amount: '137.78',
        isFeatured: false,
        category: 'Sushi',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Mexkpswqyu Mdjmhhpjhka',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/216x100.png/dddddd/000000',
        amount: '806.25',
        isFeatured: false,
        category: 'Breakfast',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Iuywgwdubw Kworq',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/183x100.png/5fa2dd/ffffff',
        amount: '963.31',
        isFeatured: false,
        category: 'Main Course',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Ghjsvj Wjvzs',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/228x100.png/ff4444/ffffff',
        amount: '897.72',
        isFeatured: false,
        category: 'Sandwiches',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Yprbrshw Fniwdzwykux',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/187x100.png/ff4444/ffffff',
        amount: '234.53',
        isFeatured: true,
        category: 'Salads',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Qkdsw Jkzgfdibw',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/234x100.png/ff4444/ffffff',
        amount: '607.24',
        isFeatured: false,
        category: 'Curries',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Tqmotkot Upkxskxcv',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.Vegeterian,
        image: 'http://dummyimage.com/134x100.png/5fa2dd/ffffff',
        amount: '266.94',
        isFeatured: true,
        category: 'Desserts',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        name: 'Envhqsdu Balzvsj',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.nonVegeterian,
        image: 'http://dummyimage.com/109x100.png/cc0000/ffffff',
        amount: '220.03',
        isFeatured: true,
        category: 'Breakfast',
        userId: 'clv3odel70000egmuu45avxsb'
      }
    ]

  })

  await db.table.createMany({
    data: [
      {
        tableNumber: 'T001',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '9',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T002',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '4',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T003',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '9',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T004',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '1',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T005',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '10',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T006',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '4',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T007',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '7',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T008',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '11',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T009',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '1',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T010',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '11',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T011',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '8',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T012',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '6',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T013',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '2',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T014',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '9',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T015',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '4',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T016',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '5',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T017',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '2',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T018',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '11',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T019',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '1',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T020',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '5',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T021',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '10',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T022',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '9',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T023',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '7',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T024',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '7',
        userId: 'clv3odel70000egmuu45avxsb'
      },
      {
        tableNumber: 'T025',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=http://localhost:3000/tables&size=350',
        tableSize: '10',
        userId: 'clv3odel70000egmuu45avxsb'
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
