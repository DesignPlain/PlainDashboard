import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface emr_getSupportedInstanceTypesSupportedInstanceType {
  // The Amazon EC2 family and generation for the instance type.
  instanceFamilyId?: string;

  // Memory that is available to Amazon EMR from the instance type.
  memoryGb?: number;

  // Number of disks for the instance type.
  numberOfDisks?: number;

  // Storage capacity of the instance type.
  storageGb?: number;

  // The number of vCPUs available for the instance type.
  vcpu?: number;

  // CPU architecture.
  architecture?: string;

  // Indicates whether the instance type supports Amazon EBS optimization.
  ebsOptimizedAvailable?: boolean;

  // Indicates whether the instance type uses Amazon EBS optimization by default.
  ebsOptimizedByDefault?: boolean;

  // Indicates whether the instance type only supports Amazon EBS.
  ebsStorageOnly?: boolean;

  // Indicates whether the instance type only supports 64-bit architecture.
  is64BitsOnly?: boolean;

  // Amazon EC2 instance type. For example, `m5.xlarge`.
  type?: string;
}

export function emr_getSupportedInstanceTypesSupportedInstanceType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "ebsOptimizedAvailable",
      "Indicates whether the instance type supports Amazon EBS optimization.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ebsStorageOnly",
      "Indicates whether the instance type only supports Amazon EBS.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numberOfDisks",
      "Number of disks for the instance type.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryGb",
      "Memory that is available to Amazon EMR from the instance type.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "storageGb",
      "Storage capacity of the instance type.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "vcpu",
      "The number of vCPUs available for the instance type.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "architecture",
      "CPU architecture.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ebsOptimizedByDefault",
      "Indicates whether the instance type uses Amazon EBS optimization by default.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "is64BitsOnly",
      "Indicates whether the instance type only supports 64-bit architecture.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Amazon EC2 instance type. For example, `m5.xlarge`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceFamilyId",
      "The Amazon EC2 family and generation for the instance type.",
      () => [],
      true,
      false,
    ),
  ];
}
