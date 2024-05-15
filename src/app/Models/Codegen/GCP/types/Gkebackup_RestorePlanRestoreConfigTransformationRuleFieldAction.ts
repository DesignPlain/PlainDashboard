import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction {
  /*
Specifies the operation to perform.
Possible values are: `REMOVE`, `MOVE`, `COPY`, `ADD`, `TEST`, `REPLACE`.
*/
  Op?: string;

  /*
A string containing a JSON-Pointer value that references a
location within the target document where the operation is performed.
*/
  Path?: string;

  /*
A string that specifies the desired value in string format
to use for transformation.

- - -
*/
  Value?: string;

  /*
A string containing a JSON Pointer value that references the
location in the target document to move the value from.
*/
  FromPath?: string;
}

export function Gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      "A string that specifies the desired value in string format\nto use for transformation.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FromPath",
      "A string containing a JSON Pointer value that references the\nlocation in the target document to move the value from.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Op",
      "Specifies the operation to perform.\nPossible values are: `REMOVE`, `MOVE`, `COPY`, `ADD`, `TEST`, `REPLACE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "A string containing a JSON-Pointer value that references a\nlocation within the target document where the operation is performed.",
      [],
      false,
      false,
    ),
  ];
}
