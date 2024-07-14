import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  guardduty_DetectorFeatureAdditionalConfiguration,
  guardduty_DetectorFeatureAdditionalConfiguration_GetTypes,
} from "../types/guardduty_DetectorFeatureAdditionalConfiguration";

export interface DetectorFeatureArgs {
  // Amazon GuardDuty detector ID.
  detectorId?: string;

  // The name of the detector feature. Valid values: `S3_DATA_EVENTS`, `EKS_AUDIT_LOGS`, `EBS_MALWARE_PROTECTION`, `RDS_LOGIN_EVENTS`, `EKS_RUNTIME_MONITORING`, `LAMBDA_NETWORK_LOGS`.
  name?: string;

  // The status of the detector feature. Valid values: `ENABLED`, `DISABLED`.
  status?: string;

  // Additional feature configuration block. See below.
  additionalConfigurations?: Array<guardduty_DetectorFeatureAdditionalConfiguration>;
}
export class DetectorFeature extends Resource {
  // Amazon GuardDuty detector ID.
  public detectorId?: string;

  // The name of the detector feature. Valid values: `S3_DATA_EVENTS`, `EKS_AUDIT_LOGS`, `EBS_MALWARE_PROTECTION`, `RDS_LOGIN_EVENTS`, `EKS_RUNTIME_MONITORING`, `LAMBDA_NETWORK_LOGS`.
  public name?: string;

  // The status of the detector feature. Valid values: `ENABLED`, `DISABLED`.
  public status?: string;

  // Additional feature configuration block. See below.
  public additionalConfigurations?: Array<guardduty_DetectorFeatureAdditionalConfiguration>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the detector feature. Valid values: `S3_DATA_EVENTS`, `EKS_AUDIT_LOGS`, `EBS_MALWARE_PROTECTION`, `RDS_LOGIN_EVENTS`, `EKS_RUNTIME_MONITORING`, `LAMBDA_NETWORK_LOGS`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "The status of the detector feature. Valid values: `ENABLED`, `DISABLED`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "additionalConfigurations",
        "Additional feature configuration block. See below.",
        guardduty_DetectorFeatureAdditionalConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "detectorId",
        "Amazon GuardDuty detector ID.",
        [],
        true,
        true,
      ),
    ];
  }
}
