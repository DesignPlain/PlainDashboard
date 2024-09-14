import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface identitystore_getGroupExternalId {
  // The identifier issued to this resource by an external identity provider.
  id?: string;

  // The issuer for an external identifier.
  issuer?: string;
}

export function identitystore_getGroupExternalId_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The identifier issued to this resource by an external identity provider.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "issuer",
      "The issuer for an external identifier.",
      () => [],
      true,
      false,
    ),
  ];
}
