import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface composer_getEnvironmentConfigWorkloadsConfigDagProcessor {
  // CPU request and limit for DAG processor.
  cpu?: number;

  // Memory (GB) request and limit for DAG processor.
  memoryGb?: number;

  // Storage (GB) request and limit for DAG processor.
  storageGb?: number;
}

export function composer_getEnvironmentConfigWorkloadsConfigDagProcessor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "cpu",
      "CPU request and limit for DAG processor.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryGb",
      "Memory (GB) request and limit for DAG processor.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "storageGb",
      "Storage (GB) request and limit for DAG processor.",
      () => [],
      true,
      false,
    ),
  ];
}
