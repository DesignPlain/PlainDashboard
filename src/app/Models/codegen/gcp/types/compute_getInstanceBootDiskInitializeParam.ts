import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_getInstanceBootDiskInitializeParam {
  // The size of the image in gigabytes.
  size?: number;

  // The accelerator type resource exposed to this instance. E.g. `nvidia-tesla-k80`.
  type?: string;

  // A flag to enable confidential compute mode on boot disk
  enableConfidentialCompute?: boolean;

  // The image from which this disk was initialised.
  image?: string;

  // A set of key/value label pairs assigned to the disk.
  labels?: Map<string, string>;

  // Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.
  provisionedIops?: number;

  // Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.
  provisionedThroughput?: number;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  resourceManagerTags?: Map<string, string>;
}

export function compute_getInstanceBootDiskInitializeParam_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'resourceManagerTags',
      'A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'size',
      'The size of the image in gigabytes.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The accelerator type resource exposed to this instance. E.g. `nvidia-tesla-k80`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableConfidentialCompute',
      'A flag to enable confidential compute mode on boot disk',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'image',
      'The image from which this disk was initialised.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'labels',
      'A set of key/value label pairs assigned to the disk.',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'provisionedIops',
      'Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'provisionedThroughput',
      'Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle.',
      () => [],
      true,
      false,
    ),
  ];
}
