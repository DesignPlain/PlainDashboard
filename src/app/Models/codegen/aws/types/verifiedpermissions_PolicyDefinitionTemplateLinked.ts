import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  verifiedpermissions_PolicyDefinitionTemplateLinkedPrincipal,
  verifiedpermissions_PolicyDefinitionTemplateLinkedPrincipal_GetTypes,
} from "./verifiedpermissions_PolicyDefinitionTemplateLinkedPrincipal";
import {
  verifiedpermissions_PolicyDefinitionTemplateLinkedResource,
  verifiedpermissions_PolicyDefinitionTemplateLinkedResource_GetTypes,
} from "./verifiedpermissions_PolicyDefinitionTemplateLinkedResource";

export interface verifiedpermissions_PolicyDefinitionTemplateLinked {
  // The ID of the template.
  policyTemplateId?: string;

  // The principal of the template linked policy.
  principal?: verifiedpermissions_PolicyDefinitionTemplateLinkedPrincipal;

  // The resource of the template linked policy.
  resource?: verifiedpermissions_PolicyDefinitionTemplateLinkedResource;
}

export function verifiedpermissions_PolicyDefinitionTemplateLinked_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "policyTemplateId",
      "The ID of the template.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "principal",
      "The principal of the template linked policy.",
      () =>
        verifiedpermissions_PolicyDefinitionTemplateLinkedPrincipal_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "resource",
      "The resource of the template linked policy.",
      () =>
        verifiedpermissions_PolicyDefinitionTemplateLinkedResource_GetTypes(),
      false,
      false,
    ),
  ];
}
