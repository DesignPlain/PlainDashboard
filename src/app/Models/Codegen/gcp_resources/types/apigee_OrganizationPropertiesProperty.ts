import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface apigee_OrganizationPropertiesProperty {
  // Name of the property.
  name?: string;

  // Value of the property.
  value?: string;
}

export function apigee_OrganizationPropertiesProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the property.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of the property.",
      [],
      false,
      false,
    ),
  ];
}
