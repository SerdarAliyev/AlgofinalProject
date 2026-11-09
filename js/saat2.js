const saatlar = document.querySelector(".saatlar")
const secimm = document.querySelector(".secimm")
const rolexler = document.querySelector(".rolexler")
const promotedd = document.querySelector(".promotedd")
const ikinci = document.querySelector(".ikinci")
const watchh = document.querySelector(".watchh")
const satm = document.querySelector(".satm")
const deta = document.querySelector(".deta")
const saathlar = document.querySelector(".saathlar")
const data = document.querySelector(".data")
const sozlerrr = document.querySelector(".sozlerrr")
const wotlar = document.querySelector(".wotlar")
const son = document.querySelector(".son")
let saat = [
    {
        foto: "https://img.chrono24.com/images/catalog-item/CM_655-6u95csvmn9z1kc78i9h30qrt-Rect500_610.png",
        soz1: "Rolex",
        soz2: "GMT-Master II",
        soz3: "from RM41,741"
    },
    {
        foto: "https://img.chrono24.com/images/catalog-item/CM_841-jldv3cdudw3504f8klwotyqe-Rect500_610.png",
        soz1: "Rolex",
        soz2: "Daytona",
        soz3: "from RM62,846"
    },
    {
        foto: "https://img.chrono24.com/images/catalog-item/CMF_438-qtxgopjprnhcmre5bkw2jpfg-Rect500_610.png",
        soz1: "Rolex",
        soz2: "Submariner",
        soz3: "from RM30,551"
    },
    {
        foto: "https://img.chrono24.com/images/catalog-item/CMF_314-vg46tkc5vvd88hr51a41dwsi-Rect500_610.png",
        soz1: "Rolex",
        soz2: "Datejust",
        soz3: "from RM8,526"
    },
    {
        foto: "https://img.chrono24.com/images/catalog-item/CMF_336-w39fat6l28yo0oi74m0k5gf9-Rect500_610.png",
        soz1: "Rolex",
        soz2: "Day-Date",
        soz3: "from RM37,051"
    }
]
saat.forEach((rolex) => {
    saatlar.innerHTML += `
        <div class="watchcard">
          <img src="${rolex.foto}">
            <p>${rolex.soz1}</p>
            <h4>${rolex.soz2}</h4>
            <p>${rolex.soz3}</p>
        </div>
    `
})

let secim = [
    {
        soz: "Used"
    },
    {
        soz: "New/Unworn"
    },
    {
        soz: "Item is in stock"
    },
    {
        soz: "Datejust"
    },
    {
        soz: "Datejust 36"
    },
    {
        soz: "Daytona"
    },
    {
        soz: "European Union"
    },
    {
        soz: "Asia-Pacific"
    },
    {
        soz: "to RM21,200"
    }
]
secimm.innerHTML = `
    <div class="filter">
        <p>Filter(1)</p>
    </div>
`;

secim.forEach((secim) => {
    secimm.innerHTML += `
         <div class="secimlerr">
         <p>${secim.soz}</p>
        </div>
    `
})

