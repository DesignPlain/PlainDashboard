import { CustomTargetTypeCustomActionsIncludeSkaffoldModule } from "./CustomTargetTypeCustomActionsIncludeSkaffoldModule";

export interface CustomTargetTypeCustomActions {
  // The Skaffold custom action responsible for deploy operations.
  DeployAction?: string;

  /*
List of Skaffold modules Cloud Deploy will include in the Skaffold Config as required before performing diagnose.
Structure is documented below.
*/
  IncludeSkaffoldModules?: Array<CustomTargetTypeCustomActionsIncludeSkaffoldModule>;

  // The Skaffold custom action responsible for render operations. If not provided then Cloud Deploy will perform the render operations via `skaffold render`.
  RenderAction?: string;
}
