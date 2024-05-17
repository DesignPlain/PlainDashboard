import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_getDatasetAccessDatasetDataset,
  Bigquery_getDatasetAccessDatasetDataset_GetTypes,
} from "./Bigquery_getDatasetAccessDatasetDataset";

export interface Bigquery_getDatasetAccessDataset {
  // The dataset this entry applies to
  Datasets?: Array<Bigquery_getDatasetAccessDatasetDataset>;

  /*
Which resources in the dataset this entry applies to. Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS
*/
  TargetTypes?: Array<string>;
}

export function Bigquery_getDatasetAccessDataset_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Datasets",
      "The dataset this entry applies to",
      Bigquery_getDatasetAccessDatasetDataset_GetTypes(),
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
