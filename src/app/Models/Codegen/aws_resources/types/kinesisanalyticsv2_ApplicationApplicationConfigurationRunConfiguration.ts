import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfiguration {
  // The restore behavior of a restarting application.
  applicationRestoreConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration;

  // The starting parameters for a Flink-based Kinesis Data Analytics application.
  flinkRunConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "applicationRestoreConfiguration",
      "The restore behavior of a restarting application.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "flinkRunConfiguration",
      "The starting parameters for a Flink-based Kinesis Data Analytics application.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
