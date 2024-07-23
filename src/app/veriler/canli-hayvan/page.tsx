import SimpleBarChart from '@/components/chart/SimpleBarChart';
import SimpleLineChart from '@/components/chart/SimpleLineChart';
import SimplePieChart from '@/components/chart/SimplePieChart';
import SimpleTable from '@/components/chart/SimpleTable';
import Component from '@/components/chart/Test';
import { H1, H2, Hr, P } from '@/components/ui/typography';
import { canliHayvanData, sutUretimData } from '@/datas/data';

export default function page() {
  return (
    <div className='mb-6 flex flex-col space-y-6'>
      <H1 className='text-center'>Canlı Hayvan Sayısı</H1>

      <H2>Tablo</H2>
      <SimpleTable
        data={canliHayvanData}
        caption='Canlı Hayvan Sayıları Tablosu'
      />
      <Hr className='py-6' />
      <H2>2001-2023 Arası Toplam Canlı Hayvan Sayıları</H2>
      <SimpleBarChart
        data={canliHayvanData}
        xAxisKey='Yıl'
        barKeys={['Toplam']}
        title='Toplam Canlı Hayvan Sayısı'
        description='2001-2023 arası toplam canlı hayvan sayıları'
      />
      <P>
        Toplam canlı hayvan sayısı yıl 2009'a doğru gelirken zamanla azalmıştır.
        2009 yılının hemen ardından yükselmeye devam etmiştir. Bu yükseliş 2021
        yılına kadar devam etmiş ancak 2021 sonrası canlı hayvan sayısı tekrar
        azalmaya başlamıştır.
      </P>
      <Hr className='py-6' />
      <H2>2020-2023 Arası Karşılaştırmalı Canlı Hayvan Sayısı</H2>
      <SimpleBarChart
        data={canliHayvanData}
        xAxisKey='Yıl'
        barKeys={['Sığır', 'Manda', 'Koyun', 'Keçi']}
        title='Karşılaştırmalı Canlı Hayvan Sayısı'
        description='2001-2023 arası karsilastirmali canlı hayvan sayısı'
      />
      <P>
        Bu grafikte hayvan türlerine göre karşılaştırma yapılarak, canlı hayvan
        sayıları gösterilmeye çalışılmıştır. Tüm zamanlarda en fazla canlı
        miktarı koyun cinsi hayvanlarda olduğu görülmektedir. Ardından sırasıyla
        sığır, keçi ve manda gelmektedir.
      </P>
      <SimpleLineChart
        data={canliHayvanData}
        xAxisKey='Yıl'
        lineKeys={['Sığır', 'Manda', 'Koyun', 'Keçi']}
      />
      <P>
        Burada daha net bir şekilde canlı sayısı karşılaştırması görülmektedir
      </P>
      <Component data={sutUretimData} />
    </div>
  );
}
