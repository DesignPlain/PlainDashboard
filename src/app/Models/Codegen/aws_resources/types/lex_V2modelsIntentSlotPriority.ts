import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_V2modelsIntentSlotPriority {
  // Priority that Amazon Lex should apply to the slot.
  priority?: number;

  // Unique identifier of the slot.
  slotId?: string;
}

export function lex_V2modelsIntentSlotPriority_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Priority that Amazon Lex should apply to the slot.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "slotId",
      "Unique identifier of the slot.",
      [],
      true,
      false,
    ),
  ];
}
