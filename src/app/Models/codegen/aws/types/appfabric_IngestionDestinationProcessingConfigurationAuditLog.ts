import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appfabric_IngestionDestinationProcessingConfigurationAuditLog {
  // The format in which the audit logs need to be formatted. Valid values: `json`, `parquet`.
  format?: string;

  // The event schema in which the audit logs need to be formatted. Valid values: `ocsf`, `raw`.
  schema?: string;
}

export function appfabric_IngestionDestinationProcessingConfigurationAuditLog_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "format",
      "The format in which the audit logs need to be formatted. Valid values: `json`, `parquet`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schema",
      "The event schema in which the audit logs need to be formatted. Valid values: `ocsf`, `raw`.",
      () => [],
      true,
      false,
    ),
  ];
}
