import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appfabric_IngestionDestinationDestinationConfigurationAuditLogDestination,
  appfabric_IngestionDestinationDestinationConfigurationAuditLogDestination_GetTypes,
} from "./appfabric_IngestionDestinationDestinationConfigurationAuditLogDestination";

export interface appfabric_IngestionDestinationDestinationConfigurationAuditLog {
  // Contains information about an audit log destination. Only one destination (Firehose Stream) or (S3 Bucket) can be specified.
  destination?: appfabric_IngestionDestinationDestinationConfigurationAuditLogDestination;
}

export function appfabric_IngestionDestinationDestinationConfigurationAuditLog_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "Contains information about an audit log destination. Only one destination (Firehose Stream) or (S3 Bucket) can be specified.",
      () =>
        appfabric_IngestionDestinationDestinationConfigurationAuditLogDestination_GetTypes(),
      false,
      false,
    ),
  ];
}
