import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_getDatasetAccessDatasetDataset {
  // The dataset ID.
  datasetId?: string;

  // The ID of the project containing this table.
  projectId?: string;
}

export function bigquery_getDatasetAccessDatasetDataset_GetTypes(): DynamicUIProps[] {
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
  ];
}
