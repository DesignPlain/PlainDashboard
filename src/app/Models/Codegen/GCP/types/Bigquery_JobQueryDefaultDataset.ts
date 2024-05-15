import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_JobQueryDefaultDataset {
  /*
The dataset. Can be specified `{{dataset_id}}` if `project_id` is also set,
or of the form `projects/{{project}}/datasets/{{dataset_id}}` if not.
*/
  DatasetId?: string;

  // The ID of the project containing this table.
  ProjectId?: string;
}

export function Bigquery_JobQueryDefaultDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DatasetId",
      "The dataset. Can be specified `{{dataset_id}}` if `project_id` is also set,\nor of the form `projects/{{project}}/datasets/{{dataset_id}}` if not.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The ID of the project containing this table.",
      [],
      false,
      true,
    ),
  ];
}
