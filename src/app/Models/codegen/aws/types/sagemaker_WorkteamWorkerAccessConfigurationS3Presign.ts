import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_WorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints,
  sagemaker_WorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints_GetTypes,
} from "./sagemaker_WorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints";

export interface sagemaker_WorkteamWorkerAccessConfigurationS3Presign {
  // Use this parameter to specify the allowed request source. Possible sources are either SourceIp or VpcSourceIp. see IAM Policy Constraints details below.
  iamPolicyConstraints?: sagemaker_WorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints;
}

export function sagemaker_WorkteamWorkerAccessConfigurationS3Presign_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "iamPolicyConstraints",
      "Use this parameter to specify the allowed request source. Possible sources are either SourceIp or VpcSourceIp. see IAM Policy Constraints details below.",
      () =>
        sagemaker_WorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints_GetTypes(),
      false,
      false,
    ),
  ];
}
