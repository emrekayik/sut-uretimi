import {
  KarsilastirmaliSutUretimMiktari,
  ToplamSutUretimMiktari,
} from '@/components/data/sut-uretim';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const sutUretimData = [
  {
    yil: '2020',
    toplam: 23503790,
    inek: 21749342,
    manda: 63767,
    koyun: 1101065,
    keci: 589617,
  },
  {
    yil: '2021',
    toplam: 23200306,
    inek: 21370116,
    manda: 63643,
    koyun: 1143762,
    keci: 622785,
  },
  {
    yil: '2022',
    toplam: 21563492,
    inek: 19912135,
    manda: 43589,
    koyun: 1067342,
    keci: 540426,
  },
  {
    yil: '2023',
    toplam: 21481567,
    inek: 19961908,
    manda: 43025,
    koyun: 933576,
    keci: 543058,
  },
];

export default function page() {
  return (
    <div className='mb-6 flex flex-col space-y-6'>
      <h1 className='text-3xl font-bold mb-4'>Süt Üretim Miktarları</h1>

      <h2 className='text-2xl font-bold mb-2'>Veri</h2>
      <Table className='table-auto'>
        <TableCaption>Süt Üretim Miktarları Tablosu</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Yıl</TableHead>
            <TableHead>Toplam</TableHead>
            <TableHead>İnek</TableHead>
            <TableHead>Manda</TableHead>
            <TableHead>Koyun</TableHead>
            <TableHead>Keçi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sutUretimData.map((data) => (
            <TableRow key={data.yil}>
              <TableCell className='font-medium'>{data.yil}</TableCell>
              <TableCell>{data.toplam}</TableCell>
              <TableCell>{data.inek}</TableCell>
              <TableCell>{data.manda}</TableCell>
              <TableCell>{data.koyun}</TableCell>
              <TableCell>{data.keci}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <hr className='py-6' />
      <h2 className='text-2xl font-bold mb-2'>
        2020-2023 Arası Toplam Süt Üretim Miktarı
      </h2>
      <ToplamSutUretimMiktari />
      <p>
        Görüldüğü üzere toplam süt üretim miktarı 2020 yılında 23.503.790 ton
        iken 2023 yılında bu miktar 21.481.567 seviyesine kadar gerilemiştir.
      </p>
      <hr className='py-6' />
      <KarsilastirmaliSutUretimMiktari />
    </div>
  );
}
