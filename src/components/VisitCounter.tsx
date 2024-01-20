import { getDateTime } from '@/utils/date';
import { generateUniqueId } from '@/utils/uuid';

interface PropTypes {}

const baseUrl: string = process.env.API_BACKEND_BASE_URL ?? '';

async function increaseVisitorCount() {
  try {
    const body = {
      sessionId: generateUniqueId(),
      visitedAt: getDateTime(),
      initialPath: '/',
    };
    console.log(body);

    const result = await fetch(baseUrl + '/visit', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await result.json();
  } catch (e) {
    console.log(e);
  }
}

async function getVisitorCount() {
  try {
    const result = await fetch(baseUrl + '/visit/count', {
      cache: 'no-cache',
    });
    return await result.json();
  } catch (e) {
    console.log(e);
  }
}

async function VisitCounter() {
  await increaseVisitorCount();
  const result = await getVisitorCount();
  return (
    <>
      <div className="flex justify-center">
        <p>Total visitors: {result.count || 0}</p>
      </div>
    </>
  );
}

export default VisitCounter;
