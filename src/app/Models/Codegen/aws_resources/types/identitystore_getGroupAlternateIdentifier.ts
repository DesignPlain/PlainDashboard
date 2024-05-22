import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  identitystore_getGroupAlternateIdentifierExternalId,
  identitystore_getGroupAlternateIdentifierExternalId_GetTypes,
} from "./identitystore_getGroupAlternateIdentifierExternalId";
import {
  identitystore_getGroupAlternateIdentifierUniqueAttribute,
  identitystore_getGroupAlternateIdentifierUniqueAttribute_GetTypes,
} from "./identitystore_getGroupAlternateIdentifierUniqueAttribute";

export interface identitystore_getGroupAlternateIdentifier {
  // Configuration block for filtering by the identifier issued by an external identity provider. Detailed below.
  externalId?: identitystore_getGroupAlternateIdentifierExternalId;

  /*
An entity attribute that's unique to a specific entity. Detailed below.

> Exactly one of the above arguments must be provided.
*/
  uniqueAttribute?: identitystore_getGroupAlternateIdentifierUniqueAttribute;
}

export function identitystore_getGroupAlternateIdentifier_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "externalId",
      "Configuration block for filtering by the identifier issued by an external identity provider. Detailed below.",
      identitystore_getGroupAlternateIdentifierExternalId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uniqueAttribute",
      "An entity attribute that's unique to a specific entity. Detailed below.\n\n> Exactly one of the above arguments must be provided.",
      identitystore_getGroupAlternateIdentifierUniqueAttribute_GetTypes(),
      false,
      false,
    ),
  ];
}
