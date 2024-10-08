import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  integrationconnectors_ConnectionSslConfigAdditionalVariable,
  integrationconnectors_ConnectionSslConfigAdditionalVariable_GetTypes,
} from './integrationconnectors_ConnectionSslConfigAdditionalVariable';
import {
  integrationconnectors_ConnectionSslConfigClientPrivateKey,
  integrationconnectors_ConnectionSslConfigClientPrivateKey_GetTypes,
} from './integrationconnectors_ConnectionSslConfigClientPrivateKey';
import {
  integrationconnectors_ConnectionSslConfigClientPrivateKeyPass,
  integrationconnectors_ConnectionSslConfigClientPrivateKeyPass_GetTypes,
} from './integrationconnectors_ConnectionSslConfigClientPrivateKeyPass';
import {
  integrationconnectors_ConnectionSslConfigClientCertificate,
  integrationconnectors_ConnectionSslConfigClientCertificate_GetTypes,
} from './integrationconnectors_ConnectionSslConfigClientCertificate';
import {
  integrationconnectors_ConnectionSslConfigPrivateServerCertificate,
  integrationconnectors_ConnectionSslConfigPrivateServerCertificate_GetTypes,
} from './integrationconnectors_ConnectionSslConfigPrivateServerCertificate';

export interface integrationconnectors_ConnectionSslConfig {
  /*
Private Server Certificate. Needs to be specified if trust model is PRIVATE.
Structure is documented below.
*/
  privateServerCertificate?: integrationconnectors_ConnectionSslConfigPrivateServerCertificate;

  /*
Enum for controlling the SSL Type (TLS/MTLS)
Possible values are: `TLS`, `MTLS`.
*/
  type?: string;

  /*
Additional SSL related field values.
Structure is documented below.
*/
  additionalVariables?: Array<integrationconnectors_ConnectionSslConfigAdditionalVariable>;

  /*
Client Private Key
Structure is documented below.
*/
  clientPrivateKey?: integrationconnectors_ConnectionSslConfigClientPrivateKey;

  /*
Secret containing the passphrase protecting the Client Private Key
Structure is documented below.
*/
  clientPrivateKeyPass?: integrationconnectors_ConnectionSslConfigClientPrivateKeyPass;

  /*
Enum for Trust Model
Possible values are: `PUBLIC`, `PRIVATE`, `INSECURE`.
*/
  trustModel?: string;

  // Bool for enabling SSL
  useSsl?: boolean;

  /*
Type of Client Cert (PEM/JKS/.. etc.)
Possible values are: `PEM`.
*/
  clientCertType?: string;

  /*
Client Certificate
Structure is documented below.
*/
  clientCertificate?: integrationconnectors_ConnectionSslConfigClientCertificate;

  /*
Type of Server Cert (PEM/JKS/.. etc.)
Possible values are: `PEM`.
*/
  serverCertType?: string;
}

export function integrationconnectors_ConnectionSslConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'useSsl',
      'Bool for enabling SSL',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clientCertType',
      'Type of Client Cert (PEM/JKS/.. etc.)\nPossible values are: `PEM`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'clientCertificate',
      'Client Certificate\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionSslConfigClientCertificate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'additionalVariables',
      'Additional SSL related field values.\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionSslConfigAdditionalVariable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'trustModel',
      'Enum for Trust Model\nPossible values are: `PUBLIC`, `PRIVATE`, `INSECURE`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'clientPrivateKey',
      'Client Private Key\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionSslConfigClientPrivateKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'clientPrivateKeyPass',
      'Secret containing the passphrase protecting the Client Private Key\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionSslConfigClientPrivateKeyPass_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serverCertType',
      'Type of Server Cert (PEM/JKS/.. etc.)\nPossible values are: `PEM`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'privateServerCertificate',
      'Private Server Certificate. Needs to be specified if trust model is PRIVATE.\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionSslConfigPrivateServerCertificate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Enum for controlling the SSL Type (TLS/MTLS)\nPossible values are: `TLS`, `MTLS`.',
      () => [],
      true,
      false,
    ),
  ];
}
