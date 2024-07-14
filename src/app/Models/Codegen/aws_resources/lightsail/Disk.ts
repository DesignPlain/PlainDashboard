import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DiskArgs {
  // The Availability Zone in which to create your disk.
  availabilityZone?: string;

  // The name of the Lightsail load balancer.
  name?: string;

  // The instance port the load balancer will connect.
  sizeInGb?: number;

  // A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Disk extends Resource {
  // The name of the Lightsail load balancer.
  public name?: string;

  // The instance port the load balancer will connect.
  public sizeInGb?: number;

  // The support code for the disk. Include this code in your email to support when you have questions about a disk in Lightsail. This code enables our support team to look up your Lightsail information more easily.
  public supportCode?: string;

  // A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the Lightsail load balancer.
  public arn?: string;

  // The Availability Zone in which to create your disk.
  public availabilityZone?: string;

  // The timestamp when the load balancer was created.
  public createdAt?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "The Availability Zone in which to create your disk.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Lightsail load balancer.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "sizeInGb",
        "The instance port the load balancer will connect.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
