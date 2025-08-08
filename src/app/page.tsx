import { redirect } from 'next/navigation';

// 根页面 - 重定向到默认的starred页面
export default function RootPage() {
  // 重定向到中文的starred页面
  redirect('/zh/starred');
} 