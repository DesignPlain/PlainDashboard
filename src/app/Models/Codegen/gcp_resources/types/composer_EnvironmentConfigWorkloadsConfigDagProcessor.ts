import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface composer_EnvironmentConfigWorkloadsConfigDagProcessor {
  // Memory (GB) request and limit for DAG processor.
  memoryGb?: number;

  // Storage (GB) request and limit for DAG processor.
  storageGb?: number;

  // CPU request and limit for DAG processor.
  cpu?: number;
}

export function composer_EnvironmentConfigWorkloadsConfigDagProcessor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "cpu",
      "CPU request and limit for DAG processor.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryGb",
      "Memory (GB) request and limit for DAG processor.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "storageGb",
      "Storage (GB) request and limit for DAG processor.",
      [],
      false,
      false,
    ),
  ];
}
