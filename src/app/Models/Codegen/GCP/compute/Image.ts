import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ImageImageEncryptionKey } from "../types/ImageImageEncryptionKey";
import { ImageRawDisk } from "../types/ImageRawDisk";
import { ImageGuestOsFeature } from "../types/ImageGuestOsFeature";

export interface ImageArgs {
  /*
The name of the image family to which this image belongs. You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035.
*/
  Family?: string;

  /*
Labels to apply to this Image.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The source disk to create this image based on.
You must provide either this property or the
rawDisk.source property but not both to create an image.
*/
  SourceDisk?: string;

  /*
URL of the source snapshot used to create this image.
In order to create an image, you must provide the full or partial URL of one of the following:
- The selfLink URL
- This property
- The sourceImage URL
- The rawDisk.source URL
- The sourceDisk URL
*/
  SourceSnapshot?: string;

  /*
Cloud Storage bucket storage location of the image
(regional or multi-regional).
Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images
*/
  StorageLocations?: Array<string>;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  Description?: string;

  /*
Encrypts the image using a customer-supplied encryption key.
After you encrypt an image with a customer-supplied key, you must
provide the same key if you use the image later (e.g. to create a
disk from the image)
Structure is documented below.
*/
  ImageEncryptionKey?: ImageImageEncryptionKey;

  /*
The parameters of the raw disk image.
Structure is documented below.
*/
  RawDisk?: ImageRawDisk;

  /*
URL of the source image used to create this image. In order to create an image, you must provide the full or partial
URL of one of the following:
- The selfLink URL
- This property
- The rawDisk.source URL
- The sourceDisk URL
*/
  SourceImage?: string;

  /*
A list of features to enable on the guest operating system.
Applicable only for bootable images.
Structure is documented below.
*/
  GuestOsFeatures?: Array<ImageGuestOsFeature>;

  // Any applicable license URI.
  Licenses?: Array<string>;

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
  Name?: string;

  // Size of the image when restored onto a persistent disk (in GB).
  DiskSizeGb?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Image extends Resource {
  // Size of the image when restored onto a persistent disk (in GB).
  public DiskSizeGb?: number;

  /*
Labels to apply to this Image.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

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
  public Name?: string;

  /*
The parameters of the raw disk image.
Structure is documented below.
*/
  public RawDisk?: ImageRawDisk;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
Size of the image tar.gz archive stored in Google Cloud Storage (in
bytes).
*/
  public ArchiveSizeBytes?: number;

  /*
Encrypts the image using a customer-supplied encryption key.
After you encrypt an image with a customer-supplied key, you must
provide the same key if you use the image later (e.g. to create a
disk from the image)
Structure is documented below.
*/
  public ImageEncryptionKey?: ImageImageEncryptionKey;

  /*
The fingerprint used for optimistic locking of this resource. Used
internally during updates.
*/
  public LabelFingerprint?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Cloud Storage bucket storage location of the image
(regional or multi-regional).
Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images
*/
  public StorageLocations?: Array<string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
A list of features to enable on the guest operating system.
Applicable only for bootable images.
Structure is documented below.
*/
  public GuestOsFeatures?: Array<ImageGuestOsFeature>;

  /*
The name of the image family to which this image belongs. You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035.
*/
  public Family?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

  // Any applicable license URI.
  public Licenses?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The source disk to create this image based on.
You must provide either this property or the
rawDisk.source property but not both to create an image.
*/
  public SourceDisk?: string;

  /*
URL of the source image used to create this image. In order to create an image, you must provide the full or partial
URL of one of the following:
- The selfLink URL
- This property
- The rawDisk.source URL
- The sourceDisk URL
*/
  public SourceImage?: string;

  /*
URL of the source snapshot used to create this image.
In order to create an image, you must provide the full or partial URL of one of the following:
- The selfLink URL
- This property
- The sourceImage URL
- The rawDisk.source URL
- The sourceDisk URL
*/
  public SourceSnapshot?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "StorageLocations",
        "Cloud Storage bucket storage location of the image\n(regional or multi-regional).\nReference link: https://cloud.google.com/compute/docs/reference/rest/v1/images",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Licenses",
        "Any applicable license URI.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ImageEncryptionKey",
        "Encrypts the image using a customer-supplied encryption key.\nAfter you encrypt an image with a customer-supplied key, you must\nprovide the same key if you use the image later (e.g. to create a\ndisk from the image)\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RawDisk",
        "The parameters of the raw disk image.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceImage",
        "URL of the source image used to create this image. In order to create an image, you must provide the full or partial\nURL of one of the following:\n* The selfLink URL\n* This property\n* The rawDisk.source URL\n* The sourceDisk URL",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "GuestOsFeatures",
        "A list of features to enable on the guest operating system.\nApplicable only for bootable images.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Family",
        "The name of the image family to which this image belongs. You can\ncreate disks by specifying an image family instead of a specific\nimage name. The image family always returns its latest image that is\nnot deprecated. The name of the image family must comply with\nRFC1035.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels to apply to this Image.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceSnapshot",
        "URL of the source snapshot used to create this image.\nIn order to create an image, you must provide the full or partial URL of one of the following:\n* The selfLink URL\n* This property\n* The sourceImage URL\n* The rawDisk.source URL\n* The sourceDisk URL",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceDisk",
        "The source disk to create this image based on.\nYou must provide either this property or the\nrawDisk.source property but not both to create an image.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource; provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.Number,
        "DiskSizeGb",
        "Size of the image when restored onto a persistent disk (in GB).",
      ),
    ];
  }
}