let rolexx = [
    {
        product_img: "https://img.chrono24.com/images/uhren/69v675pxywpo-cx1uq4vhf5waytz1i8p45z52-Square360.jpg",
        product_img1: "https://img.chrono24.com/images/uhren/69v675pxywpo-cx1uq4vhf5waytz1i8p45z52-Square360.jpg",
        product_img2: "https://img.chrono24.com/images/uhren/qpq41tsjzccc-4glfosfup47rk6kvg3yxegxi-Square420.jpg",
        product_img3: "https://img.chrono24.com/images/uhren/d5kf2uu4uq4s-e7ad855etcspldm2vwxqnp0v-Square420.jpg",
        product_img4: "https://img.chrono24.com/images/uhren/f8ri5r1ntfyu-7lnlyfs3tvmcs2psoa6rg00t-Square420.jpg",
        product_img5: "https://img.chrono24.com/images/uhren/d08j1bwbumdx-r69rvsq8d6q4ik2bgwbseqlv-Square420.jpg",
        product_img6: "https://img.chrono24.com/images/uhren/rtd9r6akbkxt-9xf3i7midrlmi0gygghl0q8l-Square420.jpg",
        model: "Rolex Oysterdate Precision",
        seria: "Is watch only",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM10,499",
        product_key_2: "+ RM350 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47455085-1os141toojqdq5rtvotpbt3k-Square360.jpg",
        product_img1: "https://img.chrono24.com/images/uhren/47455085-1os141toojqdq5rtvotpbt3k-Square420.jpg",
        product_img2: "https://img.chrono24.com/images/uhren/47455085-gg9be232zr9xsz8o01r302ga-Square420.jpg",
        product_img3: "https://img.chrono24.com/images/uhren/47455085-m89bcejqmbyp2n8wweo845st-Square420.jpg",
        product_img4: "https://img.chrono24.com/images/uhren/47455085-6n2dd1ayzd4lgvbe5of2bo4s-Square420.jpg",
        product_img5: "https://img.chrono24.com/images/uhren/47455085-jptw2avbksjfnrhxylp9tfvm-Square420.jpg",
        product_img6: "https://img.chrono24.com/images/uhren/47455085-bswy3f6rvuqk6z0eorf5qhuq-Square420.jpg",
        model: "Rolex Oysterdate Precision",
        seria: "Oyster Date",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM7,996",
        product_key_2: "+ RM267 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/48756964-6r6a29f3jhixz3bgfel6kxha-Square360.jpg",
        product_img1: "https://img.chrono24.com/images/uhren/48756964-6r6a29f3jhixz3bgfel6kxha-Square420.jpg",
        product_img2: "https://img.chrono24.com/images/uhren/48756964-w7gbun2l6yh5ijh28slhgvzo-Square420.jpg",
        product_img3: "https://img.chrono24.com/images/uhren/48756964-telc8ycc6w6y7ro6t64ppc3n-Square420.jpg",
        product_img4: "https://img.chrono24.com/images/uhren/48756964-8t2eomrn5c41mqf9f954a4op-Square420.jpg",
        product_img5: "https://img.chrono24.com/images/uhren/48756964-chtfu8c00wjbohdf98okkrud-Square420.jpg",
        product_img6: "https://img.chrono24.com/images/uhren/48756964-3rdc890u1195ujzht5n43bd6-Square420.jpg",
        model: "Rolex Oyster Perpetual",
        seria: "6623 Automatic Ladies Watch C #148106",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM6,343",
        product_key_2: "+ RM267 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47805284-vbu3wckn9bt0x022ub4eowyh-Square360.jpg",
        product_img1: "https://img.chrono24.com/images/uhren/47805284-vbu3wckn9bt0x022ub4eowyh-Square420.jpg",
        product_img2: "https://img.chrono24.com/images/uhren/47805284-dwcmdc4rptbocu8gfq8jcuos-Square420.jpg",
        product_img3: "https://img.chrono24.com/images/uhren/47805284-1hwhfa476clbqoavquxbgnsr-Square420.jpg",
        product_img4: "https://img.chrono24.com/images/uhren/47805284-auii8fiuvxomkm410gykoaxx-Square420.jpg",
        product_img5: "https://img.chrono24.com/images/uhren/47805284-10kxtt6vsdvxumzqya8k57sh-Square420.jpg",
        product_img6: "https://img.chrono24.com/images/uhren/47805284-fzhulk3u02l2cx1ngz2bikiz-Square420.jpg",
        model: "Rolex Datejust",
        seria: "36 126234 Green Dial Jubilee band + Box",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM56,485",
        product_key_2: "+ RM791 for shipping"
    },
]

