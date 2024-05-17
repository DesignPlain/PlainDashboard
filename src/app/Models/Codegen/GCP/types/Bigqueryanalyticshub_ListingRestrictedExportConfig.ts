import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigqueryanalyticshub_ListingRestrictedExportConfig {
  // If true, enable restricted export.
  Enabled?: boolean;

  // If true, restrict export of query result derived from restricted linked dataset table.
  RestrictQueryResult?: boolean;
}

export function Bigqueryanalyticshub_ListingRestrictedExportConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "If true, enable restricted export.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "RestrictQueryResult",
      "If true, restrict export of query result derived from restricted linked dataset table.",
      [],
      false,
      false,
    ),
  ];
}
