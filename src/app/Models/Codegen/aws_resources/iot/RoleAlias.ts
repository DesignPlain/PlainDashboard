import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface RoleAliasArgs {
  // The duration of the credential, in seconds. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 900 seconds (15 minutes) to 43200 seconds (12 hours).
  credentialDuration?: number;

  // The identity of the role to which the alias refers.
  roleArn?: string;

  // The name of the role alias.
  alias?: string;
}
export class RoleAlias extends Resource {
  // The ARN assigned by AWS to this role alias.
  public arn?: string;

  // The duration of the credential, in seconds. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 900 seconds (15 minutes) to 43200 seconds (12 hours).
  public credentialDuration?: number;

  // The identity of the role to which the alias refers.
  public roleArn?: string;

  // The name of the role alias.
  public alias?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "credentialDuration",
        "The duration of the credential, in seconds. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 900 seconds (15 minutes) to 43200 seconds (12 hours).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The identity of the role to which the alias refers.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "alias",
        "The name of the role alias.",
        [],
        true,
        true,
      ),
    ];
  }
}
