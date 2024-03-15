import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceFileShares } from "../types/InstanceFileShares";
import { InstanceNetwork } from "../types/InstanceNetwork";

export interface InstanceArgs {
  /*
File system shares on the instance. For this version, only a
single file share is supported.
Structure is documented below.
*/
  FileShares?: InstanceFileShares;

  // KMS key name used for data encryption.
  KmsKeyName?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The resource name of the instance.
  Name?: string;

  /*
(Optional, Deprecated)
The name of the Filestore zone of the instance.

> --Warning:-- `zone` is deprecated and will be removed in a future major release. Use `location` instead.
*/
  Zone?: string;

  // A description of the instance.
  Description?: string;

  // The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
  Location?: string;

  /*
VPC networks to which the instance is connected. For this version,
only a single network is supported.
Structure is documented below.
*/
  Networks?: Array<InstanceNetwork>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The service tier of the instance.
Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE
*/
  Tier?: string;
}
export class Instance extends Resource {
  /*
Server-specified ETag for the instance resource to prevent
simultaneous updates from overwriting each other.
*/
  public Etag?: string;

  /*
File system shares on the instance. For this version, only a
single file share is supported.
Structure is documented below.
*/
  public FileShares?: InstanceFileShares;

  /*
The service tier of the instance.
Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE
*/
  public Tier?: string;

  // Creation timestamp in RFC3339 text format.
  public CreateTime?: string;

  // A description of the instance.
  public Description?: string;

  // The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
  public Location?: string;

  // The resource name of the instance.
  public Name?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
VPC networks to which the instance is connected. For this version,
only a single network is supported.
Structure is documented below.
*/
  public Networks?: Array<InstanceNetwork>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // KMS key name used for data encryption.
  public KmsKeyName?: string;

  /*
(Optional, Deprecated)
The name of the Filestore zone of the instance.

> --Warning:-- `zone` is deprecated and will be removed in a future major release. Use `location` instead.
*/
  public Zone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Tier",
        "The service tier of the instance.\nPossible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the instance.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Networks",
        "VPC networks to which the instance is connected. For this version,\nonly a single network is supported.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FileShares",
        "File system shares on the instance. For this version, only a\nsingle file share is supported.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "KMS key name used for data encryption.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "(Optional, Deprecated)\nThe name of the Filestore zone of the instance.\n\n> **Warning:** `zone` is deprecated and will be removed in a future major release. Use `location` instead.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location of the instance. This can be a region for ENTERPRISE tier instances.",
      ),
    ];
  }
}
