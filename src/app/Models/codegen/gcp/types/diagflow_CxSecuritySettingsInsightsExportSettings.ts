import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface diagflow_CxSecuritySettingsInsightsExportSettings {
  // If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers.
  enableInsightsExport?: boolean;
}

export function diagflow_CxSecuritySettingsInsightsExportSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enableInsightsExport',
      'If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers.',
      () => [],
      true,
      false,
    ),
  ];
}
