import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions,
  dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions";

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions {
  // A short description of where the data is coming from. Will be stored once in the job. 256 max length.
  description?: string;

  /*
To organize findings, these labels will be added to each finding.
Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z?`.
Label values must be between 0 and 63 characters long and must conform to the regular expression `(a-z?)?`.
No more than 10 labels can be associated with a given finding.
Examples:
- `"environment" : "production"`
- `"pipeline" : "etl"`
*/
  labels?: Map<string, string>;

  /*
These are labels that each inspection request must include within their 'finding_labels' map. Request
may contain others, but any missing one of these will be rejected.
Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z?`.
No more than 10 keys can be required.
*/
  requiredFindingLabelKeys?: Array<string>;

  /*
If the container is a table, additional information to make findings meaningful such as the columns that are primary keys.
Structure is documented below.
*/
  tableOptions?: dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      'To organize findings, these labels will be added to each finding.\nLabel keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z?`.\nLabel values must be between 0 and 63 characters long and must conform to the regular expression `(a-z?)?`.\nNo more than 10 labels can be associated with a given finding.\nExamples:\n* `"environment" : "production"`\n* `"pipeline" : "etl"`',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "requiredFindingLabelKeys",
      "These are labels that each inspection request must include within their 'finding_labels' map. Request\nmay contain others, but any missing one of these will be rejected.\nLabel keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z?`.\nNo more than 10 keys can be required.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tableOptions",
      "If the container is a table, additional information to make findings meaningful such as the columns that are primary keys.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A short description of where the data is coming from. Will be stored once in the job. 256 max length.",
      [],
      false,
      false,
    ),
  ];
}
