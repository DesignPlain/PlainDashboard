export interface PatchDeploymentPatchConfigWindowsUpdate {
  /*
Only apply updates of these windows update classifications. If empty, all updates are applied.
Each value may be one of: `CRITICAL`, `SECURITY`, `DEFINITION`, `DRIVER`, `FEATURE_PACK`, `SERVICE_PACK`, `TOOL`, `UPDATE_ROLLUP`, `UPDATE`.
*/
  Classifications?: Array<string>;

  // List of KBs to exclude from update.
  Excludes?: Array<string>;

  /*
An exclusive list of kbs to be updated. These are the only patches that will be updated.
This field must not be used with other patch configurations.
*/
  ExclusivePatches?: Array<string>;
}
