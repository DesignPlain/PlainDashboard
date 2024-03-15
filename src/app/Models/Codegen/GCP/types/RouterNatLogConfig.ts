export interface RouterNatLogConfig {
  /*
Specifies the desired filtering of logs on this NAT.
Possible values are: `ERRORS_ONLY`, `TRANSLATIONS_ONLY`, `ALL`.
*/
  Filter?: string;

  // Indicates whether or not to export logs.
  Enable?: boolean;
}
