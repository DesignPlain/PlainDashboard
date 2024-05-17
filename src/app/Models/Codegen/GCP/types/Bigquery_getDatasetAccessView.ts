import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_getDatasetAccessView {
  /*
The ID of the table. The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.
*/
  TableId?: string;

  // The dataset ID.
  DatasetId?: string;

  // The ID of the project containing this table.
  ProjectId?: string;
}

export function Bigquery_getDatasetAccessView_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TableId",
      "The ID of the table. The ID must contain only letters (a-z,\nA-Z), numbers (0-9), or underscores (_). The maximum length\nis 1,024 characters.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DatasetId",
      "The dataset ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The ID of the project containing this table.",
      [],
      true,
      false,
    ),
  ];
}
