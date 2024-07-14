import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsSlotTypeSlotTypeValuesSynonym,
  lex_V2modelsSlotTypeSlotTypeValuesSynonym_GetTypes,
} from "./lex_V2modelsSlotTypeSlotTypeValuesSynonym";

export interface lex_V2modelsSlotTypeSlotTypeValues {
  // Additional values related to the slot type entry. See `sample_value` argument reference below.
  synonyms?: Array<lex_V2modelsSlotTypeSlotTypeValuesSynonym>;

  // List of SlotTypeValue objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot. See `slot_type_values` argument reference below.
  slotTypeValues?: Array<string>;
}

export function lex_V2modelsSlotTypeSlotTypeValues_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "synonyms",
      "Additional values related to the slot type entry. See `sample_value` argument reference below.",
      lex_V2modelsSlotTypeSlotTypeValuesSynonym_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "slotTypeValues",
      "List of SlotTypeValue objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot. See `slot_type_values` argument reference below.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
