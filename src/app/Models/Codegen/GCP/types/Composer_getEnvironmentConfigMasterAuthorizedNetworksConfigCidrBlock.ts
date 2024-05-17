import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_getEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock {
  // cidr_block must be specified in CIDR notation.
  CidrBlock?: string;

  // display_name is a field for users to identify CIDR blocks.
  DisplayName?: string;
}

export function Composer_getEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CidrBlock",
      "cidr_block must be specified in CIDR notation.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "display_name is a field for users to identify CIDR blocks.",
      [],
      true,
      false,
    ),
  ];
}
