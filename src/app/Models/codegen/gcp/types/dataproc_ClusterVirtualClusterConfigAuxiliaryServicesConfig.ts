import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig,
  dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig_GetTypes,
} from './dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig';
import {
  dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig,
  dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig_GetTypes,
} from './dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig';

export interface dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig {
  // The Hive Metastore configuration for this workload.
  metastoreConfig?: dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig;

  // The Spark History Server configuration for the workload.
  sparkHistoryServerConfig?: dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig;
}

export function dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'metastoreConfig',
      'The Hive Metastore configuration for this workload.',
      () =>
        dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sparkHistoryServerConfig',
      'The Spark History Server configuration for the workload.',
      () =>
        dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
