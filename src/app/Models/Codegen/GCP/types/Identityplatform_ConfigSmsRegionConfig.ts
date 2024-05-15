import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_ConfigSmsRegionConfigAllowByDefault,
  Identityplatform_ConfigSmsRegionConfigAllowByDefault_GetTypes,
} from "./Identityplatform_ConfigSmsRegionConfigAllowByDefault";
import {
  Identityplatform_ConfigSmsRegionConfigAllowlistOnly,
  Identityplatform_ConfigSmsRegionConfigAllowlistOnly_GetTypes,
} from "./Identityplatform_ConfigSmsRegionConfigAllowlistOnly";

export interface Identityplatform_ConfigSmsRegionConfig {
  /*
A policy of allowing SMS to every region by default and adding disallowed regions to a disallow list.
Structure is documented below.
*/
  AllowByDefault?: Identityplatform_ConfigSmsRegionConfigAllowByDefault;

  /*
A policy of only allowing regions by explicitly adding them to an allowlist.
Structure is documented below.
*/
  AllowlistOnly?: Identityplatform_ConfigSmsRegionConfigAllowlistOnly;
}

export function Identityplatform_ConfigSmsRegionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AllowByDefault",
      "A policy of allowing SMS to every region by default and adding disallowed regions to a disallow list.\nStructure is documented below.",
      Identityplatform_ConfigSmsRegionConfigAllowByDefault_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AllowlistOnly",
      "A policy of only allowing regions by explicitly adding them to an allowlist.\nStructure is documented below.",
      Identityplatform_ConfigSmsRegionConfigAllowlistOnly_GetTypes(),
      false,
      false,
    ),
  ];
}
