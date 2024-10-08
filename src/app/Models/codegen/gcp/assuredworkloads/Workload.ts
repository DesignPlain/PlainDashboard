import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  assuredworkloads_WorkloadSaaEnrollmentResponse,
  assuredworkloads_WorkloadSaaEnrollmentResponse_GetTypes,
} from '../types/assuredworkloads_WorkloadSaaEnrollmentResponse';
import {
  assuredworkloads_WorkloadResourceSetting,
  assuredworkloads_WorkloadResourceSetting_GetTypes,
} from '../types/assuredworkloads_WorkloadResourceSetting';
import {
  assuredworkloads_WorkloadKmsSettings,
  assuredworkloads_WorkloadKmsSettings_GetTypes,
} from '../types/assuredworkloads_WorkloadKmsSettings';
import {
  assuredworkloads_WorkloadPartnerPermissions,
  assuredworkloads_WorkloadPartnerPermissions_GetTypes,
} from '../types/assuredworkloads_WorkloadPartnerPermissions';
import {
  assuredworkloads_WorkloadComplianceStatus,
  assuredworkloads_WorkloadComplianceStatus_GetTypes,
} from '../types/assuredworkloads_WorkloadComplianceStatus';
import {
  assuredworkloads_WorkloadEkmProvisioningResponse,
  assuredworkloads_WorkloadEkmProvisioningResponse_GetTypes,
} from '../types/assuredworkloads_WorkloadEkmProvisioningResponse';
import {
  assuredworkloads_WorkloadResource,
  assuredworkloads_WorkloadResource_GetTypes,
} from '../types/assuredworkloads_WorkloadResource';

export interface WorkloadArgs {
  // Required. Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT
  complianceRegime?: string;

  // Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
  displayName?: string;

  /*
Optional. Labels applied to the workload.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN
  partner?: string;

  // Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.
  violationNotificationsEnabled?: boolean;

  // Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.
  resourceSettings?: Array<assuredworkloads_WorkloadResourceSetting>;

  // Optional. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
  billingAccount?: string;

  // Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
  enableSovereignControls?: boolean;

  // --DEPRECATED-- Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
  kmsSettings?: assuredworkloads_WorkloadKmsSettings;

  // The location for the resource
  location?: string;

  /*
The organization for the resource



- - -
*/
  organization?: string;

  // Optional. Permissions granted to the AW Partner SA account for the customer workload
  partnerPermissions?: assuredworkloads_WorkloadPartnerPermissions;

  // Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}
  provisionedResourcesParent?: string;
}
export class Workload extends DS_Resource {
  // Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}
  public provisionedResourcesParent?: string;

  // Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.
  public violationNotificationsEnabled?: boolean;

  // Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke workloads.restrictAllowedResources endpoint to allow your project developers to use these services in their environment.
  public compliantButDisallowedServices?: Array<string>;

  // Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
  public displayName?: string;

  /*
The organization for the resource



- - -
*/
  public organization?: string;

  // Optional. Permissions granted to the AW Partner SA account for the customer workload
  public partnerPermissions?: assuredworkloads_WorkloadPartnerPermissions;

  // Output only. Count of active Violations in the Workload.
  public complianceStatuses?: Array<assuredworkloads_WorkloadComplianceStatus>;

  // Output only. Represents the KAJ enrollment state of the given workload. Possible values: KAJ_ENROLLMENT_STATE_UNSPECIFIED, KAJ_ENROLLMENT_STATE_PENDING, KAJ_ENROLLMENT_STATE_COMPLETE
  public kajEnrollmentState?: string;

  /*
Optional. Labels applied to the workload.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The location for the resource
  public location?: string;

  // Output only. The resource name of the workload.
  public name?: string;

  // Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN
  public partner?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.
  public resourceSettings?: Array<assuredworkloads_WorkloadResourceSetting>;

  // Optional. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
  public billingAccount?: string;

  // Optional. Represents the Ekm Provisioning State of the given workload.
  public ekmProvisioningResponses?: Array<assuredworkloads_WorkloadEkmProvisioningResponse>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
  public enableSovereignControls?: boolean;

  // --DEPRECATED-- Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
  public kmsSettings?: assuredworkloads_WorkloadKmsSettings;

  // Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.
  public resources?: Array<assuredworkloads_WorkloadResource>;

  // Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during workloads.get call. In failure cases, user friendly error message is shown in SAA details page.
  public saaEnrollmentResponses?: Array<assuredworkloads_WorkloadSaaEnrollmentResponse>;

  // Required. Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT
  public complianceRegime?: string;

  // Output only. Immutable. The Workload creation timestamp.
  public createTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'complianceRegime',
        'Required. Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Optional. Labels applied to the workload.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'partner',
        'Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'billingAccount',
        'Optional. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location for the resource',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'organization',
        'The organization for the resource\n\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'violationNotificationsEnabled',
        'Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'resourceSettings',
        'Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.',
        () => assuredworkloads_WorkloadResourceSetting_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableSovereignControls',
        'Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'kmsSettings',
        '**DEPRECATED** Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.',
        () => assuredworkloads_WorkloadKmsSettings_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'partnerPermissions',
        'Optional. Permissions granted to the AW Partner SA account for the customer workload',
        () => assuredworkloads_WorkloadPartnerPermissions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'provisionedResourcesParent',
        'Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}',
        () => [],
        false,
        true,
      ),
    ];
  }
}
