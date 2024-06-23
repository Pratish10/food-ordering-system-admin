import { db } from '../lib/db'
import { Availability, MenuType, TableStatus } from '@prisma/client'

async function main (): Promise<void> {
  // userId is hardcoded you will have to login first then manually add the your userId from the
  // sesssion then you will be able run execute the seed command
  await db.category.createMany({
    data: [
      {
        category: 'Burgers',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        category: 'Drinks',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        category: 'Main Course',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        category: 'Desserts',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        category: 'Noodles',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        category: 'Sandwiches',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        category: 'Salads',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        category: 'Curries',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        category: 'Breakfast',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        category: 'Sushi',
        userId: 'clwlsomrt000010yoiffk17ky'
      }
    ]
  })

  await db.menu.createMany({
    data: [
      {
        name: 'Xxvdgrlbxco Ghavk',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/218x100.png/cc0000/ffffff',
        amount: '161.77',
        isFeatured: false,
        category: 'Desserts',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Mwhlwd Qfxhoplje',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/144x100.png/cc0000/ffffff',
        amount: '483.07',
        isFeatured: true,
        category: 'Sushi',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Sgezzurehez Muobpfdvnbl',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/140x100.png/cc0000/ffffff',
        amount: '821.75',
        isFeatured: true,
        category: 'Noodles',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Ngycmfj Cnneuqyzcps',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/176x100.png/5fa2dd/ffffff',
        amount: '116.20',
        isFeatured: true,
        category: 'Desserts',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Ztdixi Actzldip',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/142x100.png/cc0000/ffffff',
        amount: '548.45',
        isFeatured: false,
        category: 'Curries',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Slyiwwfmze Eadgtohjg',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/182x100.png/cc0000/ffffff',
        amount: '566.29',
        isFeatured: false,
        category: 'Burgers',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Mtpracfw Hlarysshzd',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/154x100.png/5fa2dd/ffffff',
        amount: '486.87',
        isFeatured: false,
        category: 'Drinks',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Ihzjh Otyvmpyrole',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/198x100.png/ff4444/ffffff',
        amount: '914.85',
        isFeatured: true,
        category: 'Sandwiches',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Jsetu Ktbrz',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/123x100.png/ff4444/ffffff',
        amount: '53.49',
        isFeatured: false,
        category: 'Curries',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Mfbnh Oxtuguqde',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/198x100.png/dddddd/000000',
        amount: '232.50',
        isFeatured: false,
        category: 'Curries',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Lwnbb Wzjbmjz',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/159x100.png/cc0000/ffffff',
        amount: '766.73',
        isFeatured: true,
        category: 'Noodles',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Jxvbsoviwqs Fjbyifdib',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/206x100.png/5fa2dd/ffffff',
        amount: '382.24',
        isFeatured: false,
        category: 'Main Course',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Coseylstg Ozepqlz',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/242x100.png/cc0000/ffffff',
        amount: '910.21',
        isFeatured: false,
        category: 'Desserts',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Pcojbbqmvt Omqozqp',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/183x100.png/ff4444/ffffff',
        amount: '807.34',
        isFeatured: false,
        category: 'Salads',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Azqvdttamr Gvqluytzu',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/160x100.png/5fa2dd/ffffff',
        amount: '301.78',
        isFeatured: false,
        category: 'Drinks',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Vistgw Qcavtpbt',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/188x100.png/cc0000/ffffff',
        amount: '250.18',
        isFeatured: true,
        category: 'Salads',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Drqbtp Wujmujc',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/216x100.png/ff4444/ffffff',
        amount: '996.73',
        isFeatured: false,
        category: 'Noodles',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Xybcgcsgkg Xhboqbj',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/221x100.png/5fa2dd/ffffff',
        amount: '540.78',
        isFeatured: true,
        category: 'Desserts',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Kolhyl Nttskbufg',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/232x100.png/dddddd/000000',
        amount: '309.32',
        isFeatured: true,
        category: 'Breakfast',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Xdfefrqk Fameraswjhp',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/109x100.png/cc0000/ffffff',
        amount: '148.45',
        isFeatured: false,
        category: 'Drinks',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Gjrgisrzvmd Uslbwv',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/236x100.png/cc0000/ffffff',
        amount: '880.29',
        isFeatured: true,
        category: 'Main Course',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Kwijxzrczij Vgvoitx',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/200x100.png/dddddd/000000',
        amount: '953.98',
        isFeatured: true,
        category: 'Desserts',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Bcjtwrh Aratgivb',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/172x100.png/dddddd/000000',
        amount: '989.24',
        isFeatured: true,
        category: 'Salads',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Uxvjmnz Jiqinpjz',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/170x100.png/dddddd/000000',
        amount: '685.08',
        isFeatured: true,
        category: 'Drinks',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Sjkauuh Qaoha',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/127x100.png/ff4444/ffffff',
        amount: '247.77',
        isFeatured: true,
        category: 'Salads',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Ooteafit Jusikifh',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/196x100.png/5fa2dd/ffffff',
        amount: '89.86',
        isFeatured: true,
        category: 'Sandwiches',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Qrkykafbzzp Irqqtaf',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/154x100.png/ff4444/ffffff',
        amount: '560.21',
        isFeatured: true,
        category: 'Sushi',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Eraaqx Zzamrdzdo',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/200x100.png/dddddd/000000',
        amount: '351.36',
        isFeatured: false,
        category: 'Curries',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Xubbpqo Zlsfcijzdt',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/151x100.png/dddddd/000000',
        amount: '809.57',
        isFeatured: true,
        category: 'Main Course',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Svxqkwv Eelrqazm',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/233x100.png/5fa2dd/ffffff',
        amount: '675.05',
        isFeatured: true,
        category: 'Noodles',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Chjwvxp Lttiwv',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/142x100.png/dddddd/000000',
        amount: '951.25',
        isFeatured: true,
        category: 'Burgers',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Dfdmf Lsqvsf',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/121x100.png/5fa2dd/ffffff',
        amount: '362.87',
        isFeatured: true,
        category: 'Drinks',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Ebhvyni Mmlnlc',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/133x100.png/dddddd/000000',
        amount: '641.07',
        isFeatured: true,
        category: 'Burgers',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Qpcoqti Brwjdsbnw',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/131x100.png/dddddd/000000',
        amount: '426.76',
        isFeatured: false,
        category: 'Burgers',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Zijfayh Ccjllsfe',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/240x100.png/cc0000/ffffff',
        amount: '323.84',
        isFeatured: false,
        category: 'Burgers',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Xbrjj Akgugy',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/110x100.png/dddddd/000000',
        amount: '681.36',
        isFeatured: true,
        category: 'Noodles',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Dthnjamak Xtgdmile',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/161x100.png/5fa2dd/ffffff',
        amount: '458.93',
        isFeatured: true,
        category: 'Curries',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Twatiu Vptblnzleb',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/136x100.png/5fa2dd/ffffff',
        amount: '344.30',
        isFeatured: false,
        category: 'Sushi',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Ssztk Izcafk',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/176x100.png/cc0000/ffffff',
        amount: '374.04',
        isFeatured: false,
        category: 'Main Course',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Vjsksriqhc Cfmjwgdl',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/168x100.png/dddddd/000000',
        amount: '542.07',
        isFeatured: true,
        category: 'Noodles',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Rvbnpgmscm Vfomjc',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/212x100.png/5fa2dd/ffffff',
        amount: '825.21',
        isFeatured: true,
        category: 'Sushi',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Lvroi Liyehr',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/125x100.png/ff4444/ffffff',
        amount: '373.26',
        isFeatured: true,
        category: 'Burgers',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Rdymxlxa Lvbhcavszhb',
        description: 'A savory pasta dish with a creamy tomato sauce',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/189x100.png/ff4444/ffffff',
        amount: '137.78',
        isFeatured: false,
        category: 'Sushi',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Mexkpswqyu Mdjmhhpjhka',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/216x100.png/dddddd/000000',
        amount: '806.25',
        isFeatured: false,
        category: 'Breakfast',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Iuywgwdubw Kworq',
        description: 'A decadent chocolate lava cake with vanilla ice cream',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/183x100.png/5fa2dd/ffffff',
        amount: '963.31',
        isFeatured: false,
        category: 'Main Course',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Ghjsvj Wjvzs',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/228x100.png/ff4444/ffffff',
        amount: '897.72',
        isFeatured: false,
        category: 'Sandwiches',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Yprbrshw Fniwdzwykux',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/187x100.png/ff4444/ffffff',
        amount: '234.53',
        isFeatured: true,
        category: 'Salads',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Qkdsw Jkzgfdibw',
        description: 'A hearty beef stew with root vegetables and crusty bread',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/234x100.png/ff4444/ffffff',
        amount: '607.24',
        isFeatured: false,
        category: 'Curries',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Tqmotkot Upkxskxcv',
        description: 'A refreshing salad with mixed greens and balsamic vinaigrette',
        type: MenuType.Vegeterian,
        availability: Availability.notAvailable,
        image: 'http://dummyimage.com/134x100.png/5fa2dd/ffffff',
        amount: '266.94',
        isFeatured: true,
        category: 'Desserts',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        name: 'Envhqsdu Balzvsj',
        description: 'A spicy chicken curry with fragrant rice',
        type: MenuType.nonVegeterian,
        availability: Availability.Available,
        image: 'http://dummyimage.com/109x100.png/cc0000/ffffff',
        amount: '220.03',
        isFeatured: true,
        category: 'Breakfast',
        userId: 'clwlsomrt000010yoiffk17ky'
      }
    ]

  })

  await db.table.createMany({
    data: [
      {
        tableNumber: 'T001',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T001&size=350',
        tableSize: '9',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T002',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T002&size=350',
        tableSize: '4',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T003',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T003&size=350',
        tableSize: '9',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T004',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T004&size=350',
        tableSize: '1',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T005',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T005&size=350',
        tableSize: '10',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T006',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T006&size=350',
        tableSize: '4',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T007',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T007&size=350',
        tableSize: '7',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T008',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T008&size=350',
        tableSize: '11',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T009',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T009&size=350',
        tableSize: '1',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T010',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T010&size=350',
        tableSize: '11',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T011',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T011&size=350',
        tableSize: '8',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T012',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T012&size=350',
        tableSize: '6',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T013',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T013&size=350',
        tableSize: '2',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T014',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T014&size=350',
        tableSize: '9',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T015',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T015&size=350',
        tableSize: '4',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T016',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T016&size=350',
        tableSize: '5',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T017',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T017&size=350',
        tableSize: '2',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T018',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T018&size=350',
        tableSize: '11',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T019',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T019&size=350',
        tableSize: '1',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T020',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T020&size=350',
        tableSize: '5',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T021',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T021&size=350',
        tableSize: '10',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T022',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T022&size=350',
        tableSize: '9',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T023',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T023&size=350',
        tableSize: '7',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T024',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T024&size=350',
        tableSize: '7',
        userId: 'clwlsomrt000010yoiffk17ky'
      },
      {
        tableNumber: 'T025',
        tableStatus: TableStatus.Vacant,
        tableQrCode: 'https://quickchart.io/qr?text=https://food-ordering-system-client.vercel.app?tableNumber=T025&size=350',
        tableSize: '10',
        userId: 'clwlsomrt000010yoiffk17ky'
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
