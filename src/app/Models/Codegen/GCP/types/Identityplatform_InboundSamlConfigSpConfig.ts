import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_InboundSamlConfigSpConfigSpCertificate,
  Identityplatform_InboundSamlConfigSpConfigSpCertificate_GetTypes,
} from "./Identityplatform_InboundSamlConfigSpConfigSpCertificate";

export interface Identityplatform_InboundSamlConfigSpConfig {
  // Callback URI where responses from IDP are handled. Must start with `https://`.
  CallbackUri?: string;

  /*
(Output)
The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
Structure is documented below.


<a name="nested_sp_certificates"></a>The `sp_certificates` block contains:
*/
  SpCertificates?: Array<Identityplatform_InboundSamlConfigSpConfigSpCertificate>;

  // Unique identifier for all SAML entities.
  SpEntityId?: string;
}

export function Identityplatform_InboundSamlConfigSpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CallbackUri",
      "Callback URI where responses from IDP are handled. Must start with `https://`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SpCertificates",
      '(Output)\nThe IDP\'s certificate data to verify the signature in the SAMLResponse issued by the IDP.\nStructure is documented below.\n\n\n<a name="nested_sp_certificates"></a>The `sp_certificates` block contains:',
      Identityplatform_InboundSamlConfigSpConfigSpCertificate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SpEntityId",
      "Unique identifier for all SAML entities.",
      [],
      false,
      false,
    ),
  ];
}
