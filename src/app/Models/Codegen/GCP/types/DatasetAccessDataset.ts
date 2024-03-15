import { DatasetAccessDatasetDataset } from "./DatasetAccessDatasetDataset";

export interface DatasetAccessDataset {
  /*
The dataset this entry applies to
Structure is documented below.
*/
  Dataset?: DatasetAccessDatasetDataset;

  /*
Which resources in the dataset this entry applies to. Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS
*/
  TargetTypes?: Array<string>;
}
