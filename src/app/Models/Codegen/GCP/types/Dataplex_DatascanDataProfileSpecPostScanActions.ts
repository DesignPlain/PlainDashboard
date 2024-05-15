import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_DatascanDataProfileSpecPostScanActionsBigqueryExport,
  Dataplex_DatascanDataProfileSpecPostScanActionsBigqueryExport_GetTypes,
} from "./Dataplex_DatascanDataProfileSpecPostScanActionsBigqueryExport";

export interface Dataplex_DatascanDataProfileSpecPostScanActions {
  /*
If set, results will be exported to the provided BigQuery table.
Structure is documented below.
*/
  BigqueryExport?: Dataplex_DatascanDataProfileSpecPostScanActionsBigqueryExport;
}

export function Dataplex_DatascanDataProfileSpecPostScanActions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BigqueryExport",
      "If set, results will be exported to the provided BigQuery table.\nStructure is documented below.",
      Dataplex_DatascanDataProfileSpecPostScanActionsBigqueryExport_GetTypes(),
      false,
      false,
    ),
  ];
}
