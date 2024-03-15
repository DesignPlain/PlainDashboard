export interface OsPolicyAssignmentRolloutDisruptionBudget {
  // Specifies a fixed value.
  Fixed?: number;

  /*
Specifies the relative value defined as a percentage,
which will be multiplied by a reference value.

--------------------------------------------------------------------------------
*/
  Percent?: number;
}
