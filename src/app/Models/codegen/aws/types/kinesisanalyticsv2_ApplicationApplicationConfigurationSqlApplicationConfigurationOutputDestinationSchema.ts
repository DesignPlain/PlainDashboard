import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema {
  // Specifies the format of the records on the output stream. Valid values: `CSV`, `JSON`.
  recordFormatType?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "recordFormatType",
      "Specifies the format of the records on the output stream. Valid values: `CSV`, `JSON`.",
      () => [],
      true,
      false,
    ),
  ];
}
