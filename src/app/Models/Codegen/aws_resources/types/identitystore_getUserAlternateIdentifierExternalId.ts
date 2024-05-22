import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface identitystore_getUserAlternateIdentifierExternalId {
  // The identifier issued to this resource by an external identity provider.
  id?: string;

  // The issuer for an external identifier.
  issuer?: string;
}

export function identitystore_getUserAlternateIdentifierExternalId_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The identifier issued to this resource by an external identity provider.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "issuer",
      "The issuer for an external identifier.",
      [],
      true,
      false,
    ),
  ];
}