let prom = [
    {
        product_img: "https://img.chrono24.com/images/uhren/49060614-yp8y2mn2kyw1hx3fs5ruz193-Square360.jpg",
        product_img1: "https://img.chrono24.com/images/uhren/49060614-yp8y2mn2kyw1hx3fs5ruz193-Square420.jpg",
        product_img2: "https://img.chrono24.com/images/uhren/49060614-utyg3rhoecdhedy187dytng3-Square420.jpg",
        product_img3: "https://img.chrono24.com/images/uhren/49060614-8xv27z70ff9h2zbrnjuaebfl-Square420.jpg",
        product_img4: "https://img.chrono24.com/images/uhren/49060614-3lzljp8b3p3smbqzazmusv6c-Square420.jpg",
        product_img5: "https://img.chrono24.com/images/uhren/49060614-4def3po51exvdk58vlouevoj-Square420.jpg",
        product_img6: "https://img.chrono24.com/images/uhren/49060614-9qt1nr23mnqddk0rghc1ep22-Square420.jpg",
        model: "Rolex Oyster Perpetual",
        seria: "34mm Date Silver Dial",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM13,813",
        product_key_2: "+ RM414 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/48620436-ufxanwboxsb8ywmgetslejzw-Square420.jpg",
        product_img1: "https://img.chrono24.com/images/uhren/48620436-ufxanwboxsb8ywmgetslejzw-Square420.jpg",
        product_img2: "https://img.chrono24.com/images/uhren/48620436-n1nirfj6s9zb7156kbwva2g2-Square420.jpg",
        product_img3: "https://img.chrono24.com/images/uhren/48620436-ndj8a8otj9sbh7776hfl6dpc-Square420.jpg",
        product_img4: "https://img.chrono24.com/images/uhren/48620436-t64u7duwiyu851yfjeomfab4-Square420.jpg",
        product_img5: "https://img.chrono24.com/images/uhren/48620436-yikiuoaswxh1267hy7oxfj83-Square420.jpg",
        product_img6: "https://img.chrono24.com/images/uhren/48620436-wzl7rwbvh6ev2bzvh1henihb-Square420.jpg",
        model: "Rolex Day-Date",
        seria: "36 Rolex Service in September 2023",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM143,811",
        product_key_2: "Plus shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/6lpuk3ji3qp7-iwm2bkituqyncghjx1yg2znu-Square360.jpg",
        product_img1: "https://img.chrono24.com/images/uhren/48654947-2dumhrp9dvbh28e8v8x20drs-Square420.jpg",
        product_img2: "https://img.chrono24.com/images/uhren/48654947-36kevj6k2c1olw62im7r3j67-Square420.jpg",
        product_img3: "https://img.chrono24.com/images/uhren/48654947-kfipv741doqgyudnc0xh6sky-Square420.jpg",
        product_img4: "https://img.chrono24.com/images/uhren/48654947-vkcktblvg7hj8tdh36cv5rcr-Square420.jpg",
        product_img5: "https://img.chrono24.com/images/uhren/48654947-uldtm6q0d40plbxel6fztb03-Square420.jpg",
        product_img6: "https://img.chrono24.com/images/uhren/48654947-rcclgc27eojaw7018eag50e5-Square420.jpg",
        model: "Rolex Datejust",
        seria: "16013",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM15,458",
        product_key_2: "+ RM426 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/uok0003vl82j-kgs7s6y0zs8b2dmmq37mjsw5-Square360.jpg",
        product_img1: "https://img.chrono24.com/images/uhren/uok0003vl82j-kgs7s6y0zs8b2dmmq37mjsw5-Square420.jpg",
        product_img2: "https://img.chrono24.com/images/uhren/jp9le553arxn-6t5j9fk5dfueycl5vg3u7j20-Square420.jpg",
        product_img3: "https://img.chrono24.com/images/uhren/qrsft2t71vyd-bkbiqtk16wta2josdls1yy23-Square420.jpg",
        product_img4: "https://img.chrono24.com/images/uhren/7rhu76eqolub-v4if1ahtk2vdinh4da40bv1k-Square420.jpg",
        product_img5: "https://img.chrono24.com/images/uhren/k0effvpp2bdv-5x9g0zhyr6eatidwgb1m6vmf-Square420.jpg",
        product_img6: "https://img.chrono24.com/images/uhren/vwe4r6xwjosd-qy9okey52nsdwvfw7yvkmknr-Square420.jpg",
        model: "Rolex Submariner Date",
        seria: "Top condition",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM39,865",
        product_key_2: "+ RM469 for shipping"
    },
]

