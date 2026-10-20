import ServicePage from "@/components/ServicePage/ServicePage";
import { pageMetadata, services } from "@/lib/site";
import { serviceContent } from "@/lib/service-content";
const path = "/zinguerie" as const;
export const metadata = pageMetadata(
  services.find((service) => service.href === path)?.title + " à Perpignan",
  serviceContent[path].description,
  path,
);
export default function Page() {
  return <ServicePage path={path} />;
}
