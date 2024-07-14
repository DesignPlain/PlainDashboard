import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  evidently_LaunchScheduledSplitsConfig,
  evidently_LaunchScheduledSplitsConfig_GetTypes,
} from "../types/evidently_LaunchScheduledSplitsConfig";
import {
  evidently_LaunchGroup,
  evidently_LaunchGroup_GetTypes,
} from "../types/evidently_LaunchGroup";
import {
  evidently_LaunchMetricMonitor,
  evidently_LaunchMetricMonitor_GetTypes,
} from "../types/evidently_LaunchMetricMonitor";
import {
  evidently_LaunchExecution,
  evidently_LaunchExecution_GetTypes,
} from "../types/evidently_LaunchExecution";

export interface LaunchArgs {
  // A block that defines the traffic allocation percentages among the feature variations during each step of the launch. Detailed below.
  scheduledSplitsConfig?: evidently_LaunchScheduledSplitsConfig;

  // Tags to apply to the launch. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the description of the launch.
  description?: string;

  // One or up to five blocks that contain the feature and variations that are to be used for the launch. Detailed below.
  groups?: Array<evidently_LaunchGroup>;

  // One or up to three blocks that define the metrics that will be used to monitor the launch performance. Detailed below.
  metricMonitors?: Array<evidently_LaunchMetricMonitor>;

  // The name for the new launch. Minimum length of `1`. Maximum length of `127`.
  name?: string;

  // The name or ARN of the project that is to contain the new launch.
  project?: string;

  // When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and randomizationSalt. If you omit randomizationSalt, Evidently uses the launch name as the randomizationSalt.
  randomizationSalt?: string;
}
export class Launch extends Resource {
  // One or up to five blocks that contain the feature and variations that are to be used for the launch. Detailed below.
  public groups?: Array<evidently_LaunchGroup>;

  // The name for the new launch. Minimum length of `1`. Maximum length of `127`.
  public name?: string;

  // The name or ARN of the project that is to contain the new launch.
  public project?: string;

  // Tags to apply to the launch. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // One or up to three blocks that define the metrics that will be used to monitor the launch performance. Detailed below.
  public metricMonitors?: Array<evidently_LaunchMetricMonitor>;

  // When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and randomizationSalt. If you omit randomizationSalt, Evidently uses the launch name as the randomizationSalt.
  public randomizationSalt?: string;

  // A block that defines the traffic allocation percentages among the feature variations during each step of the launch. Detailed below.
  public scheduledSplitsConfig?: evidently_LaunchScheduledSplitsConfig;

  // If the launch was stopped, this is the string that was entered by the person who stopped the launch, to explain why it was stopped.
  public statusReason?: string;

  // The type of launch.
  public type?: string;

  // Specifies the description of the launch.
  public description?: string;

  // A block that contains information about the start and end times of the launch. Detailed below
  public executions?: Array<evidently_LaunchExecution>;

  // The date and time that the launch was most recently updated.
  public lastUpdatedTime?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the launch.
  public arn?: string;

  // The date and time that the launch is created.
  public createdTime?: string;

  // The current state of the launch. Valid values are `CREATED`, `UPDATING`, `RUNNING`, `COMPLETED`, and `CANCELLED`.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The name or ARN of the project that is to contain the new launch.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "randomizationSalt",
        "When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and randomizationSalt. If you omit randomizationSalt, Evidently uses the launch name as the randomizationSalt.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scheduledSplitsConfig",
        "A block that defines the traffic allocation percentages among the feature variations during each step of the launch. Detailed below.",
        evidently_LaunchScheduledSplitsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the launch. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Specifies the description of the launch.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "groups",
        "One or up to five blocks that contain the feature and variations that are to be used for the launch. Detailed below.",
        evidently_LaunchGroup_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "metricMonitors",
        "One or up to three blocks that define the metrics that will be used to monitor the launch performance. Detailed below.",
        evidently_LaunchMetricMonitor_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the new launch. Minimum length of `1`. Maximum length of `127`.",
        [],
        false,
        true,
      ),
    ];
  }
}
