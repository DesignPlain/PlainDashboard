import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecBackendVirtualService,
  appmesh_getVirtualNodeSpecBackendVirtualService_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendVirtualService";

export interface appmesh_getVirtualNodeSpecBackend {
  //
  virtualServices?: Array<appmesh_getVirtualNodeSpecBackendVirtualService>;
}

export function appmesh_getVirtualNodeSpecBackend_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "virtualServices",
      "",
      appmesh_getVirtualNodeSpecBackendVirtualService_GetTypes(),
      true,
      false,
    ),
  ];
}
