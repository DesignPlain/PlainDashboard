import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_getRouteSpecGrpcRouteTimeoutIdle {
  //
  value?: number;

  //
  unit?: string;
}

export function appmesh_getRouteSpecGrpcRouteTimeoutIdle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "unit", "", [], true, false),
    new DynamicUIProps(InputType.Number, "value", "", [], true, false),
  ];
}
