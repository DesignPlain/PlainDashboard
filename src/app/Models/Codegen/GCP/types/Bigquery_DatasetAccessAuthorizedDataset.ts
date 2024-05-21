import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  bigquery_DatasetAccessAuthorizedDatasetDataset,
  bigquery_DatasetAccessAuthorizedDatasetDataset_GetTypes,
} from "./bigquery_DatasetAccessAuthorizedDatasetDataset";

export interface bigquery_DatasetAccessAuthorizedDataset {
  /*
Which resources in the dataset this entry applies to. Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS
*/
  targetTypes?: Array<string>;

  /*
The dataset this entry applies to
Structure is documented below.
*/
  dataset?: bigquery_DatasetAccessAuthorizedDatasetDataset;
}

export function bigquery_DatasetAccessAuthorizedDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "targetTypes",
      "Which resources in the dataset this entry applies to. Currently, only views are supported,\nbut additional target types may be added in the future. Possible values: VIEWS",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dataset",
      "The dataset this entry applies to\nStructure is documented below.",
      bigquery_DatasetAccessAuthorizedDatasetDataset_GetTypes(),
      true,
      true,
    ),
  ];
}
