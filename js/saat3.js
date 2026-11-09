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
const recommen = document.querySelector(".recommen")

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
         <div class="secimlerrr">
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
        product_img: "https://img.chrono24.com/images/uhren/49565439-vgbtb7j343bj6vhv9pu0x43s-Square360.jpg",
        product_img1: "https://img.chrono24.com/images/uhren/49565439-vgbtb7j343bj6vhv9pu0x43s-Square420.jpg",
        product_img2: "https://img.chrono24.com/images/uhren/49565439-ke1zbk9a6bkgcf0zx78p5dd7-Square420.jpg",
        product_img3: "https://img.chrono24.com/images/uhren/49565439-1i6qrwgw5f8bilefl4c4xocf-Square420.jpg",
        product_img4: "https://img.chrono24.com/images/uhren/49565439-vybxe8snbydblx5vl3y1x85k-Square420.jpg",
        product_img5: "https://img.chrono24.com/images/uhren/49565439-m344ifqkvqzofviyargtbagx-Square420.jpg",
        product_img6: "https://img.chrono24.com/images/uhren/49565439-5r9is024sx1l41y77mvyyzaz-Square420.jpg",
        model: "Rolex Oysterdate Precision",
        seria: "Oyster Date Ref.6466 Hand Winding Uni",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM7,831",
        product_key_2: "+ RM263 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/o857cff63x93-e88jhq4ozerqqsbfpisrzkql-Square360.jpg",
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
        product_img: "https://img.chrono24.com/images/uhren/hdtozinoor8o-rveb1xc2wd2iu4bkst3h8jth-Square360.jpg",
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
        product_img: "https://img.chrono24.com/images/uhren/49482859-ueid87r9ys68cg0nirvslvam-Square360.jpg",
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
        product_img: "https://img.chrono24.com/images/uhren/v30on42dswdo-savwipvf3gbg8g3lwvaq008m-Square360.jpg",
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
        product_img: "https://img.chrono24.com/images/uhren/49407816-ai2vyuuh7cpnwxbhzvn8dezv-Square360.jpg",
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
        product_img: "https://img.chrono24.com/images/uhren/49689551-30dix30m74ccy17555x8laao-Square360.jpg",
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
        product_img: "https://img.chrono24.com/images/uhren/49452962-bael4so1e9hv7mn7v9zl7703-Square360.jpg",
        model: "Rolex Oyster Perpetual",
        seria: "34mm Date Silver Dial",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM13,813",
        product_key_2: "+ RM414 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/a9qxmdy18tzs-3z0j9d8f3fr14nax20qo1w28-Square360.jpg",
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
        product_img: "https://img.chrono24.com/images/uhren/48798960-l45x8o5rcidcu6l9zaah9jy9-Square360.jpg",
        model: "Rolex Day-Date",
        seria: "36",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM71,993",
        product_key_2: "+ RM414 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47558801-maabr74d9fkeha4ejaenv2z8-Square360.jpg",
        model: "Rolex Submariner Date",
        seria: "Two tone submariner , serviced in May 20",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM73,373",
        product_key_2: "Plus shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/49682699-5vv2arqlo47egha4mkqv71jn-Square360.jpg",
        model: "Rolex Datejust",
        seria: "Ref. 16013 champagne dial steel gold jubi",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM23,439",
        product_key_2: "+ RM414 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/49656232-73lgb69rxqoyjn1gizxpyfmh-Square360.jpg",
        model: "Rolex Datejust",
        seria: "36 Full set full links Year 2020",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM43,000",
        product_key_2: "Plus shipping"
    },
]

let sat = [
    {
        product_img: "https://img.chrono24.com/images/uhren/48947319-p1me68gdaeo1kpzp4ma3m2c1-Square360.jpg",
        model: "Rolex Day-Date",
        seria: "18k Yellow Gold - Vintage 1973 Linen",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM47,589",
        product_key_2: "+ RM1,120 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/49274867-vp8ec1cmftysmvi4caat0yqs-Square360.jpg",
        model: "Rolex Oyster Perpetual",
        seria: "31 – Tiffany Blue",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM41,506",
        product_key_2: "+ RM537 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/48439248-wctxeng26b5opy4lazyccrtd-Square360.jpg",
        model: "Rolex Datejust",
        seria: "1601 Full set great Conditions",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM25,091",
        product_key_2: "+ RM652 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47698631-37j74gkm01ujxldxriokivoo-Square360.jpg",
        model: "Rolex Day-Date",
        seria: "Diamond Full set unworn purchased Dec",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM399,250",
        product_key_2: "Plus shipping"
    },
]

let satt = [
    {
        product_img: "https://img.chrono24.com/images/uhren/pz7sgc2d7w4r-rtzzxtbh66cu3ss19u51cvft-Square360.jpg",
        model: "Rolex Explorer",
        seria: "214270 39mm Black Dial Stainless Steel",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM31,822",
        product_key_2: "+ RM4,188 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/aj1xf397mgki-qgpycsihghv94gs213nztn97-Square360.jpg",
        model: "Rolex Oysterdate Precision",
        seria: "Is watch only",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM11,199",
        product_key_2: "+ RM350 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/45062642-buaa15ndxmw79t5nthorta95-Square360.jpg",
        model: "Rolex Lady-Datejust",
        seria: "Oyster Perpetual Lady",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM7,211",
        product_key_2: "+ RM267 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/49608348-0egkewttnemlzlap1aguc4lb-Square360.jpg",
        model: "Rolex Submariner (No Date)",
        seria: "5513",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM48,154",
        product_key_2: "+ RM1,252 for shipping"
    },
]

