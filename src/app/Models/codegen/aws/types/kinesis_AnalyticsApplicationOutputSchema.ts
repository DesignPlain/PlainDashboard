import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kinesis_AnalyticsApplicationOutputSchema {
  // The Format Type of the records on the output stream. Can be `CSV` or `JSON`.
  recordFormatType?: string;
}

export function kinesis_AnalyticsApplicationOutputSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "recordFormatType",
      "The Format Type of the records on the output stream. Can be `CSV` or `JSON`.",
      () => [],
      true,
      false,
    ),
  ];
}
