import type { MetadataRoute } from "next";
import {routes,site} from "@/data/site";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{return routes.map(route=>({url:site.baseUrl+route.path,changeFrequency:route.changeFrequency,priority:route.priority}));}
