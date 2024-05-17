import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Apigee_OrganizationPropertiesProperty {
  // Name of the property.
  Name?: string;

  // Value of the property.
  Value?: string;
}

export function Apigee_OrganizationPropertiesProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      "Value of the property.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the property.",
      [],
      false,
      false,
    ),
  ];
}
