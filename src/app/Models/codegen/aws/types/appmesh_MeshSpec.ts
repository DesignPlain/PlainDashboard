import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_MeshSpecEgressFilter,
  appmesh_MeshSpecEgressFilter_GetTypes,
} from "./appmesh_MeshSpecEgressFilter";
import {
  appmesh_MeshSpecServiceDiscovery,
  appmesh_MeshSpecServiceDiscovery_GetTypes,
} from "./appmesh_MeshSpecServiceDiscovery";

export interface appmesh_MeshSpec {
  // Egress filter rules for the service mesh.
  egressFilter?: appmesh_MeshSpecEgressFilter;

  // The service discovery information for the service mesh.
  serviceDiscovery?: appmesh_MeshSpecServiceDiscovery;
}

export function appmesh_MeshSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "egressFilter",
      "Egress filter rules for the service mesh.",
      () => appmesh_MeshSpecEgressFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "serviceDiscovery",
      "The service discovery information for the service mesh.",
      () => appmesh_MeshSpecServiceDiscovery_GetTypes(),
      false,
      false,
    ),
  ];
}
