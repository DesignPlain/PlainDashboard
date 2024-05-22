import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_JobExtractSourceModel {
  // The ID of the dataset containing this model.
  datasetId?: string;

  /*
The ID of the model.

- - -
*/
  modelId?: string;

  // The ID of the project containing this model.
  projectId?: string;
}

export function bigquery_JobExtractSourceModel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      "The ID of the dataset containing this model.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "modelId",
      "The ID of the model.\n\n- - -",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The ID of the project containing this model.",
      [],
      true,
      true,
    ),
  ];
}
