import images from './images';

export const AllProductData = {
    "ZX9 SPEAKER" : {
        productTitle: 'ZX9',
        productType: 'SPEAKER',
        productPrice: 4500,
        productDesc: `Upgrade your sound system with the all new ZX9 active speaker. 
            It’s a bookshelf speaker system that offers truly wireless connectivity -- 
            creating new possibilities for more pleasing and practical audio setups.`,
        features: `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital 
            coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five 
            wired source devices connected for easy switching. Improved bluetooth technology offers 
            near lossless audio quality at up to 328ft (100m).

            Discover clear, more natural sounding highs than the competition with ZX9’s 
            signature planar diaphragm tweeter. Equally important is its powerful room-shaking 
            bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal 
            sound quality whether in a large room or small den. Furthermore, you will experience 
            new sensations from old songs since it can respond to even the subtle waveforms.`,
        includes: [
            {quantity: 2, item: "Speaker Unit"},
            {quantity: 2, item: "Speaker Cloth Panel"},
            {quantity: 1, item: "User Manual"},
            {quantity: 1, item: "3.5mm 10m Audio Cable"},
            {quantity: 1, item: "10m Optical Cable"}
        ],
        isNewProduct: true,
        productImage: images['zx9preview'], 
        galleryOne: images['zx9galleryOne'],
        galleryTwo: images['zx9galleryTwo'],
        galleryThree: images['zx9galleryThree'],
        youMayAlsoLike : [
            {product: "ZX7 SPEAKER", image : images['zx7preview']},
            {product: "XX99 MARK I", image : images['xx99markonepreview']},
            {product: "XX59", image : images['xx59preview']}
        ]
    },

    "ZX7 SPEAKER" : {
        productTitle: "ZX7",
        productType: "SPEAKER",
        productPrice: 3500,
        productDesc: `Stream high quality sound wirelessly with minimal to no loss. 
            The ZX7 speaker uses high-end audiophile components that represents the top 
            of the line powered speakers for home or studio use.`,
        features: `Reap the advantages of a flat diaphragm tweeter cone. 
            This provides a fast response rate and excellent high frequencies that lower 
            tiered bookshelf speakers cannot provide. The woofers are made from aluminum 
            that produces a unique and clear sound. XLR inputs allow you to connect to 
            a mixer for more advanced usage.

            The ZX7 speaker is the perfect blend of stylish design and high performance. 
            It houses an encased MDF wooden enclosure which minimises acoustic resonance. 
            Dual connectivity allows pairing through bluetooth or traditional optical and 
            RCA input. Switch input sources and control volume at your finger tips with 
            the included wireless remote. This versatile speaker is equipped to deliver 
            an authentic listening experience.`,
        includes: [
            {quantity: 2, item: "Speaker Unit"},
            {quantity: 2, item: "Speaker Cloth Panel"},
            {quantity: 1, item: "User Manual"},
            {quantity: 1, item: "3.5mm 7.5m Audio Cable"},
            {quantity: 1, item: "7.5m Optical Cable"}
        ],
        isNewProduct: false,
        productImage: images['zx7preview'],
        galleryOne: images['zx7galleryOne'],
        galleryTwo: images['zx7galleryTwo'],
        galleryThree: images['zx7galleryThree'],
        youMayAlsoLike: [
            {product: "ZX9 SPEAKER", image: images['zx9preview']},
            {product: "XX99 MARK I", image: images['xx99markonepreview']},
            {product: "XX59", image: images['xx59preview']}
        ]  
    }
}