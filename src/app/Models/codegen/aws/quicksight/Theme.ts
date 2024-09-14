import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_ThemePermission,
  quicksight_ThemePermission_GetTypes,
} from "../types/quicksight_ThemePermission";
import {
  quicksight_ThemeConfiguration,
  quicksight_ThemeConfiguration_GetTypes,
} from "../types/quicksight_ThemeConfiguration";

export interface ThemeArgs {
  // Identifier of the theme.
  themeId?: string;

  // A description of the current theme version being created/updated.
  versionDescription?: string;

  // AWS account ID.
  awsAccountId?: string;

  // The ID of the theme that a custom theme will inherit from. All themes inherit from one of the starting themes defined by Amazon QuickSight. For a list of the starting themes, use ListThemes or choose Themes from within an analysis.
  baseThemeId?: string;

  /*
The theme configuration, which contains the theme display properties. See configuration.

The following arguments are optional:
*/
  configuration?: quicksight_ThemeConfiguration;

  // Display name of the theme.
  name?: string;

  // A set of resource permissions on the theme. Maximum of 64 items. See permissions.
  permissions?: Array<quicksight_ThemePermission>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Theme extends DS_Resource {
  // AWS account ID.
  public awsAccountId?: string;

  // The time that the theme was created.
  public createdTime?: string;

  // The time that the theme was last updated.
  public lastUpdatedTime?: string;

  // Display name of the theme.
  public name?: string;

  // A description of the current theme version being created/updated.
  public versionDescription?: string;

  // ARN of the theme.
  public arn?: string;

  /*
The theme configuration, which contains the theme display properties. See configuration.

The following arguments are optional:
*/
  public configuration?: quicksight_ThemeConfiguration;

  // The theme creation status.
  public status?: string;

  // Identifier of the theme.
  public themeId?: string;

  // The version number of the theme version.
  public versionNumber?: number;

  // The ID of the theme that a custom theme will inherit from. All themes inherit from one of the starting themes defined by Amazon QuickSight. For a list of the starting themes, use ListThemes or choose Themes from within an analysis.
  public baseThemeId?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A set of resource permissions on the theme. Maximum of 64 items. See permissions.
  public permissions?: Array<quicksight_ThemePermission>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "themeId",
        "Identifier of the theme.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "versionDescription",
        "A description of the current theme version being created/updated.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "baseThemeId",
        "The ID of the theme that a custom theme will inherit from. All themes inherit from one of the starting themes defined by Amazon QuickSight. For a list of the starting themes, use ListThemes or choose Themes from within an analysis.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "configuration",
        "The theme configuration, which contains the theme display properties. See configuration.\n\nThe following arguments are optional:",
        () => quicksight_ThemeConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Display name of the theme.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "permissions",
        "A set of resource permissions on the theme. Maximum of 64 items. See permissions.",
        () => quicksight_ThemePermission_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
