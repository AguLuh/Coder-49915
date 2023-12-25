const products = [
    { 
        id: '1', 
        name: 'Ferrari Purosangue',
        price: 16000, 
        category: 'ferrari', 
        img:'https://cdn.ferrari.com/cms/network/media/img/resize/631f431c482135455e01f05c-ferrari-purosangue-crop-line-up?height=750', 
        stock: 10, 
        description:'Descripcion del ferrari'
    },
    { 
        id: '2',
        name: 'Ferrari 812 GTS', 
        price: 18000, 
        category: 'ferrari', 
        img:'https://cdn.ferrari.com/cms/network/media/img/resize/5dd55c232cdb32285a785f25-line-up-ferrari-812-gts?height=750', 
        stock: 10, 
        description:'Descripcion del Ferrari'
    },
    { 
        id: '3', 
        name: 'Ferrari 296 GTB', 
        price: 20999, 
        category: 'ferrari', 
        img:'https://cdn.ferrari.com/cms/network/media/img/resize/60d453eae26eb865e634a268?height=750', 
        stock: 10, 
        description:'Descripcion del Ferrari'
    },
    { 
        id: '4', 
        name: 'Aston Martin DBX707',
        price: 14449, 
        category: 'astonmartin', 
        img:'https://www.astonmartin.com/-/media/new-model-page-design---models/models_assets_grey_background/dbx-707.jpg?mw=1920&rev=0f5af04b84ca4b28a5e0309b4c1201ca&extension=webp&hash=2B091C70636E01A9FB23555D0419FDA9', 
        stock: 10, 
        description:'Descripcion del Aston Martin'
    },
    { 
        id: '5',
        name: 'Aston Martin DB12', 
        price: 12000, 
        category: 'astonmartin', 
        img:'https://www.astonmartin.com/-/media/new-model-page-design---models/models_assets_grey_background/db12.jpg?mw=1920&rev=ee0f7bfd6c27476b9f5343fbd883af93&extension=webp&hash=57D205C0AD498A927EF53E171854D1AA', 
        stock: 10, 
        description:'Descripcion del Aston Martin'
    },
    { 
        id: '6', 
        name: 'Aston Martin DBS 770 Ultimate', 
        price: 15000, 
        category: 'astonmartin', 
        img:'https://www.astonmartin.com/-/media/new-model-page-design---models/models_assets_grey_background/dbs-770-ultimate.jpg?mw=1920&rev=c9bb128f05c04952bfced456cd5f2772&extension=webp&hash=AC8492E43705E5F9D076CC60B01C53CA', 
        stock: 10, 
        description:'Descripcion del Aston Martin"'
    },
    { 
        id: '7', 
        name: 'Peugot 208',
        price: 8000, 
        category: 'peugot', 
        img:'https://www.peugeot.com.uy/content/dam/peugeot/master/b2c/our-range/nouvelle-208/bbc/l-m/PEUGEOT_IMAGE_e-208_C0_810x455.png', 
        stock: 10, 
        description:'Descripcion de peugot'
    },
    { 
        id: '8',
        name: 'Peugot SUV 2008', 
        price: 9000, 
        category: 'peugot', 
        img:'https://www.peugeot.com.uy/content/dam/peugeot/master/b2c/our-range/new-2008/bbc/l-m/PEUGEOT_IMAGE_2008_C0_810x455.png', 
        stock: 10, 
        description:'Descripcion de peugot'
    },
    { 
        id: '9', 
        name: 'Peugot SUV Mercosur', 
        price: 10000, 
        category: 'peugot', 
        img:'https://www.peugeot.com.uy/content/dam/peugeot/uruguay/2008-mercosur/2008_bbc_merc2-removebg.png', 
        stock: 10, 
        description:'Descripcion de peugot'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}