import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SshPublicKeyArgs {
  /*
The user email.


- - -
*/
  user?: string;

  // An expiration time in microseconds since epoch.
  expirationTimeUsec?: string;

  // Public key text in SSH format, defined by RFC4253 section 6.6.
  key?: string;

  // The project ID of the Google Cloud Platform project.
  project?: string;
}
export class SshPublicKey extends Resource {
  // The SHA-256 fingerprint of the SSH public key.
  public fingerprint?: string;

  // Public key text in SSH format, defined by RFC4253 section 6.6.
  public key?: string;

  // The project ID of the Google Cloud Platform project.
  public project?: string;

  /*
The user email.


- - -
*/
  public user?: string;

  // An expiration time in microseconds since epoch.
  public expirationTimeUsec?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "key",
        "Public key text in SSH format, defined by RFC4253 section 6.6.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project ID of the Google Cloud Platform project.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "user",
        "The user email.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "expirationTimeUsec",
        "An expiration time in microseconds since epoch.",
        [],
        false,
        false,
      ),
    ];
  }
}
