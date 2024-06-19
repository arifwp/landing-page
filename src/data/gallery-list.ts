export interface ImgGalleryItemProps {
  gallery: ImgGalleryItem;
}

export interface ListGalleryPhotos {
  id: string;
  src: string;
  width: number;
  height: number;
  tags?: [];
  alt: string;
}

export interface ImgGalleryItem {
  id: string;
  year: string;
  imgUrl: Array<ListGalleryPhotos>;
}

export const imgGallery: Array<ImgGalleryItem> = [
  {
    id: "KF-2018",
    year: "2018",
    imgUrl: [
      {
        id: "20181",
        src: "/images/event/2018/anto.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Panitia Event",
      },
      {
        id: "20182",
        src: "/images/event/2018/barisan-topeng-ireng.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Topeng Ireng",
      },
      {
        id: "20183",
        src: "/images/event/2018/biru.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Spanduk Karnaval",
      },
      {
        id: "20184",
        src: "/images/event/2018/gerakan-masyarakat.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval",
      },
      {
        id: "20185",
        src: "/images/event/2018/halloween.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval Halloween",
      },
      {
        id: "20186",
        src: "/images/event/2018/hijab-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval Hijab",
      },
      {
        id: "20187",
        src: "/images/event/2018/javanese-culture.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval Kejawen",
      },
      {
        id: "20188",
        src: "/images/event/2018/kacamata.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kacamata hitam",
      },
      {
        id: "20189",
        src: "/images/event/2018/karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnval",
      },
      {
        id: "201810",
        src: "/images/event/2018/karnaval-anak.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Anak",
      },
      {
        id: "201811",
        src: "/images/event/2018/karnaval-desa.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Desa Ketaon Pengging",
      },
      {
        id: "201812",
        src: "/images/event/2018/karnaval-jawa.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval Jawa",
      },
      {
        id: "201813",
        src: "/images/event/2018/karnaval-ketaon.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Ketaon Fair 2018",
      },
      {
        id: "201814",
        src: "/images/event/2018/karnaval-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval Ketaon",
      },
      {
        id: "201815",
        src: "/images/event/2018/karnaval-pemuka-agama.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval Pemuka Agama",
      },
      {
        id: "201816",
        src: "/images/event/2018/karnaval-reog.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Reog",
      },
      {
        id: "201817",
        src: "/images/event/2018/karnaval-rt.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Pengging",
      },
      {
        id: "201818",
        src: "/images/event/2018/karnaval-rt20.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval",
      },
      {
        id: "201819",
        src: "/images/event/2018/karnaval-topeng-ireng.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnval Topeng Ireng",
      },
      {
        id: "201820",
        src: "/images/event/2018/kostum-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval",
      },
      {
        id: "201821",
        src: "/images/event/2018/mycrazyhome.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "MyCrazyHome",
      },
      {
        id: "201822",
        src: "/images/event/2018/pak-lurah.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kepala Desa Ketaon",
      },
      {
        id: "201823",
        src: "/images/event/2018/participant.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Partisipan Karnaval",
      },
      {
        id: "201824",
        src: "/images/event/2018/paryanto.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Alm. Bp. Paryanto",
      },
      {
        id: "201825",
        src: "/images/event/2018/pemerintah-desa.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pemerintah Desa Ketaon",
      },
      {
        id: "201826",
        src: "/images/event/2018/penonton.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Penonton Karnaval",
      },
      {
        id: "201827",
        src: "/images/event/2018/penonton-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Penonton Karnaval",
      },
      {
        id: "201828",
        src: "/images/event/2018/people.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pak Lurah",
      },
      {
        id: "201829",
        src: "/images/event/2018/petani-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Petani Karnaval",
      },
      {
        id: "201830",
        src: "/images/event/2018/pkk.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval PKK",
      },
      {
        id: "201831",
        src: "/images/event/2018/pocong.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval Horor",
      },
      {
        id: "201832",
        src: "/images/event/2018/proyo-1945.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "1945 Band Boyolali",
      },
      {
        id: "201833",
        src: "/images/event/2018/reog.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Reog",
      },
      {
        id: "201834",
        src: "/images/event/2018/tarian.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Tarian Desa Ketaon Fair",
      },
      {
        id: "201835",
        src: "/images/event/2018/topeng-ireng.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Topeng Ireng Boyolali",
      },
    ],
  },
  {
    id: "KF-2019",
    year: "2019",
    imgUrl: [
      {
        id: "20191",
        src: "/images/event/2019/akustik.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Akustik Boyolali",
      },
      {
        id: "20192",
        src: "/images/event/2019/band-1945.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "1945 Pop Punk Boyolali",
      },
      {
        id: "20193",
        src: "/images/event/2019/band-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pop Punk Boyolali",
      },
      {
        id: "20194",
        src: "/images/event/2019/band-ketaon-fair-1945.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Band Pop Punk Boyolali",
      },
      {
        id: "20195",
        src: "/images/event/2019/band-performance.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pop Punk",
      },
      {
        id: "20196",
        src: "/images/event/2019/biduan-dangdut-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Penyanyi Dangdut Ketaon Fair",
      },
      {
        id: "20197",
        src: "/images/event/2019/cewe-cantik-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Boyolali Cantik",
      },
      {
        id: "20198",
        src: "/images/event/2019/dangdut.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Dangdut Boyolali",
      },
      {
        id: "20199",
        src: "/images/event/2019/drama-pamor.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pentas Seni Boyolali",
      },
      {
        id: "201910",
        src: "/images/event/2019/drum-band.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Drum Band Boyolali",
      },
      {
        id: "201911",
        src: "/images/event/2019/drum-blek.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Drum Blek",
      },
      {
        id: "201912",
        src: "/images/event/2019/event-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Event Karnaval Boyolali",
      },
      {
        id: "201913",
        src: "/images/event/2019/gitaris.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pop Punk Boyolali",
      },
      {
        id: "201914",
        src: "/images/event/2019/gitaris-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Gitaris Main Gitar",
      },
      {
        id: "201915",
        src: "/images/event/2019/happy-ending-fous.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Happy Ending Fous",
      },
      {
        id: "201916",
        src: "/images/event/2019/happy-ending-fous-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Happy Ending Fous Boyolali",
      },
      {
        id: "201917",
        src: "/images/event/2019/juara-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Juara Karnaval Ketaon",
      },
      {
        id: "201918",
        src: "/images/event/2019/karnaval-desa.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Desa Boyolali",
      },
      {
        id: "201919",
        src: "/images/event/2019/karnaval-ibu-ibu.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Ibu Ibu",
      },
      {
        id: "201920",
        src: "/images/event/2019/karnaval-sd.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Tingkat SD",
      },
      {
        id: "201921",
        src: "/images/event/2019/ketoprak-ketaon.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pentas Ketoprak",
      },
      {
        id: "201922",
        src: "/images/event/2019/ketoprak-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pentas Ketoprak Boyolali",
      },
      {
        id: "201923",
        src: "/images/event/2019/kostum-cowo-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Cowok Karnaval",
      },
      {
        id: "201924",
        src: "/images/event/2019/kostum-ibu-ibu.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval Ibu Ibu",
      },
      {
        id: "201925",
        src: "/images/event/2019/kostum-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Unik",
      },
      {
        id: "201926",
        src: "/images/event/2019/kostum-karnaval-cewe-cowo.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval Cewe Cowo",
      },
      {
        id: "201927",
        src: "/images/event/2019/ksplus.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "KSPLUS",
      },
      {
        id: "201928",
        src: "/images/event/2019/ksplus-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "KSPLUS Boyolali",
      },
      {
        id: "201929",
        src: "/images/event/2019/mc-band.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "MC Boyolali",
      },
      {
        id: "201930",
        src: "/images/event/2019/membaca-puisi.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pentas Baca Puisi Boyolali",
      },
      {
        id: "201930",
        src: "/images/event/2019/ogoh-ogoh.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Ogoh Ogoh",
      },
      {
        id: "201931",
        src: "/images/event/2019/pak-lurah-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kepala Desa Ketaon",
      },
      {
        id: "201932",
        src: "/images/event/2019/pamor.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pamor Ketaon",
      },
      {
        id: "201933",
        src: "/images/event/2019/panitia-band.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Satya Remaja",
      },
      {
        id: "201934",
        src: "/images/event/2019/panitia-cewe-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Satya Remaja Ketaon Banyudono Boyolali",
      },
      {
        id: "201935",
        src: "/images/event/2019/panitia-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Panitia Ketaon Fair",
      },
      {
        id: "201936",
        src: "/images/event/2019/pentas-anak.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pentas Anak Boyolali",
      },
      {
        id: "201937",
        src: "/images/event/2019/pentas-anak-ketaon.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pentas Anak Ketaon Banyudono Boyolali",
      },
      {
        id: "201938",
        src: "/images/event/2019/pentas-tari-anak.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Tari Anak",
      },
      {
        id: "201939",
        src: "/images/event/2019/penyanyi-dangdut.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Penyanyi Dangdut Boyolali",
      },
      {
        id: "201940",
        src: "/images/event/2019/penyerahan-juara.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Penyerahan Juara Karnaval Ketaon Fair",
      },
      {
        id: "201941",
        src: "/images/event/2019/penyerahan-simbol.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Penyerahan Simbol Boyolali",
      },
      {
        id: "201942",
        src: "/images/event/2019/peresmian-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Peresmian Karnaval Ketaon Pengging Boyolali",
      },
      {
        id: "201943",
        src: "/images/event/2019/peresmian-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Wayang Kulit Boyolali",
      },
      {
        id: "201944",
        src: "/images/event/2019/piala-bergilir-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Piala Karnaval",
      },
      {
        id: "201945",
        src: "/images/event/2019/reog-ketaon.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Reog Boyolali",
      },
      {
        id: "201946",
        src: "/images/event/2019/tarian.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Tarian Boyolali",
      },
      {
        id: "201947",
        src: "/images/event/2019/tari-anak.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Tari Anak",
      },
      {
        id: "201948",
        src: "/images/event/2019/topeng-ireng-desa.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Topeng Ireng Desa Ketaon Boyolali",
      },
    ],
  },
  {
    id: "KF-2022",
    year: "2022",
    imgUrl: [
      {
        id: "20221",
        src: "/images/event/2022/anak-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Anak",
      },
      {
        id: "20222",
        src: "/images/event/2022/barongsai.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Barongsai",
      },
      {
        id: "20223",
        src: "/images/event/2022/biduan-dangdut.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Biduan Dangdut Boyolali",
      },
      {
        id: "20224",
        src: "/images/event/2022/biduan-dangdut-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Penyanyi Dangdut Boyolali",
      },
      {
        id: "20225",
        src: "/images/event/2022/biduan-dangdut-boyolali-cantik.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Biduan Cantik Boyolali",
      },
      {
        id: "20226",
        src: "/images/event/2022/biduan-disawer-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Dangdut Boyolali Saweran",
      },
      {
        id: "20227",
        src: "/images/event/2022/biduan-hot-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Biduan Hot Boyolali",
      },
      {
        id: "20228",
        src: "/images/event/2022/dadak-merak.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Dadak merak",
      },
      {
        id: "20229",
        src: "/images/event/2022/dangdut-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Dangdut boyolali",
      },
      {
        id: "202210",
        src: "/images/event/2022/dangdut-ketaon-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Dangdut ketaon boyolali",
      },
      {
        id: "202210",
        src: "/images/event/2022/dangdut-panitia-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Dangdut Ketaon Fair",
      },
      {
        id: "202211",
        src: "/images/event/2022/drum-blek.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Drum blek",
      },
      {
        id: "202212",
        src: "/images/event/2022/karnaval-banci.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Ketaon Fair",
      },
      {
        id: "202213",
        src: "/images/event/2022/karnaval-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Ketaon Pengging",
      },
      {
        id: "202214",
        src: "/images/event/2022/karnaval-boyolali-jawa-tengah.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Boyolali",
      },
      {
        id: "202215",
        src: "/images/event/2022/karnaval-boyolali-ketaon.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Ketaon Banyudono Pengging boyolali",
      },
      {
        id: "202216",
        src: "/images/event/2022/karnaval-desa-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Desa Ketaon",
      },
      {
        id: "202217",
        src: "/images/event/2022/karnaval-emak-emak.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval emak emak",
      },
      {
        id: "202218",
        src: "/images/event/2022/karnaval-jawa-tengah.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Jawa Tengah",
      },
      {
        id: "20219",
        src: "/images/event/2022/karnaval-kabupaten-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Kabupaten Boyolali",
      },
      {
        id: "202220",
        src: "/images/event/2022/karnaval-ketaon.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Ketaon Pengging Boyolali Jawa Tengah",
      },
      {
        id: "202221",
        src: "/images/event/2022/karnaval-ketaon-fair-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Ketaon Fair Boyolali",
      },
      {
        id: "202222",
        src: "/images/event/2022/karnaval-kostum-merah-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval",
      },
      {
        id: "202223",
        src: "/images/event/2022/karnaval-penjajahan-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Tema Penjajahan",
      },
      {
        id: "20224",
        src: "/images/event/2022/karnaval-sd-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval SD Ketaon",
      },
      {
        id: "202225",
        src: "/images/event/2022/karnaval-seru-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Seru boyolali",
      },
      {
        id: "202226",
        src: "/images/event/2022/karnaval-tema-germas.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Tema Germas",
      },
      {
        id: "202227",
        src: "/images/event/2022/karnaval-tema-penjajahan.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Tema Penjajahan",
      },
      {
        id: "2022228",
        src: "/images/event/2022/ketoprak-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval",
      },
      {
        id: "202229",
        src: "/images/event/2022/kostum-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval",
      },
      {
        id: "202230",
        src: "/images/event/2022/kostum-karnaval-anak.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval Anak",
      },
      {
        id: "202231",
        src: "/images/event/2022/kostum-merah-putih.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Kostum Merah Putih",
      },
      {
        id: "202232",
        src: "/images/event/2022/ksplus-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "KS PLUS Boyolali",
      },
      {
        id: "202233",
        src: "/images/event/2022/mc-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "MC Karnaval Ketaon Fair",
      },
      {
        id: "202234",
        src: "/images/event/2022/mc-ksplus.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "MC Ketaon Fair",
      },
      {
        id: "202235",
        src: "/images/event/2022/nanang.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "nanang",
      },
      {
        id: "202236",
        src: "/images/event/2022/panitia-dangdut.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Panitia Dangdut Ketaon Fair",
      },
      {
        id: "202237",
        src: "/images/event/2022/panitia-karnaval-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "panitia karnaval ketaon fair 2022",
      },
      {
        id: "202238",
        src: "/images/event/2022/panitia-ketaon-fair-dangdut.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Panitia Ketaon Fair Panggung Dangdut",
      },
      {
        id: "202239",
        src: "/images/event/2022/penonton-dangdut-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Dangdut Boyolali",
      },
      {
        id: "202240",
        src: "/images/event/2022/penonton-ketoprak.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Penonton Ketoprak Ketaon Fair",
      },
      {
        id: "202241",
        src: "/images/event/2022/penonton-ksplus-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "KS PLUS",
      },
      {
        id: "202242",
        src: "/images/event/2022/penonton-pentas-anak-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Penonton pentas anak ketaon fair boyolali",
      },
      {
        id: "202243",
        src: "/images/event/2022/pentas-anak-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pentas seni anak ketaon pengging boyolali",
      },
      {
        id: "202244",
        src: "/images/event/2022/pentas-anak-jateng.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pentas seni anak jateng",
      },
      {
        id: "202245",
        src: "/images/event/2022/pentas-anak-ketaon.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Panggung anak ketaon fair",
      },
      {
        id: "202246",
        src: "/images/event/2022/pentas-anak-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pentas seni anak ketaon fair 2022",
      },
      {
        id: "202247",
        src: "/images/event/2022/penyanyi-dangdut-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Penyanyi dangdut ketaon fair 2022",
      },
      {
        id: "202248",
        src: "/images/event/2022/penyanyi-hot-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "dangdut hot boyolali",
      },
      {
        id: "202247",
        src: "/images/event/2022/reog-karnaval-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Reog karnaval ketaon fair pengging boyolali",
      },
      {
        id: "202247",
        src: "/images/event/2022/rias-horor.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Riasan karnaval",
      },
      {
        id: "202247",
        src: "/images/event/2022/sanggar-tari-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Sanggar tari ketaon boyolali",
      },
      {
        id: "202247",
        src: "/images/event/2022/tarian-karnaval-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Tarian karnaval boyolali",
      },
      {
        id: "202247",
        src: "/images/event/2022/tari-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Sanggar tari ketaon banyudono pengging boyolali",
      },
      {
        id: "202247",
        src: "/images/event/2022/tari-karnaval-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pertunjukan tari karnaval",
      },
      {
        id: "202247",
        src: "/images/event/2022/topeng-ireng-boyolali-smp.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Topeng ireng ketaon",
      },
      {
        id: "202247",
        src: "/images/event/2022/topeng-ireng-smp-3-teras.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Topeng ireng smp 3 teras",
      },
      {
        id: "202247",
        src: "/images/event/2022/topeng-ireng-smp-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Topeng ireng smp boyolali",
      },
    ],
  },
  {
    id: "KF-2023",
    year: "2023",
    imgUrl: [
      {
        id: "20231",
        src: "/images/event/2023/biduan-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Biduan boyolali penyanyi dangdut",
      },
      {
        id: "20232",
        src: "/images/event/2023/biduan-boyolali-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "penyanyi dangdut boyolali",
      },
      {
        id: "20233",
        src: "/images/event/2023/biduan-dangdut-hot.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Biduan hot boyolali",
      },
      {
        id: "20234",
        src: "/images/event/2023/dangdut-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Dangdut ketaon pengging boyolali",
      },
      {
        id: "20235",
        src: "/images/event/2023/drum-band-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Drum band boyolali",
      },
      {
        id: "20236",
        src: "/images/event/2023/drum-band-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Drum band karnaval boyolali",
      },
      {
        id: "20237",
        src: "/images/event/2023/irma-lina-habibah.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Irma Lina Habibah",
      },
      {
        id: "20238",
        src: "/images/event/2023/irma-lina-habibah-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Irma Lina Habibah DPRD Boyolali",
      },
      {
        id: "20239",
        src: "/images/event/2023/irma-lina-habibah-karnaval-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Irma Lina Habibah Boyolali",
      },
      {
        id: "202310",
        src: "/images/event/2023/irma-lina-habibah-ketaon.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Irma Lina Habibah ketaon",
      },
      {
        id: "202311",
        src: "/images/event/2023/karnaval-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval Boyolali",
      },
      {
        id: "202312",
        src: "/images/event/2023/karnaval-sd-ketaon-1.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval SD N Ketaon 1",
      },
      {
        id: "202313",
        src: "/images/event/2023/ketoprak-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Ketoprak Boyolali",
      },
      {
        id: "202314",
        src: "/images/event/2023/ketoprak-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Ketoprak Ketaon Fair",
      },
      {
        id: "202315",
        src: "/images/event/2023/koes-plus.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Koes Plus Ketaon Pengging Boyolali",
      },
      {
        id: "202316",
        src: "/images/event/2023/kostum-karnaval-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum karnaval unik",
      },
      {
        id: "202317",
        src: "/images/event/2023/kostum-karnaval-pengging.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum Karnaval pengging ketaon boyolali",
      },
      {
        id: "202318",
        src: "/images/event/2023/kostum-karnaval-unik.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Kostum karnaval unik ketaon boyolali jateng",
      },
      {
        id: "202319",
        src: "/images/event/2023/ks-plus.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "KS PLUS BOYOLALI",
      },
      {
        id: "202320",
        src: "/images/event/2023/ksplus-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "KS Plus Ketaon Fair Pengging Fair",
      },
      {
        id: "202321",
        src: "/images/event/2023/mc-karnaval.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "MC Karnaval Ketaon Fair",
      },
      {
        id: "202322",
        src: "/images/event/2023/panitia-cowok-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Panitia COWOK Karnaval Ketaon FAIR",
      },
      {
        id: "202323",
        src: "/images/event/2023/panitia-cewek.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Panitia Cewek Karnaval Ketaon FAIR",
      },
      {
        id: "202324",
        src: "/images/event/2023/panitia-dangdut-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Panitia Dangdut Boyolali",
      },
      {
        id: "202325",
        src: "/images/event/2023/panitia-event.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Panitia Event Ketaon Fair 2023",
      },
      {
        id: "202326",
        src: "/images/event/2023/panitia-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Panitia pundung Ketaon Fair 2023",
      },
      {
        id: "202327",
        src: "/images/event/2023/panitia-ketaon-fair-2023.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Panitia Ketaon Fair 2023",
      },
      {
        id: "202328",
        src: "/images/event/2023/panitia-kf.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Setya Dharma Pundung ketaon",
      },
      {
        id: "202329",
        src: "/images/event/2023/panitia-ks-plus-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Panitia KS Plus Boyolali",
      },
      {
        id: "202330",
        src: "/images/event/2023/pargoy.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval pargoy",
      },
      {
        id: "202331",
        src: "/images/event/2023/pengging.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Karnaval ketaon pengging fair",
      },
      {
        id: "202332",
        src: "/images/event/2023/penonton-ketoprak.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Penonton ketoprak ketaon fair 2023",
      },
      {
        id: "202333",
        src: "/images/event/2023/penonton-ketoprak-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Penonton ketoprak ketaon fair",
      },
      {
        id: "202334",
        src: "/images/event/2023/pentas-anak-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pentas anak ketaon fair 2023",
      },
      {
        id: "202335",
        src: "/images/event/2023/pentas-ketoprak.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Pentas ketoprak ketaon pengging fair",
      },
      {
        id: "202336",
        src: "/images/event/2023/pentas-tari-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Sanggar Tari Ketaon Pengging Boyolali",
      },
      {
        id: "202337",
        src: "/images/event/2023/risma-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Risma biduan boyolali",
      },
      {
        id: "202338",
        src: "/images/event/2023/tari-anak.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Tari anak ketaon fair 2023",
      },
      {
        id: "202339",
        src: "/images/event/2023/tarian-topeng-ireng.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Tarian topeng ireng di ketaon fair",
      },
      {
        id: "202340",
        src: "/images/event/2023/team-bledos-boyolali.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Team Bledos",
      },
      {
        id: "202341",
        src: "/images/event/2023/topeng-ireng-ketaon-fair.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "Topeng ireng ketaon fair boyolali",
      },
      {
        id: "202342",
        src: "/images/event/2023/topeng-ireng-smp-3-teras.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "topeng ireng smp 3 teras boyolali",
      },
      {
        id: "202333",
        src: "/images/event/2023/topeng-ireng-tarian.jpg",
        width: 100,
        height: 100,
        tags: undefined,
        alt: "tarian topeng ireng",
      },
    ],
  },
];
