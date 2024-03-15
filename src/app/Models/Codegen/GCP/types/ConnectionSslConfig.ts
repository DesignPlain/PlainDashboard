import { ConnectionSslConfigClientPrivateKeyPass } from "./ConnectionSslConfigClientPrivateKeyPass";
import { ConnectionSslConfigClientPrivateKey } from "./ConnectionSslConfigClientPrivateKey";
import { ConnectionSslConfigAdditionalVariable } from "./ConnectionSslConfigAdditionalVariable";
import { ConnectionSslConfigClientCertificate } from "./ConnectionSslConfigClientCertificate";
import { ConnectionSslConfigPrivateServerCertificate } from "./ConnectionSslConfigPrivateServerCertificate";

export interface ConnectionSslConfig {
  /*
Private Server Certificate. Needs to be specified if trust model is PRIVATE.
Structure is documented below.
*/
  PrivateServerCertificate?: ConnectionSslConfigPrivateServerCertificate;

  /*
Enum for Trust Model
Possible values are: `PUBLIC`, `PRIVATE`, `INSECURE`.
*/
  TrustModel?: string;

  // Bool for enabling SSL
  UseSsl?: boolean;

  /*
Type of Client Cert (PEM/JKS/.. etc.)
Possible values are: `PEM`.
*/
  ClientCertType?: string;

  /*
Secret containing the passphrase protecting the Client Private Key
Structure is documented below.
*/
  ClientPrivateKeyPass?: ConnectionSslConfigClientPrivateKeyPass;

  /*
Client Private Key
Structure is documented below.
*/
  ClientPrivateKey?: ConnectionSslConfigClientPrivateKey;

  /*
Type of Server Cert (PEM/JKS/.. etc.)
Possible values are: `PEM`.
*/
  ServerCertType?: string;

  /*
Enum for controlling the SSL Type (TLS/MTLS)
Possible values are: `TLS`, `MTLS`.
*/
  Type?: string;

  /*
Additional SSL related field values.
Structure is documented below.
*/
  AdditionalVariables?: Array<ConnectionSslConfigAdditionalVariable>;

  /*
Client Certificate
Structure is documented below.
*/
  ClientCertificate?: ConnectionSslConfigClientCertificate;
}
