import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface HmacKeyArgs {
  /*
The email address of the key's associated service account.


- - -
*/
  ServiceAccountEmail?: string;

  /*
The state of the key. Can be set to one of ACTIVE, INACTIVE.
Default value is `ACTIVE`.
Possible values are: `ACTIVE`, `INACTIVE`.
*/
  State?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class HmacKey extends Resource {
  // 'The creation time of the HMAC key in RFC 3339 format. '
  public TimeCreated?: string;

  // 'The last modification time of the HMAC key metadata in RFC 3339 format.'
  public Updated?: string;

  // The access ID of the HMAC Key.
  public AccessId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
HMAC secret key material.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public Secret?: string;

  /*
The email address of the key's associated service account.


- - -
*/
  public ServiceAccountEmail?: string;

  /*
The state of the key. Can be set to one of ACTIVE, INACTIVE.
Default value is `ACTIVE`.
Possible values are: `ACTIVE`, `INACTIVE`.
*/
  public State?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "State",
        "The state of the key. Can be set to one of ACTIVE, INACTIVE.\nDefault value is `ACTIVE`.\nPossible values are: `ACTIVE`, `INACTIVE`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccountEmail",
        "The email address of the key's associated service account.\n\n\n- - -",
      ),
    ];
  }
}
