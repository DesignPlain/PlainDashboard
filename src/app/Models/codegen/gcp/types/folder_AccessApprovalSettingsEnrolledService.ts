import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface folder_AccessApprovalSettingsEnrolledService {
  /*
The product for which Access Approval will be enrolled. Allowed values are listed (case-sensitive):
- all
- App Engine
- BigQuery
- Cloud Bigtable
- Cloud Key Management Service
- Compute Engine
- Cloud Dataflow
- Cloud Identity and Access Management
- Cloud Pub/Sub
- Cloud Storage
- Persistent Disk
Note: These values are supported as input, but considered a legacy format:
- all
- appengine.googleapis.com
- bigquery.googleapis.com
- bigtable.googleapis.com
- cloudkms.googleapis.com
- compute.googleapis.com
- dataflow.googleapis.com
- iam.googleapis.com
- pubsub.googleapis.com
- storage.googleapis.com
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

export function folder_AccessApprovalSettingsEnrolledService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'cloudProduct',
      'The product for which Access Approval will be enrolled. Allowed values are listed (case-sensitive):\n* all\n* App Engine\n* BigQuery\n* Cloud Bigtable\n* Cloud Key Management Service\n* Compute Engine\n* Cloud Dataflow\n* Cloud Identity and Access Management\n* Cloud Pub/Sub\n* Cloud Storage\n* Persistent Disk\nNote: These values are supported as input, but considered a legacy format:\n* all\n* appengine.googleapis.com\n* bigquery.googleapis.com\n* bigtable.googleapis.com\n* cloudkms.googleapis.com\n* compute.googleapis.com\n* dataflow.googleapis.com\n* iam.googleapis.com\n* pubsub.googleapis.com\n* storage.googleapis.com',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'enrollmentLevel',
      'The enrollment level of the service.\nDefault value is `BLOCK_ALL`.\nPossible values are: `BLOCK_ALL`.\n\n- - -',
      () => [],
      false,
      false,
    ),
  ];
}
