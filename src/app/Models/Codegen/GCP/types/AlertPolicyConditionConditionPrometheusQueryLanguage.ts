export interface AlertPolicyConditionConditionPrometheusQueryLanguage {
  /*
The alerting rule name of this alert in the corresponding Prometheus
configuration file.
Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future.
This field is optional. If this field is not empty, then it must be a
valid Prometheus label name.

- - -
*/
  AlertRule?: string;

  /*
Alerts are considered firing once their PromQL expression evaluated
to be "true" for this long. Alerts whose PromQL expression was not
evaluated to be "true" for long enough are considered pending. The
default value is zero. Must be zero or positive.
*/
  Duration?: string;

  /*
How often this rule should be evaluated. Must be a positive multiple
of 30 seconds or missing. The default value is 30 seconds. If this
PrometheusQueryLanguageCondition was generated from a Prometheus
alerting rule, then this value should be taken from the enclosing
rule group.
*/
  EvaluationInterval?: string;

  /*
Labels to add to or overwrite in the PromQL query result. Label names
must be valid.
Label values can be templatized by using variables. The only available
variable names are the names of the labels in the PromQL result, including
"__name__" and "value". "labels" may be empty. This field is intended to be
used for organizing and identifying the AlertPolicy
*/
  Labels?: Map<string, string>;

  /*
The PromQL expression to evaluate. Every evaluation cycle this
expression is evaluated at the current time, and all resultant time
series become pending/firing alerts. This field must not be empty.
*/
  Query?: string;

  /*
The rule group name of this alert in the corresponding Prometheus
configuration file.
Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future. This field is optional.
*/
  RuleGroup?: string;
}
