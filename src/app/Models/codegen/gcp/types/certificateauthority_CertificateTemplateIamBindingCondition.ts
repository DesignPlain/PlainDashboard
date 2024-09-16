import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface certificateauthority_CertificateTemplateIamBindingCondition {
  //
  description?: string;

  // Textual representation of an expression in Common Expression Language syntax.
  expression?: string;

  // A title for the expression, i.e. a short string describing its purpose.
  title?: string;
}

export function certificateauthority_CertificateTemplateIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'expression',
      'Textual representation of an expression in Common Expression Language syntax.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'title',
      'A title for the expression, i.e. a short string describing its purpose.',
      () => [],
      true,
      true,
    ),
  ];
}
