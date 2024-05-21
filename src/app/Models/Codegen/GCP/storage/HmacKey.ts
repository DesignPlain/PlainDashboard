import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface HmacKeyArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The email address of the key's associated service account.


- - -
*/
  serviceAccountEmail?: string;

  /*
The state of the key. Can be set to one of ACTIVE, INACTIVE.
Default value is `ACTIVE`.
Possible values are: `ACTIVE`, `INACTIVE`.
*/
  state?: string;
}
export class HmacKey extends Resource {
  // The access ID of the HMAC Key.
  public accessId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
HMAC secret key material.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public secret?: string;

  /*
The email address of the key's associated service account.


- - -
*/
  public serviceAccountEmail?: string;

  /*
The state of the key. Can be set to one of ACTIVE, INACTIVE.
Default value is `ACTIVE`.
Possible values are: `ACTIVE`, `INACTIVE`.
*/
  public state?: string;

  // 'The creation time of the HMAC key in RFC 3339 format. '
  public timeCreated?: string;

  // 'The last modification time of the HMAC key metadata in RFC 3339 format.'
  public updated?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccountEmail",
        "The email address of the key's associated service account.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "state",
        "The state of the key. Can be set to one of ACTIVE, INACTIVE.\nDefault value is `ACTIVE`.\nPossible values are: `ACTIVE`, `INACTIVE`.",
        [],
        false,
        false,
      ),
    ];
  }
}
