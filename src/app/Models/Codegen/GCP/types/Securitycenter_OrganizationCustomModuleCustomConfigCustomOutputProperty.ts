import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securitycenter_OrganizationCustomModuleCustomConfigCustomOutputPropertyValueExpression,
  Securitycenter_OrganizationCustomModuleCustomConfigCustomOutputPropertyValueExpression_GetTypes,
} from "./Securitycenter_OrganizationCustomModuleCustomConfigCustomOutputPropertyValueExpression";

export interface Securitycenter_OrganizationCustomModuleCustomConfigCustomOutputProperty {
  // Name of the property for the custom output.
  Name?: string;

  /*
The CEL expression for the custom output. A resource property can be specified
to return the value of the property or a text string enclosed in quotation marks.
Structure is documented below.
*/
  ValueExpression?: Securitycenter_OrganizationCustomModuleCustomConfigCustomOutputPropertyValueExpression;
}

export function Securitycenter_OrganizationCustomModuleCustomConfigCustomOutputProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ValueExpression",
      "The CEL expression for the custom output. A resource property can be specified\nto return the value of the property or a text string enclosed in quotation marks.\nStructure is documented below.",
      Securitycenter_OrganizationCustomModuleCustomConfigCustomOutputPropertyValueExpression_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the property for the custom output.",
      [],
      false,
      false,
    ),
  ];
}
