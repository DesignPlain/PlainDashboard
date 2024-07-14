import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualRouterSpecListenerPortMapping,
  appmesh_getVirtualRouterSpecListenerPortMapping_GetTypes,
} from "./appmesh_getVirtualRouterSpecListenerPortMapping";

export interface appmesh_getVirtualRouterSpecListener {
  //
  portMappings?: Array<appmesh_getVirtualRouterSpecListenerPortMapping>;
}

export function appmesh_getVirtualRouterSpecListener_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "portMappings",
      "",
      appmesh_getVirtualRouterSpecListenerPortMapping_GetTypes(),
      true,
      false,
    ),
  ];
}
