import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCertPass,
  integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCertPass_GetTypes,
} from "./integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCertPass";
import {
  integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCert,
  integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCert_GetTypes,
} from "./integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCert";

export interface integrationconnectors_ConnectionAuthConfigSshPublicKey {
  // Format of SSH Client cert.
  certType?: string;

  /*
SSH Client Cert. It should contain both public and private key.
Structure is documented below.
*/
  sshClientCert?: integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCert;

  /*
Password (passphrase) for ssh client certificate if it has one.
Structure is documented below.
*/
  sshClientCertPass?: integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCertPass;

  // The user account used to authenticate.
  username?: string;
}

export function integrationconnectors_ConnectionAuthConfigSshPublicKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "username",
      "The user account used to authenticate.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "certType",
      "Format of SSH Client cert.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sshClientCert",
      "SSH Client Cert. It should contain both public and private key.\nStructure is documented below.",
      () =>
        integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCert_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sshClientCertPass",
      "Password (passphrase) for ssh client certificate if it has one.\nStructure is documented below.",
      () =>
        integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCertPass_GetTypes(),
      false,
      false,
    ),
  ];
}
