import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_LaunchTemplatePlacement {
  // The affinity setting for an instance on a Dedicated Host.
  affinity?: string;

  // The Availability Zone for the instance.
  availabilityZone?: string;

  // The name of the placement group for the instance.
  groupName?: string;

  // The ID of the Dedicated Host for the instance.
  hostId?: string;

  // The ARN of the Host Resource Group in which to launch instances.
  hostResourceGroupArn?: string;

  // The number of the partition the instance should launch in. Valid only if the placement group strategy is set to partition.
  partitionNumber?: number;

  // Reserved for future use.
  spreadDomain?: string;

  // The tenancy of the instance (if the instance is running in a VPC). Can be `default`, `dedicated`, or `host`.
  tenancy?: string;
}

export function ec2_LaunchTemplatePlacement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "affinity",
      "The affinity setting for an instance on a Dedicated Host.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "The Availability Zone for the instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "groupName",
      "The name of the placement group for the instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostId",
      "The ID of the Dedicated Host for the instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostResourceGroupArn",
      "The ARN of the Host Resource Group in which to launch instances.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "partitionNumber",
      "The number of the partition the instance should launch in. Valid only if the placement group strategy is set to partition.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "spreadDomain",
      "Reserved for future use.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tenancy",
      "The tenancy of the instance (if the instance is running in a VPC). Can be `default`, `dedicated`, or `host`.",
      [],
      false,
      false,
    ),
  ];
}
