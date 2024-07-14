import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig,
  dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig_GetTypes,
} from "./dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig";
import {
  dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig,
  dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig_GetTypes,
} from "./dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig";

export interface dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig {
  // The Spark History Server configuration for the workload.
  sparkHistoryServerConfig?: dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig;

  // The Hive Metastore configuration for this workload.
  metastoreConfig?: dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig;
}

export function dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sparkHistoryServerConfig",
      "The Spark History Server configuration for the workload.",
      dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "metastoreConfig",
      "The Hive Metastore configuration for this workload.",
      dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
