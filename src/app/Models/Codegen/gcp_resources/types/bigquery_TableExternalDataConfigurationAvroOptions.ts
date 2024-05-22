import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_TableExternalDataConfigurationAvroOptions {
  /*
If is set to true, indicates whether
to interpret logical types as the corresponding BigQuery data type
(for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).
*/
  useAvroLogicalTypes?: boolean;
}

export function bigquery_TableExternalDataConfigurationAvroOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "useAvroLogicalTypes",
      "If is set to true, indicates whether\nto interpret logical types as the corresponding BigQuery data type\n(for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).",
      [],
      true,
      false,
    ),
  ];
}
