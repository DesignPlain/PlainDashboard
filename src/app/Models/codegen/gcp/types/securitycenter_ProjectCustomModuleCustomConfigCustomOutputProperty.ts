import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securitycenter_ProjectCustomModuleCustomConfigCustomOutputPropertyValueExpression,
  securitycenter_ProjectCustomModuleCustomConfigCustomOutputPropertyValueExpression_GetTypes,
} from './securitycenter_ProjectCustomModuleCustomConfigCustomOutputPropertyValueExpression';

export interface securitycenter_ProjectCustomModuleCustomConfigCustomOutputProperty {
  /*
The CEL expression for the custom output. A resource property can be specified
to return the value of the property or a text string enclosed in quotation marks.
Structure is documented below.
*/
  valueExpression?: securitycenter_ProjectCustomModuleCustomConfigCustomOutputPropertyValueExpression;

  // Name of the property for the custom output.
  name?: string;
}

export function securitycenter_ProjectCustomModuleCustomConfigCustomOutputProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'valueExpression',
      'The CEL expression for the custom output. A resource property can be specified\nto return the value of the property or a text string enclosed in quotation marks.\nStructure is documented below.',
      () =>
        securitycenter_ProjectCustomModuleCustomConfigCustomOutputPropertyValueExpression_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the property for the custom output.',
      () => [],
      false,
      false,
    ),
  ];
}
