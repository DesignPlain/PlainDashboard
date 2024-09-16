import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securitycenter_FolderCustomModuleCustomConfigPredicate,
  securitycenter_FolderCustomModuleCustomConfigPredicate_GetTypes,
} from './securitycenter_FolderCustomModuleCustomConfigPredicate';
import {
  securitycenter_FolderCustomModuleCustomConfigResourceSelector,
  securitycenter_FolderCustomModuleCustomConfigResourceSelector_GetTypes,
} from './securitycenter_FolderCustomModuleCustomConfigResourceSelector';
import {
  securitycenter_FolderCustomModuleCustomConfigCustomOutput,
  securitycenter_FolderCustomModuleCustomConfigCustomOutput_GetTypes,
} from './securitycenter_FolderCustomModuleCustomConfigCustomOutput';

export interface securitycenter_FolderCustomModuleCustomConfig {
  /*
The CEL expression to evaluate to produce findings. When the expression evaluates
to true against a resource, a finding is generated.
Structure is documented below.
*/
  predicate?: securitycenter_FolderCustomModuleCustomConfigPredicate;

  /*
An explanation of the recommended steps that security teams can take to resolve
the detected issue. This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.
*/
  recommendation?: string;

  /*
The resource types that the custom module operates on. Each custom module
can specify up to 5 resource types.
Structure is documented below.
*/
  resourceSelector?: securitycenter_FolderCustomModuleCustomConfigResourceSelector;

  /*
The severity to assign to findings generated by the module.
Possible values are: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`.
*/
  severity?: string;

  /*
Custom output properties.
Structure is documented below.
*/
  customOutput?: securitycenter_FolderCustomModuleCustomConfigCustomOutput;

  /*
Text that describes the vulnerability or misconfiguration that the custom
module detects. This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.
*/
  description?: string;
}

export function securitycenter_FolderCustomModuleCustomConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      'Text that describes the vulnerability or misconfiguration that the custom\nmodule detects. This explanation is returned with each finding instance to\nhelp investigators understand the detected issue. The text must be enclosed in quotation marks.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'predicate',
      'The CEL expression to evaluate to produce findings. When the expression evaluates\nto true against a resource, a finding is generated.\nStructure is documented below.',
      () => securitycenter_FolderCustomModuleCustomConfigPredicate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'recommendation',
      'An explanation of the recommended steps that security teams can take to resolve\nthe detected issue. This explanation is returned with each finding generated by\nthis module in the nextSteps property of the finding JSON.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'resourceSelector',
      'The resource types that the custom module operates on. Each custom module\ncan specify up to 5 resource types.\nStructure is documented below.',
      () =>
        securitycenter_FolderCustomModuleCustomConfigResourceSelector_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'severity',
      'The severity to assign to findings generated by the module.\nPossible values are: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'customOutput',
      'Custom output properties.\nStructure is documented below.',
      () =>
        securitycenter_FolderCustomModuleCustomConfigCustomOutput_GetTypes(),
      false,
      false,
    ),
  ];
}
