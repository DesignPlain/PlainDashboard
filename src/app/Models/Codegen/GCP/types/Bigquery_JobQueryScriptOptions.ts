import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_JobQueryScriptOptions {
  /*
Determines which statement in the script represents the "key result",
used to populate the schema and query results of the script job.
Possible values are: `LAST`, `FIRST_SELECT`.
*/
  KeyResultStatement?: string;

  // Limit on the number of bytes billed per statement. Exceeding this budget results in an error.
  StatementByteBudget?: string;

  // Timeout period for each statement in a script.
  StatementTimeoutMs?: string;
}

export function Bigquery_JobQueryScriptOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KeyResultStatement",
      'Determines which statement in the script represents the "key result",\nused to populate the schema and query results of the script job.\nPossible values are: `LAST`, `FIRST_SELECT`.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "StatementByteBudget",
      "Limit on the number of bytes billed per statement. Exceeding this budget results in an error.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "StatementTimeoutMs",
      "Timeout period for each statement in a script.",
      [],
      false,
      true,
    ),
  ];
}
