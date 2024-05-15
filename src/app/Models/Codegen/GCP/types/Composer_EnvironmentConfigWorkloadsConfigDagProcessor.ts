import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_EnvironmentConfigWorkloadsConfigDagProcessor {
  // Memory (GB) request and limit for DAG processor.
  MemoryGb?: number;

  // Storage (GB) request and limit for DAG processor.
  StorageGb?: number;

  // CPU request and limit for DAG processor.
  Cpu?: number;
}

export function Composer_EnvironmentConfigWorkloadsConfigDagProcessor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "StorageGb",
      "Storage (GB) request and limit for DAG processor.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Cpu",
      "CPU request and limit for DAG processor.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MemoryGb",
      "Memory (GB) request and limit for DAG processor.",
      [],
      false,
      false,
    ),
  ];
}
