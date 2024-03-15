export interface OsPolicyAssignmentInstanceFilterInclusionLabel {
  /*
Labels are identified by key/value pairs in this map.
A VM should contain all the key/value pairs specified in this map to be
selected.
*/
  Labels?: Map<string, string>;
}
