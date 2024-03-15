export interface RulesetMetadata {
  // Services that this ruleset has declarations for (e.g., "cloud.firestore"). There may be 0+ of these.
  Services?: Array<string>;
}
