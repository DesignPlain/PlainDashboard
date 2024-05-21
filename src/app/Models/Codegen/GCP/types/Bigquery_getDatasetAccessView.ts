import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_getDatasetAccessView {
  // The dataset ID.
  datasetId?: string;

  // The ID of the project containing this table.
  projectId?: string;

  /*
The ID of the table. The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.
*/
  tableId?: string;
}

export function bigquery_getDatasetAccessView_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      "The dataset ID.",
      [],
      true,
      false,
    ),
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
      "The ID of the table. The ID must contain only letters (a-z,\nA-Z), numbers (0-9), or underscores (_). The maximum length\nis 1,024 characters.",
      [],
      true,
      false,
    ),
  ];
}
