import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bigquery_TableTableReplicationInfo {
  // The interval at which the source materialized view is polled for updates. The default is 300000.
  replicationIntervalMs?: number;

  // The ID of the source dataset.
  sourceDatasetId?: string;

  // The ID of the source project.
  sourceProjectId?: string;

  // The ID of the source materialized view.
  sourceTableId?: string;
}

export function bigquery_TableTableReplicationInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "replicationIntervalMs",
      "The interval at which the source materialized view is polled for updates. The default is 300000.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceDatasetId",
      "The ID of the source dataset.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceProjectId",
      "The ID of the source project.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceTableId",
      "The ID of the source materialized view.",
      () => [],
      true,
      true,
    ),
  ];
}
