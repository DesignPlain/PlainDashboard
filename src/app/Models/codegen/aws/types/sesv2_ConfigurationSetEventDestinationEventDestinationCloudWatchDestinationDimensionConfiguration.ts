import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration {
  // The name of an Amazon CloudWatch dimension associated with an email sending metric.
  dimensionName?: string;

  // The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. Valid values: `MESSAGE_TAG`, `EMAIL_HEADER`, `LINK_TAG`.
  dimensionValueSource?: string;

  // The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email.
  defaultDimensionValue?: string;
}

export function sesv2_ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dimensionName",
      "The name of an Amazon CloudWatch dimension associated with an email sending metric.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dimensionValueSource",
      "The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. Valid values: `MESSAGE_TAG`, `EMAIL_HEADER`, `LINK_TAG`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultDimensionValue",
      "The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email.",
      () => [],
      true,
      false,
    ),
  ];
}
