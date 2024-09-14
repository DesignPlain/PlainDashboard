import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataplex_DatascanDataProfileSpecIncludeFields,
  dataplex_DatascanDataProfileSpecIncludeFields_GetTypes,
} from "./dataplex_DatascanDataProfileSpecIncludeFields";
import {
  dataplex_DatascanDataProfileSpecPostScanActions,
  dataplex_DatascanDataProfileSpecPostScanActions_GetTypes,
} from "./dataplex_DatascanDataProfileSpecPostScanActions";
import {
  dataplex_DatascanDataProfileSpecExcludeFields,
  dataplex_DatascanDataProfileSpecExcludeFields_GetTypes,
} from "./dataplex_DatascanDataProfileSpecExcludeFields";

export interface dataplex_DatascanDataProfileSpec {
  /*
The fields to include in data profile.
If not specified, all fields at the time of profile scan job execution are included, except for ones listed in `exclude_fields`.
Structure is documented below.
*/
  includeFields?: dataplex_DatascanDataProfileSpecIncludeFields;

  /*
Actions to take upon job completion.
Structure is documented below.
*/
  postScanActions?: dataplex_DatascanDataProfileSpecPostScanActions;

  // A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10
  rowFilter?: string;

  /*
The percentage of the records to be selected from the dataset for DataScan.
Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if `sampling_percent` is not specified, 0 or 100.
*/
  samplingPercent?: number;

  /*
The fields to exclude from data profile.
If specified, the fields will be excluded from data profile, regardless of `include_fields` value.
Structure is documented below.
*/
  excludeFields?: dataplex_DatascanDataProfileSpecExcludeFields;
}

export function dataplex_DatascanDataProfileSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "includeFields",
      "The fields to include in data profile.\nIf not specified, all fields at the time of profile scan job execution are included, except for ones listed in `exclude_fields`.\nStructure is documented below.",
      () => dataplex_DatascanDataProfileSpecIncludeFields_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "postScanActions",
      "Actions to take upon job completion.\nStructure is documented below.",
      () => dataplex_DatascanDataProfileSpecPostScanActions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rowFilter",
      "A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "samplingPercent",
      "The percentage of the records to be selected from the dataset for DataScan.\nValue can range between 0.0 and 100.0 with up to 3 significant decimal digits.\nSampling is not applied if `sampling_percent` is not specified, 0 or 100.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "excludeFields",
      "The fields to exclude from data profile.\nIf specified, the fields will be excluded from data profile, regardless of `include_fields` value.\nStructure is documented below.",
      () => dataplex_DatascanDataProfileSpecExcludeFields_GetTypes(),
      false,
      false,
    ),
  ];
}
