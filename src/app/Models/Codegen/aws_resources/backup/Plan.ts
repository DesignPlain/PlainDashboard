import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  backup_PlanAdvancedBackupSetting,
  backup_PlanAdvancedBackupSetting_GetTypes,
} from "../types/backup_PlanAdvancedBackupSetting";
import {
  backup_PlanRule,
  backup_PlanRule_GetTypes,
} from "../types/backup_PlanRule";

export interface PlanArgs {
  // Metadata that you can assign to help organize the plans you create. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // An object that specifies backup options for each resource type.
  advancedBackupSettings?: Array<backup_PlanAdvancedBackupSetting>;

  // The display name of a backup plan.
  name?: string;

  // A rule object that specifies a scheduled task that is used to back up a selection of resources.
  rules?: Array<backup_PlanRule>;
}
export class Plan extends Resource {
  // The display name of a backup plan.
  public name?: string;

  // A rule object that specifies a scheduled task that is used to back up a selection of resources.
  public rules?: Array<backup_PlanRule>;

  // Metadata that you can assign to help organize the plans you create. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Unique, randomly generated, Unicode, UTF-8 encoded string that serves as the version ID of the backup plan.
  public version?: string;

  // An object that specifies backup options for each resource type.
  public advancedBackupSettings?: Array<backup_PlanAdvancedBackupSetting>;

  // The ARN of the backup plan.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Metadata that you can assign to help organize the plans you create. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "advancedBackupSettings",
        "An object that specifies backup options for each resource type.",
        backup_PlanAdvancedBackupSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The display name of a backup plan.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "A rule object that specifies a scheduled task that is used to back up a selection of resources.",
        backup_PlanRule_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
