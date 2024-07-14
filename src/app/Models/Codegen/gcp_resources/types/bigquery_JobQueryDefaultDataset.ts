import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_JobQueryDefaultDataset {
  /*
The dataset. Can be specified `{{dataset_id}}` if `project_id` is also set,
or of the form `projects/{{project}}/datasets/{{dataset_id}}` if not.
*/
  datasetId?: string;

  // The ID of the project containing this table.
  projectId?: string;
}

export function bigquery_JobQueryDefaultDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      "The dataset. Can be specified `{{dataset_id}}` if `project_id` is also set,\nor of the form `projects/{{project}}/datasets/{{dataset_id}}` if not.",
      [],
      true,
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
  ];
}
