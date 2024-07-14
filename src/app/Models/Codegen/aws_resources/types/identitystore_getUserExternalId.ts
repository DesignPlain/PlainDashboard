import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface identitystore_getUserExternalId {
  // The identifier issued to this resource by an external identity provider.
  id?: string;

  // The issuer for an external identifier.
  issuer?: string;
}

export function identitystore_getUserExternalId_GetTypes(): DynamicUIProps[] {
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
