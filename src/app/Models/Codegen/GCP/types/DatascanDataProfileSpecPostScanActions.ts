import { DatascanDataProfileSpecPostScanActionsBigqueryExport } from "./DatascanDataProfileSpecPostScanActionsBigqueryExport";

export interface DatascanDataProfileSpecPostScanActions {
  /*
If set, results will be exported to the provided BigQuery table.
Structure is documented below.
*/
  BigqueryExport?: DatascanDataProfileSpecPostScanActionsBigqueryExport;
}
