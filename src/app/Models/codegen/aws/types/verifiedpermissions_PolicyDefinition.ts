import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  verifiedpermissions_PolicyDefinitionStatic,
  verifiedpermissions_PolicyDefinitionStatic_GetTypes,
} from "./verifiedpermissions_PolicyDefinitionStatic";
import {
  verifiedpermissions_PolicyDefinitionTemplateLinked,
  verifiedpermissions_PolicyDefinitionTemplateLinked_GetTypes,
} from "./verifiedpermissions_PolicyDefinitionTemplateLinked";

export interface verifiedpermissions_PolicyDefinition {
  // The static policy statement. See Static below.
  static?: verifiedpermissions_PolicyDefinitionStatic;

  // The template linked policy. See Template Linked below.
  templateLinked?: verifiedpermissions_PolicyDefinitionTemplateLinked;
}

export function verifiedpermissions_PolicyDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "static",
      "The static policy statement. See Static below.",
      () => verifiedpermissions_PolicyDefinitionStatic_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "templateLinked",
      "The template linked policy. See Template Linked below.",
      () => verifiedpermissions_PolicyDefinitionTemplateLinked_GetTypes(),
      false,
      false,
    ),
  ];
}
