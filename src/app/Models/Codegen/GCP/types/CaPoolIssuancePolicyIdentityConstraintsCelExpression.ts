export interface CaPoolIssuancePolicyIdentityConstraintsCelExpression {
  // Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  Description?: string;

  // Textual representation of an expression in Common Expression Language syntax.
  Expression?: string;

  // String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  Location?: string;

  // Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
  Title?: string;
}
