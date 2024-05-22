import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getLaunchConfigurationMetadataOption {
  // The desired HTTP PUT response hop limit for instance metadata requests.
  httpPutResponseHopLimit?: number;

  // If session tokens are required: `optional`, `required`.
  httpTokens?: string;

  // State of the metadata service: `enabled`, `disabled`.
  httpEndpoint?: string;
}

export function ec2_getLaunchConfigurationMetadataOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "httpPutResponseHopLimit",
      "The desired HTTP PUT response hop limit for instance metadata requests.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpTokens",
      "If session tokens are required: `optional`, `required`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpEndpoint",
      "State of the metadata service: `enabled`, `disabled`.",
      [],
      true,
      false,
    ),
  ];
}
