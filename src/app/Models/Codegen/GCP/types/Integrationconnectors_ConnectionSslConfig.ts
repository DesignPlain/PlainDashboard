import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionSslConfigPrivateServerCertificate,
  Integrationconnectors_ConnectionSslConfigPrivateServerCertificate_GetTypes,
} from "./Integrationconnectors_ConnectionSslConfigPrivateServerCertificate";
import {
  Integrationconnectors_ConnectionSslConfigClientPrivateKey,
  Integrationconnectors_ConnectionSslConfigClientPrivateKey_GetTypes,
} from "./Integrationconnectors_ConnectionSslConfigClientPrivateKey";
import {
  Integrationconnectors_ConnectionSslConfigClientPrivateKeyPass,
  Integrationconnectors_ConnectionSslConfigClientPrivateKeyPass_GetTypes,
} from "./Integrationconnectors_ConnectionSslConfigClientPrivateKeyPass";
import {
  Integrationconnectors_ConnectionSslConfigAdditionalVariable,
  Integrationconnectors_ConnectionSslConfigAdditionalVariable_GetTypes,
} from "./Integrationconnectors_ConnectionSslConfigAdditionalVariable";
import {
  Integrationconnectors_ConnectionSslConfigClientCertificate,
  Integrationconnectors_ConnectionSslConfigClientCertificate_GetTypes,
} from "./Integrationconnectors_ConnectionSslConfigClientCertificate";

export interface Integrationconnectors_ConnectionSslConfig {
  /*
Client Private Key
Structure is documented below.
*/
  ClientPrivateKey?: Integrationconnectors_ConnectionSslConfigClientPrivateKey;

  /*
Secret containing the passphrase protecting the Client Private Key
Structure is documented below.
*/
  ClientPrivateKeyPass?: Integrationconnectors_ConnectionSslConfigClientPrivateKeyPass;

  /*
Enum for Trust Model
Possible values are: `PUBLIC`, `PRIVATE`, `INSECURE`.
*/
  TrustModel?: string;

  /*
Enum for controlling the SSL Type (TLS/MTLS)
Possible values are: `TLS`, `MTLS`.
*/
  Type?: string;

  // Bool for enabling SSL
  UseSsl?: boolean;

  /*
Additional SSL related field values.
Structure is documented below.
*/
  AdditionalVariables?: Array<Integrationconnectors_ConnectionSslConfigAdditionalVariable>;

  /*
Type of Client Cert (PEM/JKS/.. etc.)
Possible values are: `PEM`.
*/
  ClientCertType?: string;

  /*
Type of Server Cert (PEM/JKS/.. etc.)
Possible values are: `PEM`.
*/
  ServerCertType?: string;

  /*
Client Certificate
Structure is documented below.
*/
  ClientCertificate?: Integrationconnectors_ConnectionSslConfigClientCertificate;

  /*
Private Server Certificate. Needs to be specified if trust model is PRIVATE.
Structure is documented below.
*/
  PrivateServerCertificate?: Integrationconnectors_ConnectionSslConfigPrivateServerCertificate;
}

export function Integrationconnectors_ConnectionSslConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Enum for controlling the SSL Type (TLS/MTLS)\nPossible values are: `TLS`, `MTLS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "UseSsl",
      "Bool for enabling SSL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServerCertType",
      "Type of Server Cert (PEM/JKS/.. etc.)\nPossible values are: `PEM`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PrivateServerCertificate",
      "Private Server Certificate. Needs to be specified if trust model is PRIVATE.\nStructure is documented below.",
      Integrationconnectors_ConnectionSslConfigPrivateServerCertificate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ClientCertificate",
      "Client Certificate\nStructure is documented below.",
      Integrationconnectors_ConnectionSslConfigClientCertificate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ClientPrivateKey",
      "Client Private Key\nStructure is documented below.",
      Integrationconnectors_ConnectionSslConfigClientPrivateKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ClientPrivateKeyPass",
      "Secret containing the passphrase protecting the Client Private Key\nStructure is documented below.",
      Integrationconnectors_ConnectionSslConfigClientPrivateKeyPass_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TrustModel",
      "Enum for Trust Model\nPossible values are: `PUBLIC`, `PRIVATE`, `INSECURE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalVariables",
      "Additional SSL related field values.\nStructure is documented below.",
      Integrationconnectors_ConnectionSslConfigAdditionalVariable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientCertType",
      "Type of Client Cert (PEM/JKS/.. etc.)\nPossible values are: `PEM`.",
      [],
      false,
      false,
    ),
  ];
}
