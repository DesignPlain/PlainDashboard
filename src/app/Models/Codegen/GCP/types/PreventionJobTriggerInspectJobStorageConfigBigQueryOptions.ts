import { PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField } from "./PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField";
import { PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField } from "./PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField";
import { PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference } from "./PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference";
import { PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField } from "./PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField";

export interface PreventionJobTriggerInspectJobStorageConfigBigQueryOptions {
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
  TableReference?: PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference;

  /*
References to fields excluded from scanning.
This allows you to skip inspection of entire columns which you know have no findings.
Structure is documented below.
*/
  ExcludedFields?: Array<PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField>;

  /*
Specifies the BigQuery fields that will be returned with findings.
If not specified, no identifying fields will be returned for findings.
Structure is documented below.
*/
  IdentifyingFields?: Array<PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField>;

  /*
Limit scanning only to these fields.
Structure is documented below.
*/
  IncludedFields?: Array<PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField>;

  /*
Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted.
If not set, or if set to 0, all rows will be scanned. Only one of rowsLimit and rowsLimitPercent can be
specified. Cannot be used in conjunction with TimespanConfig.
*/
  RowsLimit?: number;

  /*
Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of
rowsLimit and rowsLimitPercent can be specified. Cannot be used in conjunction with TimespanConfig.
*/
  RowsLimitPercent?: number;
}
