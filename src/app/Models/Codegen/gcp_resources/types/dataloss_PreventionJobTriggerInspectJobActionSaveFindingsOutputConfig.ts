import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfigTable,
  dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfigTable_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfigTable";

export interface dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfig {
  /*
Schema used for writing the findings for Inspect jobs. This field is only used for
Inspect and must be unspecified for Risk jobs. Columns are derived from the Finding
object. If appending to an existing table, any columns from the predefined schema
that are missing will be added. No columns in the existing table will be deleted.
If unspecified, then all available columns will be used for a new table or an (existing)
table with no schema, and no changes will be made to an existing table that has a schema.
Only for use with external storage.
Possible values are: `BASIC_COLUMNS`, `GCS_COLUMNS`, `DATASTORE_COLUMNS`, `BIG_QUERY_COLUMNS`, `ALL_COLUMNS`.
*/
  outputSchema?: string;

  /*
Information on the location of the target BigQuery Table.
Structure is documented below.
*/
  table?: dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfigTable;
}

export function dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "outputSchema",
      "Schema used for writing the findings for Inspect jobs. This field is only used for\nInspect and must be unspecified for Risk jobs. Columns are derived from the Finding\nobject. If appending to an existing table, any columns from the predefined schema\nthat are missing will be added. No columns in the existing table will be deleted.\nIf unspecified, then all available columns will be used for a new table or an (existing)\ntable with no schema, and no changes will be made to an existing table that has a schema.\nOnly for use with external storage.\nPossible values are: `BASIC_COLUMNS`, `GCS_COLUMNS`, `DATASTORE_COLUMNS`, `BIG_QUERY_COLUMNS`, `ALL_COLUMNS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "table",
      "Information on the location of the target BigQuery Table.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfigTable_GetTypes(),
      true,
      false,
    ),
  ];
}
