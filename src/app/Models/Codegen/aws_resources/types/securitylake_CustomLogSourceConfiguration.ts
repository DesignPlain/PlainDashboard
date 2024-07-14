import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  securitylake_CustomLogSourceConfigurationCrawlerConfiguration,
  securitylake_CustomLogSourceConfigurationCrawlerConfiguration_GetTypes,
} from "./securitylake_CustomLogSourceConfigurationCrawlerConfiguration";
import {
  securitylake_CustomLogSourceConfigurationProviderIdentity,
  securitylake_CustomLogSourceConfigurationProviderIdentity_GetTypes,
} from "./securitylake_CustomLogSourceConfigurationProviderIdentity";

export interface securitylake_CustomLogSourceConfiguration {
  // The configuration for the Glue Crawler for the third-party custom source.
  crawlerConfiguration?: securitylake_CustomLogSourceConfigurationCrawlerConfiguration;

  // The identity of the log provider for the third-party custom source.
  providerIdentity?: securitylake_CustomLogSourceConfigurationProviderIdentity;
}

export function securitylake_CustomLogSourceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "crawlerConfiguration",
      "The configuration for the Glue Crawler for the third-party custom source.",
      securitylake_CustomLogSourceConfigurationCrawlerConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "providerIdentity",
      "The identity of the log provider for the third-party custom source.",
      securitylake_CustomLogSourceConfigurationProviderIdentity_GetTypes(),
      false,
      false,
    ),
  ];
}
