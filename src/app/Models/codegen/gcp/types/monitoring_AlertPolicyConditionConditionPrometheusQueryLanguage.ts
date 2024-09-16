import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface monitoring_AlertPolicyConditionConditionPrometheusQueryLanguage {
  /*
Alerts are considered firing once their PromQL expression evaluated
to be "true" for this long. Alerts whose PromQL expression was not
evaluated to be "true" for long enough are considered pending. The
default value is zero. Must be zero or positive.
*/
  duration?: string;

  /*
How often this rule should be evaluated. Must be a positive multiple
of 30 seconds or missing. The default value is 30 seconds. If this
PrometheusQueryLanguageCondition was generated from a Prometheus
alerting rule, then this value should be taken from the enclosing
rule group.
*/
  evaluationInterval?: string;

  /*
Labels to add to or overwrite in the PromQL query result. Label names
must be valid.
Label values can be templatized by using variables. The only available
variable names are the names of the labels in the PromQL result, including
"__name__" and "value". "labels" may be empty. This field is intended to be
used for organizing and identifying the AlertPolicy
*/
  labels?: Map<string, string>;

  /*
The PromQL expression to evaluate. Every evaluation cycle this
expression is evaluated at the current time, and all resultant time
series become pending/firing alerts. This field must not be empty.
*/
  query?: string;

  /*
The rule group name of this alert in the corresponding Prometheus
configuration file.
Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future. This field is optional.
*/
  ruleGroup?: string;

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
  alertRule?: string;
}

export function monitoring_AlertPolicyConditionConditionPrometheusQueryLanguage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'alertRule',
      'The alerting rule name of this alert in the corresponding Prometheus\nconfiguration file.\nSome external tools may require this field to be populated correctly\nin order to refer to the original Prometheus configuration file.\nThe rule group name and the alert name are necessary to update the\nrelevant AlertPolicies in case the definition of the rule group changes\nin the future.\nThis field is optional. If this field is not empty, then it must be a\nvalid Prometheus label name.\n\n- - -',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'duration',
      'Alerts are considered firing once their PromQL expression evaluated\nto be "true" for this long. Alerts whose PromQL expression was not\nevaluated to be "true" for long enough are considered pending. The\ndefault value is zero. Must be zero or positive.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'evaluationInterval',
      'How often this rule should be evaluated. Must be a positive multiple\nof 30 seconds or missing. The default value is 30 seconds. If this\nPrometheusQueryLanguageCondition was generated from a Prometheus\nalerting rule, then this value should be taken from the enclosing\nrule group.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'labels',
      'Labels to add to or overwrite in the PromQL query result. Label names\nmust be valid.\nLabel values can be templatized by using variables. The only available\nvariable names are the names of the labels in the PromQL result, including\n"__name__" and "value". "labels" may be empty. This field is intended to be\nused for organizing and identifying the AlertPolicy',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'query',
      'The PromQL expression to evaluate. Every evaluation cycle this\nexpression is evaluated at the current time, and all resultant time\nseries become pending/firing alerts. This field must not be empty.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ruleGroup',
      'The rule group name of this alert in the corresponding Prometheus\nconfiguration file.\nSome external tools may require this field to be populated correctly\nin order to refer to the original Prometheus configuration file.\nThe rule group name and the alert name are necessary to update the\nrelevant AlertPolicies in case the definition of the rule group changes\nin the future. This field is optional.',
      () => [],
      false,
      false,
    ),
  ];
}
