import { getDateTime } from '@/utils/date';
import { generateUniqueId } from '@/utils/uuid';
import { notFound } from 'next/navigation';

const baseUrl: string = process.env.API_BACKEND_BASE_URL ?? '';

export async function increaseVisitorCount() {
  try {
    const body = {
      sessionId: generateUniqueId(),
      visitedAt: getDateTime(),
      initialPath: '/',
    };

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

export async function getVisitorCount() {
  try {
    const result = await fetch(baseUrl + '/visit/count', {
      cache: 'no-cache',
    });
    return await result.json();
  } catch (e) {
    console.log(e);
    notFound();
  }
}
