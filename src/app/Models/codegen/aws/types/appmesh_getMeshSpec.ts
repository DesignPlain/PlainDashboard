import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getMeshSpecEgressFilter,
  appmesh_getMeshSpecEgressFilter_GetTypes,
} from "./appmesh_getMeshSpecEgressFilter";
import {
  appmesh_getMeshSpecServiceDiscovery,
  appmesh_getMeshSpecServiceDiscovery_GetTypes,
} from "./appmesh_getMeshSpecServiceDiscovery";

export interface appmesh_getMeshSpec {
  //
  egressFilters?: Array<appmesh_getMeshSpecEgressFilter>;

  //
  serviceDiscoveries?: Array<appmesh_getMeshSpecServiceDiscovery>;
}

export function appmesh_getMeshSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "egressFilters",
      "",
      () => appmesh_getMeshSpecEgressFilter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "serviceDiscoveries",
      "",
      () => appmesh_getMeshSpecServiceDiscovery_GetTypes(),
      true,
      false,
    ),
  ];
}
