import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_ImageGuestOsFeature,
  compute_ImageGuestOsFeature_GetTypes,
} from "../types/compute_ImageGuestOsFeature";
import {
  compute_ImageRawDisk,
  compute_ImageRawDisk_GetTypes,
} from "../types/compute_ImageRawDisk";
import {
  compute_ImageImageEncryptionKey,
  compute_ImageImageEncryptionKey_GetTypes,
} from "../types/compute_ImageImageEncryptionKey";

export interface ImageArgs {
  /*
A list of features to enable on the guest operating system.
Applicable only for bootable images.
Structure is documented below.
*/
  guestOsFeatures?: Array<compute_ImageGuestOsFeature>;

  /*
Labels to apply to this Image.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
URL of the source snapshot used to create this image.
In order to create an image, you must provide the full or partial URL of one of the following:
- The selfLink URL
- This property
- The sourceImage URL
- The rawDisk.source URL
- The sourceDisk URL
*/
  sourceSnapshot?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  description?: string;

  // Any applicable license URI.
  licenses?: Array<string>;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.


- - -
*/
  name?: string;

  // Size of the image when restored onto a persistent disk (in GB).
  diskSizeGb?: number;

  /*
The parameters of the raw disk image.
Structure is documented below.
*/
  rawDisk?: compute_ImageRawDisk;

  /*
Cloud Storage bucket storage location of the image
(regional or multi-regional).
Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images
*/
  storageLocations?: Array<string>;

  /*
The name of the image family to which this image belongs. You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035.
*/
  family?: string;

  /*
Encrypts the image using a customer-supplied encryption key.
After you encrypt an image with a customer-supplied key, you must
provide the same key if you use the image later (e.g. to create a
disk from the image)
Structure is documented below.
*/
  imageEncryptionKey?: compute_ImageImageEncryptionKey;

  /*
The source disk to create this image based on.
You must provide either this property or the
rawDisk.source property but not both to create an image.
*/
  sourceDisk?: string;

  /*
URL of the source image used to create this image. In order to create an image, you must provide the full or partial
URL of one of the following:
- The selfLink URL
- This property
- The rawDisk.source URL
- The sourceDisk URL
*/
  sourceImage?: string;
}
export class Image extends DS_Resource {
  /*
The fingerprint used for optimistic locking of this resource. Used
internally during updates.
*/
  public labelFingerprint?: string;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The source disk to create this image based on.
You must provide either this property or the
rawDisk.source property but not both to create an image.
*/
  public sourceDisk?: string;

  // Size of the image when restored onto a persistent disk (in GB).
  public diskSizeGb?: number;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Encrypts the image using a customer-supplied encryption key.
After you encrypt an image with a customer-supplied key, you must
provide the same key if you use the image later (e.g. to create a
disk from the image)
Structure is documented below.
*/
  public imageEncryptionKey?: compute_ImageImageEncryptionKey;

  // The URI of the created resource.
  public selfLink?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public description?: string;

  /*
The name of the image family to which this image belongs. You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035.
*/
  public family?: string;

  /*
A list of features to enable on the guest operating system.
Applicable only for bootable images.
Structure is documented below.
*/
  public guestOsFeatures?: Array<compute_ImageGuestOsFeature>;

  /*
Labels to apply to this Image.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // Any applicable license URI.
  public licenses?: Array<string>;

  /*
URL of the source snapshot used to create this image.
In order to create an image, you must provide the full or partial URL of one of the following:
- The selfLink URL
- This property
- The sourceImage URL
- The rawDisk.source URL
- The sourceDisk URL
*/
  public sourceSnapshot?: string;

  /*
Cloud Storage bucket storage location of the image
(regional or multi-regional).
Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images
*/
  public storageLocations?: Array<string>;

  /*
Size of the image tar.gz archive stored in Google Cloud Storage (in
bytes).
*/
  public archiveSizeBytes?: number;

  /*
The parameters of the raw disk image.
Structure is documented below.
*/
  public rawDisk?: compute_ImageRawDisk;

  /*
URL of the source image used to create this image. In order to create an image, you must provide the full or partial
URL of one of the following:
- The selfLink URL
- This property
- The rawDisk.source URL
- The sourceDisk URL
*/
  public sourceImage?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "sourceSnapshot",
        "URL of the source snapshot used to create this image.\nIn order to create an image, you must provide the full or partial URL of one of the following:\n* The selfLink URL\n* This property\n* The sourceImage URL\n* The rawDisk.source URL\n* The sourceDisk URL",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "storageLocations",
        "Cloud Storage bucket storage location of the image\n(regional or multi-regional).\nReference link: https://cloud.google.com/compute/docs/reference/rest/v1/images",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "imageEncryptionKey",
        "Encrypts the image using a customer-supplied encryption key.\nAfter you encrypt an image with a customer-supplied key, you must\nprovide the same key if you use the image later (e.g. to create a\ndisk from the image)\nStructure is documented below.",
        () => compute_ImageImageEncryptionKey_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "guestOsFeatures",
        "A list of features to enable on the guest operating system.\nApplicable only for bootable images.\nStructure is documented below.",
        () => compute_ImageGuestOsFeature_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "licenses",
        "Any applicable license URI.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "family",
        "The name of the image family to which this image belongs. You can\ncreate disks by specifying an image family instead of a specific\nimage name. The image family always returns its latest image that is\nnot deprecated. The name of the image family must comply with\nRFC1035.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource; provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rawDisk",
        "The parameters of the raw disk image.\nStructure is documented below.",
        () => compute_ImageRawDisk_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceDisk",
        "The source disk to create this image based on.\nYou must provide either this property or the\nrawDisk.source property but not both to create an image.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceImage",
        "URL of the source image used to create this image. In order to create an image, you must provide the full or partial\nURL of one of the following:\n* The selfLink URL\n* This property\n* The rawDisk.source URL\n* The sourceDisk URL",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels to apply to this Image.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "diskSizeGb",
        "Size of the image when restored onto a persistent disk (in GB).",
        () => [],
        false,
        true,
      ),
    ];
  }
}
