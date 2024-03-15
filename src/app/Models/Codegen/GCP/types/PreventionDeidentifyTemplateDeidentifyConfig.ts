import { PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations } from "./PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations";
import { PreventionDeidentifyTemplateDeidentifyConfigImageTransformations } from "./PreventionDeidentifyTemplateDeidentifyConfigImageTransformations";
import { PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations } from "./PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations";

export interface PreventionDeidentifyTemplateDeidentifyConfig {
  /*
Treat the dataset as free-form text and apply the same free text transformation everywhere
Structure is documented below.
*/
  InfoTypeTransformations?: PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations;

  /*
Treat the dataset as structured. Transformations can be applied to specific locations within structured datasets, such as transforming a column within a table.
Structure is documented below.
*/
  RecordTransformations?: PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations;

  /*
Treat the dataset as an image and redact.
Structure is documented below.
*/
  ImageTransformations?: PreventionDeidentifyTemplateDeidentifyConfigImageTransformations;
}
