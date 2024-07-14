import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface comprehend_EntityRecognizerInputDataConfigEntityType {
  /*
An entity type to be matched by the Entity Recognizer.
Cannot contain a newline (`\n`), carriage return (`\r`), or tab (`\t`).
*/
  type?: string;
}

export function comprehend_EntityRecognizerInputDataConfigEntityType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "An entity type to be matched by the Entity Recognizer.\nCannot contain a newline (`\\n`), carriage return (`\\r`), or tab (`\\t`).",
      [],
      true,
      false,
    ),
  ];
}
