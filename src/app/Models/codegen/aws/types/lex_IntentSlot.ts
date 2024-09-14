import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_IntentSlotValueElicitationPrompt,
  lex_IntentSlotValueElicitationPrompt_GetTypes,
} from "./lex_IntentSlotValueElicitationPrompt";

export interface lex_IntentSlot {
  // The version of the slot type. Must be less than or equal to 64 characters in length.
  slotTypeVersion?: string;

  /*
Directs Lex the order in which to elicit this slot value from the user.
For example, if the intent has two slots with priorities 1 and 2, AWS Lex first elicits a value for
the slot with priority 1. If multiple slots share the same priority, the order in which Lex elicits
values is arbitrary. Must be between 1 and 100.
*/
  priority?: number;

  /*
The type of the slot, either a custom slot type that you defined or one of
the built-in slot types. Must be less than or equal to 100 characters in length.
*/
  slotType?: string;

  /*
The response card. Amazon Lex will substitute session attributes and
slot values into the response card. For more information, see
[Example: Using a Response Card](https://docs.aws.amazon.com/lex/latest/dg/ex-resp-card.html). Must be less than or equal to 50000 characters in length.
*/
  responseCard?: string;

  /*
If you know a specific pattern with which users might respond to
an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This
is optional. In most cases, Amazon Lex is capable of understanding user utterances. Must have between 1 and 10 items in the list, and each item must be less than or equal to 200 characters in length.
*/
  sampleUtterances?: Array<string>;

  // Specifies whether the slot is required or optional.
  slotConstraint?: string;

  /*
The prompt that Amazon Lex uses to elicit the slot value
from the user. Attributes are documented under prompt.
*/
  valueElicitationPrompt?: lex_IntentSlotValueElicitationPrompt;

  // A description of the bot. Must be less than or equal to 200 characters in length.
  description?: string;

  // The name of the intent slot that you want to create. The name is case sensitive. Must be less than or equal to 100 characters in length.
  name?: string;
}

export function lex_IntentSlot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Directs Lex the order in which to elicit this slot value from the user.\nFor example, if the intent has two slots with priorities 1 and 2, AWS Lex first elicits a value for\nthe slot with priority 1. If multiple slots share the same priority, the order in which Lex elicits\nvalues is arbitrary. Must be between 1 and 100.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sampleUtterances",
      "If you know a specific pattern with which users might respond to\nan Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This\nis optional. In most cases, Amazon Lex is capable of understanding user utterances. Must have between 1 and 10 items in the list, and each item must be less than or equal to 200 characters in length.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A description of the bot. Must be less than or equal to 200 characters in length.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "slotTypeVersion",
      "The version of the slot type. Must be less than or equal to 64 characters in length.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "slotType",
      "The type of the slot, either a custom slot type that you defined or one of\nthe built-in slot types. Must be less than or equal to 100 characters in length.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "responseCard",
      "The response card. Amazon Lex will substitute session attributes and\nslot values into the response card. For more information, see\n[Example: Using a Response Card](https://docs.aws.amazon.com/lex/latest/dg/ex-resp-card.html). Must be less than or equal to 50000 characters in length.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "slotConstraint",
      "Specifies whether the slot is required or optional.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "valueElicitationPrompt",
      "The prompt that Amazon Lex uses to elicit the slot value\nfrom the user. Attributes are documented under prompt.",
      () => lex_IntentSlotValueElicitationPrompt_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the intent slot that you want to create. The name is case sensitive. Must be less than or equal to 100 characters in length.",
      () => [],
      true,
      false,
    ),
  ];
}
