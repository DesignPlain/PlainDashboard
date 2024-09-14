import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appstream_StackStreamingExperienceSettings,
  appstream_StackStreamingExperienceSettings_GetTypes,
} from "../types/appstream_StackStreamingExperienceSettings";
import {
  appstream_StackApplicationSettings,
  appstream_StackApplicationSettings_GetTypes,
} from "../types/appstream_StackApplicationSettings";
import {
  appstream_StackUserSetting,
  appstream_StackUserSetting_GetTypes,
} from "../types/appstream_StackUserSetting";
import {
  appstream_StackAccessEndpoint,
  appstream_StackAccessEndpoint_GetTypes,
} from "../types/appstream_StackAccessEndpoint";
import {
  appstream_StackStorageConnector,
  appstream_StackStorageConnector_GetTypes,
} from "../types/appstream_StackStorageConnector";

export interface StackArgs {
  // URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed. .
  feedbackUrl?: string;

  /*
Set of configuration blocks defining the interface VPC endpoints. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.
See `access_endpoints` below.
*/
  accessEndpoints?: Array<appstream_StackAccessEndpoint>;

  // Stack name to display.
  displayName?: string;

  // Domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.
  embedHostDomains?: Array<string>;

  /*
Unique name for the AppStream stack.

The following arguments are optional:
*/
  name?: string;

  // URL that users are redirected to after their streaming session ends.
  redirectUrl?: string;

  /*
Configuration block for the storage connectors to enable.
See `storage_connectors` below.
*/
  storageConnectors?: Array<appstream_StackStorageConnector>;

  /*
The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
See `streaming_experience_settings` below.
*/
  streamingExperienceSettings?: appstream_StackStreamingExperienceSettings;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Settings for application settings persistence.
See `application_settings` below.
*/
  applicationSettings?: appstream_StackApplicationSettings;

  // Description for the AppStream stack.
  description?: string;

  /*
Configuration block for the actions that are enabled or disabled for users during their streaming sessions. If not provided, these settings are configured automatically by AWS. If provided, the configuration should include a block for each configurable action.
See `user_settings` below.
*/
  userSettings?: Array<appstream_StackUserSetting>;
}
export class Stack extends DS_Resource {
  /*
Configuration block for the actions that are enabled or disabled for users during their streaming sessions. If not provided, these settings are configured automatically by AWS. If provided, the configuration should include a block for each configurable action.
See `user_settings` below.
*/
  public userSettings?: Array<appstream_StackUserSetting>;

  // ARN of the appstream stack.
  public arn?: string;

  // Description for the AppStream stack.
  public description?: string;

  /*
Configuration block for the storage connectors to enable.
See `storage_connectors` below.
*/
  public storageConnectors?: Array<appstream_StackStorageConnector>;

  /*
The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
See `streaming_experience_settings` below.
*/
  public streamingExperienceSettings?: appstream_StackStreamingExperienceSettings;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  /*
Set of configuration blocks defining the interface VPC endpoints. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.
See `access_endpoints` below.
*/
  public accessEndpoints?: Array<appstream_StackAccessEndpoint>;

  /*
Settings for application settings persistence.
See `application_settings` below.
*/
  public applicationSettings?: appstream_StackApplicationSettings;

  /*
Unique name for the AppStream stack.

The following arguments are optional:
*/
  public name?: string;

  // URL that users are redirected to after their streaming session ends.
  public redirectUrl?: string;

  // Domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.
  public embedHostDomains?: Array<string>;

  // URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed. .
  public feedbackUrl?: string;

  // Date and time, in UTC and extended RFC 3339 format, when the stack was created.
  public createdTime?: string;

  // Stack name to display.
  public displayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "embedHostDomains",
        "Domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "redirectUrl",
        "URL that users are redirected to after their streaming session ends.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "streamingExperienceSettings",
        "The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.\nSee `streaming_experience_settings` below.",
        () => appstream_StackStreamingExperienceSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique name for the AppStream stack.\n\nThe following arguments are optional:",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "storageConnectors",
        "Configuration block for the storage connectors to enable.\nSee `storage_connectors` below.",
        () => appstream_StackStorageConnector_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "applicationSettings",
        "Settings for application settings persistence.\nSee `application_settings` below.",
        () => appstream_StackApplicationSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for the AppStream stack.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "userSettings",
        "Configuration block for the actions that are enabled or disabled for users during their streaming sessions. If not provided, these settings are configured automatically by AWS. If provided, the configuration should include a block for each configurable action.\nSee `user_settings` below.",
        () => appstream_StackUserSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "feedbackUrl",
        "URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed. .",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "accessEndpoints",
        "Set of configuration blocks defining the interface VPC endpoints. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.\nSee `access_endpoints` below.",
        () => appstream_StackAccessEndpoint_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Stack name to display.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
