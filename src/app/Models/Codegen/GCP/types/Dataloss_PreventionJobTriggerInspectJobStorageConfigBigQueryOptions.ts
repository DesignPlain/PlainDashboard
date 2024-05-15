import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField";

export interface Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions {
  /*
Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of
rowsLimit and rowsLimitPercent can be specified. Cannot be used in conjunction with TimespanConfig.
*/
  RowsLimitPercent?: number;

  /*
How to sample rows if not all rows are scanned. Meaningful only when used in conjunction with either
rowsLimit or rowsLimitPercent. If not specified, rows are scanned in the order BigQuery reads them.
Default value is `TOP`.
Possible values are: `TOP`, `RANDOM_START`.
*/
  SampleMethod?: string;

  /*
Set of files to scan.
Structure is documented below.
*/
  TableReference?: Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference;

  /*
References to fields excluded from scanning.
This allows you to skip inspection of entire columns which you know have no findings.
Structure is documented below.
*/
  ExcludedFields?: Array<Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField>;

  /*
Specifies the BigQuery fields that will be returned with findings.
If not specified, no identifying fields will be returned for findings.
Structure is documented below.
*/
  IdentifyingFields?: Array<Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField>;

  /*
Limit scanning only to these fields.
Structure is documented below.
*/
  IncludedFields?: Array<Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField>;

  /*
Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted.
If not set, or if set to 0, all rows will be scanned. Only one of rowsLimit and rowsLimitPercent can be
specified. Cannot be used in conjunction with TimespanConfig.
*/
  RowsLimit?: number;
}

export function Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "RowsLimit",
      "Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted.\nIf not set, or if set to 0, all rows will be scanned. Only one of rowsLimit and rowsLimitPercent can be\nspecified. Cannot be used in conjunction with TimespanConfig.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "RowsLimitPercent",
      "Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down.\nMust be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of\nrowsLimit and rowsLimitPercent can be specified. Cannot be used in conjunction with TimespanConfig.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SampleMethod",
      "How to sample rows if not all rows are scanned. Meaningful only when used in conjunction with either\nrowsLimit or rowsLimitPercent. If not specified, rows are scanned in the order BigQuery reads them.\nDefault value is `TOP`.\nPossible values are: `TOP`, `RANDOM_START`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TableReference",
      "Set of files to scan.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExcludedFields",
      "References to fields excluded from scanning.\nThis allows you to skip inspection of entire columns which you know have no findings.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IdentifyingFields",
      "Specifies the BigQuery fields that will be returned with findings.\nIf not specified, no identifying fields will be returned for findings.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IncludedFields",
      "Limit scanning only to these fields.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField_GetTypes(),
      false,
      false,
    ),
  ];
}
