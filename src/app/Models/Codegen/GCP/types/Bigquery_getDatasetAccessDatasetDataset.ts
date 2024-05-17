import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_getDatasetAccessDatasetDataset {
  // The ID of the project containing this table.
  ProjectId?: string;

  // The dataset ID.
  DatasetId?: string;
}

export function Bigquery_getDatasetAccessDatasetDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The ID of the project containing this table.",
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
  ];
}
