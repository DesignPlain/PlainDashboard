import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
