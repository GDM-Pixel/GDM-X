
//@ts-ignore
import { z, defineCollection } from 'astro:content';
import {format} from "date-fns";

const articlesCollection = defineCollection({
   schema:z.object({
    author:z.string(),
    category:z.string(), 
    date: z.string(),
    featured:z.boolean().default(false),
    image:z.string(),
    title:z.string()
   })
});

export const collections = {
    'articles': articlesCollection,
    };