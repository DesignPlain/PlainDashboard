import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation_GetTypes,
} from './dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation';
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression_GetTypes,
} from './dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression';

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations {
  /*
Transform the record by applying various field transformations.
Structure is documented below.
*/
  fieldTransformations?: Array<dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation>;

  /*
Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output.
Structure is documented below.
*/
  recordSuppressions?: Array<dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression>;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'fieldTransformations',
      'Transform the record by applying various field transformations.\nStructure is documented below.',
      () =>
        dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'recordSuppressions',
      'Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output.\nStructure is documented below.',
      () =>
        dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression_GetTypes(),
      false,
      false,
    ),
  ];
}
