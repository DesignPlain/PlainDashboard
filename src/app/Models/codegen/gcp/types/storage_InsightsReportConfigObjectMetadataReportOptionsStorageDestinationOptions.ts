import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions {
  // The destination bucket that stores the generated inventory reports.
  bucket?: string;

  // The path within the destination bucket to store generated inventory reports.
  destinationPath?: string;
}

export function storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "The destination bucket that stores the generated inventory reports.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "destinationPath",
      "The path within the destination bucket to store generated inventory reports.",
      () => [],
      false,
      false,
    ),
  ];
}
