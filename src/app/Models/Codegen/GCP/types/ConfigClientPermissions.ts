export interface ConfigClientPermissions {
  // When true, end users cannot delete their account on the associated project through any of our API methods
  DisabledUserDeletion?: boolean;

  // When true, end users cannot sign up for a new account on the associated project through any of our API methods
  DisabledUserSignup?: boolean;
}
