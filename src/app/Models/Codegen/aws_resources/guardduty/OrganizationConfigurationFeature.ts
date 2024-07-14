import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  guardduty_OrganizationConfigurationFeatureAdditionalConfiguration,
  guardduty_OrganizationConfigurationFeatureAdditionalConfiguration_GetTypes,
} from "../types/guardduty_OrganizationConfigurationFeatureAdditionalConfiguration";

export interface OrganizationConfigurationFeatureArgs {
  // The additional information that will be configured for the organization See below.
  additionalConfigurations?: Array<guardduty_OrganizationConfigurationFeatureAdditionalConfiguration>;

  // The status of the feature that is configured for the member accounts within the organization. Valid values: `NEW`, `ALL`, `NONE`.
  autoEnable?: string;

  // The ID of the detector that configures the delegated administrator.
  detectorId?: string;

  // The name of the feature that will be configured for the organization. Valid values: `S3_DATA_EVENTS`, `EKS_AUDIT_LOGS`, `EBS_MALWARE_PROTECTION`, `RDS_LOGIN_EVENTS`, `EKS_RUNTIME_MONITORING`, `LAMBDA_NETWORK_LOGS`.
  name?: string;
}
export class OrganizationConfigurationFeature extends Resource {
  // The additional information that will be configured for the organization See below.
  public additionalConfigurations?: Array<guardduty_OrganizationConfigurationFeatureAdditionalConfiguration>;

  // The status of the feature that is configured for the member accounts within the organization. Valid values: `NEW`, `ALL`, `NONE`.
  public autoEnable?: string;

  // The ID of the detector that configures the delegated administrator.
  public detectorId?: string;

  // The name of the feature that will be configured for the organization. Valid values: `S3_DATA_EVENTS`, `EKS_AUDIT_LOGS`, `EBS_MALWARE_PROTECTION`, `RDS_LOGIN_EVENTS`, `EKS_RUNTIME_MONITORING`, `LAMBDA_NETWORK_LOGS`.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "additionalConfigurations",
        "The additional information that will be configured for the organization See below.",
        guardduty_OrganizationConfigurationFeatureAdditionalConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoEnable",
        "The status of the feature that is configured for the member accounts within the organization. Valid values: `NEW`, `ALL`, `NONE`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "detectorId",
        "The ID of the detector that configures the delegated administrator.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the feature that will be configured for the organization. Valid values: `S3_DATA_EVENTS`, `EKS_AUDIT_LOGS`, `EBS_MALWARE_PROTECTION`, `RDS_LOGIN_EVENTS`, `EKS_RUNTIME_MONITORING`, `LAMBDA_NETWORK_LOGS`.",
        [],
        false,
        true,
      ),
    ];
  }
}
