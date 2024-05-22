import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_VirtualNodeSpecListenerTimeoutGrpcPerRequest {
  // Number of time units. Minimum value of `0`.
  value?: number;

  // Unit of time. Valid values: `ms`, `s`.
  unit?: string;
}

export function appmesh_VirtualNodeSpecListenerTimeoutGrpcPerRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "value",
      "Number of time units. Minimum value of `0`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "unit",
      "Unit of time. Valid values: `ms`, `s`.",
      [],
      true,
      false,
    ),
  ];
}
