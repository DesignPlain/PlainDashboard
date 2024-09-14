import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange {
  //
  end?: number;

  //
  start?: number;
}

export function appmesh_getGatewayRouteSpecHttpRouteMatchHeaderMatchRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "end", "", () => [], true, false),
    new DynamicUIProps(InputType.Number, "start", "", () => [], true, false),
  ];
}
