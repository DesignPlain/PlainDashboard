import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

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
      () => [],
      true,
      true,
    ),
  ];
}
