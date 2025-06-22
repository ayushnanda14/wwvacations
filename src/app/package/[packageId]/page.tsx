import { getPackageById, packagesData } from '@/data/packagesData';
import { notFound } from 'next/navigation';
import PackageDetailClient from '@/components/PackageDetailClient';

// Generate static params for all packages
export function generateStaticParams() {
  return packagesData.map((pkg) => ({
    packageId: pkg.id,
  }));
}

export default async function PackageDetailPage({ params }: { params: Promise<{ packageId: string }> }) {
  const { packageId } = await params;
  const pkg = getPackageById(packageId);

  if (!pkg) {
    notFound();
  }

  return <PackageDetailClient pkg={pkg} />;
} 