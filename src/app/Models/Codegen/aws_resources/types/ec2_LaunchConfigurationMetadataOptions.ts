import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_LaunchConfigurationMetadataOptions {
  // The state of the metadata service: `enabled`, `disabled`.
  httpEndpoint?: string;

  // The desired HTTP PUT response hop limit for instance metadata requests.
  httpPutResponseHopLimit?: number;

  // If session tokens are required: `optional`, `required`.
  httpTokens?: string;
}

export function ec2_LaunchConfigurationMetadataOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "httpEndpoint",
      "The state of the metadata service: `enabled`, `disabled`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "httpPutResponseHopLimit",
      "The desired HTTP PUT response hop limit for instance metadata requests.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpTokens",
      "If session tokens are required: `optional`, `required`.",
      [],
      false,
      true,
    ),
  ];
}
