import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appengine_ApplicationFeatureSettings {
  /*
Set to false to use the legacy health check instead of the readiness
and liveness checks.
*/
  splitHealthChecks?: boolean;
}

export function appengine_ApplicationFeatureSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "splitHealthChecks",
      "Set to false to use the legacy health check instead of the readiness\nand liveness checks.",
      () => [],
      true,
      false,
    ),
  ];
}