let iki = [
    {
        product_img: "https://img.chrono24.com/images/uhren/49060614-yp8y2mn2kyw1hx3fs5ruz193-Square360.jpg",
        model: "Rolex Oyster Perpetual",
        seria: "34mm Date Silver Dial",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM13,813",
        product_key_2: "+ RM414 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/pz7sgc2d7w4r-rtzzxtbh66cu3ss19u51cvft-Square360.jpg",
        model: "Rolex Datejust",
        seria: "only",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM15,999",
        product_key_2: "+ RM350 for shipping"
    },
    {
        product_img: "https://images.unsplash.com/photo-1541778480-fc1752bbc2a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        sozd: "Always informed.",
        sozd2: "The latest luxury watch news, trends, and stories.",
        btn: "Register now"
    },
]

let watchd = [
    {
        product_img: "https://img.chrono24.com/images/uhren/vz4vdmbp5a0v-sbc0egi4ei1kzds02e8jzke3-Square360.jpg",
        model: "Rolex Day-Date",
        seria: "36",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM71,993",
        product_key_2: "+ RM414 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47723467-0jq40pbw90th5kpqjnhqyf4m-Square360.jpg",
        model: "Rolex Submariner Date",
        seria: "Two tone submariner , serviced in May 20",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM73,373",
        product_key_2: "Plus shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/48642364-uz4m4m6k528y82u4ukprv3u0-Square360.jpg",
        model: "Rolex Datejust",
        seria: "Ref. 16013 champagne dial steel gold jubi",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM23,439",
        product_key_2: "+ RM414 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/49048537-6ju9jg9xv59ziirghgr04fxh-Square360.jpg",
        model: "Rolex Datejust",
        seria: "36 Full set full links Year 2020",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM43,000",
        product_key_2: "Plus shipping"
    },
]

let sat = [
    {
        product_img: "https://img.chrono24.com/images/uhren/8l9mmg3l2s6j-xdpreza1ysaiersc2o8wg9aq-Square360.jpg",
        model: "Rolex Day-Date",
        seria: "18k Yellow Gold - Vintage 1973 Linen",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM47,589",
        product_key_2: "+ RM1,120 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/48577824-0hyrq64rerkix89gpw7wkxw7-Square360.jpg",
        model: "Rolex Oyster Perpetual",
        seria: "31 – Tiffany Blue",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM41,506",
        product_key_2: "+ RM537 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/dohwsx7cjdih-7rm66ae6syqn9eu4dwk93zch-Square360.jpg",
        model: "Rolex Datejust",
        seria: "1601 Full set great Conditions",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM25,091",
        product_key_2: "+ RM652 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/46669838-qoq27pcfoskes44i7ow58nwj-Square360.jpg",
        model: "Rolex Day-Date",
        seria: "Diamond Full set unworn purchased Dec",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM399,250",
        product_key_2: "Plus shipping"
    },
]

let satt = [
    {
        product_img: "https://img.chrono24.com/images/uhren/48797715-uhi3sb18zpecytzyikkseim5-Square360.jpg",
        model: "Rolex Explorer",
        seria: "214270 39mm Black Dial Stainless Steel",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM31,822",
        product_key_2: "+ RM4,188 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/078lqlkxiwjd-6hc28ucajrelgoda1stqmuxu-Square360.jpg",
        model: "Rolex Oysterdate Precision",
        seria: "Is watch only",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM11,199",
        product_key_2: "+ RM350 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47967360-yq76rooxdronnl85fcum79e6-Square360.jpg",
        model: "Rolex Lady-Datejust",
        seria: "Oyster Perpetual Lady",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM7,211",
        product_key_2: "+ RM267 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/1h5tyylcnbxe-eolpa6gu9kh78ycuwyzhwqal-Square360.jpg",
        model: "Rolex Submariner (No Date)",
        seria: "5513",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM48,154",
        product_key_2: "+ RM1,252 for shipping"
    },
]

