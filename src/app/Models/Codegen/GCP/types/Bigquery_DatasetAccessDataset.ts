import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_DatasetAccessDatasetDataset,
  Bigquery_DatasetAccessDatasetDataset_GetTypes,
} from "./Bigquery_DatasetAccessDatasetDataset";

export interface Bigquery_DatasetAccessDataset {
  /*
The dataset this entry applies to
Structure is documented below.
*/
  Dataset?: Bigquery_DatasetAccessDatasetDataset;

  /*
Which resources in the dataset this entry applies to. Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS
*/
  TargetTypes?: Array<string>;
}

export function Bigquery_DatasetAccessDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Dataset",
      "The dataset this entry applies to\nStructure is documented below.",
      Bigquery_DatasetAccessDatasetDataset_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "TargetTypes",
      "Which resources in the dataset this entry applies to. Currently, only views are supported,\nbut additional target types may be added in the future. Possible values: VIEWS",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
