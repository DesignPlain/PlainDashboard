import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface timestreamwrite_TableSchemaCompositePartitionKey {
  // The type of the partition key. Valid values: `DIMENSION`, `MEASURE`.
  type?: string;

  // The level of enforcement for the specification of a dimension key in ingested records. Valid values: `REQUIRED`, `OPTIONAL`.
  enforcementInRecord?: string;

  // The name of the attribute used for a dimension key.
  name?: string;
}

export function timestreamwrite_TableSchemaCompositePartitionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the partition key. Valid values: `DIMENSION`, `MEASURE`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "enforcementInRecord",
      "The level of enforcement for the specification of a dimension key in ingested records. Valid values: `REQUIRED`, `OPTIONAL`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the attribute used for a dimension key.",
      [],
      false,
      true,
    ),
  ];
}
