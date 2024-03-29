'use client';
import React from 'react';
import { DocSearch } from '@docsearch/react';

function AlgoliaSearchBox({
  appId,
  apiKey,
  indexName,
}: {
  appId: string;
  apiKey: string;
  indexName: string;
}) {
  return <DocSearch appId={appId} indexName={indexName} apiKey={apiKey} />;
}

export default AlgoliaSearchBox;
