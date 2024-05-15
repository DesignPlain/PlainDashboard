import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_EnvironmentConfigWorkloadsConfigWorker {
  // CPU request and limit for a single Airflow worker replica.
  Cpu?: number;

  // Maximum number of workers for autoscaling.
  MaxCount?: number;

  // Memory (GB) request and limit for a single Airflow worker replica.
  MemoryGb?: number;

  // Minimum number of workers for autoscaling.
  MinCount?: number;

  // Storage (GB) request and limit for a single Airflow worker replica.
  StorageGb?: number;
}

export function Composer_EnvironmentConfigWorkloadsConfigWorker_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Cpu",
      "CPU request and limit for a single Airflow worker replica.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxCount",
      "Maximum number of workers for autoscaling.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MemoryGb",
      "Memory (GB) request and limit for a single Airflow worker replica.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinCount",
      "Minimum number of workers for autoscaling.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "StorageGb",
      "Storage (GB) request and limit for a single Airflow worker replica.",
      [],
      false,
      false,
    ),
  ];
}
