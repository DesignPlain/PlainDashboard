import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudwatch_InternetMonitorHealthEventsConfig,
  cloudwatch_InternetMonitorHealthEventsConfig_GetTypes,
} from "../types/cloudwatch_InternetMonitorHealthEventsConfig";
import {
  cloudwatch_InternetMonitorInternetMeasurementsLogDelivery,
  cloudwatch_InternetMonitorInternetMeasurementsLogDelivery_GetTypes,
} from "../types/cloudwatch_InternetMonitorInternetMeasurementsLogDelivery";

export interface InternetMonitorArgs {
  // Health event thresholds. A health event threshold percentage, for performance and availability, determines when Internet Monitor creates a health event when there's an internet issue that affects your application end users. See Health Events Config below.
  healthEventsConfig?: cloudwatch_InternetMonitorHealthEventsConfig;

  // Publish internet measurements for Internet Monitor to an Amazon S3 bucket in addition to CloudWatch Logs.
  internetMeasurementsLogDelivery?: cloudwatch_InternetMonitorInternetMeasurementsLogDelivery;

  // The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the network or ASN, such as an internet service provider (ISP), that clients access the resources through. This limit helps control billing costs.
  maxCityNetworksToMonitor?: number;

  /*
The name of the monitor.

The following arguments are optional:
*/
  monitorName?: string;

  // The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs).
  resources?: Array<string>;

  // The status for a monitor. The accepted values for Status with the UpdateMonitor API call are the following: `ACTIVE` and `INACTIVE`.
  status?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The percentage of the internet-facing traffic for your application that you want to monitor with this monitor.
  trafficPercentageToMonitor?: number;
}
export class InternetMonitor extends DS_Resource {
  // The status for a monitor. The accepted values for Status with the UpdateMonitor API call are the following: `ACTIVE` and `INACTIVE`.
  public status?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the Monitor.
  public arn?: string;

  // Health event thresholds. A health event threshold percentage, for performance and availability, determines when Internet Monitor creates a health event when there's an internet issue that affects your application end users. See Health Events Config below.
  public healthEventsConfig?: cloudwatch_InternetMonitorHealthEventsConfig;

  // Publish internet measurements for Internet Monitor to an Amazon S3 bucket in addition to CloudWatch Logs.
  public internetMeasurementsLogDelivery?: cloudwatch_InternetMonitorInternetMeasurementsLogDelivery;

  /*
The name of the monitor.

The following arguments are optional:
*/
  public monitorName?: string;

  // The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs).
  public resources?: Array<string>;

  // The percentage of the internet-facing traffic for your application that you want to monitor with this monitor.
  public trafficPercentageToMonitor?: number;

  // The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the network or ASN, such as an internet service provider (ISP), that clients access the resources through. This limit helps control billing costs.
  public maxCityNetworksToMonitor?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "resources",
        "The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs).",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "The status for a monitor. The accepted values for Status with the UpdateMonitor API call are the following: `ACTIVE` and `INACTIVE`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "trafficPercentageToMonitor",
        "The percentage of the internet-facing traffic for your application that you want to monitor with this monitor.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "healthEventsConfig",
        "Health event thresholds. A health event threshold percentage, for performance and availability, determines when Internet Monitor creates a health event when there's an internet issue that affects your application end users. See Health Events Config below.",
        () => cloudwatch_InternetMonitorHealthEventsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "internetMeasurementsLogDelivery",
        "Publish internet measurements for Internet Monitor to an Amazon S3 bucket in addition to CloudWatch Logs.",
        () =>
          cloudwatch_InternetMonitorInternetMeasurementsLogDelivery_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxCityNetworksToMonitor",
        "The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the network or ASN, such as an internet service provider (ISP), that clients access the resources through. This limit helps control billing costs.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "monitorName",
        "The name of the monitor.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
    ];
  }
}
