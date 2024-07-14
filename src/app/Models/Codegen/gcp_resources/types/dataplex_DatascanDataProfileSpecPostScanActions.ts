import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataplex_DatascanDataProfileSpecPostScanActionsBigqueryExport,
  dataplex_DatascanDataProfileSpecPostScanActionsBigqueryExport_GetTypes,
} from "./dataplex_DatascanDataProfileSpecPostScanActionsBigqueryExport";

export interface dataplex_DatascanDataProfileSpecPostScanActions {
  /*
If set, results will be exported to the provided BigQuery table.
Structure is documented below.
*/
  bigqueryExport?: dataplex_DatascanDataProfileSpecPostScanActionsBigqueryExport;
}

export function dataplex_DatascanDataProfileSpecPostScanActions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "bigqueryExport",
      "If set, results will be exported to the provided BigQuery table.\nStructure is documented below.",
      dataplex_DatascanDataProfileSpecPostScanActionsBigqueryExport_GetTypes(),
      false,
      false,
    ),
  ];
}
