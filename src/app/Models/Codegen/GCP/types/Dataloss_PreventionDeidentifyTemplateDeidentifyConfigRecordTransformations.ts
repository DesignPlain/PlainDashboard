import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations {
  /*
Transform the record by applying various field transformations.
Structure is documented below.
*/
  FieldTransformations?: Array<Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation>;

  /*
Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output.
Structure is documented below.
*/
  RecordSuppressions?: Array<Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression>;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "FieldTransformations",
      "Transform the record by applying various field transformations.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "RecordSuppressions",
      "Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression_GetTypes(),
      false,
      false,
    ),
  ];
}
