import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  identityplatform_ConfigSmsRegionConfigAllowByDefault,
  identityplatform_ConfigSmsRegionConfigAllowByDefault_GetTypes,
} from "./identityplatform_ConfigSmsRegionConfigAllowByDefault";
import {
  identityplatform_ConfigSmsRegionConfigAllowlistOnly,
  identityplatform_ConfigSmsRegionConfigAllowlistOnly_GetTypes,
} from "./identityplatform_ConfigSmsRegionConfigAllowlistOnly";

export interface identityplatform_ConfigSmsRegionConfig {
  /*
A policy of allowing SMS to every region by default and adding disallowed regions to a disallow list.
Structure is documented below.
*/
  allowByDefault?: identityplatform_ConfigSmsRegionConfigAllowByDefault;

  /*
A policy of only allowing regions by explicitly adding them to an allowlist.
Structure is documented below.
*/
  allowlistOnly?: identityplatform_ConfigSmsRegionConfigAllowlistOnly;
}

export function identityplatform_ConfigSmsRegionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "allowByDefault",
      "A policy of allowing SMS to every region by default and adding disallowed regions to a disallow list.\nStructure is documented below.",
      identityplatform_ConfigSmsRegionConfigAllowByDefault_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allowlistOnly",
      "A policy of only allowing regions by explicitly adding them to an allowlist.\nStructure is documented below.",
      identityplatform_ConfigSmsRegionConfigAllowlistOnly_GetTypes(),
      false,
      false,
    ),
  ];
}
