import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions {
  // The destination bucket that stores the generated inventory reports.
  Bucket?: string;

  // The path within the destination bucket to store generated inventory reports.
  DestinationPath?: string;
}

export function Storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Bucket",
      "The destination bucket that stores the generated inventory reports.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DestinationPath",
      "The path within the destination bucket to store generated inventory reports.",
      [],
      false,
      false,
    ),
  ];
}
