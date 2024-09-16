import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations_GetTypes,
} from './dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations';
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations_GetTypes,
} from './dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations';
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations_GetTypes,
} from './dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations';

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfig {
  /*
Treat the dataset as an image and redact.
Structure is documented below.
*/
  imageTransformations?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations;

  /*
Treat the dataset as free-form text and apply the same free text transformation everywhere
Structure is documented below.
*/
  infoTypeTransformations?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations;

  /*
Treat the dataset as structured. Transformations can be applied to specific locations within structured datasets, such as transforming a column within a table.
Structure is documented below.
*/
  recordTransformations?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'recordTransformations',
      'Treat the dataset as structured. Transformations can be applied to specific locations within structured datasets, such as transforming a column within a table.\nStructure is documented below.',
      () =>
        dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'imageTransformations',
      'Treat the dataset as an image and redact.\nStructure is documented below.',
      () =>
        dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'infoTypeTransformations',
      'Treat the dataset as free-form text and apply the same free text transformation everywhere\nStructure is documented below.',
      () =>
        dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations_GetTypes(),
      false,
      false,
    ),
  ];
}
