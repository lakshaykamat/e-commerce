import SanityClient from 'next-sanity-client';

const client = new SanityClient({
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'YOUR_DATASET',
  useCdn: process.env.NODE_ENV === 'production',
});

client.fetch({
  query: `[_type == 'post']`,
  config: {
    cache: 'force-cache',
    next: { revalidate: 60 }
  }
});