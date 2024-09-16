import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SecretVersionArgs {
  /*
Secret Manager secret resource


- - -
*/
  secret?: string;

  /*
The secret data. Must be no larger than 64KiB.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  secretData?: string;

  /*
The deletion policy for the secret version. Setting `ABANDON` allows the resource
to be abandoned rather than deleted. Setting `DISABLE` allows the resource to be
disabled rather than deleted. Default is `DELETE`. Possible values are:
- DELETE
- DISABLE
- ABANDON
*/
  deletionPolicy?: string;

  // The current state of the SecretVersion.
  enabled?: boolean;

  // If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is.
  isSecretDataBase64?: boolean;
}
export class SecretVersion extends DS_Resource {
  // The time at which the Secret was destroyed. Only present if state is DESTROYED.
  public destroyTime?: string;

  // The current state of the SecretVersion.
  public enabled?: boolean;

  // The version of the Secret.
  public version?: string;

  // The time at which the Secret was created.
  public createTime?: string;

  /*
The deletion policy for the secret version. Setting `ABANDON` allows the resource
to be abandoned rather than deleted. Setting `DISABLE` allows the resource to be
disabled rather than deleted. Default is `DELETE`. Possible values are:
- DELETE
- DISABLE
- ABANDON
*/
  public deletionPolicy?: string;

  /*
Secret Manager secret resource


- - -
*/
  public secret?: string;

  /*
The secret data. Must be no larger than 64KiB.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public secretData?: string;

  // If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is.
  public isSecretDataBase64?: boolean;

  /*
The resource name of the SecretVersion. Format:
`projects/{{project}}/secrets/{{secret_id}}/versions/{{version}}`
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'deletionPolicy',
        'The deletion policy for the secret version. Setting `ABANDON` allows the resource\nto be abandoned rather than deleted. Setting `DISABLE` allows the resource to be\ndisabled rather than deleted. Default is `DELETE`. Possible values are:\n* DELETE\n* DISABLE\n* ABANDON',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enabled',
        'The current state of the SecretVersion.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'isSecretDataBase64',
        "If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'secret',
        'Secret Manager secret resource\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'secretData',
        'The secret data. Must be no larger than 64KiB.\n**Note**: This property is sensitive and will not be displayed in the plan.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
