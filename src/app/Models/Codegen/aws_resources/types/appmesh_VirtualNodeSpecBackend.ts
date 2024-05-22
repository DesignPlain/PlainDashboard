import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualNodeSpecBackendVirtualService,
  appmesh_VirtualNodeSpecBackendVirtualService_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendVirtualService";

export interface appmesh_VirtualNodeSpecBackend {
  // Virtual service to use as a backend for a virtual node.
  virtualService?: appmesh_VirtualNodeSpecBackendVirtualService;
}

export function appmesh_VirtualNodeSpecBackend_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "virtualService",
      "Virtual service to use as a backend for a virtual node.",
      appmesh_VirtualNodeSpecBackendVirtualService_GetTypes(),
      true,
      false,
    ),
  ];
}
