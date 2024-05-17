import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_JobLoadDestinationTable {
  // The ID of the dataset containing this table.
  DatasetId?: string;

  // The ID of the project containing this table.
  ProjectId?: string;

  /*
The table. Can be specified `{{table_id}}` if `project_id` and `dataset_id` are also set,
or of the form `projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}` if not.
*/
  TableId?: string;
}

export function Bigquery_JobLoadDestinationTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The ID of the project containing this table.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "TableId",
      "The table. Can be specified `{{table_id}}` if `project_id` and `dataset_id` are also set,\nor of the form `projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}` if not.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DatasetId",
      "The ID of the dataset containing this table.",
      [],
      false,
      true,
    ),
  ];
}
