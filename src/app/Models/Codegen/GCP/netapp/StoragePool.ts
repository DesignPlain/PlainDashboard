import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface StoragePoolArgs {
  /*
Specifies the Active Directory policy to be used. Format: `projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}`.
The policy needs to be in the same location as the storage pool.
*/
  activeDirectory?: string;

  // Capacity of the storage pool (in GiB).
  capacityGib?: string;

  /*
Specifies the CMEK policy to be used for volume encryption. Format: `projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}`.
The policy needs to be in the same location as the storage pool.
*/
  kmsConfig?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // Name of the location. Usually a region name, expect for some STANDARD service level pools which require a zone name.
  location?: string;

  /*
The resource name of the storage pool. Needs to be unique per location.


- - -
*/
  name?: string;

  // An optional description of this resource.
  description?: string;

  /*
When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.
*/
  ldapEnabled?: boolean;

  // VPC network name with format: `projects/{{project}}/global/networks/{{network}}`
  network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Service level of the storage pool.
Possible values are: `PREMIUM`, `EXTREME`, `STANDARD`.
*/
  serviceLevel?: string;
}
export class StoragePool extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Service level of the storage pool.
Possible values are: `PREMIUM`, `EXTREME`, `STANDARD`.
*/
  public serviceLevel?: string;

  // Reports if volumes in the pool are encrypted using a Google-managed encryption key or CMEK.
  public encryptionType?: string;

  /*
When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.
*/
  public ldapEnabled?: boolean;

  // Name of the location. Usually a region name, expect for some STANDARD service level pools which require a zone name.
  public location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Number of volume in the storage pool.
  public volumeCount?: number;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // VPC network name with format: `projects/{{project}}/global/networks/{{network}}`
  public network?: string;

  // Size allocated to volumes in the storage pool (in GiB).
  public volumeCapacityGib?: string;

  // Capacity of the storage pool (in GiB).
  public capacityGib?: string;

  /*
Specifies the CMEK policy to be used for volume encryption. Format: `projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}`.
The policy needs to be in the same location as the storage pool.
*/
  public kmsConfig?: string;

  /*
The resource name of the storage pool. Needs to be unique per location.


- - -
*/
  public name?: string;

  /*
Specifies the Active Directory policy to be used. Format: `projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}`.
The policy needs to be in the same location as the storage pool.
*/
  public activeDirectory?: string;

  // An optional description of this resource.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "location",
        "Name of the location. Usually a region name, expect for some STANDARD service level pools which require a zone name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ldapEnabled",
        "When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. Required to enable extended group support for NFSv3,\nusing security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "VPC network name with format: `projects/{{project}}/global/networks/{{network}}`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsConfig",
        "Specifies the CMEK policy to be used for volume encryption. Format: `projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}`.\nThe policy needs to be in the same location as the storage pool.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "capacityGib",
        "Capacity of the storage pool (in GiB).",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name of the storage pool. Needs to be unique per location.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceLevel",
        "Service level of the storage pool.\nPossible values are: `PREMIUM`, `EXTREME`, `STANDARD`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "activeDirectory",
        "Specifies the Active Directory policy to be used. Format: `projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}`.\nThe policy needs to be in the same location as the storage pool.",
        [],
        false,
        false,
      ),
    ];
  }
}
