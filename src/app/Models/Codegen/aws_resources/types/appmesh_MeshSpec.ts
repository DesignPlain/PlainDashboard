import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_MeshSpecEgressFilter,
  appmesh_MeshSpecEgressFilter_GetTypes,
} from "./appmesh_MeshSpecEgressFilter";

export interface appmesh_MeshSpec {
  // Egress filter rules for the service mesh.
  egressFilter?: appmesh_MeshSpecEgressFilter;
}

export function appmesh_MeshSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "egressFilter",
      "Egress filter rules for the service mesh.",
      appmesh_MeshSpecEgressFilter_GetTypes(),
      false,
      false,
    ),
  ];
}
