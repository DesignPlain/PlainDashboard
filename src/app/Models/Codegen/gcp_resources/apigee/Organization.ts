import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apigee_OrganizationProperties,
  apigee_OrganizationProperties_GetTypes,
} from "../types/apigee_OrganizationProperties";

export interface OrganizationArgs {
  // Description of the Apigee organization.
  description?: string;

  /*
Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType
is not EVALUATION). It controls how long Organization data will be retained after the initial delete
operation completes. During this period, the Organization may be restored to its last known state.
After this period, the Organization will no longer be able to be restored.
Default value is `DELETION_RETENTION_UNSPECIFIED`.
Possible values are: `DELETION_RETENTION_UNSPECIFIED`, `MINIMUM`.
*/
  retention?: string;

  /*
Properties defined in the Apigee organization profile.
Structure is documented below.
*/
  properties?: apigee_OrganizationProperties;

  /*
Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.
Update is not allowed after the organization is created.
If not specified, a Google-Managed encryption key will be used.
Valid only when `RuntimeType` is CLOUD. For example: `projects/foo/locations/us/keyRings/bar/cryptoKeys/baz`.
*/
  runtimeDatabaseEncryptionKeyName?: string;

  // Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
  analyticsRegion?: string;

  /*
Compute Engine network used for Service Networking to be peered with Apigee runtime instances.
See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
Valid only when `RuntimeType` is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".
*/
  authorizedNetwork?: string;

  // Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).
  billingType?: string;

  /*
Flag that specifies whether the VPC Peering through Private Google Access should be
disabled between the consumer network and Apigee. Required if an `authorizedNetwork`
on the consumer project is not provided, in which case the flag should be set to `true`.
Valid only when `RuntimeType` is set to CLOUD. The value must be set before the creation
of any Apigee runtime instance and can be updated only when there are no runtime instances.
*/
  disableVpcPeering?: boolean;

  // The display name of the Apigee organization.
  displayName?: string;

  /*
The project ID associated with the Apigee organization.


- - -
*/
  projectId?: string;

  /*
Runtime type of the Apigee organization based on the Apigee subscription purchased.
Default value is `CLOUD`.
Possible values are: `CLOUD`, `HYBRID`.
*/
  runtimeType?: string;
}
export class Organization extends Resource {
  /*
Output only. Base64-encoded public certificate for the root CA of the Apigee organization.
Valid only when `RuntimeType` is CLOUD. A base64-encoded string.
*/
  public caCertificate?: string;

  // The display name of the Apigee organization.
  public displayName?: string;

  // Description of the Apigee organization.
  public description?: string;

  /*
Flag that specifies whether the VPC Peering through Private Google Access should be
disabled between the consumer network and Apigee. Required if an `authorizedNetwork`
on the consumer project is not provided, in which case the flag should be set to `true`.
Valid only when `RuntimeType` is set to CLOUD. The value must be set before the creation
of any Apigee runtime instance and can be updated only when there are no runtime instances.
*/
  public disableVpcPeering?: boolean;

  /*
Properties defined in the Apigee organization profile.
Structure is documented below.
*/
  public properties?: apigee_OrganizationProperties;

  /*
Runtime type of the Apigee organization based on the Apigee subscription purchased.
Default value is `CLOUD`.
Possible values are: `CLOUD`, `HYBRID`.
*/
  public runtimeType?: string;

  // Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
  public analyticsRegion?: string;

  // Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).
  public billingType?: string;

  /*
The project ID associated with the Apigee organization.


- - -
*/
  public projectId?: string;

  // Output only. Project ID of the Apigee Tenant Project.
  public apigeeProjectId?: string;

  /*
Compute Engine network used for Service Networking to be peered with Apigee runtime instances.
See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
Valid only when `RuntimeType` is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".
*/
  public authorizedNetwork?: string;

  /*
Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.
Update is not allowed after the organization is created.
If not specified, a Google-Managed encryption key will be used.
Valid only when `RuntimeType` is CLOUD. For example: `projects/foo/locations/us/keyRings/bar/cryptoKeys/baz`.
*/
  public runtimeDatabaseEncryptionKeyName?: string;

  /*
Output only. Subscription type of the Apigee organization.
Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased).
*/
  public subscriptionType?: string;

  // Name of the property.
  public name?: string;

  /*
Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType
is not EVALUATION). It controls how long Organization data will be retained after the initial delete
operation completes. During this period, the Organization may be restored to its last known state.
After this period, the Organization will no longer be able to be restored.
Default value is `DELETION_RETENTION_UNSPECIFIED`.
Possible values are: `DELETION_RETENTION_UNSPECIFIED`, `MINIMUM`.
*/
  public retention?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "disableVpcPeering",
        "Flag that specifies whether the VPC Peering through Private Google Access should be\ndisabled between the consumer network and Apigee. Required if an `authorizedNetwork`\non the consumer project is not provided, in which case the flag should be set to `true`.\nValid only when `RuntimeType` is set to CLOUD. The value must be set before the creation\nof any Apigee runtime instance and can be updated only when there are no runtime instances.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "projectId",
        "The project ID associated with the Apigee organization.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "retention",
        "Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType\nis not EVALUATION). It controls how long Organization data will be retained after the initial delete\noperation completes. During this period, the Organization may be restored to its last known state.\nAfter this period, the Organization will no longer be able to be restored.\nDefault value is `DELETION_RETENTION_UNSPECIFIED`.\nPossible values are: `DELETION_RETENTION_UNSPECIFIED`, `MINIMUM`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "properties",
        "Properties defined in the Apigee organization profile.\nStructure is documented below.",
        apigee_OrganizationProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "runtimeDatabaseEncryptionKeyName",
        "Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.\nUpdate is not allowed after the organization is created.\nIf not specified, a Google-Managed encryption key will be used.\nValid only when `RuntimeType` is CLOUD. For example: `projects/foo/locations/us/keyRings/bar/cryptoKeys/baz`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "billingType",
        "Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "runtimeType",
        "Runtime type of the Apigee organization based on the Apigee subscription purchased.\nDefault value is `CLOUD`.\nPossible values are: `CLOUD`, `HYBRID`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the Apigee organization.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "analyticsRegion",
        "Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizedNetwork",
        'Compute Engine network used for Service Networking to be peered with Apigee runtime instances.\nSee [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).\nValid only when `RuntimeType` is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The display name of the Apigee organization.",
        [],
        false,
        false,
      ),
    ];
  }
}
