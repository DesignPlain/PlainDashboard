import { PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationBucketingConfigBucket } from "./PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationBucketingConfigBucket";

export interface PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationBucketingConfig {
  /*
Set of buckets. Ranges must be non-overlapping.
Bucket is represented as a range, along with replacement values.
Structure is documented below.
*/
  Buckets?: Array<PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationBucketingConfigBucket>;
}