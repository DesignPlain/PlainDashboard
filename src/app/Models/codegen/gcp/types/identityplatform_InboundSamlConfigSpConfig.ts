import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  identityplatform_InboundSamlConfigSpConfigSpCertificate,
  identityplatform_InboundSamlConfigSpConfigSpCertificate_GetTypes,
} from './identityplatform_InboundSamlConfigSpConfigSpCertificate';

export interface identityplatform_InboundSamlConfigSpConfig {
  // Callback URI where responses from IDP are handled. Must start with `https://`.
  callbackUri?: string;

  /*
(Output)
The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
Structure is documented below.


<a name="nested_sp_certificates"></a>The `sp_certificates` block contains:
*/
  spCertificates?: Array<identityplatform_InboundSamlConfigSpConfigSpCertificate>;

  // Unique identifier for all SAML entities.
  spEntityId?: string;
}

export function identityplatform_InboundSamlConfigSpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'callbackUri',
      'Callback URI where responses from IDP are handled. Must start with `https://`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'spCertificates',
      '(Output)\nThe IDP\'s certificate data to verify the signature in the SAMLResponse issued by the IDP.\nStructure is documented below.\n\n\n<a name="nested_sp_certificates"></a>The `sp_certificates` block contains:',
      () => identityplatform_InboundSamlConfigSpConfigSpCertificate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'spEntityId',
      'Unique identifier for all SAML entities.',
      () => [],
      false,
      false,
    ),
  ];
}
