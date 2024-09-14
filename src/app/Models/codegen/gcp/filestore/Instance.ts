import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  filestore_InstanceNetwork,
  filestore_InstanceNetwork_GetTypes,
} from "../types/filestore_InstanceNetwork";
import {
  filestore_InstanceFileShares,
  filestore_InstanceFileShares_GetTypes,
} from "../types/filestore_InstanceFileShares";

export interface InstanceArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The service tier of the instance.
Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE
*/
  tier?: string;

  /*
(Optional, Deprecated)
The name of the Filestore zone of the instance.

> --Warning:-- `zone` is deprecated and will be removed in a future major release. Use `location` instead.
*/
  zone?: string;

  /*
VPC networks to which the instance is connected. For this version,
only a single network is supported.
Structure is documented below.
*/
  networks?: Array<filestore_InstanceNetwork>;

  /*
File system shares on the instance. For this version, only a
single file share is supported.
Structure is documented below.
*/
  fileShares?: filestore_InstanceFileShares;

  // KMS key name used for data encryption.
  kmsKeyName?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
  location?: string;

  // The resource name of the instance.
  name?: string;

  // A description of the instance.
  description?: string;
}
export class Instance extends DS_Resource {
  /*
The service tier of the instance.
Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE
*/
  public tier?: string;

  // A description of the instance.
  public description?: string;

  // KMS key name used for data encryption.
  public kmsKeyName?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Creation timestamp in RFC3339 text format.
  public createTime?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
(Optional, Deprecated)
The name of the Filestore zone of the instance.

> --Warning:-- `zone` is deprecated and will be removed in a future major release. Use `location` instead.
*/
  public zone?: string;

  /*
Server-specified ETag for the instance resource to prevent
simultaneous updates from overwriting each other.
*/
  public etag?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The resource name of the instance.
  public name?: string;

  /*
VPC networks to which the instance is connected. For this version,
only a single network is supported.
Structure is documented below.
*/
  public networks?: Array<filestore_InstanceNetwork>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
File system shares on the instance. For this version, only a
single file share is supported.
Structure is documented below.
*/
  public fileShares?: filestore_InstanceFileShares;

  // The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "zone",
        "(Optional, Deprecated)\nThe name of the Filestore zone of the instance.\n\n> **Warning:** `zone` is deprecated and will be removed in a future major release. Use `location` instead.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyName",
        "KMS key name used for data encryption.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The name of the location of the instance. This can be a region for ENTERPRISE tier instances.",
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
        "tier",
        "The service tier of the instance.\nPossible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "networks",
        "VPC networks to which the instance is connected. For this version,\nonly a single network is supported.\nStructure is documented below.",
        () => filestore_InstanceNetwork_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "fileShares",
        "File system shares on the instance. For this version, only a\nsingle file share is supported.\nStructure is documented below.",
        () => filestore_InstanceFileShares_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name of the instance.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the instance.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
