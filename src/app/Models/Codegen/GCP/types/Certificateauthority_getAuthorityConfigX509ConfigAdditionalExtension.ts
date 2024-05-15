import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_getAuthorityConfigX509ConfigAdditionalExtensionObjectId,
  Certificateauthority_getAuthorityConfigX509ConfigAdditionalExtensionObjectId_GetTypes,
} from "./Certificateauthority_getAuthorityConfigX509ConfigAdditionalExtensionObjectId";

export interface Certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension {
  /*
Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
*/
  Critical?: boolean;

  // Describes values that are relevant in a CA certificate.
  ObjectIds?: Array<Certificateauthority_getAuthorityConfigX509ConfigAdditionalExtensionObjectId>;

  // The value of this X.509 extension. A base64-encoded string.
  Value?: string;
}

export function Certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Critical",
      "Indicates whether or not this extension is critical (i.e., if the client does not know how to\nhandle this extension, the client should consider this to be an error).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ObjectIds",
      "Describes values that are relevant in a CA certificate.",
      Certificateauthority_getAuthorityConfigX509ConfigAdditionalExtensionObjectId_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The value of this X.509 extension. A base64-encoded string.",
      [],
      true,
      false,
    ),
  ];
}
