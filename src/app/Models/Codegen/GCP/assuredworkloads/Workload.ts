import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { WorkloadEkmProvisioningResponse } from "../types/WorkloadEkmProvisioningResponse";
import { WorkloadResource } from "../types/WorkloadResource";
import { WorkloadKmsSettings } from "../types/WorkloadKmsSettings";
import { WorkloadPartnerPermissions } from "../types/WorkloadPartnerPermissions";
import { WorkloadResourceSetting } from "../types/WorkloadResourceSetting";
import { WorkloadSaaEnrollmentResponse } from "../types/WorkloadSaaEnrollmentResponse";
import { WorkloadComplianceStatus } from "../types/WorkloadComplianceStatus";

export interface WorkloadArgs {
  // Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN
  Partner?: string;

  // The location for the resource
  Location?: string;

  /*
The organization for the resource



- - -
*/
  Organization?: string;

  // Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
  DisplayName?: string;

  // Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
  EnableSovereignControls?: boolean;

  // --DEPRECATED-- Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
  KmsSettings?: WorkloadKmsSettings;

  /*
Optional. Labels applied to the workload.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Optional. Permissions granted to the AW Partner SA account for the customer workload
  PartnerPermissions?: WorkloadPartnerPermissions;

  // Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}
  ProvisionedResourcesParent?: string;

  // Optional. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
  BillingAccount?: string;

  // Required. Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT
  ComplianceRegime?: string;

  // Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.
  ResourceSettings?: Array<WorkloadResourceSetting>;

  // Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.
  ViolationNotificationsEnabled?: boolean;
}
export class Workload extends Resource {
  // Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during workloads.get call. In failure cases, user friendly error message is shown in SAA details page.
  public SaaEnrollmentResponses?: Array<WorkloadSaaEnrollmentResponse>;

  // Optional. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
  public BillingAccount?: string;

  // Output only. Count of active Violations in the Workload.
  public ComplianceStatuses?: Array<WorkloadComplianceStatus>;

  // Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke workloads.restrictAllowedResources endpoint to allow your project developers to use these services in their environment.
  public CompliantButDisallowedServices?: Array<string>;

  // Optional. Represents the Ekm Provisioning State of the given workload.
  public EkmProvisioningResponses?: Array<WorkloadEkmProvisioningResponse>;

  // Optional. Permissions granted to the AW Partner SA account for the customer workload
  public PartnerPermissions?: WorkloadPartnerPermissions;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.
  public ResourceSettings?: Array<WorkloadResourceSetting>;

  // Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.
  public ViolationNotificationsEnabled?: boolean;

  // Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN
  public Partner?: string;

  // Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
  public DisplayName?: string;

  // Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
  public EnableSovereignControls?: boolean;

  // Output only. Represents the KAJ enrollment state of the given workload. Possible values: KAJ_ENROLLMENT_STATE_UNSPECIFIED, KAJ_ENROLLMENT_STATE_PENDING, KAJ_ENROLLMENT_STATE_COMPLETE
  public KajEnrollmentState?: string;

  // --DEPRECATED-- Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
  public KmsSettings?: WorkloadKmsSettings;

  /*
Optional. Labels applied to the workload.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Output only. The resource name of the workload.
  public Name?: string;

  /*
The organization for the resource



- - -
*/
  public Organization?: string;

  // Required. Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT
  public ComplianceRegime?: string;

  // Output only. Immutable. The Workload creation timestamp.
  public CreateTime?: string;

  // The location for the resource
  public Location?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}
  public ProvisionedResourcesParent?: string;

  // Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.
  public Resources?: Array<WorkloadResource>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsSettings",
        "**DEPRECATED** Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Optional. Labels applied to the workload.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PartnerPermissions",
        "Optional. Permissions granted to the AW Partner SA account for the customer workload",
      ),
      new DynamicUIProps(
        InputType.String,
        "Partner",
        "Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "The organization for the resource\n\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ComplianceRegime",
        "Required. Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ResourceSettings",
        "Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ViolationNotificationsEnabled",
        "Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableSovereignControls",
        "Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ProvisionedResourcesParent",
        "Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}",
      ),
      new DynamicUIProps(
        InputType.String,
        "BillingAccount",
        "Optional. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.",
      ),
    ];
  }
}
