import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig,
  Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig_GetTypes,
} from "./Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig";
import {
  Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig,
  Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig_GetTypes,
} from "./Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig";

export interface Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig {
  // The Hive Metastore configuration for this workload.
  MetastoreConfig?: Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig;

  // The Spark History Server configuration for the workload.
  SparkHistoryServerConfig?: Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig;
}

export function Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SparkHistoryServerConfig",
      "The Spark History Server configuration for the workload.",
      Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MetastoreConfig",
      "The Hive Metastore configuration for this workload.",
      Dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
