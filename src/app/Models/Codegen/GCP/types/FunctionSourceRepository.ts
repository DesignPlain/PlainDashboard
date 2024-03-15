export interface FunctionSourceRepository {
  // The URL pointing to the hosted repository where the function was defined at the time of deployment.
  DeployedUrl?: string;

  /*
The URL pointing to the hosted repository where the function is defined. There are supported Cloud Source Repository URLs in the following formats:

- To refer to a specific commit: `https://source.developers.google.com/projects/-/repos/-/revisions/-/paths/-`
- To refer to a moveable alias (branch): `https://source.developers.google.com/projects/-/repos/-/moveable-aliases/-/paths/-`. To refer to HEAD, use the `master` moveable alias.
- To refer to a specific fixed alias (tag): `https://source.developers.google.com/projects/-/repos/-/fixed-aliases/-/paths/-`
*/
  Url?: string;
}
