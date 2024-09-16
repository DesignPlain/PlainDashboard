import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_TemplateSourceEntitySourceAnalysis,
  quicksight_TemplateSourceEntitySourceAnalysis_GetTypes,
} from './quicksight_TemplateSourceEntitySourceAnalysis';
import {
  quicksight_TemplateSourceEntitySourceTemplate,
  quicksight_TemplateSourceEntitySourceTemplate_GetTypes,
} from './quicksight_TemplateSourceEntitySourceTemplate';

export interface quicksight_TemplateSourceEntity {
  // The source analysis, if it is based on an analysis.. Only one of `source_analysis` or `source_template` should be configured. See source_analysis.
  sourceAnalysis?: quicksight_TemplateSourceEntitySourceAnalysis;

  // The source template, if it is based on an template.. Only one of `source_analysis` or `source_template` should be configured. See source_template.
  sourceTemplate?: quicksight_TemplateSourceEntitySourceTemplate;
}

export function quicksight_TemplateSourceEntity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'sourceAnalysis',
      'The source analysis, if it is based on an analysis.. Only one of `source_analysis` or `source_template` should be configured. See source_analysis.',
      () => quicksight_TemplateSourceEntitySourceAnalysis_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sourceTemplate',
      'The source template, if it is based on an template.. Only one of `source_analysis` or `source_template` should be configured. See source_template.',
      () => quicksight_TemplateSourceEntitySourceTemplate_GetTypes(),
      false,
      false,
    ),
  ];
}
