export interface RulesetSourceFile {
  // Textual Content.
  Content?: string;

  // Fingerprint (e.g. github sha) associated with the `File`.
  Fingerprint?: string;

  /*
File name.

- - -
*/
  Name?: string;
}
