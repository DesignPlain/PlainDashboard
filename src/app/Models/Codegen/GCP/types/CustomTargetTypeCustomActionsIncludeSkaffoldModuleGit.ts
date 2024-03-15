export interface CustomTargetTypeCustomActionsIncludeSkaffoldModuleGit {
  // Relative path from the repository root to the Skaffold file.
  Path?: string;

  // Git ref the package should be cloned from.
  Ref?: string;

  // Git repository the package should be cloned from.
  Repo?: string;
}
