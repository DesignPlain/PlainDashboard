import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_PatchDeploymentPatchConfigGoo {
  // goo update settings. Use this setting to override the default goo patch rules.
  enabled?: boolean;
}

export function osconfig_PatchDeploymentPatchConfigGoo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "goo update settings. Use this setting to override the default goo patch rules.",
      [],
      true,
      true,
    ),
  ];
}
