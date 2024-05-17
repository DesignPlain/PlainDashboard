import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_JobExtractSourceModel {
  /*
The ID of the model.

- - -
*/
  ModelId?: string;

  // The ID of the project containing this model.
  ProjectId?: string;

  // The ID of the dataset containing this model.
  DatasetId?: string;
}

export function Bigquery_JobExtractSourceModel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DatasetId",
      "The ID of the dataset containing this model.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ModelId",
      "The ID of the model.\n\n- - -",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The ID of the project containing this model.",
      [],
      true,
      true,
    ),
  ];
}
