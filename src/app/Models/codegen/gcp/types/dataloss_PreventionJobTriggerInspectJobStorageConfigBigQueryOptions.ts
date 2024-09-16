import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference,
  dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference_GetTypes,
} from './dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference';
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField,
  dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField_GetTypes,
} from './dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField';
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField,
  dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField_GetTypes,
} from './dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField';
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField,
  dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField_GetTypes,
} from './dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField';

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions {
  /*
Set of files to scan.
Structure is documented below.
*/
  tableReference?: dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference;

  /*
References to fields excluded from scanning.
This allows you to skip inspection of entire columns which you know have no findings.
Structure is documented below.
*/
  excludedFields?: Array<dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField>;

  /*
Specifies the BigQuery fields that will be returned with findings.
If not specified, no identifying fields will be returned for findings.
Structure is documented below.
*/
  identifyingFields?: Array<dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField>;

  /*
Limit scanning only to these fields.
Structure is documented below.
*/
  includedFields?: Array<dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField>;

  /*
Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted.
If not set, or if set to 0, all rows will be scanned. Only one of rowsLimit and rowsLimitPercent can be
specified. Cannot be used in conjunction with TimespanConfig.
*/
  rowsLimit?: number;

  /*
Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of
rowsLimit and rowsLimitPercent can be specified. Cannot be used in conjunction with TimespanConfig.
*/
  rowsLimitPercent?: number;

  /*
How to sample rows if not all rows are scanned. Meaningful only when used in conjunction with either
rowsLimit or rowsLimitPercent. If not specified, rows are scanned in the order BigQuery reads them.
Default value is `TOP`.
Possible values are: `TOP`, `RANDOM_START`.
*/
  sampleMethod?: string;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sampleMethod',
      'How to sample rows if not all rows are scanned. Meaningful only when used in conjunction with either\nrowsLimit or rowsLimitPercent. If not specified, rows are scanned in the order BigQuery reads them.\nDefault value is `TOP`.\nPossible values are: `TOP`, `RANDOM_START`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'tableReference',
      'Set of files to scan.\nStructure is documented below.',
      () =>
        dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'excludedFields',
      'References to fields excluded from scanning.\nThis allows you to skip inspection of entire columns which you know have no findings.\nStructure is documented below.',
      () =>
        dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'identifyingFields',
      'Specifies the BigQuery fields that will be returned with findings.\nIf not specified, no identifying fields will be returned for findings.\nStructure is documented below.',
      () =>
        dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'includedFields',
      'Limit scanning only to these fields.\nStructure is documented below.',
      () =>
        dataloss_PreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'rowsLimit',
      'Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted.\nIf not set, or if set to 0, all rows will be scanned. Only one of rowsLimit and rowsLimitPercent can be\nspecified. Cannot be used in conjunction with TimespanConfig.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'rowsLimitPercent',
      'Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down.\nMust be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of\nrowsLimit and rowsLimitPercent can be specified. Cannot be used in conjunction with TimespanConfig.',
      () => [],
      false,
      false,
    ),
  ];
}
