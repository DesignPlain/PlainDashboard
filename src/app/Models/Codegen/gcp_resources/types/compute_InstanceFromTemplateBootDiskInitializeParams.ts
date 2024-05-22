import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_InstanceFromTemplateBootDiskInitializeParams {
  // Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.
  provisionedIops?: number;

  // Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.
  provisionedThroughput?: number;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  resourceManagerTags?: Map<string, string>;

  // The size of the image in gigabytes.
  size?: number;

  // The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.
  type?: string;

  // A flag to enable confidential compute mode on boot disk
  enableConfidentialCompute?: boolean;

  // The image from which this disk was initialised.
  image?: string;

  // A set of key/value label pairs assigned to the disk.
  labels?: Map<string, string>;
}

export function compute_InstanceFromTemplateBootDiskInitializeParams_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "size",
      "The size of the image in gigabytes.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableConfidentialCompute",
      "A flag to enable confidential compute mode on boot disk",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "image",
      "The image from which this disk was initialised.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "A set of key/value label pairs assigned to the disk.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "provisionedIops",
      "Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "provisionedThroughput",
      "Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "resourceManagerTags",
      "A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
