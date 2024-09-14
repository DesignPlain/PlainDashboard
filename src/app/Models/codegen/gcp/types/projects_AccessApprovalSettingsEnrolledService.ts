import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface projects_AccessApprovalSettingsEnrolledService {
  /*
The product for which Access Approval will be enrolled. Allowed values are listed (case-sensitive):
all
appengine.googleapis.com
bigquery.googleapis.com
bigtable.googleapis.com
cloudkms.googleapis.com
compute.googleapis.com
dataflow.googleapis.com
iam.googleapis.com
pubsub.googleapis.com
storage.googleapis.com
*/
  cloudProduct?: string;

  /*
The enrollment level of the service.
Default value is `BLOCK_ALL`.
Possible values are: `BLOCK_ALL`.

- - -
*/
  enrollmentLevel?: string;
}

export function projects_AccessApprovalSettingsEnrolledService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cloudProduct",
      "The product for which Access Approval will be enrolled. Allowed values are listed (case-sensitive):\nall\nappengine.googleapis.com\nbigquery.googleapis.com\nbigtable.googleapis.com\ncloudkms.googleapis.com\ncompute.googleapis.com\ndataflow.googleapis.com\niam.googleapis.com\npubsub.googleapis.com\nstorage.googleapis.com",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "enrollmentLevel",
      "The enrollment level of the service.\nDefault value is `BLOCK_ALL`.\nPossible values are: `BLOCK_ALL`.\n\n- - -",
      () => [],
      false,
      false,
    ),
  ];
}
