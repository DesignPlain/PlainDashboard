import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opensearch_getDomainLogPublishingOption {
  // CloudWatch Log Group where the logs are published.
  cloudwatchLogGroupArn?: string;

  // Enabled disabled toggle for off-peak update window
  enabled?: boolean;

  // Type of OpenSearch log being published.
  logType?: string;
}

export function opensearch_getDomainLogPublishingOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cloudwatchLogGroupArn",
      "CloudWatch Log Group where the logs are published.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enabled disabled toggle for off-peak update window",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logType",
      "Type of OpenSearch log being published.",
      () => [],
      true,
      false,
    ),
  ];
}