let saatt = [
    {
        product_img: "https://img.chrono24.com/images/uhren/g06jqpa3z6c2-rspt6w6c1binnm6tmossx1nv-Square360.jpg",
        model: "Rolex Yacht-Master",
        seria: "Blue Dial Yellow Gold Yacht Master 29m",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM23,911",
        product_key_2: "+ RM160 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/48620436-ufxanwboxsb8ywmgetslejzw-Square360.jpg",
        model: "Rolex Day-Date",
        seria: "36 Rolex Service in September 2023",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM144,096",
        product_key_2: "Plus shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47664222-xh100pwju3wsct4d4xaxpiah-Square360.jpg",
        model: "Rolex Datejust",
        seria: "1600 Silver Dial SS Folded Jubilee No Pa",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM20,729",
        product_key_2: "+ RM942 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47786746-15pbacgj256wo4wpwlib2a10-Square360.jpg",
        model: "Rolex Oyster Perpetual",
        seria: "6516 Automatic 1970 Steel Fair",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM9,721",
        product_key_2: "+ RM588 for shipping"
    },
]

let saattt = [
    {
        product_img: "https://img.chrono24.com/images/uhren/49239097-y9tswxo54o027i0tl9z3tg5p-Square360.jpg",
        model: "Rolex Datejust",
        seria: "Ref. 16014 Diamonds Just Serviced Like ",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM21,088",
        product_key_2: "+ RM937 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/p4kfl0gr3f2p-g3o9k3d9oahqmn8na0eygdu1-Square360.jpg",
        model: "Rolex Submariner Date",
        seria: "126610 Excellent Condition 41mm",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM59,883",
        product_key_2: "Free shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/pz7sgc2d7w4r-rtzzxtbh66cu3ss19u51cvft-Square360.jpg",
        model: "Rolex Datejust",
        seria: "only",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM15,999",
        product_key_2: "+ RM350 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47723467-0jq40pbw90th5kpqjnhqyf4m-Square360.jpg",
        model: "Rolex Submariner Date",
        seria: "Two tone submariner , serviced in May 20",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM73,518",
        product_key_2: "Plus shipping"
    },
]

let sozler = [
    {
        product_img: "https://s.c24.media/images/default/illustrations/buyer-protection.svg",
        model: "Worry-Free Watch Purchases",
        seria: "Chrono24 Buyer Protection Has You Covered ",
        product_key: "More information"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/w8uu3em4xygq-1zl2m1r6e6xswtn2mnl1t4z8-Square360.jpg",
        model: "Rolex Day-Date",
        seria: "36 Day-Date 18238 President 18k Gold F",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM85,842",
        product_key_2: "+ RM838 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/49156425-ilmw814forge11yyk6xn2vm2-Square360.jpg",
        model: "Rolex Submariner Date",
        seria: "Kermit MK5 2008 RRR Great Condition",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM50,106",
        product_key_2: "+ RM937 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/5yhor0ae14y4-f70xsp9oewua9t5skr90q4cu-Square360.jpg",
        model: "Rolex Submariner Date",
        seria: "1978 Vintage Submariner",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM50,247",
        product_key_2: "+ RM1,252 for shipping"
    },
]

let wotclar = [
    {
        product_img: "https://img.chrono24.com/images/uhren/47094059-z90tps07ecyfecn4ufl3nlog-Square360.jpg",
        model: "Rolex GMT-Master II",
        seria: "coke rosso nera del 1992 top condition con",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM41,482",
        product_key_2: "+ RM3,750 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47558801-maabr74d9fkeha4ejaenv2z8-Square360.jpg",
        model: "Rolex Datejust",
        seria: "36 Silver Dial Very Good Condition",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM21,734",
        product_key_2: "+ RM1,466 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/xtm5sbsrzg6o-mwde0zakqtgult2fv9fkrlhl-Square360.jpg",
        model: "Rolex Yacht-Master II",
        seria: "Full Set 2014 Rolex Yacht-Master II",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM82,754",
        product_key_2: "Plus shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/p4kfl0gr3f2p-g3o9k3d9oahqmn8na0eygdu1-Square360.jpg",
        model: "Rolex Submariner Date",
        seria: "126610 Excellent Condition 41mm",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM59,883",
        product_key_2: "Free shipping"
    },
]

