import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfiguration_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfiguration";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationVpcConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationVpcConfiguration_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationVpcConfiguration";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfiguration_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfiguration";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationSnapshotConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationSnapshotConfiguration_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationSnapshotConfiguration";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentProperties,
  kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentProperties_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentProperties";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfiguration_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfiguration";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfiguration,
  kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfiguration_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfiguration";

export interface kinesisanalyticsv2_ApplicationApplicationConfiguration {
  // Describes whether snapshots are enabled for a Flink-based application.
  applicationSnapshotConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationSnapshotConfiguration;

  // Describes execution properties for a Flink-based application.
  environmentProperties?: kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentProperties;

  // The configuration of a Flink-based application.
  flinkApplicationConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfiguration;

  // Describes the starting properties for a Flink-based application.
  runConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfiguration;

  // The configuration of a SQL-based application.
  sqlApplicationConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfiguration;

  // The VPC configuration of a Flink-based application.
  vpcConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfigurationVpcConfiguration;

  // The code location and type parameters for the application.
  applicationCodeConfiguration?: kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfiguration;
}

export function kinesisanalyticsv2_ApplicationApplicationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "applicationCodeConfiguration",
      "The code location and type parameters for the application.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationCodeConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "applicationSnapshotConfiguration",
      "Describes whether snapshots are enabled for a Flink-based application.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationApplicationSnapshotConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "environmentProperties",
      "Describes execution properties for a Flink-based application.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationEnvironmentProperties_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "flinkApplicationConfiguration",
      "The configuration of a Flink-based application.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "runConfiguration",
      "Describes the starting properties for a Flink-based application.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationRunConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sqlApplicationConfiguration",
      "The configuration of a SQL-based application.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vpcConfiguration",
      "The VPC configuration of a Flink-based application.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationVpcConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
