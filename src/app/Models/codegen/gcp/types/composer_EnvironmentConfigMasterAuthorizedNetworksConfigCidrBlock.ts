import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface composer_EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock {
  // cidr_block must be specified in CIDR notation.
  cidrBlock?: string;

  // display_name is a field for users to identify CIDR blocks.
  displayName?: string;
}

export function composer_EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "display_name is a field for users to identify CIDR blocks.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cidrBlock",
      "cidr_block must be specified in CIDR notation.",
      () => [],
      true,
      false,
    ),
  ];
}
