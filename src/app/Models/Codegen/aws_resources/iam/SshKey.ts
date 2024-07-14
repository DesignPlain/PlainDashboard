import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SshKeyArgs {
  // Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use `SSH`. To retrieve the public key in PEM format, use `PEM`.
  encoding?: string;

  // The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.
  publicKey?: string;

  // The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used. Default is `active`.
  status?: string;

  // The name of the IAM user to associate the SSH public key with.
  username?: string;
}
export class SshKey extends Resource {
  // The name of the IAM user to associate the SSH public key with.
  public username?: string;

  // Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use `SSH`. To retrieve the public key in PEM format, use `PEM`.
  public encoding?: string;

  // The MD5 message digest of the SSH public key.
  public fingerprint?: string;

  // The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.
  public publicKey?: string;

  // The unique identifier for the SSH public key.
  public sshPublicKeyId?: string;

  // The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used. Default is `active`.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "encoding",
        "Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use `SSH`. To retrieve the public key in PEM format, use `PEM`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "publicKey",
        "The SSH public key. The public key must be encoded in ssh-rsa format or PEM format.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used. Default is `active`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "username",
        "The name of the IAM user to associate the SSH public key with.",
        [],
        true,
        true,
      ),
    ];
  }
}
