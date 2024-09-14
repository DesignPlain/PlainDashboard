import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ApplicationArgs {
  // SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem.
  opsItemSnsTopicArn?: string;

  /*
Name of the resource group.

The following arguments are optional:
*/
  resourceGroupName?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Indicates whether Application Insights automatically configures unmonitored resources in the resource group.
  autoConfigEnabled?: boolean;

  // Configures all of the resources in the resource group by applying the recommended configurations.
  autoCreate?: boolean;

  // Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as instance terminated, failed deployment, and others.
  cweMonitorEnabled?: boolean;

  // Application Insights can create applications based on a resource group or on an account. To create an account-based application using all of the resources in the account, set this parameter to `ACCOUNT_BASED`.
  groupingType?: string;

  // When set to `true`, creates opsItems for any problems detected on an application.
  opsCenterEnabled?: boolean;
}
export class Application extends DS_Resource {
  // ARN of the Application.
  public arn?: string;

  // Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as instance terminated, failed deployment, and others.
  public cweMonitorEnabled?: boolean;

  // SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem.
  public opsItemSnsTopicArn?: string;

  // When set to `true`, creates opsItems for any problems detected on an application.
  public opsCenterEnabled?: boolean;

  /*
Name of the resource group.

The following arguments are optional:
*/
  public resourceGroupName?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Indicates whether Application Insights automatically configures unmonitored resources in the resource group.
  public autoConfigEnabled?: boolean;

  // Configures all of the resources in the resource group by applying the recommended configurations.
  public autoCreate?: boolean;

  // Application Insights can create applications based on a resource group or on an account. To create an account-based application using all of the resources in the account, set this parameter to `ACCOUNT_BASED`.
  public groupingType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoConfigEnabled",
        "Indicates whether Application Insights automatically configures unmonitored resources in the resource group.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoCreate",
        "Configures all of the resources in the resource group by applying the recommended configurations.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "cweMonitorEnabled",
        "Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as instance terminated, failed deployment, and others.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "groupingType",
        "Application Insights can create applications based on a resource group or on an account. To create an account-based application using all of the resources in the account, set this parameter to `ACCOUNT_BASED`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "opsCenterEnabled",
        "When set to `true`, creates opsItems for any problems detected on an application.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "opsItemSnsTopicArn",
        "SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceGroupName",
        "Name of the resource group.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
    ];
  }
}
