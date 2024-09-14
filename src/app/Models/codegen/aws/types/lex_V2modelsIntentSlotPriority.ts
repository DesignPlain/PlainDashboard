import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lex_V2modelsIntentSlotPriority {
  // Unique identifier of the slot.
  slotId?: string;

  // Priority that Amazon Lex should apply to the slot.
  priority?: number;
}

export function lex_V2modelsIntentSlotPriority_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "slotId",
      "Unique identifier of the slot.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Priority that Amazon Lex should apply to the slot.",
      () => [],
      true,
      false,
    ),
  ];
}
