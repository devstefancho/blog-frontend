import { getVisitorCount, increaseVisitorCount } from '@/services/visit';

async function VisitCounter() {
  const result = await getVisitorCount();
  await increaseVisitorCount();
  return (
    <div className="flex justify-center">
      <p>Total visitors: {result.count || 0}</p>
    </div>
  );
}

export default VisitCounter;
