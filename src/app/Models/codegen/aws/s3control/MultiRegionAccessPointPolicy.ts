import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3control_MultiRegionAccessPointPolicyDetails,
  s3control_MultiRegionAccessPointPolicyDetails_GetTypes,
} from "../types/s3control_MultiRegionAccessPointPolicyDetails";

export interface MultiRegionAccessPointPolicyArgs {
  // The AWS account ID for the owner of the Multi-Region Access Point. Defaults to automatically determined account ID of the AWS provider.
  accountId?: string;

  // A configuration block containing details about the policy for the Multi-Region Access Point. See Details Configuration Block below for more details
  details?: s3control_MultiRegionAccessPointPolicyDetails;
}
export class MultiRegionAccessPointPolicy extends DS_Resource {
  // The AWS account ID for the owner of the Multi-Region Access Point. Defaults to automatically determined account ID of the AWS provider.
  public accountId?: string;

  // A configuration block containing details about the policy for the Multi-Region Access Point. See Details Configuration Block below for more details
  public details?: s3control_MultiRegionAccessPointPolicyDetails;

  // The last established policy for the Multi-Region Access Point.
  public established?: string;

  // The proposed policy for the Multi-Region Access Point.
  public proposed?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "The AWS account ID for the owner of the Multi-Region Access Point. Defaults to automatically determined account ID of the AWS provider.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "details",
        "A configuration block containing details about the policy for the Multi-Region Access Point. See Details Configuration Block below for more details",
        () => s3control_MultiRegionAccessPointPolicyDetails_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
