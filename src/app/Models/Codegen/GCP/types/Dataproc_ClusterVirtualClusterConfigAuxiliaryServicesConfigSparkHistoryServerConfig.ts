import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig {
  /*
Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.
- - -
*/
  DataprocCluster?: string;
}

export function Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DataprocCluster",
      "Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.\n- - -",
      [],
      false,
      true,
    ),
  ];
}
