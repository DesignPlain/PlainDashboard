import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_InstanceBootDiskInitializeParams {
  /*
Indicates how many IOPS to provision for the disk.
This sets the number of I/O operations per second that the disk can handle.
For more details,see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).
Note: Updating currently is only supported for hyperdisk skus via disk update
api/gcloud without the need to delete and recreate the disk, hyperdisk allows
for an update of IOPS every 4 hours. To update your hyperdisk more frequently,
you'll need to manually delete and recreate it.
*/
  provisionedIops?: number;

  /*
Indicates how much throughput to provision for the disk.
This sets the number of throughput mb per second that the disk can handle.
For more details,see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).
Note: Updating currently is only supported for hyperdisk skus via disk update
api/gcloud without the need to delete and recreate the disk, hyperdisk allows
for an update of throughput every 4 hours. To update your hyperdisk more
frequently, you'll need to manually delete and recreate it.
*/
  provisionedThroughput?: number;

  // A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  resourceManagerTags?: Map<string, string>;

  /*
The size of the image in gigabytes. If not specified, it
will inherit the size of its base image.
*/
  size?: number;

  // The GCE disk type. Such as pd-standard, pd-balanced or pd-ssd.
  type?: string;

  /*
Whether this disk is using confidential compute mode.
Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true.
*/
  enableConfidentialCompute?: boolean;

  /*
The image from which to initialize this disk. This can be
one of: the image's `self_link`, `projects/{project}/global/images/{image}`,
`projects/{project}/global/images/family/{family}`, `global/images/{image}`,
`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,
`{project}/{image}`, `{family}`, or `{image}`. If referred by family, the
images names must include the family name. If they don't, use the
[gcp.compute.Image data source](https://www.terraform.io/docs/providers/google/d/compute_image.html).
For instance, the image `centos-6-v20180104` includes its family name `centos-6`.
These images can be referred by family name here.
*/
  image?: string;

  /*
A set of key/value label pairs assigned to the disk. This
field is only applicable for persistent disks.
*/
  labels?: Map<string, string>;
}

export function compute_InstanceBootDiskInitializeParams_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "resourceManagerTags",
      "A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.",
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "size",
      "The size of the image in gigabytes. If not specified, it\nwill inherit the size of its base image.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The GCE disk type. Such as pd-standard, pd-balanced or pd-ssd.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableConfidentialCompute",
      "Whether this disk is using confidential compute mode.\nNote: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "image",
      "The image from which to initialize this disk. This can be\none of: the image's `self_link`, `projects/{project}/global/images/{image}`,\n`projects/{project}/global/images/family/{family}`, `global/images/{image}`,\n`global/images/family/{family}`, `family/{family}`, `{project}/{family}`,\n`{project}/{image}`, `{family}`, or `{image}`. If referred by family, the\nimages names must include the family name. If they don't, use the\n[gcp.compute.Image data source](https://www.terraform.io/docs/providers/google/d/compute_image.html).\nFor instance, the image `centos-6-v20180104` includes its family name `centos-6`.\nThese images can be referred by family name here.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "A set of key/value label pairs assigned to the disk. This\nfield is only applicable for persistent disks.",
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "provisionedIops",
      "Indicates how many IOPS to provision for the disk.\nThis sets the number of I/O operations per second that the disk can handle.\nFor more details,see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).\nNote: Updating currently is only supported for hyperdisk skus via disk update\napi/gcloud without the need to delete and recreate the disk, hyperdisk allows\nfor an update of IOPS every 4 hours. To update your hyperdisk more frequently,\nyou'll need to manually delete and recreate it.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "provisionedThroughput",
      "Indicates how much throughput to provision for the disk.\nThis sets the number of throughput mb per second that the disk can handle.\nFor more details,see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).\nNote: Updating currently is only supported for hyperdisk skus via disk update\napi/gcloud without the need to delete and recreate the disk, hyperdisk allows\nfor an update of throughput every 4 hours. To update your hyperdisk more\nfrequently, you'll need to manually delete and recreate it.",
      () => [],
      false,
      true,
    ),
  ];
}
