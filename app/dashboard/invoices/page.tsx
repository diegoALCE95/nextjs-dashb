import { Suspense } from 'react';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { LatestInvoicesSkeleton } from '@/app/ui/skeletons';


import { 
  fetchLatestInvoices
} from '@/app/lib/data';

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <Suspense fallback={<LatestInvoicesSkeleton />}>
      <LatestInvoices />
    </Suspense>
  )
}