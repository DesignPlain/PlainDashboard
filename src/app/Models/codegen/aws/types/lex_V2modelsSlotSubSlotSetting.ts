import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsSlotSubSlotSettingSlotSpecification,
  lex_V2modelsSlotSubSlotSettingSlotSpecification_GetTypes,
} from "./lex_V2modelsSlotSubSlotSettingSlotSpecification";

export interface lex_V2modelsSlotSubSlotSetting {
  //
  expression?: string;

  //
  slotSpecifications?: Array<lex_V2modelsSlotSubSlotSettingSlotSpecification>;
}

export function lex_V2modelsSlotSubSlotSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "slotSpecifications",
      "",
      () => lex_V2modelsSlotSubSlotSettingSlotSpecification_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expression",
      "",
      () => [],
      false,
      false,
    ),
  ];
}