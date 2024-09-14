import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_AnalyticsConfigurationStorageClassAnalysisDataExport,
  s3_AnalyticsConfigurationStorageClassAnalysisDataExport_GetTypes,
} from "./s3_AnalyticsConfigurationStorageClassAnalysisDataExport";

export interface s3_AnalyticsConfigurationStorageClassAnalysis {
  // Data export configuration (documented below).
  dataExport?: s3_AnalyticsConfigurationStorageClassAnalysisDataExport;
}

export function s3_AnalyticsConfigurationStorageClassAnalysis_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dataExport",
      "Data export configuration (documented below).",
      () => s3_AnalyticsConfigurationStorageClassAnalysisDataExport_GetTypes(),
      true,
      false,
    ),
  ];
}
