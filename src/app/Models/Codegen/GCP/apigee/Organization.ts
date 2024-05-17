import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_OrganizationProperties,
  Apigee_OrganizationProperties_GetTypes,
} from "../types/Apigee_OrganizationProperties";

export interface OrganizationArgs {
  /*
Properties defined in the Apigee organization profile.
Structure is documented below.
*/
  Properties?: Apigee_OrganizationProperties;

  // Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).
  BillingType?: string;

  // Description of the Apigee organization.
  Description?: string;

  /*
Flag that specifies whether the VPC Peering through Private Google Access should be
disabled between the consumer network and Apigee. Required if an `authorizedNetwork`
on the consumer project is not provided, in which case the flag should be set to `true`.
Valid only when `RuntimeType` is set to CLOUD. The value must be set before the creation
of any Apigee runtime instance and can be updated only when there are no runtime instances.
*/
  DisableVpcPeering?: boolean;

  // The display name of the Apigee organization.
  DisplayName?: string;

  /*
The project ID associated with the Apigee organization.


- - -
*/
  ProjectId?: string;

  /*
Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType
is not EVALUATION). It controls how long Organization data will be retained after the initial delete
operation completes. During this period, the Organization may be restored to its last known state.
After this period, the Organization will no longer be able to be restored.
Default value is `DELETION_RETENTION_UNSPECIFIED`.
Possible values are: `DELETION_RETENTION_UNSPECIFIED`, `MINIMUM`.
*/
  Retention?: string;

  /*
Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.
Update is not allowed after the organization is created.
If not specified, a Google-Managed encryption key will be used.
Valid only when `RuntimeType` is CLOUD. For example: `projects/foo/locations/us/keyRings/bar/cryptoKeys/baz`.
*/
  RuntimeDatabaseEncryptionKeyName?: string;

  /*
Runtime type of the Apigee organization based on the Apigee subscription purchased.
Default value is `CLOUD`.
Possible values are: `CLOUD`, `HYBRID`.
*/
  RuntimeType?: string;

  // Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
  AnalyticsRegion?: string;

  /*
Compute Engine network used for Service Networking to be peered with Apigee runtime instances.
See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
Valid only when `RuntimeType` is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".
*/
  AuthorizedNetwork?: string;
}
export class Organization extends Resource {
  /*
Output only. Base64-encoded public certificate for the root CA of the Apigee organization.
Valid only when `RuntimeType` is CLOUD. A base64-encoded string.
*/
  public CaCertificate?: string;

  // Description of the Apigee organization.
  public Description?: string;

  /*
Properties defined in the Apigee organization profile.
Structure is documented below.
*/
  public Properties?: Apigee_OrganizationProperties;

  /*
Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.
Update is not allowed after the organization is created.
If not specified, a Google-Managed encryption key will be used.
Valid only when `RuntimeType` is CLOUD. For example: `projects/foo/locations/us/keyRings/bar/cryptoKeys/baz`.
*/
  public RuntimeDatabaseEncryptionKeyName?: string;

  /*
Runtime type of the Apigee organization based on the Apigee subscription purchased.
Default value is `CLOUD`.
Possible values are: `CLOUD`, `HYBRID`.
*/
  public RuntimeType?: string;

  /*
Output only. Subscription type of the Apigee organization.
Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased).
*/
  public SubscriptionType?: string;

  // Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
  public AnalyticsRegion?: string;

  // Output only. Project ID of the Apigee Tenant Project.
  public ApigeeProjectId?: string;

  /*
Compute Engine network used for Service Networking to be peered with Apigee runtime instances.
See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
Valid only when `RuntimeType` is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".
*/
  public AuthorizedNetwork?: string;

  // Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).
  public BillingType?: string;

  // Name of the property.
  public Name?: string;

  /*
The project ID associated with the Apigee organization.


- - -
*/
  public ProjectId?: string;

  /*
Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType
is not EVALUATION). It controls how long Organization data will be retained after the initial delete
operation completes. During this period, the Organization may be restored to its last known state.
After this period, the Organization will no longer be able to be restored.
Default value is `DELETION_RETENTION_UNSPECIFIED`.
Possible values are: `DELETION_RETENTION_UNSPECIFIED`, `MINIMUM`.
*/
  public Retention?: string;

  /*
Flag that specifies whether the VPC Peering through Private Google Access should be
disabled between the consumer network and Apigee. Required if an `authorizedNetwork`
on the consumer project is not provided, in which case the flag should be set to `true`.
Valid only when `RuntimeType` is set to CLOUD. The value must be set before the creation
of any Apigee runtime instance and can be updated only when there are no runtime instances.
*/
  public DisableVpcPeering?: boolean;

  // The display name of the Apigee organization.
  public DisplayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BillingType",
        "Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ProjectId",
        "The project ID associated with the Apigee organization.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "RuntimeDatabaseEncryptionKeyName",
        "Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.\nUpdate is not allowed after the organization is created.\nIf not specified, a Google-Managed encryption key will be used.\nValid only when `RuntimeType` is CLOUD. For example: `projects/foo/locations/us/keyRings/bar/cryptoKeys/baz`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "RuntimeType",
        "Runtime type of the Apigee organization based on the Apigee subscription purchased.\nDefault value is `CLOUD`.\nPossible values are: `CLOUD`, `HYBRID`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "AnalyticsRegion",
        "Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "AuthorizedNetwork",
        'Compute Engine network used for Service Networking to be peered with Apigee runtime instances.\nSee [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).\nValid only when `RuntimeType` is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Properties",
        "Properties defined in the Apigee organization profile.\nStructure is documented below.",
        Apigee_OrganizationProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the Apigee organization.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DisableVpcPeering",
        "Flag that specifies whether the VPC Peering through Private Google Access should be\ndisabled between the consumer network and Apigee. Required if an `authorizedNetwork`\non the consumer project is not provided, in which case the flag should be set to `true`.\nValid only when `RuntimeType` is set to CLOUD. The value must be set before the creation\nof any Apigee runtime instance and can be updated only when there are no runtime instances.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name of the Apigee organization.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Retention",
        "Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType\nis not EVALUATION). It controls how long Organization data will be retained after the initial delete\noperation completes. During this period, the Organization may be restored to its last known state.\nAfter this period, the Organization will no longer be able to be restored.\nDefault value is `DELETION_RETENTION_UNSPECIFIED`.\nPossible values are: `DELETION_RETENTION_UNSPECIFIED`, `MINIMUM`.",
        [],
        false,
        false,
      ),
    ];
  }
}
