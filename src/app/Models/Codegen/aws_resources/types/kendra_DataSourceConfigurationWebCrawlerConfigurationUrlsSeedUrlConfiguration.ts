import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration {
  // The list of seed or starting point URLs of the websites you want to crawl. The list can include a maximum of `100` seed URLs. Array Members: Minimum number of `0` items. Maximum number of `100` items. Length Constraints: Minimum length of `1`. Maximum length of `2048`.
  seedUrls?: Array<string>;

  // The default mode is set to `HOST_ONLY`. You can choose one of the following modes:
  webCrawlerMode?: string;
}

export function kendra_DataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "seedUrls",
      "The list of seed or starting point URLs of the websites you want to crawl. The list can include a maximum of `100` seed URLs. Array Members: Minimum number of `0` items. Maximum number of `100` items. Length Constraints: Minimum length of `1`. Maximum length of `2048`.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "webCrawlerMode",
      "The default mode is set to `HOST_ONLY`. You can choose one of the following modes:",
      [],
      false,
      false,
    ),
  ];
}
