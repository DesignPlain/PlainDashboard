export interface GuestPoliciesRecipeUpdateStepScriptRun {
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
