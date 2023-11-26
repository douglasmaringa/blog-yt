//this file communicates only with the sanity studio admin you will need another one for connecting to sanity through the api with groq
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  title: "blog",
  apiVersion: "2023-11-26",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
})

export default config