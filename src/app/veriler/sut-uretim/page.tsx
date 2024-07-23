import SimpleBarChart from '@/components/chart/SimpleBarChart';
import SimpleLineChart from '@/components/chart/SimpleLineChart';
import SimplePieChart from '@/components/chart/SimplePieChart';
import SimpleTable from '@/components/chart/SimpleTable';
import Component from '@/components/chart/Test';
import { H1, H2, Hr, P } from '@/components/ui/typography';

import { sutUretimData } from '@/datas/data';

export default function page() {
  return (
    <div className='mb-6 flex flex-col space-y-6'>
      <H1 className='text-center'>Süt Üretim Miktarları</H1>

      <H2>Tablo</H2>
      <SimpleTable
        data={sutUretimData}
        caption='Süt Üretim Miktarları Tablosu'
      />
      <Hr className='py-6' />
      <H2>2020-2023 Arası Toplam Süt Üretim Miktarı</H2>
      <SimpleBarChart
        data={sutUretimData}
        xAxisKey='yil'
        barKeys={['toplam']}
        title='Toplam Süt Üretim Miktarı'
        description='2020-2023 arası toplam süt üretim miktarı'
      />
      <P>
        Görüldüğü üzere toplam süt üretim miktarı 2020 yılında 23.503.790 ton
        iken 2023 yılında bu miktar 21.481.567 seviyesine kadar gerilemiştir. Bu
        üretimin büyük bir kısmını inek sütü karşılamaktadır.
      </P>
      <Hr className='py-6' />
      <H2>2020-2023 Arası Karsilastirmali Süt Üretim Miktarı</H2>
      <SimpleBarChart
        data={sutUretimData}
        xAxisKey='yil'
        barKeys={['inek', 'manda', 'koyun', 'keci']}
        title='Karşılaştırmalı Süt Üretim Miktarı'
        description='2020-2023 arası karsilastirmali süt üretim miktarı'
      />
      <P>
        Bu grafikte hayvan türlerine göre karşılaştırma yapılarak, toplam süt
        üretim miktarları görülmektedir. Süt üretiminin büyük çoğunluğu İnek
        cinsi hayvanlar karşılamaktadır.
      </P>
      <SimpleLineChart
        data={sutUretimData}
        xAxisKey='yil'
        lineKeys={['toplam', 'inek', 'manda', 'koyun', 'keci']}
      />
      <P></P>
      <Component data={sutUretimData} />
    </div>
  );
}
