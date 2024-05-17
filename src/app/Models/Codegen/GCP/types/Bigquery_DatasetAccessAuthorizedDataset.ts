import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_DatasetAccessAuthorizedDatasetDataset,
  Bigquery_DatasetAccessAuthorizedDatasetDataset_GetTypes,
} from "./Bigquery_DatasetAccessAuthorizedDatasetDataset";

export interface Bigquery_DatasetAccessAuthorizedDataset {
  /*
The dataset this entry applies to
Structure is documented below.
*/
  Dataset?: Bigquery_DatasetAccessAuthorizedDatasetDataset;

  /*
Which resources in the dataset this entry applies to. Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS
*/
  TargetTypes?: Array<string>;
}

export function Bigquery_DatasetAccessAuthorizedDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Dataset",
      "The dataset this entry applies to\nStructure is documented below.",
      Bigquery_DatasetAccessAuthorizedDatasetDataset_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "TargetTypes",
      "Which resources in the dataset this entry applies to. Currently, only views are supported,\nbut additional target types may be added in the future. Possible values: VIEWS",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
