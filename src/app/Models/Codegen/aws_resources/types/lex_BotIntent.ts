import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_BotIntent {
  // The name of the intent. Must be less than or equal to 100 characters in length.
  intentName?: string;

  // The version of the intent. Must be less than or equal to 64 characters in length.
  intentVersion?: string;
}

export function lex_BotIntent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "intentVersion",
      "The version of the intent. Must be less than or equal to 64 characters in length.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "intentName",
      "The name of the intent. Must be less than or equal to 100 characters in length.",
      [],
      true,
      false,
    ),
  ];
}
