import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceFromTemplateBootDiskInitializeParams {
  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  ResourceManagerTags?: Map<string, InputType.String>;

  // The size of the image in gigabytes.
  Size?: number;

  // The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.
  Type?: string;

  // A flag to enable confidential compute mode on boot disk
  EnableConfidentialCompute?: boolean;

  // The image from which this disk was initialised.
  Image?: string;

  // A set of key/value label pairs assigned to the disk.
  Labels?: Map<string, InputType.String>;

  // Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.
  ProvisionedIops?: number;

  // Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.
  ProvisionedThroughput?: number;
}

export function Compute_InstanceFromTemplateBootDiskInitializeParams_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ProvisionedThroughput",
      "Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ResourceManagerTags",
      "A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Size",
      "The size of the image in gigabytes.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableConfidentialCompute",
      "A flag to enable confidential compute mode on boot disk",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Image",
      "The image from which this disk was initialised.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "A set of key/value label pairs assigned to the disk.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ProvisionedIops",
      "Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.",
      [],
      false,
      true,
    ),
  ];
}
