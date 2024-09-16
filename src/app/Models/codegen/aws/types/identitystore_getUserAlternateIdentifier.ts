import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  identitystore_getUserAlternateIdentifierExternalId,
  identitystore_getUserAlternateIdentifierExternalId_GetTypes,
} from './identitystore_getUserAlternateIdentifierExternalId';
import {
  identitystore_getUserAlternateIdentifierUniqueAttribute,
  identitystore_getUserAlternateIdentifierUniqueAttribute_GetTypes,
} from './identitystore_getUserAlternateIdentifierUniqueAttribute';

export interface identitystore_getUserAlternateIdentifier {
  // Configuration block for filtering by the identifier issued by an external identity provider. Detailed below.
  externalId?: identitystore_getUserAlternateIdentifierExternalId;

  /*
An entity attribute that's unique to a specific entity. Detailed below.

> Exactly one of the above arguments must be provided.
*/
  uniqueAttribute?: identitystore_getUserAlternateIdentifierUniqueAttribute;
}

export function identitystore_getUserAlternateIdentifier_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'externalId',
      'Configuration block for filtering by the identifier issued by an external identity provider. Detailed below.',
      () => identitystore_getUserAlternateIdentifierExternalId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'uniqueAttribute',
      "An entity attribute that's unique to a specific entity. Detailed below.\n\n> Exactly one of the above arguments must be provided.",
      () => identitystore_getUserAlternateIdentifierUniqueAttribute_GetTypes(),
      false,
      false,
    ),
  ];
}
