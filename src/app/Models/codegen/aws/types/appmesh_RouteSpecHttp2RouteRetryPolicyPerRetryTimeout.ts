import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_RouteSpecHttp2RouteRetryPolicyPerRetryTimeout {
  // Retry unit. Valid values: `ms`, `s`.
  unit?: string;

  // Retry value.
  value?: number;
}

export function appmesh_RouteSpecHttp2RouteRetryPolicyPerRetryTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "unit",
      "Retry unit. Valid values: `ms`, `s`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "value",
      "Retry value.",
      () => [],
      true,
      false,
    ),
  ];
}
