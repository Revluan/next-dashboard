'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Home() {
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{t('about')}</h1>
      <p className="mb-2">当前语言环境: {locale}</p>
      <p className="mb-2">翻译的语言标签: {t('language')}</p>
      <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
        <h2 className="font-semibold mb-2">测试其他翻译:</h2>
        <p>Home: {t('home')}</p>
        <p>Contact: {t('contact')}</p>
      </div>
    </div>
  );
}
