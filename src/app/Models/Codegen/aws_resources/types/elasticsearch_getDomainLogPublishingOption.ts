import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elasticsearch_getDomainLogPublishingOption {
  // The CloudWatch Log Group where the logs are published.
  cloudwatchLogGroupArn?: string;

  // Whether node to node encryption is enabled.
  enabled?: boolean;

  // The type of Elasticsearch log being published.
  logType?: string;
}

export function elasticsearch_getDomainLogPublishingOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logType",
      "The type of Elasticsearch log being published.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudwatchLogGroupArn",
      "The CloudWatch Log Group where the logs are published.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether node to node encryption is enabled.",
      [],
      true,
      false,
    ),
  ];
}
