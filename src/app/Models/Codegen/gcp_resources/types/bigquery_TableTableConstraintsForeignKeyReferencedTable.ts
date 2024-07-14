import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_TableTableConstraintsForeignKeyReferencedTable {
  // The ID of the dataset containing this table.
  datasetId?: string;

  // The ID of the project containing this table.
  projectId?: string;

  /*
The ID of the table. The ID must contain only
letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum
length is 1,024 characters. Certain operations allow suffixing of
the table ID with a partition decorator, such as
sample_table$20190123.
*/
  tableId?: string;
}

export function bigquery_TableTableConstraintsForeignKeyReferencedTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The ID of the project containing this table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableId",
      "The ID of the table. The ID must contain only\nletters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum\nlength is 1,024 characters. Certain operations allow suffixing of\nthe table ID with a partition decorator, such as\nsample_table$20190123.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      "The ID of the dataset containing this table.",
      [],
      true,
      false,
    ),
  ];
}
