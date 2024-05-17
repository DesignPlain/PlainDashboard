import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCert,
  Integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCert_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCert";
import {
  Integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCertPass,
  Integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCertPass_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCertPass";

export interface Integrationconnectors_ConnectionAuthConfigSshPublicKey {
  // Format of SSH Client cert.
  CertType?: string;

  /*
SSH Client Cert. It should contain both public and private key.
Structure is documented below.
*/
  SshClientCert?: Integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCert;

  /*
Password (passphrase) for ssh client certificate if it has one.
Structure is documented below.
*/
  SshClientCertPass?: Integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCertPass;

  // The user account used to authenticate.
  Username?: string;
}

export function Integrationconnectors_ConnectionAuthConfigSshPublicKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CertType",
      "Format of SSH Client cert.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SshClientCert",
      "SSH Client Cert. It should contain both public and private key.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCert_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SshClientCertPass",
      "Password (passphrase) for ssh client certificate if it has one.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCertPass_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Username",
      "The user account used to authenticate.",
      [],
      true,
      false,
    ),
  ];
}
