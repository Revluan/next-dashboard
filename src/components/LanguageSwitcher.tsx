'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLocale: string) => {
        console.log('newLocale:', newLocale);
        // 使用next-intl的导航API，自动处理语言前缀
        router.push(pathname, { locale: newLocale });
    };

    const getLocaleName = (locale: string) => {
        const names = {
            'en': 'English',
            'zh': '中文',
            'ja': '日本語'
        };
        return names[locale as keyof typeof names] || locale;
    };

    return (
        <div className='flex w-[100px]'>
            <Select
                onValueChange={switchLanguage}
                value={locale}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                    {routing.locales.map((localeOption) => (
                        <SelectItem key={localeOption} value={localeOption}>
                            {getLocaleName(localeOption)}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}