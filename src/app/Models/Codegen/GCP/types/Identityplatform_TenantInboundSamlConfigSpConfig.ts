import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_TenantInboundSamlConfigSpConfigSpCertificate,
  Identityplatform_TenantInboundSamlConfigSpConfigSpCertificate_GetTypes,
} from "./Identityplatform_TenantInboundSamlConfigSpConfigSpCertificate";

export interface Identityplatform_TenantInboundSamlConfigSpConfig {
  // Callback URI where responses from IDP are handled. Must start with `https://`.
  CallbackUri?: string;

  /*
(Output)
The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
Structure is documented below.


<a name="nested_sp_certificates"></a>The `sp_certificates` block contains:
*/
  SpCertificates?: Array<Identityplatform_TenantInboundSamlConfigSpConfigSpCertificate>;

  // Unique identifier for all SAML entities.
  SpEntityId?: string;
}

export function Identityplatform_TenantInboundSamlConfigSpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CallbackUri",
      "Callback URI where responses from IDP are handled. Must start with `https://`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SpCertificates",
      '(Output)\nThe IDP\'s certificate data to verify the signature in the SAMLResponse issued by the IDP.\nStructure is documented below.\n\n\n<a name="nested_sp_certificates"></a>The `sp_certificates` block contains:',
      Identityplatform_TenantInboundSamlConfigSpConfigSpCertificate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SpEntityId",
      "Unique identifier for all SAML entities.",
      [],
      true,
      false,
    ),
  ];
}
