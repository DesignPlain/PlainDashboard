import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualRouterSpecListener,
  appmesh_getVirtualRouterSpecListener_GetTypes,
} from "./appmesh_getVirtualRouterSpecListener";

export interface appmesh_getVirtualRouterSpec {
  //
  listeners?: Array<appmesh_getVirtualRouterSpecListener>;
}

export function appmesh_getVirtualRouterSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "listeners",
      "",
      () => appmesh_getVirtualRouterSpecListener_GetTypes(),
      true,
      false,
    ),
  ];
}
