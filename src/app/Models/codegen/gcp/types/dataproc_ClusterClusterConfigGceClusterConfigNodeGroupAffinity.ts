import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_ClusterClusterConfigGceClusterConfigNodeGroupAffinity {
  // The URI of a sole-tenant node group resource that the cluster will be created on.
  nodeGroupUri?: string;
}

export function dataproc_ClusterClusterConfigGceClusterConfigNodeGroupAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'nodeGroupUri',
      'The URI of a sole-tenant node group resource that the cluster will be created on.',
      () => [],
      true,
      true,
    ),
  ];
}
