import { PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression } from "./PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression";
import { PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation } from "./PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation";

export interface PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations {
  /*
Transform the record by applying various field transformations.
Structure is documented below.
*/
  FieldTransformations?: Array<PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation>;

  /*
Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output.
Structure is documented below.
*/
  RecordSuppressions?: Array<PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression>;
}
