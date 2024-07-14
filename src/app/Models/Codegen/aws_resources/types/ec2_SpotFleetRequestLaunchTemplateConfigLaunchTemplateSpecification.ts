import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification {
  // The ID of the launch template. Conflicts with `name`.
  id?: string;

  // The name of the launch template. Conflicts with `id`.
  name?: string;

  /*
Template version. Unlike the autoscaling equivalent, does not support `$Latest` or `$Default`, so use the launch_template resource's attribute, e.g., `"${aws_launch_template.foo.latest_version}"`. It will use the default version if omitted.

--Note:-- The specified launch template can specify only a subset of the
inputs of `aws.ec2.LaunchTemplate`.  There are limitations on
what you can specify as spot fleet does not support all the attributes that are supported by autoscaling groups. [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#launch-templates-spot-fleet) is currently sparse, but at least `instance_initiated_shutdown_behavior` is confirmed unsupported.
*/
  version?: string;
}

export function ec2_SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the launch template. Conflicts with `id`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      'Template version. Unlike the autoscaling equivalent, does not support `$Latest` or `$Default`, so use the launch_template resource\'s attribute, e.g., `"${aws_launch_template.foo.latest_version}"`. It will use the default version if omitted.\n\n**Note:** The specified launch template can specify only a subset of the\ninputs of `aws.ec2.LaunchTemplate`.  There are limitations on\nwhat you can specify as spot fleet does not support all the attributes that are supported by autoscaling groups. [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#launch-templates-spot-fleet) is currently sparse, but at least `instance_initiated_shutdown_behavior` is confirmed unsupported.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The ID of the launch template. Conflicts with `name`.",
      [],
      false,
      true,
    ),
  ];
}
