import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicy,
  appmesh_VirtualNodeSpecBackendDefaultsClientPolicy_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendDefaultsClientPolicy";

export interface appmesh_VirtualNodeSpecBackendDefaults {
  // Default client policy for virtual service backends. See above for details.
  clientPolicy?: appmesh_VirtualNodeSpecBackendDefaultsClientPolicy;
}

export function appmesh_VirtualNodeSpecBackendDefaults_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "clientPolicy",
      "Default client policy for virtual service backends. See above for details.",
      () => appmesh_VirtualNodeSpecBackendDefaultsClientPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
