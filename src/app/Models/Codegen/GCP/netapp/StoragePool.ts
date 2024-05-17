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
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The resource name of the storage pool. Needs to be unique per location.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Specifies the Active Directory policy to be used. Format: `projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}`.
The policy needs to be in the same location as the storage pool.
*/
  ActiveDirectory?: string;

  // Capacity of the storage pool (in GiB).
  CapacityGib?: string;

  // An optional description of this resource.
  Description?: string;

  // VPC network name with format: `projects/{{project}}/global/networks/{{network}}`
  Network?: string;

  /*
Service level of the storage pool.
Possible values are: `PREMIUM`, `EXTREME`, `STANDARD`.
*/
  ServiceLevel?: string;

  /*
Specifies the CMEK policy to be used for volume encryption. Format: `projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}`.
The policy needs to be in the same location as the storage pool.
*/
  KmsConfig?: string;

  /*
When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.
*/
  LdapEnabled?: boolean;

  // Name of the location. Usually a region name, expect for some STANDARD service level pools which require a zone name.
  Location?: string;
}
export class StoragePool extends Resource {
  /*
Specifies the Active Directory policy to be used. Format: `projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}`.
The policy needs to be in the same location as the storage pool.
*/
  public ActiveDirectory?: string;

  /*
When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.
*/
  public LdapEnabled?: boolean;

  /*
Service level of the storage pool.
Possible values are: `PREMIUM`, `EXTREME`, `STANDARD`.
*/
  public ServiceLevel?: string;

  // Size allocated to volumes in the storage pool (in GiB).
  public VolumeCapacityGib?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Capacity of the storage pool (in GiB).
  public CapacityGib?: string;

  // An optional description of this resource.
  public Description?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Name of the location. Usually a region name, expect for some STANDARD service level pools which require a zone name.
  public Location?: string;

  /*
The resource name of the storage pool. Needs to be unique per location.


- - -
*/
  public Name?: string;

  /*
Specifies the CMEK policy to be used for volume encryption. Format: `projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}`.
The policy needs to be in the same location as the storage pool.
*/
  public KmsConfig?: string;

  // VPC network name with format: `projects/{{project}}/global/networks/{{network}}`
  public Network?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Number of volume in the storage pool.
  public VolumeCount?: number;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Reports if volumes in the pool are encrypted using a Google-managed encryption key or CMEK.
  public EncryptionType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Name of the location. Usually a region name, expect for some STANDARD service level pools which require a zone name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ActiveDirectory",
        "Specifies the Active Directory policy to be used. Format: `projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}`.\nThe policy needs to be in the same location as the storage pool.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceLevel",
        "Service level of the storage pool.\nPossible values are: `PREMIUM`, `EXTREME`, `STANDARD`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "LdapEnabled",
        "When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. Required to enable extended group support for NFSv3,\nusing security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "VPC network name with format: `projects/{{project}}/global/networks/{{network}}`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsConfig",
        "Specifies the CMEK policy to be used for volume encryption. Format: `projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}`.\nThe policy needs to be in the same location as the storage pool.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the storage pool. Needs to be unique per location.\n\n\n- - -",
        [],
        false,
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
        InputType.String,
        "CapacityGib",
        "Capacity of the storage pool (in GiB).",
        [],
        true,
        false,
      ),
    ];
  }
}
