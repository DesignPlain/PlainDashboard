import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3control_MultiRegionAccessPointPolicyDetails,
  s3control_MultiRegionAccessPointPolicyDetails_GetTypes,
} from "../types/s3control_MultiRegionAccessPointPolicyDetails";

export interface MultiRegionAccessPointPolicyArgs {
  // A configuration block containing details about the policy for the Multi-Region Access Point. See Details Configuration Block below for more details
  details?: s3control_MultiRegionAccessPointPolicyDetails;

  // The AWS account ID for the owner of the Multi-Region Access Point. Defaults to automatically determined account ID of the AWS provider.
  accountId?: string;
}
export class MultiRegionAccessPointPolicy extends Resource {
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
        InputType.Object,
        "details",
        "A configuration block containing details about the policy for the Multi-Region Access Point. See Details Configuration Block below for more details",
        s3control_MultiRegionAccessPointPolicyDetails_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "The AWS account ID for the owner of the Multi-Region Access Point. Defaults to automatically determined account ID of the AWS provider.",
        [],
        false,
        true,
      ),
    ];
  }
}
