import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_JobCopyDestinationTable {
  // The ID of the dataset containing this table.
  datasetId?: string;

  // The ID of the project containing this table.
  projectId?: string;

  /*
The table. Can be specified `{{table_id}}` if `project_id` and `dataset_id` are also set,
or of the form `projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}` if not.
*/
  tableId?: string;
}

export function bigquery_JobCopyDestinationTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      "The ID of the dataset containing this table.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The ID of the project containing this table.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableId",
      "The table. Can be specified `{{table_id}}` if `project_id` and `dataset_id` are also set,\nor of the form `projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}` if not.",
      [],
      true,
      true,
    ),
  ];
}
