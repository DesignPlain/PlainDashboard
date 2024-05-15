import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Organizations_AccessApprovalSettingsEnrolledService {
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
  CloudProduct?: string;

  /*
The enrollment level of the service.
Default value is `BLOCK_ALL`.
Possible values are: `BLOCK_ALL`.

- - -
*/
  EnrollmentLevel?: string;
}

export function Organizations_AccessApprovalSettingsEnrolledService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CloudProduct",
      "The product for which Access Approval will be enrolled. Allowed values are listed (case-sensitive):\nall\nappengine.googleapis.com\nbigquery.googleapis.com\nbigtable.googleapis.com\ncloudkms.googleapis.com\ncompute.googleapis.com\ndataflow.googleapis.com\niam.googleapis.com\npubsub.googleapis.com\nstorage.googleapis.com",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EnrollmentLevel",
      "The enrollment level of the service.\nDefault value is `BLOCK_ALL`.\nPossible values are: `BLOCK_ALL`.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
