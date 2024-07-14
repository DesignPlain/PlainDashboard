import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  backup_FrameworkControl,
  backup_FrameworkControl_GetTypes,
} from "../types/backup_FrameworkControl";

export interface FrameworkArgs {
  // The description of the framework with a maximum of 1,024 characters
  description?: string;

  // The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters, numbers, and underscores.
  name?: string;

  // Metadata that you can assign to help organize the frameworks you create. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // One or more control blocks that make up the framework. Each control in the list has a name, input parameters, and scope. Detailed below.
  controls?: Array<backup_FrameworkControl>;
}
export class Framework extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // One or more control blocks that make up the framework. Each control in the list has a name, input parameters, and scope. Detailed below.
  public controls?: Array<backup_FrameworkControl>;

  // The date and time that a framework is created, in Unix format and Coordinated Universal Time (UTC).
  public creationTime?: string;

  // The deployment status of a framework. The statuses are: `CREATE_IN_PROGRESS` | `UPDATE_IN_PROGRESS` | `DELETE_IN_PROGRESS` | `COMPLETED` | `FAILED`.
  public deploymentStatus?: string;

  // The description of the framework with a maximum of 1,024 characters
  public description?: string;

  // The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters, numbers, and underscores.
  public name?: string;

  // Metadata that you can assign to help organize the frameworks you create. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN of the backup framework.
  public arn?: string;

  // A framework consists of one or more controls. Each control governs a resource, such as backup plans, backup selections, backup vaults, or recovery points. You can also turn AWS Config recording on or off for each resource. For more information refer to the [AWS documentation for Framework Status](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeFramework.html#Backup-DescribeFramework-response-FrameworkStatus)
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the framework with a maximum of 1,024 characters",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters, numbers, and underscores.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Metadata that you can assign to help organize the frameworks you create. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "controls",
        "One or more control blocks that make up the framework. Each control in the list has a name, input parameters, and scope. Detailed below.",
        backup_FrameworkControl_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
