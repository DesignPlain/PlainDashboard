import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  identityplatform_TenantInboundSamlConfigSpConfigSpCertificate,
  identityplatform_TenantInboundSamlConfigSpConfigSpCertificate_GetTypes,
} from "./identityplatform_TenantInboundSamlConfigSpConfigSpCertificate";

export interface identityplatform_TenantInboundSamlConfigSpConfig {
  // Callback URI where responses from IDP are handled. Must start with `https://`.
  callbackUri?: string;

  /*
(Output)
The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
Structure is documented below.


<a name="nested_sp_certificates"></a>The `sp_certificates` block contains:
*/
  spCertificates?: Array<identityplatform_TenantInboundSamlConfigSpConfigSpCertificate>;

  // Unique identifier for all SAML entities.
  spEntityId?: string;
}

export function identityplatform_TenantInboundSamlConfigSpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "spCertificates",
      '(Output)\nThe IDP\'s certificate data to verify the signature in the SAMLResponse issued by the IDP.\nStructure is documented below.\n\n\n<a name="nested_sp_certificates"></a>The `sp_certificates` block contains:',
      identityplatform_TenantInboundSamlConfigSpConfigSpCertificate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "spEntityId",
      "Unique identifier for all SAML entities.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "callbackUri",
      "Callback URI where responses from IDP are handled. Must start with `https://`.",
      [],
      true,
      false,
    ),
  ];
}
