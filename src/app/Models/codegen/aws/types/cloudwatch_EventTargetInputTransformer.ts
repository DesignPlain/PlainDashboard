import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudwatch_EventTargetInputTransformer {
  /*
Key value pairs specified in the form of JSONPath (for example, time = $.time)
- You can have as many as 100 key-value pairs.
- You must use JSON dot notation, not bracket notation.
- The keys can't start with "AWS".
*/
  inputPaths?: Map<string, string>;

  // Template to customize data sent to the target. Must be valid JSON. To send a string value, the string value must include double quotes.
  inputTemplate?: string;
}

export function cloudwatch_EventTargetInputTransformer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "inputPaths",
      'Key value pairs specified in the form of JSONPath (for example, time = $.time)\n* You can have as many as 100 key-value pairs.\n* You must use JSON dot notation, not bracket notation.\n* The keys can\'t start with "AWS".',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputTemplate",
      "Template to customize data sent to the target. Must be valid JSON. To send a string value, the string value must include double quotes.",
      () => [],
      true,
      false,
    ),
  ];
}
