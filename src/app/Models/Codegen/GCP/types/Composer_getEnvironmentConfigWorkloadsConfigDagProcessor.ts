import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_getEnvironmentConfigWorkloadsConfigDagProcessor {
  // CPU request and limit for DAG processor.
  Cpu?: number;

  // Memory (GB) request and limit for DAG processor.
  MemoryGb?: number;

  // Storage (GB) request and limit for DAG processor.
  StorageGb?: number;
}

export function Composer_getEnvironmentConfigWorkloadsConfigDagProcessor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Cpu",
      "CPU request and limit for DAG processor.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MemoryGb",
      "Memory (GB) request and limit for DAG processor.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "StorageGb",
      "Storage (GB) request and limit for DAG processor.",
      [],
      true,
      false,
    ),
  ];
}
