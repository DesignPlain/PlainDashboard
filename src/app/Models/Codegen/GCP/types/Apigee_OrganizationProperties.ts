import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_OrganizationPropertiesProperty,
  Apigee_OrganizationPropertiesProperty_GetTypes,
} from "./Apigee_OrganizationPropertiesProperty";

export interface Apigee_OrganizationProperties {
  /*
List of all properties in the object.
Structure is documented below.
*/
  Properties?: Array<Apigee_OrganizationPropertiesProperty>;
}

export function Apigee_OrganizationProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Properties",
      "List of all properties in the object.\nStructure is documented below.",
      Apigee_OrganizationPropertiesProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
