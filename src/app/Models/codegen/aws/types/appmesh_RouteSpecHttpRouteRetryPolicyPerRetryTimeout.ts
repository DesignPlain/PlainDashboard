import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_RouteSpecHttpRouteRetryPolicyPerRetryTimeout {
  // Retry unit. Valid values: `ms`, `s`.
  unit?: string;

  // Retry value.
  value?: number;
}

export function appmesh_RouteSpecHttpRouteRetryPolicyPerRetryTimeout_GetTypes(): DynamicUIProps[] {
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
