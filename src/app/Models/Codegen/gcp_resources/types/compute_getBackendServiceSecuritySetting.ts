import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_getBackendServiceSecuritySetting {
  /*
ClientTlsPolicy is a resource that specifies how a client should authenticate
connections to backends of a service. This resource itself does not affect
configuration unless it is attached to a backend service resource.
*/
  clientTlsPolicy?: string;

  /*
A list of alternate names to verify the subject identity in the certificate.
If specified, the client will verify that the server certificate's subject
alt name matches one of the specified values.
*/
  subjectAltNames?: Array<string>;
}

export function compute_getBackendServiceSecuritySetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clientTlsPolicy",
      "ClientTlsPolicy is a resource that specifies how a client should authenticate\nconnections to backends of a service. This resource itself does not affect\nconfiguration unless it is attached to a backend service resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subjectAltNames",
      "A list of alternate names to verify the subject identity in the certificate.\nIf specified, the client will verify that the server certificate's subject\nalt name matches one of the specified values.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}