let saatt = [
    {
        product_img: "https://img.chrono24.com/images/uhren/iyqargrtpbnj-c74jcdf2ogg4jsat744maatl-Square360.jpg",
        model: "Rolex Yacht-Master",
        seria: "Blue Dial Yellow Gold Yacht Master 29m",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM23,911",
        product_key_2: "+ RM160 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/48421381-3e2kde7m58gnc21doxnb664p-Square360.jpg",
        model: "Rolex Day-Date",
        seria: "36 Rolex Service in September 2023",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM144,096",
        product_key_2: "Plus shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/49656606-ayotk41odw3c38lovow77jbt-Square360.jpg",
        model: "Rolex Datejust",
        seria: "1600 Silver Dial SS Folded Jubilee No Pa",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM20,729",
        product_key_2: "+ RM942 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/49671970-ph4s5kn45zn479frajw4mb1b-Square360.jpg",
        model: "Rolex Oyster Perpetual",
        seria: "6516 Automatic 1970 Steel Fair",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM9,721",
        product_key_2: "+ RM588 for shipping"
    },
]

let saattt = [
    {
        product_img: "https://img.chrono24.com/images/uhren/48880203-1igtjuutkaqh9brtzbe2bajj-Square360.jpg",
        model: "Rolex Datejust",
        seria: "Ref. 16014 Diamonds Just Serviced Like ",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM21,088",
        product_key_2: "+ RM937 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/f8twcatg17i0-6bwbfripkydcv6w81o2r13nl-Square360.jpg",
        model: "Rolex Submariner Date",
        seria: "126610 Excellent Condition 41mm",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM59,883",
        product_key_2: "Free shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/q43blnkmjdaf-50sxu31wwxi7k89ocu8yycwu-Square360.jpg",
        model: "Rolex Datejust",
        seria: "only",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM15,999",
        product_key_2: "+ RM350 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/eegp7fe5h18k-7s20gel8ag93fxhv7n11i7lv-Square360.jpg",
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
        product_img: "https://img.chrono24.com/images/uhren/46422290-zuqfo6aeawiiusifbo8x5vu4-Square360.jpg",
        model: "Rolex Day-Date",
        seria: "36 Day-Date 18238 President 18k Gold F",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM85,842",
        product_key_2: "+ RM838 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/49359382-1va3n6s70b2jf5fn7bunccrh-Square360.jpg",
        model: "Rolex Submariner Date",
        seria: "Kermit MK5 2008 RRR Great Condition",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM50,106",
        product_key_2: "+ RM937 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47161786-f8nicpq2f4gtxk7s16khcpxc-Square360.jpg",
        model: "Rolex Submariner Date",
        seria: "1978 Vintage Submariner",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM50,247",
        product_key_2: "+ RM1,252 for shipping"
    },
]

let wotclar = [
    {
        product_img: "https://img.chrono24.com/images/uhren/49572852-tqml7w0xi8l3j3eo1kujz46u-Square360.jpg",
        model: "Rolex GMT-Master II",
        seria: "coke rosso nera del 1992 top condition con",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM41,482",
        product_key_2: "+ RM3,750 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/49493148-ff1sxh8lgcnjapkcv7e3yhtz-Square360.jpg",
        model: "Rolex Datejust",
        seria: "36 Silver Dial Very Good Condition",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM21,734",
        product_key_2: "+ RM1,466 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/47786746-15pbacgj256wo4wpwlib2a10-Square360.jpg",
        model: "Rolex Yacht-Master II",
        seria: "Full Set 2014 Rolex Yacht-Master II",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM82,754",
        product_key_2: "Plus shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/4n1o3l8jzhxa-s266ob4cra2lovw5tyc5zuw3-Square360.jpg",
        model: "Rolex Submariner Date",
        seria: "126610 Excellent Condition 41mm",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM59,883",
        product_key_2: "Free shipping"
    },
]



let sonsast = [
    {
        product_img: "https://img.chrono24.com/images/uhren/dohwsx7cjdih-7rm66ae6syqn9eu4dwk93zch-Square360.jpg",
        model: "Rolex Day-Date",
        seria: "18038 Green Ombre Dial President 18K",
        product_key: "RM116,919",
        product_key_2: "+ RM335 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/j78h1hi5jtae-f7erp2r1f4r7kxgeqs40pouh-Square360.jpg",
        model: "Rolex Datejust",
        seria: "Ref. 16013 champagne dial steel gold jubi",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM23,451",
        product_key_2: "+ RM415 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/49719971-wrw1s29fgyn65u2542t25e5p-Square360.jpg",
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

let recom = [
    {
        product_img: "https://img.chrono24.com/images/uhren/46614930-8kowpmtvusaj13yjaor63zaj-Square420.jpg",
        model: "Rolex GMT-Master II",
        seria: "coke rosso nera del 1992 top condition con",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM41,482",
        product_key_2: "+ RM3,750 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/48551744-ow3q61s5vnt29k2q4yqbl188-Square420.jpg",
        model: "Rolex Datejust",
        seria: "36 Silver Dial Very Good Condition",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM21,734",
        product_key_2: "+ RM1,466 for shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/48790884-tt4ekwsi3fqb4jy442dggtse-Square420.jpg",
        model: "Rolex Yacht-Master II",
        seria: "Full Set 2014 Rolex Yacht-Master II",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM82,754",
        product_key_2: "Plus shipping"
    },
    {
        product_img: "https://img.chrono24.com/images/uhren/44362980-4fq6fr1fhy2wnimtgwdtib73-Square420.jpg",
        model: "Rolex Submariner Date",
        seria: "126610 Excellent Condition 41mm",
        melumat: "Used (Good) | Year of production 1975 | No original box | No original papers",
        product_key: "RM59,883",
        product_key_2: "Free shipping"
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
send_Data(recom, recommen)

