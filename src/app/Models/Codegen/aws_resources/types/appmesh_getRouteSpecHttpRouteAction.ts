import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getRouteSpecHttpRouteActionWeightedTarget,
  appmesh_getRouteSpecHttpRouteActionWeightedTarget_GetTypes,
} from "./appmesh_getRouteSpecHttpRouteActionWeightedTarget";

export interface appmesh_getRouteSpecHttpRouteAction {
  //
  weightedTargets?: Array<appmesh_getRouteSpecHttpRouteActionWeightedTarget>;
}

export function appmesh_getRouteSpecHttpRouteAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "weightedTargets",
      "",
      appmesh_getRouteSpecHttpRouteActionWeightedTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
