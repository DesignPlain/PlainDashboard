import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_AuthorityConfigX509ConfigAdditionalExtensionObjectId,
  Certificateauthority_AuthorityConfigX509ConfigAdditionalExtensionObjectId_GetTypes,
} from "./Certificateauthority_AuthorityConfigX509ConfigAdditionalExtensionObjectId";

export interface Certificateauthority_AuthorityConfigX509ConfigAdditionalExtension {
  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  ObjectId?: Certificateauthority_AuthorityConfigX509ConfigAdditionalExtensionObjectId;

  // The value of this X.509 extension. A base64-encoded string.
  Value?: string;

  /*
Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
*/
  Critical?: boolean;
}

export function Certificateauthority_AuthorityConfigX509ConfigAdditionalExtension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The value of this X.509 extension. A base64-encoded string.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Critical",
      "Indicates whether or not this extension is critical (i.e., if the client does not know how to\nhandle this extension, the client should consider this to be an error).",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ObjectId",
      "Describes values that are relevant in a CA certificate.\nStructure is documented below.",
      Certificateauthority_AuthorityConfigX509ConfigAdditionalExtensionObjectId_GetTypes(),
      true,
      true,
    ),
  ];
}
