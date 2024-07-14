import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  quicksight_DataSetPhysicalTableMapRelationalTableInputColumn,
  quicksight_DataSetPhysicalTableMapRelationalTableInputColumn_GetTypes,
} from "./quicksight_DataSetPhysicalTableMapRelationalTableInputColumn";

export interface quicksight_DataSetPhysicalTableMapRelationalTable {
  // Catalog associated with the table.
  catalog?: string;

  // ARN of the data source.
  dataSourceArn?: string;

  // Column schema of the table. See input_columns.
  inputColumns?: Array<quicksight_DataSetPhysicalTableMapRelationalTableInputColumn>;

  // Name of the relational table.
  name?: string;

  // Schema name. This name applies to certain relational database engines.
  schema?: string;
}

export function quicksight_DataSetPhysicalTableMapRelationalTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "catalog",
      "Catalog associated with the table.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataSourceArn",
      "ARN of the data source.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inputColumns",
      "Column schema of the table. See input_columns.",
      quicksight_DataSetPhysicalTableMapRelationalTableInputColumn_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the relational table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schema",
      "Schema name. This name applies to certain relational database engines.",
      [],
      false,
      false,
    ),
  ];
}
