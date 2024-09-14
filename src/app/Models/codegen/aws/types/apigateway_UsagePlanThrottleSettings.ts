import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface apigateway_UsagePlanThrottleSettings {
  //
  rateLimit?: number;

  //
  burstLimit?: number;
}

export function apigateway_UsagePlanThrottleSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "rateLimit",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "burstLimit",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
