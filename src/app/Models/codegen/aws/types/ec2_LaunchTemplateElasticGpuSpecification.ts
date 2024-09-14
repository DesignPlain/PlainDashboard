import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_LaunchTemplateElasticGpuSpecification {
  // The [Elastic GPU Type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-graphics.html#elastic-graphics-basics)
  type?: string;
}

export function ec2_LaunchTemplateElasticGpuSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The [Elastic GPU Type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-graphics.html#elastic-graphics-basics)",
      () => [],
      true,
      false,
    ),
  ];
}
