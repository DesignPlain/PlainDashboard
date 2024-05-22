import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_getRouteSpecHttp2RouteActionWeightedTarget {
  //
  port?: number;

  //
  virtualNode?: string;

  //
  weight?: number;
}

export function appmesh_getRouteSpecHttp2RouteActionWeightedTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "port", "", [], true, false),
    new DynamicUIProps(InputType.String, "virtualNode", "", [], true, false),
    new DynamicUIProps(InputType.Number, "weight", "", [], true, false),
  ];
}
