import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction {
  /*
A string that specifies the desired value in string format
to use for transformation.

- - -
*/
  value?: string;

  /*
A string containing a JSON Pointer value that references the
location in the target document to move the value from.
*/
  fromPath?: string;

  /*
Specifies the operation to perform.
Possible values are: `REMOVE`, `MOVE`, `COPY`, `ADD`, `TEST`, `REPLACE`.
*/
  op?: string;

  /*
A string containing a JSON-Pointer value that references a
location within the target document where the operation is performed.
*/
  path?: string;
}

export function gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "A string that specifies the desired value in string format\nto use for transformation.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fromPath",
      "A string containing a JSON Pointer value that references the\nlocation in the target document to move the value from.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "op",
      "Specifies the operation to perform.\nPossible values are: `REMOVE`, `MOVE`, `COPY`, `ADD`, `TEST`, `REPLACE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "A string containing a JSON-Pointer value that references a\nlocation within the target document where the operation is performed.",
      [],
      false,
      false,
    ),
  ];
}
