import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualServiceSpecProvider,
  appmesh_VirtualServiceSpecProvider_GetTypes,
} from "./appmesh_VirtualServiceSpecProvider";

export interface appmesh_VirtualServiceSpec {
  // App Mesh object that is acting as the provider for a virtual service. You can specify a single virtual node or virtual router.
  provider?: appmesh_VirtualServiceSpecProvider;
}

export function appmesh_VirtualServiceSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "provider",
      "App Mesh object that is acting as the provider for a virtual service. You can specify a single virtual node or virtual router.",
      appmesh_VirtualServiceSpecProvider_GetTypes(),
      false,
      false,
    ),
  ];
}
