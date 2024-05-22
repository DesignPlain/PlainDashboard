import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_MonitoringScheduleMonitoringScheduleConfig,
  sagemaker_MonitoringScheduleMonitoringScheduleConfig_GetTypes,
} from "../types/sagemaker_MonitoringScheduleMonitoringScheduleConfig";

export interface MonitoringScheduleArgs {
  // The configuration object that specifies the monitoring schedule and defines the monitoring job. Fields are documented below.
  monitoringScheduleConfig?: sagemaker_MonitoringScheduleMonitoringScheduleConfig;

  // The name of the monitoring schedule. The name must be unique within an AWS Region within an AWS account. If omitted, the provider will assign a random, unique name.
  name?: string;

  // A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class MonitoringSchedule extends Resource {
  // The Amazon Resource Name (ARN) assigned by AWS to this monitoring schedule.
  public arn?: string;

  // The configuration object that specifies the monitoring schedule and defines the monitoring job. Fields are documented below.
  public monitoringScheduleConfig?: sagemaker_MonitoringScheduleMonitoringScheduleConfig;

  // The name of the monitoring schedule. The name must be unique within an AWS Region within an AWS account. If omitted, the provider will assign a random, unique name.
  public name?: string;

  // A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "monitoringScheduleConfig",
        "The configuration object that specifies the monitoring schedule and defines the monitoring job. Fields are documented below.",
        sagemaker_MonitoringScheduleMonitoringScheduleConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the monitoring schedule. The name must be unique within an AWS Region within an AWS account. If omitted, the provider will assign a random, unique name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
