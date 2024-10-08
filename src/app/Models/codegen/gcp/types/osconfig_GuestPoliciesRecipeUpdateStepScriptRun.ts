import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface osconfig_GuestPoliciesRecipeUpdateStepScriptRun {
  /*
The script interpreter to use to run the script. If no interpreter is specified the script is executed directly,
which likely only succeed for scripts with shebang lines.
Possible values are: `SHELL`, `POWERSHELL`.
*/
  interpreter?: string;

  // The shell script to be executed.
  script?: string;

  // Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  allowedExitCodes?: Array<number>;
}

export function osconfig_GuestPoliciesRecipeUpdateStepScriptRun_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'interpreter',
      'The script interpreter to use to run the script. If no interpreter is specified the script is executed directly,\nwhich likely only succeed for scripts with shebang lines.\nPossible values are: `SHELL`, `POWERSHELL`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'script',
      'The shell script to be executed.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'allowedExitCodes',
      'Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]',
      () => InputType_Number_GetTypes(),
      false,
      false,
    ),
  ];
}