let sonsat = [
    {
        product_img: "https://img.chrono24.com/images/uhren/47094059-z90tps07ecyfecn4ufl3nlog-Square360.jpg",
        model: "Rolex GMT-Master II",
        seria: "coke rosso nera del 1992 top condition con",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM41,482",
        product_key_2: "+ RM3,750 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47558801-maabr74d9fkeha4ejaenv2z8-Square360.jpg",
        model: "Rolex Datejust",
        seria: "36 Silver Dial Very Good Condition",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM21,734",
        product_key_2: "+ RM1,466 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/xtm5sbsrzg6o-mwde0zakqtgult2fv9fkrlhl-Square360.jpg",
        model: "Rolex Yacht-Master II",
        seria: "Full Set 2014 Rolex Yacht-Master II",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM82,754",
        product_key_2: "Plus shipping"
    },
    {
        product_key: "Next",
        product_key_2: '<i class="fas fa-chevron-right"></i>'
    },
]

let sonsast = [
    {
        product_img: "https://img.chrono24.com/images/uhren/48614598-8u2s3e9p4fxrbwtoefuwbxh0-Square360.jpg",
        model: "Rolex Day-Date",
        seria: "18038 Green Ombre Dial President 18K",
        product_key: "RM116,919",
        product_key_2: "+ RM335 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/48642364-uz4m4m6k528y82u4ukprv3u0-Square360.jpg",
        model: "Rolex Datejust",
        seria: "Ref. 16013 champagne dial steel gold jubi",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM23,451",
        product_key_2: "+ RM415 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/gbhs18nt5qzt-pbapk5pa7u30fst3sew2kui6-Square360.jpg",
        model: "Rolex GMT-Master II",
        seria: "126711CHNR",
        product_key: "RM81,980",
        product_key_2: "Plus shipping"
    },
    {
        product_key: "Next",
        product_key_2: '<i class="fas fa-chevron-right"></i>'
    },
]

function send_Data(data, send_div, klass = "") {
    data.forEach((card) => {

        let rolex = document.createElement("div")

        rolex.className = `rolexdi ${klass || ""} ${card.product_key === "Next" ? "nextcard" : ""} ${card.model === "Worry-Free Watch Purchases" ? "buyer-card" : ""} ${card.sozd ? "news-card" : ""}`

        rolex.innerHTML = `
            ${card.product_img ? `
                <img class="saatsekli" src="${card.product_img}">
            ` : ""}

            ${card.sozd ? `
                <h4>${card.sozd}</h4>
                <p>${card.sozd2 || ""}</p>
                <button>${card.btn || ""}</button>
            ` : card.product_key === "Next" ? `
                <h4>${card.product_key}</h4>
                <p>${card.product_key_2 || ""}</p>
            ` : `
                <h4>${card.model || ""}</h4>
                <p>${card.seria || ""}</p>
                <h4>${card.product_key || ""}</h4>
                <p>${card.product_key_2 || ""}</p>

                ${card.model !== "Worry-Free Watch Purchases" ? `
                    <div class="sozler">
                        <h4>Popular</h4>
                        <i class="far fa-heart"></i>
                    </div>

                    <div class="sag_sol">
                        <div class="sag">
                            <i class="fas fa-chevron-left"></i>
                        </div>
                        <div class="sol">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                ` : ""}
            `}
        `

   rolex.addEventListener("click", () => {

    if (card.product_key === "Next") return
    if (card.model === "Worry-Free Watch Purchases") return
    if (card.sozd === "Always informed.") return

    localStorage.setItem("card", JSON.stringify(card))
    window.location.href = "detal.html"

})

        send_div.appendChild(rolex)

    })
}

send_Data(rolexx, rolexler)
send_Data(prom, promotedd)
send_Data(iki, ikinci)
send_Data(watchd, watchh)
send_Data(sat, satm)
send_Data(satt, deta)
send_Data(saatt, saathlar)
send_Data(saattt, data)
send_Data(sozler, sozlerrr)
send_Data(wotclar, wotlar)
send_Data(sonsast, son, "sonuncu")


