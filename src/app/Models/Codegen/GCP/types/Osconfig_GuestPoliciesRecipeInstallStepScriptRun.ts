import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_GuestPoliciesRecipeInstallStepScriptRun {
  // Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  AllowedExitCodes?: Array<number>;

  /*
The script interpreter to use to run the script. If no interpreter is specified the script is executed directly,
which likely only succeed for scripts with shebang lines.
Possible values are: `SHELL`, `POWERSHELL`.
*/
  Interpreter?: string;

  // The shell script to be executed.
  Script?: string;
}

export function Osconfig_GuestPoliciesRecipeInstallStepScriptRun_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Interpreter",
      "The script interpreter to use to run the script. If no interpreter is specified the script is executed directly,\nwhich likely only succeed for scripts with shebang lines.\nPossible values are: `SHELL`, `POWERSHELL`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Script",
      "The shell script to be executed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowedExitCodes",
      "Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
  ];
}
