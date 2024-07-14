import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  devicefarm_TestGridProjectVpcConfig,
  devicefarm_TestGridProjectVpcConfig_GetTypes,
} from "../types/devicefarm_TestGridProjectVpcConfig";

export interface TestGridProjectArgs {
  // Human-readable description of the project.
  description?: string;

  // The name of the Selenium testing project.
  name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The VPC security groups and subnets that are attached to a project. See VPC Config below.
  vpcConfig?: devicefarm_TestGridProjectVpcConfig;
}
export class TestGridProject extends Resource {
  // The name of the Selenium testing project.
  public name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The VPC security groups and subnets that are attached to a project. See VPC Config below.
  public vpcConfig?: devicefarm_TestGridProjectVpcConfig;

  // The Amazon Resource Name of this Test Grid Project.
  public arn?: string;

  // Human-readable description of the project.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Human-readable description of the project.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Selenium testing project.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcConfig",
        "The VPC security groups and subnets that are attached to a project. See VPC Config below.",
        devicefarm_TestGridProjectVpcConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
