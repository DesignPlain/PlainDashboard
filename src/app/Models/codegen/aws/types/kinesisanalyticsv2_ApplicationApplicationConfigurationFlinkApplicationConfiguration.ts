import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration_GetTypes,
} from './kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration';
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration_GetTypes,
} from './kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration';
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration_GetTypes,
} from './kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfiguration {
  // Describes an application's checkpointing configuration.
  checkpointConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration;

  // Describes configuration parameters for CloudWatch logging for an application.
  monitoringConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration;

  // Describes parameters for how an application executes multiple tasks simultaneously.
  parallelismConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'checkpointConfiguration',
      "Describes an application's checkpointing configuration.",
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'monitoringConfiguration',
      'Describes configuration parameters for CloudWatch logging for an application.',
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'parallelismConfiguration',
      'Describes parameters for how an application executes multiple tasks simultaneously.',
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
