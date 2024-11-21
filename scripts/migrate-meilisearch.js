const { PrismaClient } = require('@prisma/client');
const { MeiliSearch } = require('meilisearch');

const prisma = new PrismaClient();
const meili = new MeiliSearch({
  host: 'http://localhost:7700',
  apiKey: 'masterKey',
});

async function main() {
  const stores = await prisma.store.findMany({
    select: {
      id: true,
      name: true,
      furigana: true,
      genre: true,
      tags: true,
      image: true,
      light: true,
      lively: true,
      mobile: true,
      wifi: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  const index = meili.index('ji_store');
  await index.deleteAllDocuments();
  await index.updateDocuments(stores);
}

main();
