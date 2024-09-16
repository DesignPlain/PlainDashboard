import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appfabric_IngestionDestinationDestinationConfigurationAuditLog,
  appfabric_IngestionDestinationDestinationConfigurationAuditLog_GetTypes,
} from './appfabric_IngestionDestinationDestinationConfigurationAuditLog';

export interface appfabric_IngestionDestinationDestinationConfiguration {
  // Contains information about an audit log processing configuration.
  auditLog?: appfabric_IngestionDestinationDestinationConfigurationAuditLog;
}

export function appfabric_IngestionDestinationDestinationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'auditLog',
      'Contains information about an audit log processing configuration.',
      () =>
        appfabric_IngestionDestinationDestinationConfigurationAuditLog_GetTypes(),
      false,
      false,
    ),
  ];
}
