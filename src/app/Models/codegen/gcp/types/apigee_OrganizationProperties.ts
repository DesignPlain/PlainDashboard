import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  apigee_OrganizationPropertiesProperty,
  apigee_OrganizationPropertiesProperty_GetTypes,
} from "./apigee_OrganizationPropertiesProperty";

export interface apigee_OrganizationProperties {
  /*
List of all properties in the object.
Structure is documented below.
*/
  properties?: Array<apigee_OrganizationPropertiesProperty>;
}

export function apigee_OrganizationProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "properties",
      "List of all properties in the object.\nStructure is documented below.",
      () => apigee_OrganizationPropertiesProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
