import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface identitystore_getGroupAlternateIdentifierUniqueAttribute {
  // Value for an attribute.
  attributeValue?: string;

  // Attribute path that is used to specify which attribute name to search. For example: `DisplayName`. Refer to the [Group data type](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html).
  attributePath?: string;
}

export function identitystore_getGroupAlternateIdentifierUniqueAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'attributeValue',
      'Value for an attribute.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'attributePath',
      'Attribute path that is used to specify which attribute name to search. For example: `DisplayName`. Refer to the [Group data type](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html).',
      () => [],
      true,
      false,
    ),
  ];
}
