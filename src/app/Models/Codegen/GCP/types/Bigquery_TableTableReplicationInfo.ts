import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_TableTableReplicationInfo {
  // The interval at which the source materialized view is polled for updates. The default is 300000.
  ReplicationIntervalMs?: number;

  // The ID of the source dataset.
  SourceDatasetId?: string;

  // The ID of the source project.
  SourceProjectId?: string;

  // The ID of the source materialized view.
  SourceTableId?: string;
}

export function Bigquery_TableTableReplicationInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ReplicationIntervalMs",
      "The interval at which the source materialized view is polled for updates. The default is 300000.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceDatasetId",
      "The ID of the source dataset.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceProjectId",
      "The ID of the source project.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceTableId",
      "The ID of the source materialized view.",
      [],
      true,
      true,
    ),
  ];
}
