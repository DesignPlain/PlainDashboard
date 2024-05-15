import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_DatascanDataProfileSpecIncludeFields,
  Dataplex_DatascanDataProfileSpecIncludeFields_GetTypes,
} from "./Dataplex_DatascanDataProfileSpecIncludeFields";
import {
  Dataplex_DatascanDataProfileSpecPostScanActions,
  Dataplex_DatascanDataProfileSpecPostScanActions_GetTypes,
} from "./Dataplex_DatascanDataProfileSpecPostScanActions";
import {
  Dataplex_DatascanDataProfileSpecExcludeFields,
  Dataplex_DatascanDataProfileSpecExcludeFields_GetTypes,
} from "./Dataplex_DatascanDataProfileSpecExcludeFields";

export interface Dataplex_DatascanDataProfileSpec {
  /*
The fields to include in data profile.
If not specified, all fields at the time of profile scan job execution are included, except for ones listed in `exclude_fields`.
Structure is documented below.
*/
  IncludeFields?: Dataplex_DatascanDataProfileSpecIncludeFields;

  /*
Actions to take upon job completion.
Structure is documented below.
*/
  PostScanActions?: Dataplex_DatascanDataProfileSpecPostScanActions;

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
  ExcludeFields?: Dataplex_DatascanDataProfileSpecExcludeFields;
}

export function Dataplex_DatascanDataProfileSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PostScanActions",
      "Actions to take upon job completion.\nStructure is documented below.",
      Dataplex_DatascanDataProfileSpecPostScanActions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RowFilter",
      "A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "SamplingPercent",
      "The percentage of the records to be selected from the dataset for DataScan.\nValue can range between 0.0 and 100.0 with up to 3 significant decimal digits.\nSampling is not applied if `sampling_percent` is not specified, 0 or 100.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ExcludeFields",
      "The fields to exclude from data profile.\nIf specified, the fields will be excluded from data profile, regardless of `include_fields` value.\nStructure is documented below.",
      Dataplex_DatascanDataProfileSpecExcludeFields_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IncludeFields",
      "The fields to include in data profile.\nIf not specified, all fields at the time of profile scan job execution are included, except for ones listed in `exclude_fields`.\nStructure is documented below.",
      Dataplex_DatascanDataProfileSpecIncludeFields_GetTypes(),
      false,
      false,
    ),
  ];
}
