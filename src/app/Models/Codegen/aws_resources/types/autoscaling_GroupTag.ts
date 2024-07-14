import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface autoscaling_GroupTag {
  // Key
  key?: string;

  /*
Enables propagation of the tag to
Amazon EC2 instances launched via this ASG

To declare multiple tags, additional `tag` blocks can be specified.

> --NOTE:-- Other AWS APIs may automatically add special tags to their associated Auto Scaling Group for management purposes, such as ECS Capacity Providers adding the `AmazonECSManaged` tag. These generally should be included in the configuration so the provider does not attempt to remove them and so if the `min_size` was greater than zero on creation, that these tag(s) are applied to any initial EC2 Instances in the Auto Scaling Group. If these tag(s) were missing in the Auto Scaling Group configuration on creation, affected EC2 Instances missing the tags may require manual intervention of adding the tags to ensure they work properly with the other AWS service.
*/
  propagateAtLaunch?: boolean;

  // Value
  value?: string;
}

export function autoscaling_GroupTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "propagateAtLaunch",
      "Enables propagation of the tag to\nAmazon EC2 instances launched via this ASG\n\nTo declare multiple tags, additional `tag` blocks can be specified.\n\n> **NOTE:** Other AWS APIs may automatically add special tags to their associated Auto Scaling Group for management purposes, such as ECS Capacity Providers adding the `AmazonECSManaged` tag. These generally should be included in the configuration so the provider does not attempt to remove them and so if the `min_size` was greater than zero on creation, that these tag(s) are applied to any initial EC2 Instances in the Auto Scaling Group. If these tag(s) were missing in the Auto Scaling Group configuration on creation, affected EC2 Instances missing the tags may require manual intervention of adding the tags to ensure they work properly with the other AWS service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "value", "Value", [], true, false),
    new DynamicUIProps(InputType.String, "key", "Key", [], true, false),
  ];
}
