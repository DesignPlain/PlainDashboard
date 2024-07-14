import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  bigquery_DatasetAccessDatasetDataset,
  bigquery_DatasetAccessDatasetDataset_GetTypes,
} from "./bigquery_DatasetAccessDatasetDataset";

export interface bigquery_DatasetAccessDataset {
  /*
The dataset this entry applies to
Structure is documented below.
*/
  dataset?: bigquery_DatasetAccessDatasetDataset;

  /*
Which resources in the dataset this entry applies to. Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS
*/
  targetTypes?: Array<string>;
}

export function bigquery_DatasetAccessDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dataset",
      "The dataset this entry applies to\nStructure is documented below.",
      bigquery_DatasetAccessDatasetDataset_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetTypes",
      "Which resources in the dataset this entry applies to. Currently, only views are supported,\nbut additional target types may be added in the future. Possible values: VIEWS",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
