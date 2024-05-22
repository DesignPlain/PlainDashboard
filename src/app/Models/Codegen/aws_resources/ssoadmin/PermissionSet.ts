import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PermissionSetArgs {
  // The description of the Permission Set.
  description?: string;

  // The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.
  instanceArn?: string;

  // The name of the Permission Set.
  name?: string;

  // The relay state URL used to redirect users within the application during the federation authentication process.
  relayState?: string;

  // The length of time that the application user sessions are valid in the ISO-8601 standard. Default: `PT1H`.
  sessionDuration?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class PermissionSet extends Resource {
  // The description of the Permission Set.
  public description?: string;

  // The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.
  public instanceArn?: string;

  // The relay state URL used to redirect users within the application during the federation authentication process.
  public relayState?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the Permission Set.
  public arn?: string;

  // The date the Permission Set was created in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  public createdDate?: string;

  // The name of the Permission Set.
  public name?: string;

  // The length of time that the application user sessions are valid in the ISO-8601 standard. Default: `PT1H`.
  public sessionDuration?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the Permission Set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceArn",
        "The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Permission Set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "relayState",
        "The relay state URL used to redirect users within the application during the federation authentication process.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sessionDuration",
        "The length of time that the application user sessions are valid in the ISO-8601 standard. Default: `PT1H`.",
        [],
        false,
        false,
      ),
    ];
  }
}
