import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig {
  // If this template is specified, it will serve as the default de-identify template.
  deidentifyTemplate?: string;

  // If this template is specified, it will serve as the de-identify template for images.
  imageRedactTemplate?: string;

  // If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables.
  structuredDeidentifyTemplate?: string;
}

export function dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'structuredDeidentifyTemplate',
      'If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'deidentifyTemplate',
      'If this template is specified, it will serve as the default de-identify template.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'imageRedactTemplate',
      'If this template is specified, it will serve as the de-identify template for images.',
      () => [],
      false,
      false,
    ),
  ];
}
