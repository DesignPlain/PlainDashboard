import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_getAuthorityConfigX509ConfigAdditionalExtensionObjectId,
  certificateauthority_getAuthorityConfigX509ConfigAdditionalExtensionObjectId_GetTypes,
} from "./certificateauthority_getAuthorityConfigX509ConfigAdditionalExtensionObjectId";

export interface certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension {
  /*
Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
*/
  critical?: boolean;

  // Describes values that are relevant in a CA certificate.
  objectIds?: Array<certificateauthority_getAuthorityConfigX509ConfigAdditionalExtensionObjectId>;

  // The value of this X.509 extension. A base64-encoded string.
  value?: string;
}

export function certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "critical",
      "Indicates whether or not this extension is critical (i.e., if the client does not know how to\nhandle this extension, the client should consider this to be an error).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "objectIds",
      "Describes values that are relevant in a CA certificate.",
      certificateauthority_getAuthorityConfigX509ConfigAdditionalExtensionObjectId_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of this X.509 extension. A base64-encoded string.",
      [],
      true,
      false,
    ),
  ];
}
