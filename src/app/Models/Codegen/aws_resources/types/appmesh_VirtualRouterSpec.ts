import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualRouterSpecListener,
  appmesh_VirtualRouterSpecListener_GetTypes,
} from "./appmesh_VirtualRouterSpecListener";

export interface appmesh_VirtualRouterSpec {
  /*
Listeners that the virtual router is expected to receive inbound traffic from.
Currently only one listener is supported per virtual router.
*/
  listeners?: Array<appmesh_VirtualRouterSpecListener>;
}

export function appmesh_VirtualRouterSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "listeners",
      "Listeners that the virtual router is expected to receive inbound traffic from.\nCurrently only one listener is supported per virtual router.",
      appmesh_VirtualRouterSpecListener_GetTypes(),
      false,
      false,
    ),
  ];
}
