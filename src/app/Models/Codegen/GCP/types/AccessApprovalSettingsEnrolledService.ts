export interface AccessApprovalSettingsEnrolledService {
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
  CloudProduct?: string;

  /*
The enrollment level of the service.
Default value is `BLOCK_ALL`.
Possible values are: `BLOCK_ALL`.

- - -
*/
  EnrollmentLevel?: string;
}
