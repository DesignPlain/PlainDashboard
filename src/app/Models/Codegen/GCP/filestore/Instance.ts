import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Filestore_InstanceFileShares,
  Filestore_InstanceFileShares_GetTypes,
} from "../types/Filestore_InstanceFileShares";
import {
  Filestore_InstanceNetwork,
  Filestore_InstanceNetwork_GetTypes,
} from "../types/Filestore_InstanceNetwork";

export interface InstanceArgs {
  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
  Location?: string;

  // A description of the instance.
  Description?: string;

  // KMS key name used for data encryption.
  KmsKeyName?: string;

  // The resource name of the instance.
  Name?: string;

  /*
VPC networks to which the instance is connected. For this version,
only a single network is supported.
Structure is documented below.
*/
  Networks?: Array<Filestore_InstanceNetwork>;

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

  /*
(Optional, Deprecated)
The name of the Filestore zone of the instance.

> --Warning:-- `zone` is deprecated and will be removed in a future major release. Use `location` instead.
*/
  Zone?: string;

  /*
File system shares on the instance. For this version, only a
single file share is supported.
Structure is documented below.
*/
  FileShares?: Filestore_InstanceFileShares;
}
export class Instance extends Resource {
  // Creation timestamp in RFC3339 text format.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // KMS key name used for data encryption.
  public KmsKeyName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The service tier of the instance.
Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE
*/
  public Tier?: string;

  /*
(Optional, Deprecated)
The name of the Filestore zone of the instance.

> --Warning:-- `zone` is deprecated and will be removed in a future major release. Use `location` instead.
*/
  public Zone?: string;

  // A description of the instance.
  public Description?: string;

  /*
File system shares on the instance. For this version, only a
single file share is supported.
Structure is documented below.
*/
  public FileShares?: Filestore_InstanceFileShares;

  // The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
  public Location?: string;

  // The resource name of the instance.
  public Name?: string;

  /*
Server-specified ETag for the instance resource to prevent
simultaneous updates from overwriting each other.
*/
  public Etag?: string;

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
  public Networks?: Array<Filestore_InstanceNetwork>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location of the instance. This can be a region for ENTERPRISE tier instances.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "KMS key name used for data encryption.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Tier",
        "The service tier of the instance.\nPossible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "(Optional, Deprecated)\nThe name of the Filestore zone of the instance.\n\n> **Warning:** `zone` is deprecated and will be removed in a future major release. Use `location` instead.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Networks",
        "VPC networks to which the instance is connected. For this version,\nonly a single network is supported.\nStructure is documented below.",
        Filestore_InstanceNetwork_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "FileShares",
        "File system shares on the instance. For this version, only a\nsingle file share is supported.\nStructure is documented below.",
        Filestore_InstanceFileShares_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
