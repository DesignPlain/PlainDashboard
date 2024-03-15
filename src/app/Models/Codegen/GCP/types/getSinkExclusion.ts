export interface getSinkExclusion {
  // Whether this exclusion is disabled and it does not exclude any log entries.
  Disabled?: boolean;

  // An advanced logs filter that matches the log entries to be excluded.
  Filter?: string;

  // A client-assigned identifier, such as `load-balancer-exclusion`.
  Name?: string;

  // A description of this exclusion.
  Description?: string;
}
