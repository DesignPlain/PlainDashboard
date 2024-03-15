export interface TunnelIAMMemberCondition {
  // Textual representation of an expression in Common Expression Language syntax.
  Expression?: string;

  // A title for the expression, i.e. a short string describing its purpose.
  Title?: string;

  // An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  Description?: string;
}
