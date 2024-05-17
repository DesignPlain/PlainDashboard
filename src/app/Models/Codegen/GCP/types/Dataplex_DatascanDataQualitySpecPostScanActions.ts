import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport,
  Dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport_GetTypes,
} from "./Dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport";

export interface Dataplex_DatascanDataQualitySpecPostScanActions {
  /*
If set, results will be exported to the provided BigQuery table.
Structure is documented below.
*/
  BigqueryExport?: Dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport;
}

export function Dataplex_DatascanDataQualitySpecPostScanActions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BigqueryExport",
      "If set, results will be exported to the provided BigQuery table.\nStructure is documented below.",
      Dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport_GetTypes(),
      false,
      false,
    ),
  ];
}
