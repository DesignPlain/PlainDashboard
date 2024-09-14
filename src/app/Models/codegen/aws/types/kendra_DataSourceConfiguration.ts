import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kendra_DataSourceConfigurationS3Configuration,
  kendra_DataSourceConfigurationS3Configuration_GetTypes,
} from "./kendra_DataSourceConfigurationS3Configuration";
import {
  kendra_DataSourceConfigurationWebCrawlerConfiguration,
  kendra_DataSourceConfigurationWebCrawlerConfiguration_GetTypes,
} from "./kendra_DataSourceConfigurationWebCrawlerConfiguration";

export interface kendra_DataSourceConfiguration {
  // A block that provides the configuration information to connect to an Amazon S3 bucket as your data source. Detailed below.
  s3Configuration?: kendra_DataSourceConfigurationS3Configuration;

  // A block that provides the configuration information required for Amazon Kendra Web Crawler. Detailed below.
  webCrawlerConfiguration?: kendra_DataSourceConfigurationWebCrawlerConfiguration;
}

export function kendra_DataSourceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "s3Configuration",
      "A block that provides the configuration information to connect to an Amazon S3 bucket as your data source. Detailed below.",
      () => kendra_DataSourceConfigurationS3Configuration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "webCrawlerConfiguration",
      "A block that provides the configuration information required for Amazon Kendra Web Crawler. Detailed below.",
      () => kendra_DataSourceConfigurationWebCrawlerConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
