import { ConnectionAuthConfigSshPublicKeySshClientCert } from "./ConnectionAuthConfigSshPublicKeySshClientCert";
import { ConnectionAuthConfigSshPublicKeySshClientCertPass } from "./ConnectionAuthConfigSshPublicKeySshClientCertPass";

export interface ConnectionAuthConfigSshPublicKey {
  /*
SSH Client Cert. It should contain both public and private key.
Structure is documented below.
*/
  SshClientCert?: ConnectionAuthConfigSshPublicKeySshClientCert;

  /*
Password (passphrase) for ssh client certificate if it has one.
Structure is documented below.
*/
  SshClientCertPass?: ConnectionAuthConfigSshPublicKeySshClientCertPass;

  // The user account used to authenticate.
  Username?: string;

  // Format of SSH Client cert.
  CertType?: string;
}
