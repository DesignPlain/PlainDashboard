import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_V2modelsSlotTypeSlotTypeValuesSynonym {
  // Value that can be used for a slot type.
  value?: string;
}

export function lex_V2modelsSlotTypeSlotTypeValuesSynonym_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value that can be used for a slot type.",
      [],
      true,
      false,
    ),
  ];
}
