import images from './images';

export const AllProductData = {
    "ZX9 SPEAKER" : {
        id: 1,
        productTitle: 'ZX9',
        productType: 'SPEAKER',
        cartTitle: 'ZX9',
        productPrice: 4500,
        productDesc: `Upgrade your sound system with the all new ZX9 active speaker. 
            It’s a bookshelf speaker system that offers truly wireless connectivity -- 
            creating new possibilities for more pleasing and practical audio setups.`,
        featuresParagraphOne: `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital 
            coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five 
            wired source devices connected for easy switching. Improved bluetooth technology offers 
            near lossless audio quality at up to 328ft (100m).`, 
        featuresParagraphTwo: `Discover clear, more natural sounding highs than the competition with ZX9’s 
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
        webpagePreviewTablet: images['webpagepreviewzx9Tablet'], 
        productImage: images['zx9preview'], 
        productImageTablet: images['zx9previewTablet'],
        productImageMobile: images['zx9previewMobile'],
        galleryOne: images['zx9galleryOne'],
        galleryTwo: images['zx9galleryTwo'],
        galleryThree: images['zx9galleryThree'],
        galleryOneTablet: images['zx9galleryOneTablet'],
        galleryTwoTablet: images['zx9galleryTwoTablet'],
        galleryThreeTablet: images['zx9galleryThreeTablet'],
        galleryOneMobile: images['zx9galleryOneMobile'],
        galleryTwoMobile: images['zx9galleryTwoMobile'],
        galleryThreeMobile: images['zx9galleryThreeMobile'],
        youMayAlsoLike : [
            {product: 'ZX7 SPEAKER', title: "ZX7 SPEAKER", image: images['zx7preview'], imageMobile: images['youmayalsolikezx7Mobile'], imageTablet: images['youmayalsolikezx7Tablet']},
            {product: 'XX99 MARK I HEADPHONES', title: "XX99 MARK I", image: images['xx99markonepreview'], imageMobile: images['youmayalsolikexx99markoneMobile'], imageTablet: images['youmayalsolikexx99markoneTablet']},
            {product: 'XX59 HEADPHONES', title: "XX59", image: images['xx59preview'], imageMobile: images['youmayalsolikexx59Mobile'], imageTablet: images['youmayalsolikexx59Tablet']}
        ]
    },

    "ZX7 SPEAKER" : {
        id: 2,
        productTitle: "ZX7",
        productType: "SPEAKER",
        cartTitle: 'ZX7',
        productPrice: 3500,
        productDesc: `Stream high quality sound wirelessly with minimal to no loss. 
            The ZX7 speaker uses high-end audiophile components that represents the top 
            of the line powered speakers for home or studio use.`,
        featuresParagraphOne: `Reap the advantages of a flat diaphragm tweeter cone. 
            This provides a fast response rate and excellent high frequencies that lower 
            tiered bookshelf speakers cannot provide. The woofers are made from aluminum 
            that produces a unique and clear sound. XLR inputs allow you to connect to 
            a mixer for more advanced usage.`, 
        featuresParagraphTwo: `The ZX7 speaker is the perfect blend of stylish design and high performance. 
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
        webpagePreviewTablet: images['webpagepreviewzx7Tablet'], 
        productImage: images['zx7preview'],
        productImageTablet: images['zx7previewTablet'],
        productImageMobile: images['zx7previewMobile'],
        galleryOne: images['zx7galleryOne'],
        galleryTwo: images['zx7galleryTwo'],
        galleryThree: images['zx7galleryThree'],
        galleryOneTablet: images['zx7galleryOneTablet'],
        galleryTwoTablet: images['zx7galleryTwoTablet'],
        galleryThreeTablet: images['zx7galleryThreeTablet'],
        galleryOneMobile: images['zx7galleryOneMobile'],
        galleryTwoMobile: images['zx7galleryTwoMobile'],
        galleryThreeMobile: images['zx7galleryThreeMobile'],
        youMayAlsoLike: [
            {product: 'ZX9 SPEAKER', title: "ZX9 SPEAKER", image: images['zx9preview'], imageMobile: images['youmayalsolikezx9Mobile'], imageTablet: images['youmayalsolikezx9Tablet']},
            {product: 'XX99 MARK I HEADPHONES', title: "XX99 MARK I", image: images['xx99markonepreview'], imageMobile: images['youmayalsolikexx99markoneMobile'], imageTablet: images['youmayalsolikexx99markoneTablet']},
            {product: 'XX59 HEADPHONES', title: "XX59", image: images['xx59preview'], imageMobile: images['youmayalsolikexx59Mobile'], imageTablet: images['youmayalsolikexx59Tablet']}
        ]  
    },

    "XX99 MARK II HEADPHONES" : {
        id: 3,
        productTitle: "XX99 MARK II",
        productType: "HEADPHONES",
        cartTitle: 'XX99 MK II',
        productPrice: 2999,
        productDesc: `The new XX99 Mark II headphones is the pinnacle of pristine audio. 
            It redefines your premium headphone experience by reproducing the balanced depth 
            and precision of studio-quality sound.`,
        featuresParagraphOne: `Featuring a genuine leather head strap and premium earcups, 
            these headphones deliver superior comfort for those who like to enjoy endless listening. 
            It includes intuitive controls designed for any situation. Whether you’re taking a business 
            call or just in your own personal space, the auto on/off and pause features ensure 
            that you’ll never miss a beat.`, 
        featuresParagraphTwo: `The advanced Active Noise Cancellation with built-in equalizer allow you to 
            experience your audio world on your terms. It lets you enjoy your audio in peace, 
            but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 
            compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, 
            cutting-edge technology, and a modern design aesthetic.`,
        includes: [
            {quantity: 1, item: "Headphone Unit"},
            {quantity: 2, item: "Replacement Earcups"},
            {quantity: 1, item: "User Manual"},
            {quantity: 1, item: "3.5mm 5m Audio Cable"},
            {quantity: 1, item: "Travel Bag"}
        ],
        isNewProduct: true,
        webpagePreviewTablet: images['webpagepreviewxx99marktwoTablet'], 
        productImage: images['xx99marktwopreview'],
        productImageTablet: images['xx99marktwopreviewTablet'],
        productImageMobile: images['xx99marktwopreviewMobile'],
        galleryOne: images['xx99marktwogalleryOne'],
        galleryTwo: images['xx99marktwogalleryTwo'],
        galleryThree: images['xx99marktwogalleryThree'],
        galleryOneTablet: images['xx99marktwogalleryOneTablet'],
        galleryTwoTablet: images['xx99marktwogalleryTwoTablet'],
        galleryThreeTablet: images['xx99marktwogalleryThreeTablet'],
        galleryOneMobile: images['xx99marktwogalleryOneMobile'],
        galleryTwoMobile: images['xx99marktwogalleryTwoMobile'],
        galleryThreeMobile: images['xx99marktwogalleryThreeMobile'],
        youMayAlsoLike: [
            {product: 'XX99 MARK I HEADPHONES', title: "XX99 MARK I", image: images['xx99markonepreview'], imageMobile: images['youmayalsolikexx99markoneMobile'], imageTablet: images['youmayalsolikexx99markoneTablet']},
            {product: 'XX59 HEADPHONES', title: "XX59", image: images['xx59preview'], imageMobile: images['youmayalsolikexx59Mobile'], imageTablet: images['youmayalsolikexx59Tablet']},
            {product: 'ZX9 SPEAKER', title: "ZX9 SPEAKER", image: images['zx9preview'], imageMobile: images['youmayalsolikezx9Mobile'], imageTablet: images['youmayalsolikezx9Tablet']}
        ]  
    },

    "XX99 MARK I HEADPHONES" : {
        id: 4,
        productTitle: "XX99 MARK I",
        productType: "HEADPHONES",
        cartTitle: 'XX99 MK I',
        productPrice: 1750,
        productDesc: `As the gold standard for headphones, 
            the classic XX99 Mark I offers detailed and accurate 
            audio reproduction for audiophiles, mixing engineers, 
            and music aficionados alike in studios and on the go.`,
        featuresParagraphOne: `As the headphones all others are measured against, 
            the XX99 Mark I demonstrates over five decades of audio expertise, 
            redefining the critical listening experience. 
            This pair of closed-back headphones are made of industrial, 
            aerospace-grade materials to emphasize durability at a relatively 
            light weight of 11 oz.`,
        featuresParagraphTwo: `From the handcrafted microfiber ear cushions to the robust metal 
            headband with inner damping element, the components work together to 
            deliver comfort and uncompromising sound. Its closed-back design 
            delivers up to 27 dB of passive noise cancellation, reducing resonance 
            by reflecting sound to a dedicated absorber. For connectivity, 
            a specially tuned cable is included with a balanced gold connector.`,
        includes: [
            {quantity: 1, item: "Headphone Unit"},
            {quantity: 2, item: "Replacement Earcups"},
            {quantity: 1, item: "User Manual"},
            {quantity: 1, item: "3.5mm 5m Audio Cable"}
        ],
        isNewProduct: false,
        webpagePreviewTablet: images['webpagepreviewxx99markoneTablet'], 
        productImage: images['xx99markonepreview'],
        productImageTablet: images['xx99markonepreviewTablet'],
        productImageMobile: images['xx99markonepreviewMobile'],
        galleryOne: images['xx99markonegalleryOne'],
        galleryTwo: images['xx99markonegalleryTwo'],
        galleryThree: images['xx99markonegalleryThree'],
        galleryOneTablet: images['xx99markonegalleryOneTablet'],
        galleryTwoTablet: images['xx99markonegalleryTwoTablet'],
        galleryThreeTablet: images['xx99markonegalleryThreeTablet'],
        galleryOneMobile: images['xx99markonegalleryOneMobile'],
        galleryTwoMobile: images['xx99markonegalleryTwoMobile'],
        galleryThreeMobile: images['xx99markonegalleryThreeMobile'],
        youMayAlsoLike: [
            {product: 'XX99 MARK II HEADPHONES', title: "XX99 MARK II", image: images['xx99marktwopreview'], imageMobile: images['youmayalsolikexx59marktwoMobile'], imageTablet: images['youmayalsolikexx99marktwoTablet']},
            {product: 'XX59 HEADPHONES', title: "XX59", image: images['xx59preview'], imageMobile: images['youmayalsolikexx59Mobile'], imageTablet: images['youmayalsolikexx59Tablet']},
            {product: 'ZX9 SPEAKER', title: "ZX9 SPEAKER", image: images['zx9preview'], imageMobile: images['youmayalsolikezx9Mobile'], imageTablet: images['youmayalsolikezx9Tablet']}
        ]  
    }, 

    "XX59 HEADPHONES" : {
        id: 5,
        productTitle: "XX59",
        productType: "HEADPHONES",
        cartTitle: 'XX59',
        productPrice: 899,
        productDesc: `Enjoy your audio almost anywhere and customize 
            it to your specific tastes with the XX59 headphones. 
            The stylish yet durable versatile wireless headset is 
            a brilliant companion at home or on the move.`,
        featuresParagraphOne: `These headphones have been created from durable, 
            high-quality materials tough enough to take anywhere. 
            Its compact folding design fuses comfort and minimalist 
            style making it perfect for travel. Flawless transmission is 
            assured by the latest wireless technology engineered for 
            audio synchronization with videos.`, 
        featuresParagraphTwo: `More than a simple pair of headphones, 
            this headset features a pair of built-in microphones for clear, 
            hands-free calling when paired with a compatible smartphone. 
            Controlling music and calls is also intuitive thanks to easy-access 
            touch buttons on the earcups. Regardless of how you use the XX59 headphones, 
            you can do so all day thanks to an impressive 30-hour battery life that 
            can be rapidly recharged via USB-C.`,
        includes: [
            {quantity: 1, item: "Headphone Unit"},
            {quantity: 2, item: "Replacement Earcups"},
            {quantity: 1, item: "User Manual"},
            {quantity: 1, item: "3.5mm 5m Audio Cable"}
        ],
        isNewProduct: false,
        webpagePreviewTablet: images['webpagepreviewxx59Tablet'], 
        productImage: images['xx59preview'],
        productImageTablet: images['xx59previewTablet'],
        productImageMobile: images['xx59previewMobile'],
        galleryOne: images['xx59galleryOne'],
        galleryTwo: images['xx59galleryTwo'],
        galleryThree: images['xx59galleryThree'],
        galleryOneTablet: images['xx59galleryOneTablet'],
        galleryTwoTablet: images['xx59galleryTwoTablet'],
        galleryThreeTablet: images['xx59galleryThreeTablet'],
        galleryOneMobile: images['xx59galleryOneMobile'],
        galleryTwoMobile: images['xx59galleryTwoMobile'],
        galleryThreeMobile: images['xx59galleryThreeMobile'],
        youMayAlsoLike: [
            {product: 'XX99 MARK II HEADPHONES', title: "XX99 MARK II", image: images['xx99marktwopreview'], imageMobile: images['youmayalsolikexx99marktwoMobile'], imageTablet: images['youmayalsolikexx99marktwoTablet']},
            {product: 'XX99 MARK I HEADPHONES', title: "XX99 MARK I", image: images['xx99markonepreview'], imageMobile: images['youmayalsolikexx99markoneMobile'], imageTablet: images['youmayalsolikexx99markoneTablet']},
            {product: 'ZX9 SPEAKER', title: "ZX9 SPEAKER", image: images['zx9preview'], imageMobile: images['youmayalsolikezx9Mobile'], imageTablet: images['youmayalsolikezx9Tablet']}
        ]  
    },

    "YX1 WIRELESS EARPHONES" : {
        id: 6,
        productTitle: "YX1 WIRELESS",
        productType: "EARPHONES",
        cartTitle: 'YX1',
        productPrice: 599,
        productDesc: `Tailor your listening experience with bespoke dynamic drivers 
            from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound 
            even in noisy environments with its active noise cancellation feature.`,
        featuresParagraphOne: `Experience unrivalled stereo sound thanks to innovative acoustic technology. 
            With improved ergonomics designed for full day wearing, 
            these revolutionary earphones have been finely crafted to provide you with the perfect fit, 
            delivering complete comfort all day long while enjoying exceptional noise isolation 
            and truly immersive sound.`,
        featuresParagraphTwo: `The YX1 Wireless Earphones features customizable controls for volume, music, calls, 
            and voice assistants built into both earbuds. The new 7-hour battery life can be extended 
            up to 28 hours with the charging case, giving you uninterrupted play time. 
            Exquisite craftsmanship with a splash resistant design now available in an 
            all new white and grey color scheme as well as the popular classic black.`,
        includes: [
            {quantity: 2, item: "Earphone Unit"},
            {quantity: 6, item: "Multi-size Earplugs"},
            {quantity: 1, item: "User Manual"},
            {quantity: 1, item: "USB-C Charging Cable"},
            {quantity: 1, item: "Travel Pouch"}
        ],
        isNewProduct: true,
        webpagePreviewTablet: images['webpagepreviewyx1Tablet'], 
        productImage: images['yx1preview'],
        productImageTablet: images['yx1previewTablet'],
        productImageMobile: images['yx1previewMobile'],
        galleryOne: images['yx1galleryOne'],
        galleryTwo: images['yx1galleryTwo'],
        galleryThree: images['yx1galleryThree'],
        galleryOneTablet: images['yx1galleryOneTablet'],
        galleryTwoTablet: images['yx1galleryTwoTablet'],
        galleryThreeTablet: images['yx1galleryThreeTablet'],
        galleryOneMobile: images['yx1galleryOneMobile'],
        galleryTwoMobile: images['yx1galleryTwoMobile'],
        galleryThreeMobile: images['yx1galleryThreeMobile'],
        youMayAlsoLike: [
            {product: 'XX99 MARK I HEADPHONES', title: "XX99 MARK I", image: images['xx99markonepreview'], imageMobile: images['youmayalsolikexx99markoneMobile'], imageTablet: images['youmayalsolikexx99markoneTablet']},
            {product: 'XX59 HEADPHONES', title: "XX59", image: images['xx59preview'], imageMobile: images['youmayalsolikexx59Mobile'], imageTablet: images['youmayalsolikexx59Tablet']},
            {product: 'ZX9 SPEAKER', title: "ZX9 SPEAKER", image: images['zx9preview'], imageMobile: images['youmayalsolikezx9Mobile'], imageTablet: images['youmayalsolikezx9Tablet']}
        ]  
    }
}