import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alloydb_ClusterSecondaryConfig {
  /*
Name of the primary cluster must be in the format
'projects/{project}/locations/{location}/clusters/{cluster_id}'
*/
  primaryClusterName?: string;
}

export function alloydb_ClusterSecondaryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "primaryClusterName",
      "Name of the primary cluster must be in the format\n'projects/{project}/locations/{location}/clusters/{cluster_id}'",
      [],
      true,
      false,
    ),
  ];
}
