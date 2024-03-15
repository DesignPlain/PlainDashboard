import { DatascanDataProfileSpecExcludeFields } from "./DatascanDataProfileSpecExcludeFields";
import { DatascanDataProfileSpecIncludeFields } from "./DatascanDataProfileSpecIncludeFields";
import { DatascanDataProfileSpecPostScanActions } from "./DatascanDataProfileSpecPostScanActions";

export interface DatascanDataProfileSpec {
  // A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10
  RowFilter?: string;

  /*
The percentage of the records to be selected from the dataset for DataScan.
Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if `sampling_percent` is not specified, 0 or 100.
*/
  SamplingPercent?: number;

  /*
The fields to exclude from data profile.
If specified, the fields will be excluded from data profile, regardless of `include_fields` value.
Structure is documented below.
*/
  ExcludeFields?: DatascanDataProfileSpecExcludeFields;

  /*
The fields to include in data profile.
If not specified, all fields at the time of profile scan job execution are included, except for ones listed in `exclude_fields`.
Structure is documented below.
*/
  IncludeFields?: DatascanDataProfileSpecIncludeFields;

  /*
Actions to take upon job completion.
Structure is documented below.
*/
  PostScanActions?: DatascanDataProfileSpecPostScanActions;
}
