import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualNodeSpecServiceDiscoveryAwsCloudMap,
  appmesh_getVirtualNodeSpecServiceDiscoveryAwsCloudMap_GetTypes,
} from "./appmesh_getVirtualNodeSpecServiceDiscoveryAwsCloudMap";
import {
  appmesh_getVirtualNodeSpecServiceDiscoveryDn,
  appmesh_getVirtualNodeSpecServiceDiscoveryDn_GetTypes,
} from "./appmesh_getVirtualNodeSpecServiceDiscoveryDn";

export interface appmesh_getVirtualNodeSpecServiceDiscovery {
  //
  awsCloudMaps?: Array<appmesh_getVirtualNodeSpecServiceDiscoveryAwsCloudMap>;

  //
  dns?: Array<appmesh_getVirtualNodeSpecServiceDiscoveryDn>;
}

export function appmesh_getVirtualNodeSpecServiceDiscovery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "awsCloudMaps",
      "",
      () => appmesh_getVirtualNodeSpecServiceDiscoveryAwsCloudMap_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dns",
      "",
      () => appmesh_getVirtualNodeSpecServiceDiscoveryDn_GetTypes(),
      true,
      false,
    ),
  ];
}
