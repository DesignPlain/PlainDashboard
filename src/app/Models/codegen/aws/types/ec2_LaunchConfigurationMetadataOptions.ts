import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_LaunchConfigurationMetadataOptions {
  // The desired HTTP PUT response hop limit for instance metadata requests.
  httpPutResponseHopLimit?: number;

  // If session tokens are required: `optional`, `required`.
  httpTokens?: string;

  // The state of the metadata service: `enabled`, `disabled`.
  httpEndpoint?: string;
}

export function ec2_LaunchConfigurationMetadataOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "httpPutResponseHopLimit",
      "The desired HTTP PUT response hop limit for instance metadata requests.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpTokens",
      "If session tokens are required: `optional`, `required`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpEndpoint",
      "The state of the metadata service: `enabled`, `disabled`.",
      () => [],
      false,
      true,
    ),
  ];
}
