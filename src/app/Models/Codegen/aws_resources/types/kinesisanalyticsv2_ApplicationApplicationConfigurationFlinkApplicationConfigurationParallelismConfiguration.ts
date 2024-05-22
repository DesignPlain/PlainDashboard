import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration {
  // Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.
  autoScalingEnabled?: boolean;

  // Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. Valid values: `CUSTOM`, `DEFAULT`. Set this attribute to `CUSTOM` in order for any specified `auto_scaling_enabled`, `parallelism`, or `parallelism_per_kpu` attribute values to be effective.
  configurationType?: string;

  // Describes the initial number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform.
  parallelism?: number;

  // Describes the number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application.
  parallelismPerKpu?: number;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "autoScalingEnabled",
      "Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "configurationType",
      "Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. Valid values: `CUSTOM`, `DEFAULT`. Set this attribute to `CUSTOM` in order for any specified `auto_scaling_enabled`, `parallelism`, or `parallelism_per_kpu` attribute values to be effective.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "parallelism",
      "Describes the initial number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "parallelismPerKpu",
      "Describes the number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application.",
      [],
      false,
      false,
    ),
  ];
}
