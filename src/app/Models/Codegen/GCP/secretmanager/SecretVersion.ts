import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SecretVersionArgs {
  /*
The deletion policy for the secret version. Setting `ABANDON` allows the resource
to be abandoned rather than deleted. Setting `DISABLE` allows the resource to be
disabled rather than deleted. Default is `DELETE`. Possible values are:
- DELETE
- DISABLE
- ABANDON
*/
  DeletionPolicy?: string;

  // The current state of the SecretVersion.
  Enabled?: boolean;

  // If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is.
  IsSecretDataBase64?: boolean;

  /*
Secret Manager secret resource


- - -
*/
  Secret?: string;

  /*
The secret data. Must be no larger than 64KiB.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  SecretData?: string;
}
export class SecretVersion extends Resource {
  // The time at which the Secret was destroyed. Only present if state is DESTROYED.
  public DestroyTime?: string;

  /*
The resource name of the SecretVersion. Format:
`projects/{{project}}/secrets/{{secret_id}}/versions/{{version}}`
*/
  public Name?: string;

  /*
Secret Manager secret resource


- - -
*/
  public Secret?: string;

  // The version of the Secret.
  public Version?: string;

  /*
The deletion policy for the secret version. Setting `ABANDON` allows the resource
to be abandoned rather than deleted. Setting `DISABLE` allows the resource to be
disabled rather than deleted. Default is `DELETE`. Possible values are:
- DELETE
- DISABLE
- ABANDON
*/
  public DeletionPolicy?: string;

  // The current state of the SecretVersion.
  public Enabled?: boolean;

  // If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is.
  public IsSecretDataBase64?: boolean;

  /*
The secret data. Must be no larger than 64KiB.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public SecretData?: string;

  // The time at which the Secret was created.
  public CreateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        "The deletion policy for the secret version. Setting `ABANDON` allows the resource\nto be abandoned rather than deleted. Setting `DISABLE` allows the resource to be\ndisabled rather than deleted. Default is `DELETE`. Possible values are:\n* DELETE\n* DISABLE\n* ABANDON",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Enabled",
        "The current state of the SecretVersion.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "IsSecretDataBase64",
        "If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Secret",
        "Secret Manager secret resource\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "SecretData",
        "The secret data. Must be no larger than 64KiB.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      ),
    ];
  }
}
