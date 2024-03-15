import { CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit } from "./CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit";
import { CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage } from "./CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage";

export interface CustomTargetTypeCustomActionsIncludeSkaffoldModule {
  // The Skaffold Config modules to use from the specified source.
  Configs?: Array<string>;

  /*
Remote git repository containing the Skaffold Config modules.
Structure is documented below.
*/
  Git?: CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit;

  /*
Cloud Storage bucket containing Skaffold Config modules.
Structure is documented below.
*/
  GoogleCloudStorage?: CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage;
}
