import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emr_ClusterCoreInstanceGroupEbsConfig,
  emr_ClusterCoreInstanceGroupEbsConfig_GetTypes,
} from "./emr_ClusterCoreInstanceGroupEbsConfig";

export interface emr_ClusterCoreInstanceGroup {
  // EC2 instance type for all instances in the instance group.
  instanceType?: string;

  // Friendly name given to the instance group.
  name?: string;

  // String containing the [EMR Auto Scaling Policy](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html) JSON.
  autoscalingPolicy?: string;

  // Bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
  bidPrice?: string;

  // Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.
  ebsConfigs?: Array<emr_ClusterCoreInstanceGroupEbsConfig>;

  // Core node type Instance Group ID, if using Instance Group for this node type.
  id?: string;

  // Target number of instances for the instance group. Must be at least 1. Defaults to 1.
  instanceCount?: number;
}

export function emr_ClusterCoreInstanceGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "EC2 instance type for all instances in the instance group.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Friendly name given to the instance group.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "autoscalingPolicy",
      "String containing the [EMR Auto Scaling Policy](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html) JSON.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bidPrice",
      "Bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ebsConfigs",
      "Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.",
      () => emr_ClusterCoreInstanceGroupEbsConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Core node type Instance Group ID, if using Instance Group for this node type.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "instanceCount",
      "Target number of instances for the instance group. Must be at least 1. Defaults to 1.",
      () => [],
      false,
      false,
    ),
  ];
}
