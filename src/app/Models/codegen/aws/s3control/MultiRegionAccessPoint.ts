import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3control_MultiRegionAccessPointDetails,
  s3control_MultiRegionAccessPointDetails_GetTypes,
} from "../types/s3control_MultiRegionAccessPointDetails";

export interface MultiRegionAccessPointArgs {
  // The AWS account ID for the owner of the buckets for which you want to create a Multi-Region Access Point. Defaults to automatically determined account ID of the AWS provider.
  accountId?: string;

  // A configuration block containing details about the Multi-Region Access Point. See Details Configuration Block below for more details
  details?: s3control_MultiRegionAccessPointDetails;
}
export class MultiRegionAccessPoint extends DS_Resource {
  // The AWS account ID for the owner of the buckets for which you want to create a Multi-Region Access Point. Defaults to automatically determined account ID of the AWS provider.
  public accountId?: string;

  // The alias for the Multi-Region Access Point.
  public alias?: string;

  // Amazon Resource Name (ARN) of the Multi-Region Access Point.
  public arn?: string;

  // A configuration block containing details about the Multi-Region Access Point. See Details Configuration Block below for more details
  public details?: s3control_MultiRegionAccessPointDetails;

  // The DNS domain name of the S3 Multi-Region Access Point in the format _`alias`_.accesspoint.s3-global.amazonaws.com. For more information, see the documentation on [Multi-Region Access Point Requests](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRequests.html).
  public domainName?: string;

  // The current status of the Multi-Region Access Point. One of: `READY`, `INCONSISTENT_ACROSS_REGIONS`, `CREATING`, `PARTIALLY_CREATED`, `PARTIALLY_DELETED`, `DELETING`.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "The AWS account ID for the owner of the buckets for which you want to create a Multi-Region Access Point. Defaults to automatically determined account ID of the AWS provider.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "details",
        "A configuration block containing details about the Multi-Region Access Point. See Details Configuration Block below for more details",
        () => s3control_MultiRegionAccessPointDetails_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
