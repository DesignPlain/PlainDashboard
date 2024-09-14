import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bcmdata_ExportExportDataQuery {
  // Query statement.
  queryStatement?: string;

  // Table configuration.
  tableConfigurations?: Map<string, Map<string, string>>;
}

export function bcmdata_ExportExportDataQuery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "queryStatement",
      "Query statement.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tableConfigurations",
      "Table configuration.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
