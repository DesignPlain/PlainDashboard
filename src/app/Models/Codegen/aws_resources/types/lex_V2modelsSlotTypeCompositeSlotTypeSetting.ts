import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lex_V2modelsSlotTypeCompositeSlotTypeSetting {
  // Subslots in the composite slot. Contains filtered or unexported fields. See [`sub_slot_type_composition` argument reference] below.
  subSlots?: Array<string>;
}

export function lex_V2modelsSlotTypeCompositeSlotTypeSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subSlots",
      "Subslots in the composite slot. Contains filtered or unexported fields. See [`sub_slot_type_composition` argument reference] below.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
