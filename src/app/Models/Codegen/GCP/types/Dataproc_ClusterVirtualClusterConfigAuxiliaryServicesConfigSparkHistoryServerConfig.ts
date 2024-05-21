import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig {
  /*
Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.
- - -
*/
  dataprocCluster?: string;
}

export function dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataprocCluster",
      "Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.\n- - -",
      [],
      false,
      true,
    ),
  ];
}
