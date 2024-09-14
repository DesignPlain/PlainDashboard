import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport {
  /*
The BigQuery table to export DataProfileScan results to.
Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID
*/
  resultsTable?: string;
}

export function dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resultsTable",
      "The BigQuery table to export DataProfileScan results to.\nFormat://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID",
      () => [],
      false,
      false,
    ),
  ];
}
