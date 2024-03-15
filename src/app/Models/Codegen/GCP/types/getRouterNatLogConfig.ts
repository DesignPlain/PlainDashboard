export interface getRouterNatLogConfig {
  // Indicates whether or not to export logs.
  Enable?: boolean;

  // Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]
  Filter?: string;
}
