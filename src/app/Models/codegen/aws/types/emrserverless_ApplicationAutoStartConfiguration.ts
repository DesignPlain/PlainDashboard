import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface emrserverless_ApplicationAutoStartConfiguration {
  // Enables the application to automatically start on job submission. Defaults to `true`.
  enabled?: boolean;
}

export function emrserverless_ApplicationAutoStartConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enables the application to automatically start on job submission. Defaults to `true`.",
      () => [],
      false,
      false,
    ),
  ];
}
