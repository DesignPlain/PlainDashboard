import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration,
  kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration_GetTypes,
} from "./kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration";
import {
  kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration,
  kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration_GetTypes,
} from "./kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration";

export interface kendra_DataSourceConfigurationWebCrawlerConfigurationUrls {
  // A block that specifies the configuration of the seed or starting point URLs of the websites you want to crawl. You can choose to crawl only the website host names, or the website host names with subdomains, or the website host names with subdomains and other domains that the webpages link to. You can list up to `100` seed URLs. Detailed below.
  seedUrlConfiguration?: kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration;

  // A block that specifies the configuration of the sitemap URLs of the websites you want to crawl. Only URLs belonging to the same website host names are crawled. You can list up to `3` sitemap URLs. Detailed below.
  siteMapsConfiguration?: kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration;
}

export function kendra_DataSourceConfigurationWebCrawlerConfigurationUrls_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "seedUrlConfiguration",
      "A block that specifies the configuration of the seed or starting point URLs of the websites you want to crawl. You can choose to crawl only the website host names, or the website host names with subdomains, or the website host names with subdomains and other domains that the webpages link to. You can list up to `100` seed URLs. Detailed below.",
      kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "siteMapsConfiguration",
      "A block that specifies the configuration of the sitemap URLs of the websites you want to crawl. Only URLs belonging to the same website host names are crawled. You can list up to `3` sitemap URLs. Detailed below.",
      kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
