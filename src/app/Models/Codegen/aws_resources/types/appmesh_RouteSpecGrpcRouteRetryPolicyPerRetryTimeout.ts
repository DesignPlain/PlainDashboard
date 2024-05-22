import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_RouteSpecGrpcRouteRetryPolicyPerRetryTimeout {
  // Retry unit. Valid values: `ms`, `s`.
  unit?: string;

  // Retry value.
  value?: number;
}

export function appmesh_RouteSpecGrpcRouteRetryPolicyPerRetryTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "unit",
      "Retry unit. Valid values: `ms`, `s`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "value",
      "Retry value.",
      [],
      true,
      false,
    ),
  ];
}
