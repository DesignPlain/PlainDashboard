import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ssoadmin_InstanceAccessControlAttributesAttributeValue,
  ssoadmin_InstanceAccessControlAttributesAttributeValue_GetTypes,
} from "./ssoadmin_InstanceAccessControlAttributesAttributeValue";

export interface ssoadmin_InstanceAccessControlAttributesAttribute {
  // The name of the attribute associated with your identities in your identity source. This is used to map a specified attribute in your identity source with an attribute in AWS SSO.
  key?: string;

  // The value used for mapping a specified attribute to an identity source. See AccessControlAttributeValue
  values?: Array<ssoadmin_InstanceAccessControlAttributesAttributeValue>;
}

export function ssoadmin_InstanceAccessControlAttributesAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The name of the attribute associated with your identities in your identity source. This is used to map a specified attribute in your identity source with an attribute in AWS SSO.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "The value used for mapping a specified attribute to an identity source. See AccessControlAttributeValue",
      ssoadmin_InstanceAccessControlAttributesAttributeValue_GetTypes(),
      true,
      false,
    ),
  ];
}
