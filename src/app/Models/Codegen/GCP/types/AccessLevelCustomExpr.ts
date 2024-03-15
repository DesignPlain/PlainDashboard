export interface AccessLevelCustomExpr {
  // Textual representation of an expression in Common Expression Language syntax.
  Expression?: string;

  // String indicating the location of the expression for error reporting, e.g. a file name and a position in the file
  Location?: string;

  // Title for the expression, i.e. a short string describing its purpose.
  Title?: string;

  // Description of the expression
  Description?: string;
}
