import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SshPublicKeyArgs {
  // An expiration time in microseconds since epoch.
  expirationTimeUsec?: string;

  // Public key text in SSH format, defined by RFC4253 section 6.6.
  key?: string;

  // The project ID of the Google Cloud Platform project.
  project?: string;

  /*
The user email.


- - -
*/
  user?: string;
}
export class SshPublicKey extends DS_Resource {
  // An expiration time in microseconds since epoch.
  public expirationTimeUsec?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "expirationTimeUsec",
        "An expiration time in microseconds since epoch.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "key",
        "Public key text in SSH format, defined by RFC4253 section 6.6.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project ID of the Google Cloud Platform project.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "user",
        "The user email.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
