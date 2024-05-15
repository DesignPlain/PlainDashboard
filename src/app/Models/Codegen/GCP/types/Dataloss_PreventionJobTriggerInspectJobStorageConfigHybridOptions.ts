import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions";

export interface Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions {
  // A short description of where the data is coming from. Will be stored once in the job. 256 max length.
  Description?: string;

  /*
To organize findings, these labels will be added to each finding.
Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z?`.
Label values must be between 0 and 63 characters long and must conform to the regular expression `(a-z?)?`.
No more than 10 labels can be associated with a given finding.
Examples:
- `"environment" : "production"`
- `"pipeline" : "etl"`
*/
  Labels?: Map<string, string>;

  /*
These are labels that each inspection request must include within their 'finding_labels' map. Request
may contain others, but any missing one of these will be rejected.
Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z?`.
No more than 10 keys can be required.
*/
  RequiredFindingLabelKeys?: Array<string>;

  /*
If the container is a table, additional information to make findings meaningful such as the columns that are primary keys.
Structure is documented below.
*/
  TableOptions?: Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions;
}

export function Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A short description of where the data is coming from. Will be stored once in the job. 256 max length.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      'To organize findings, these labels will be added to each finding.\nLabel keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z?`.\nLabel values must be between 0 and 63 characters long and must conform to the regular expression `(a-z?)?`.\nNo more than 10 labels can be associated with a given finding.\nExamples:\n* `"environment" : "production"`\n* `"pipeline" : "etl"`',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RequiredFindingLabelKeys",
      "These are labels that each inspection request must include within their 'finding_labels' map. Request\nmay contain others, but any missing one of these will be rejected.\nLabel keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z?`.\nNo more than 10 keys can be required.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TableOptions",
      "If the container is a table, additional information to make findings meaningful such as the columns that are primary keys.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
