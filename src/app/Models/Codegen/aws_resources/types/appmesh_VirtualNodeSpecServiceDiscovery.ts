import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecServiceDiscoveryAwsCloudMap,
  appmesh_VirtualNodeSpecServiceDiscoveryAwsCloudMap_GetTypes,
} from "./appmesh_VirtualNodeSpecServiceDiscoveryAwsCloudMap";
import {
  appmesh_VirtualNodeSpecServiceDiscoveryDns,
  appmesh_VirtualNodeSpecServiceDiscoveryDns_GetTypes,
} from "./appmesh_VirtualNodeSpecServiceDiscoveryDns";

export interface appmesh_VirtualNodeSpecServiceDiscovery {
  // Any AWS Cloud Map information for the virtual node.
  awsCloudMap?: appmesh_VirtualNodeSpecServiceDiscoveryAwsCloudMap;

  // DNS service name for the virtual node.
  dns?: appmesh_VirtualNodeSpecServiceDiscoveryDns;
}

export function appmesh_VirtualNodeSpecServiceDiscovery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "awsCloudMap",
      "Any AWS Cloud Map information for the virtual node.",
      appmesh_VirtualNodeSpecServiceDiscoveryAwsCloudMap_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dns",
      "DNS service name for the virtual node.",
      appmesh_VirtualNodeSpecServiceDiscoveryDns_GetTypes(),
      false,
      false,
    ),
  ];
}
