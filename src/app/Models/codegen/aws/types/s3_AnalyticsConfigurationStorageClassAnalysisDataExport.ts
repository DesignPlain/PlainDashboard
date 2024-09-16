import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestination,
  s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestination_GetTypes,
} from './s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestination';

export interface s3_AnalyticsConfigurationStorageClassAnalysisDataExport {
  // Specifies the destination for the exported analytics data (documented below).
  destination?: s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestination;

  // Schema version of exported analytics data. Allowed values: `V_1`. Default value: `V_1`.
  outputSchemaVersion?: string;
}

export function s3_AnalyticsConfigurationStorageClassAnalysisDataExport_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'destination',
      'Specifies the destination for the exported analytics data (documented below).',
      () =>
        s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestination_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'outputSchemaVersion',
      'Schema version of exported analytics data. Allowed values: `V_1`. Default value: `V_1`.',
      () => [],
      false,
      false,
    ),
  ];
}
