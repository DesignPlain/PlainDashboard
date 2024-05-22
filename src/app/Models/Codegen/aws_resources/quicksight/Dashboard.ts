import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_DashboardSourceEntity,
  quicksight_DashboardSourceEntity_GetTypes,
} from "../types/quicksight_DashboardSourceEntity";
import {
  quicksight_DashboardDashboardPublishOptions,
  quicksight_DashboardDashboardPublishOptions_GetTypes,
} from "../types/quicksight_DashboardDashboardPublishOptions";
import {
  quicksight_DashboardParameters,
  quicksight_DashboardParameters_GetTypes,
} from "../types/quicksight_DashboardParameters";
import {
  quicksight_DashboardPermission,
  quicksight_DashboardPermission_GetTypes,
} from "../types/quicksight_DashboardPermission";

export interface DashboardArgs {
  // Display name for the dashboard.
  name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. The theme ARN must exist in the same AWS account where you create the dashboard.
  themeArn?: string;

  // The entity that you are using as a source when you create the dashboard (template). Only one of `definition` or `source_entity` should be configured. See source_entity.
  sourceEntity?: quicksight_DashboardSourceEntity;

  /*
A description of the current dashboard version being created/updated.

The following arguments are optional:
*/
  versionDescription?: string;

  // AWS account ID.
  awsAccountId?: string;

  // Identifier for the dashboard.
  dashboardId?: string;

  // Options for publishing the dashboard. See dashboard_publish_options.
  dashboardPublishOptions?: quicksight_DashboardDashboardPublishOptions;

  // The parameters for the creation of the dashboard, which you want to use to override the default settings. A dashboard can have any type of parameters, and some parameters might accept multiple values. See parameters.
  parameters?: quicksight_DashboardParameters;

  // A set of resource permissions on the dashboard. Maximum of 64 items. See permissions.
  permissions?: Array<quicksight_DashboardPermission>;
}
export class Dashboard extends Resource {
  // Identifier for the dashboard.
  public dashboardId?: string;

  //
  public lastPublishedTime?: string;

  // The entity that you are using as a source when you create the dashboard (template). Only one of `definition` or `source_entity` should be configured. See source_entity.
  public sourceEntity?: quicksight_DashboardSourceEntity;

  // The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. The theme ARN must exist in the same AWS account where you create the dashboard.
  public themeArn?: string;

  // The time that the dashboard was last updated.
  public lastUpdatedTime?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The version number of the dashboard version.
  public versionNumber?: number;

  // The parameters for the creation of the dashboard, which you want to use to override the default settings. A dashboard can have any type of parameters, and some parameters might accept multiple values. See parameters.
  public parameters?: quicksight_DashboardParameters;

  // A set of resource permissions on the dashboard. Maximum of 64 items. See permissions.
  public permissions?: Array<quicksight_DashboardPermission>;

  // Amazon Resource Name (ARN) of a template that was used to create this dashboard.
  public sourceEntityArn?: string;

  // The Amazon Resource Name (ARN) of the resource.
  public arn?: string;

  // AWS account ID.
  public awsAccountId?: string;

  // The time that the dashboard was created.
  public createdTime?: string;

  // Options for publishing the dashboard. See dashboard_publish_options.
  public dashboardPublishOptions?: quicksight_DashboardDashboardPublishOptions;

  // Display name for the dashboard.
  public name?: string;

  // The dashboard creation status.
  public status?: string;

  /*
A description of the current dashboard version being created/updated.

The following arguments are optional:
*/
  public versionDescription?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Display name for the dashboard.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "themeArn",
        "The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. The theme ARN must exist in the same AWS account where you create the dashboard.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sourceEntity",
        "The entity that you are using as a source when you create the dashboard (template). Only one of `definition` or `source_entity` should be configured. See source_entity.",
        quicksight_DashboardSourceEntity_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "versionDescription",
        "A description of the current dashboard version being created/updated.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "parameters",
        "The parameters for the creation of the dashboard, which you want to use to override the default settings. A dashboard can have any type of parameters, and some parameters might accept multiple values. See parameters.",
        quicksight_DashboardParameters_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dashboardId",
        "Identifier for the dashboard.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dashboardPublishOptions",
        "Options for publishing the dashboard. See dashboard_publish_options.",
        quicksight_DashboardDashboardPublishOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "permissions",
        "A set of resource permissions on the dashboard. Maximum of 64 items. See permissions.",
        quicksight_DashboardPermission_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
