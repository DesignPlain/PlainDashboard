import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  autoscaling_TrafficSourceAttachmentTrafficSource,
  autoscaling_TrafficSourceAttachmentTrafficSource_GetTypes,
} from "../types/autoscaling_TrafficSourceAttachmentTrafficSource";

export interface TrafficSourceAttachmentArgs {
  // The name of the Auto Scaling group.
  autoscalingGroupName?: string;

  // The unique identifiers of a traffic sources.
  trafficSource?: autoscaling_TrafficSourceAttachmentTrafficSource;
}
export class TrafficSourceAttachment extends Resource {
  // The name of the Auto Scaling group.
  public autoscalingGroupName?: string;

  // The unique identifiers of a traffic sources.
  public trafficSource?: autoscaling_TrafficSourceAttachmentTrafficSource;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "trafficSource",
        "The unique identifiers of a traffic sources.",
        autoscaling_TrafficSourceAttachmentTrafficSource_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoscalingGroupName",
        "The name of the Auto Scaling group.",
        [],
        true,
        true,
      ),
    ];
  }
}
