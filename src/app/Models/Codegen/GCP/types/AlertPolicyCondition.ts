import { AlertPolicyConditionConditionPrometheusQueryLanguage } from "./AlertPolicyConditionConditionPrometheusQueryLanguage";
import { AlertPolicyConditionConditionThreshold } from "./AlertPolicyConditionConditionThreshold";
import { AlertPolicyConditionConditionAbsent } from "./AlertPolicyConditionConditionAbsent";
import { AlertPolicyConditionConditionMatchedLog } from "./AlertPolicyConditionConditionMatchedLog";
import { AlertPolicyConditionConditionMonitoringQueryLanguage } from "./AlertPolicyConditionConditionMonitoringQueryLanguage";

export interface AlertPolicyCondition {
  /*
A condition that checks that a time series
continues to receive new data points.
Structure is documented below.
*/
  ConditionAbsent?: AlertPolicyConditionConditionAbsent;

  /*
A condition that checks for log messages matching given constraints.
If set, no other conditions can be present.
Structure is documented below.
*/
  ConditionMatchedLog?: AlertPolicyConditionConditionMatchedLog;

  /*
A Monitoring Query Language query that outputs a boolean stream
Structure is documented below.
*/
  ConditionMonitoringQueryLanguage?: AlertPolicyConditionConditionMonitoringQueryLanguage;

  /*
A condition type that allows alert policies to be defined using
Prometheus Query Language (PromQL).
The PrometheusQueryLanguageCondition message contains information
from a Prometheus alerting rule and its associated rule group.
Structure is documented below.
*/
  ConditionPrometheusQueryLanguage?: AlertPolicyConditionConditionPrometheusQueryLanguage;

  /*
A condition that compares a time series against a
threshold.
Structure is documented below.
*/
  ConditionThreshold?: AlertPolicyConditionConditionThreshold;

  /*
A short name or phrase used to identify the
condition in dashboards, notifications, and
incidents. To avoid confusion, don't use the same
display name for multiple conditions in the same
policy.
*/
  DisplayName?: string;

  /*
(Output)
The unique resource name for this condition.
Its syntax is:
projects/[PROJECT_ID]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID]
[CONDITION_ID] is assigned by Stackdriver Monitoring when
the condition is created as part of a new or updated alerting
policy.
*/
  Name?: string;
}
