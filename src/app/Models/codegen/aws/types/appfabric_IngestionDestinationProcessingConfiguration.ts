import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appfabric_IngestionDestinationProcessingConfigurationAuditLog,
  appfabric_IngestionDestinationProcessingConfigurationAuditLog_GetTypes,
} from "./appfabric_IngestionDestinationProcessingConfigurationAuditLog";

export interface appfabric_IngestionDestinationProcessingConfiguration {
  // Contains information about an audit log processing configuration.
  auditLog?: appfabric_IngestionDestinationProcessingConfigurationAuditLog;
}

export function appfabric_IngestionDestinationProcessingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "auditLog",
      "Contains information about an audit log processing configuration.",
      () =>
        appfabric_IngestionDestinationProcessingConfigurationAuditLog_GetTypes(),
      false,
      false,
    ),
  ];
}
