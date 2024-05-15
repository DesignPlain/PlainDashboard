import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxSecuritySettingsInsightsExportSettings {
  // If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers.
  EnableInsightsExport?: boolean;
}

export function Diagflow_CxSecuritySettingsInsightsExportSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableInsightsExport",
      "If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers.",
      [],
      true,
      false,
    ),
  ];
}
