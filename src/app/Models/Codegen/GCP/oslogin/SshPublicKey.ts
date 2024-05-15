import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SshPublicKeyArgs {
  // An expiration time in microseconds since epoch.
  ExpirationTimeUsec?: string;

  // Public key text in SSH format, defined by RFC4253 section 6.6.
  Key?: string;

  // The project ID of the Google Cloud Platform project.
  Project?: string;

  /*
The user email.


- - -
*/
  User?: string;
}
export class SshPublicKey extends Resource {
  // An expiration time in microseconds since epoch.
  public ExpirationTimeUsec?: string;

  // The SHA-256 fingerprint of the SSH public key.
  public Fingerprint?: string;

  // Public key text in SSH format, defined by RFC4253 section 6.6.
  public Key?: string;

  // The project ID of the Google Cloud Platform project.
  public Project?: string;

  /*
The user email.


- - -
*/
  public User?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ExpirationTimeUsec",
        "An expiration time in microseconds since epoch.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Key",
        "Public key text in SSH format, defined by RFC4253 section 6.6.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project ID of the Google Cloud Platform project.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "User",
        "The user email.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
