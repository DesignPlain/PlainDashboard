import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualRouterSpecListenerPortMapping,
  appmesh_VirtualRouterSpecListenerPortMapping_GetTypes,
} from "./appmesh_VirtualRouterSpecListenerPortMapping";

export interface appmesh_VirtualRouterSpecListener {
  // Port mapping information for the listener.
  portMapping?: appmesh_VirtualRouterSpecListenerPortMapping;
}

export function appmesh_VirtualRouterSpecListener_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "portMapping",
      "Port mapping information for the listener.",
      appmesh_VirtualRouterSpecListenerPortMapping_GetTypes(),
      true,
      false,
    ),
  ];
}
