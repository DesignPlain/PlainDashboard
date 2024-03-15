export interface WebBackendServiceIAMBindingCondition {
  /*
An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

> --Warning:-- This provider considers the `role` and condition contents (`title`+`description`+`expression`) as the
identifier for the binding. This means that if any part of the condition is changed out-of-band, the provider will
consider it to be an entirely different resource and will treat it as such.
*/
  Description?: string;

  // Textual representation of an expression in Common Expression Language syntax.
  Expression?: string;

  // A title for the expression, i.e. a short string describing its purpose.
  Title?: string;
}
