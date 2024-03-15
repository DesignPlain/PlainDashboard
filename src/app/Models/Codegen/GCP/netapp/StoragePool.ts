import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface StoragePoolArgs {
  // VPC network name with format: `projects/{{project}}/global/networks/{{network}}`
  Network?: string;

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

  /*
Specifies the CMEK policy to be used for volume encryption. Format: `projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}`.
The policy needs to be in the same location as the storage pool.
*/
  KmsConfig?: string;

  // Name of the location. Usually a region name, expect for some STANDARD service level pools which require a zone name.
  Location?: string;

  /*
The resource name of the storage pool. Needs to be unique per location.


- - -
*/
  Name?: string;

  /*
Service level of the storage pool.
Possible values are: `PREMIUM`, `EXTREME`, `STANDARD`.
*/
  ServiceLevel?: string;

  // An optional description of this resource.
  Description?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.
*/
  LdapEnabled?: boolean;
}
export class StoragePool extends Resource {
  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Size allocated to volumes in the storage pool (in GiB).
  public VolumeCapacityGib?: string;

  // Number of volume in the storage pool.
  public VolumeCount?: number;

  /*
Specifies the CMEK policy to be used for volume encryption. Format: `projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}`.
The policy needs to be in the same location as the storage pool.
*/
  public KmsConfig?: string;

  // Reports if volumes in the pool are encrypted using a Google-managed encryption key or CMEK.
  public EncryptionType?: string;

  // VPC network name with format: `projects/{{project}}/global/networks/{{network}}`
  public Network?: string;

  // Capacity of the storage pool (in GiB).
  public CapacityGib?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.
*/
  public LdapEnabled?: boolean;

  /*
The resource name of the storage pool. Needs to be unique per location.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // An optional description of this resource.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Name of the location. Usually a region name, expect for some STANDARD service level pools which require a zone name.
  public Location?: string;

  /*
Service level of the storage pool.
Possible values are: `PREMIUM`, `EXTREME`, `STANDARD`.
*/
  public ServiceLevel?: string;

  /*
Specifies the Active Directory policy to be used. Format: `projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}`.
The policy needs to be in the same location as the storage pool.
*/
  public ActiveDirectory?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.CheckBox,
        "LdapEnabled",
        "When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. Required to enable extended group support for NFSv3,\nusing security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "VPC network name with format: `projects/{{project}}/global/networks/{{network}}`",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Name of the location. Usually a region name, expect for some STANDARD service level pools which require a zone name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceLevel",
        "Service level of the storage pool.\nPossible values are: `PREMIUM`, `EXTREME`, `STANDARD`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
      new DynamicUIProps(
        InputType.String,
        "ActiveDirectory",
        "Specifies the Active Directory policy to be used. Format: `projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}`.\nThe policy needs to be in the same location as the storage pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CapacityGib",
        "Capacity of the storage pool (in GiB).",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsConfig",
        "Specifies the CMEK policy to be used for volume encryption. Format: `projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}`.\nThe policy needs to be in the same location as the storage pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the storage pool. Needs to be unique per location.\n\n\n- - -",
      ),
    ];
  }
}
