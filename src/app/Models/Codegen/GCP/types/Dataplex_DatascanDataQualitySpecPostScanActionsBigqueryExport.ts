import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport {
  /*
The BigQuery table to export DataProfileScan results to.
Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID
*/
  ResultsTable?: string;
}

export function Dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ResultsTable",
      "The BigQuery table to export DataProfileScan results to.\nFormat://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID",
      [],
      false,
      false,
    ),
  ];
}
