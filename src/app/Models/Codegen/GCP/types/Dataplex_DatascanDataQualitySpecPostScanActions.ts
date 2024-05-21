import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport,
  dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport_GetTypes,
} from "./dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport";

export interface dataplex_DatascanDataQualitySpecPostScanActions {
  /*
If set, results will be exported to the provided BigQuery table.
Structure is documented below.
*/
  bigqueryExport?: dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport;
}

export function dataplex_DatascanDataQualitySpecPostScanActions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "bigqueryExport",
      "If set, results will be exported to the provided BigQuery table.\nStructure is documented below.",
      dataplex_DatascanDataQualitySpecPostScanActionsBigqueryExport_GetTypes(),
      false,
      false,
    ),
  ];
}
