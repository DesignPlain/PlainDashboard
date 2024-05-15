import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_DatascanDataQualitySpecPostScanActions,
  Dataplex_DatascanDataQualitySpecPostScanActions_GetTypes,
} from "./Dataplex_DatascanDataQualitySpecPostScanActions";
import {
  Dataplex_DatascanDataQualitySpecRule,
  Dataplex_DatascanDataQualitySpecRule_GetTypes,
} from "./Dataplex_DatascanDataQualitySpecRule";

export interface Dataplex_DatascanDataQualitySpec {
  /*
Actions to take upon job completion.
Structure is documented below.
*/
  PostScanActions?: Dataplex_DatascanDataQualitySpecPostScanActions;

  // A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10
  RowFilter?: string;

  /*
The list of rules to evaluate against a data source. At least one rule is required.
Structure is documented below.
*/
  Rules?: Array<Dataplex_DatascanDataQualitySpecRule>;

  /*
The percentage of the records to be selected from the dataset for DataScan.
Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if `sampling_percent` is not specified, 0 or 100.
*/
  SamplingPercent?: number;
}

export function Dataplex_DatascanDataQualitySpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PostScanActions",
      "Actions to take upon job completion.\nStructure is documented below.",
      Dataplex_DatascanDataQualitySpecPostScanActions_GetTypes(),
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
      InputType.Array,
      "Rules",
      "The list of rules to evaluate against a data source. At least one rule is required.\nStructure is documented below.",
      Dataplex_DatascanDataQualitySpecRule_GetTypes(),
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
  ];
}
