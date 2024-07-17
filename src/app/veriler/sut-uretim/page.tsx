import {
  KarsilastirmaliSutUretimMiktari,
  KarsilastirmaliSutUretimMiktari2,
  Tablo,
  ToplamSutUretimMiktari,
} from '@/components/data/sut-uretim';
import { H1, H2, Hr, P } from '@/components/ui/typography';

export default function page() {
  return (
    <div className='mb-6 flex flex-col space-y-6'>
      <H1 className='text-center'>Süt Üretim Miktarları</H1>

      <H2>Tablo</H2>
      <Tablo />
      <Hr className='py-6' />
      <H2>2020-2023 Arası Toplam Süt Üretim Miktarı</H2>
      <ToplamSutUretimMiktari />
      <P>
        Görüldüğü üzere toplam süt üretim miktarı 2020 yılında 23.503.790 ton
        iken 2023 yılında bu miktar 21.481.567 seviyesine kadar gerilemiştir. Bu
        üretimin büyük bir kısmını inek sütü karşılamaktadır.
      </P>
      <Hr className='py-6' />
      <H2>2020-2023 Arası Karsilastirmali Süt Üretim Miktarı</H2>
      <KarsilastirmaliSutUretimMiktari />
      <P>
        Bu grafikte hayvan türlerine göre süt üretim miktarları görülmektedir.
        Süt üretiminin büyük çoğunluğu İnek cinsi hayvanlar karşılamaktadır.
      </P>
      <Hr className='py-6' />
      <KarsilastirmaliSutUretimMiktari2 />
      <Hr className='py-6' />
    </div>
  );
}
