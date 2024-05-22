import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface composer_getEnvironmentConfigWorkloadsConfigWorker {
  // CPU request and limit for a single Airflow worker replica.
  cpu?: number;

  // Maximum number of workers for autoscaling.
  maxCount?: number;

  // Memory (GB) request and limit for a single Airflow worker replica.
  memoryGb?: number;

  // Minimum number of workers for autoscaling.
  minCount?: number;

  // Storage (GB) request and limit for a single Airflow worker replica.
  storageGb?: number;
}

export function composer_getEnvironmentConfigWorkloadsConfigWorker_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minCount",
      "Minimum number of workers for autoscaling.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "storageGb",
      "Storage (GB) request and limit for a single Airflow worker replica.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cpu",
      "CPU request and limit for a single Airflow worker replica.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxCount",
      "Maximum number of workers for autoscaling.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryGb",
      "Memory (GB) request and limit for a single Airflow worker replica.",
      [],
      true,
      false,
    ),
  ];
}
