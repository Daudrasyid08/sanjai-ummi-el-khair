import { ContactSection, Hero, ProductSection, ShippingSection, StorySection } from "@/components/home-sections";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return <><SiteHeader /><main><Hero /><ProductSection /><StorySection /><ShippingSection /><ContactSection /></main><SiteFooter /></>;
}
