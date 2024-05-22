import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication,
  kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication_GetTypes,
} from "./kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication";

export interface kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration {
  // The list of configuration information that's required to connect to and crawl a website host using basic authentication credentials. The list includes the name and port number of the website host. Detailed below.
  basicAuthentications?: Array<kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication>;
}

export function kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "basicAuthentications",
      "The list of configuration information that's required to connect to and crawl a website host using basic authentication credentials. The list includes the name and port number of the website host. Detailed below.",
      kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication_GetTypes(),
      false,
      false,
    ),
  ];
}
