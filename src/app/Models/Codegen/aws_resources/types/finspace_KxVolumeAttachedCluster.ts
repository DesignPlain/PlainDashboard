import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface finspace_KxVolumeAttachedCluster {
  //
  clusterName?: string;

  //
  clusterStatus?: string;

  //
  clusterType?: string;
}

export function finspace_KxVolumeAttachedCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "clusterStatus", "", [], true, true),
    new DynamicUIProps(InputType.String, "clusterType", "", [], true, true),
    new DynamicUIProps(InputType.String, "clusterName", "", [], true, true),
  ];
}
