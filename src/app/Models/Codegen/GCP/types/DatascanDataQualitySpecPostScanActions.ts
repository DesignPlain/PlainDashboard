import { DatascanDataQualitySpecPostScanActionsBigqueryExport } from "./DatascanDataQualitySpecPostScanActionsBigqueryExport";

export interface DatascanDataQualitySpecPostScanActions {
  /*
If set, results will be exported to the provided BigQuery table.
Structure is documented below.
*/
  BigqueryExport?: DatascanDataQualitySpecPostScanActionsBigqueryExport;
}
