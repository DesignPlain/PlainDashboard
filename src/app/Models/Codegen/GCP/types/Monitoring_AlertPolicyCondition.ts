import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_AlertPolicyConditionConditionAbsent,
  Monitoring_AlertPolicyConditionConditionAbsent_GetTypes,
} from "./Monitoring_AlertPolicyConditionConditionAbsent";
import {
  Monitoring_AlertPolicyConditionConditionMatchedLog,
  Monitoring_AlertPolicyConditionConditionMatchedLog_GetTypes,
} from "./Monitoring_AlertPolicyConditionConditionMatchedLog";
import {
  Monitoring_AlertPolicyConditionConditionMonitoringQueryLanguage,
  Monitoring_AlertPolicyConditionConditionMonitoringQueryLanguage_GetTypes,
} from "./Monitoring_AlertPolicyConditionConditionMonitoringQueryLanguage";
import {
  Monitoring_AlertPolicyConditionConditionPrometheusQueryLanguage,
  Monitoring_AlertPolicyConditionConditionPrometheusQueryLanguage_GetTypes,
} from "./Monitoring_AlertPolicyConditionConditionPrometheusQueryLanguage";
import {
  Monitoring_AlertPolicyConditionConditionThreshold,
  Monitoring_AlertPolicyConditionConditionThreshold_GetTypes,
} from "./Monitoring_AlertPolicyConditionConditionThreshold";

export interface Monitoring_AlertPolicyCondition {
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

  /*
A condition that checks that a time series
continues to receive new data points.
Structure is documented below.
*/
  ConditionAbsent?: Monitoring_AlertPolicyConditionConditionAbsent;

  /*
A condition that checks for log messages matching given constraints.
If set, no other conditions can be present.
Structure is documented below.
*/
  ConditionMatchedLog?: Monitoring_AlertPolicyConditionConditionMatchedLog;

  /*
A Monitoring Query Language query that outputs a boolean stream
Structure is documented below.
*/
  ConditionMonitoringQueryLanguage?: Monitoring_AlertPolicyConditionConditionMonitoringQueryLanguage;

  /*
A condition type that allows alert policies to be defined using
Prometheus Query Language (PromQL).
The PrometheusQueryLanguageCondition message contains information
from a Prometheus alerting rule and its associated rule group.
Structure is documented below.
*/
  ConditionPrometheusQueryLanguage?: Monitoring_AlertPolicyConditionConditionPrometheusQueryLanguage;

  /*
A condition that compares a time series against a
threshold.
Structure is documented below.
*/
  ConditionThreshold?: Monitoring_AlertPolicyConditionConditionThreshold;

  /*
A short name or phrase used to identify the
condition in dashboards, notifications, and
incidents. To avoid confusion, don't use the same
display name for multiple conditions in the same
policy.
*/
  DisplayName?: string;
}

export function Monitoring_AlertPolicyCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ConditionPrometheusQueryLanguage",
      "A condition type that allows alert policies to be defined using\nPrometheus Query Language (PromQL).\nThe PrometheusQueryLanguageCondition message contains information\nfrom a Prometheus alerting rule and its associated rule group.\nStructure is documented below.",
      Monitoring_AlertPolicyConditionConditionPrometheusQueryLanguage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConditionThreshold",
      "A condition that compares a time series against a\nthreshold.\nStructure is documented below.",
      Monitoring_AlertPolicyConditionConditionThreshold_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "A short name or phrase used to identify the\ncondition in dashboards, notifications, and\nincidents. To avoid confusion, don't use the same\ndisplay name for multiple conditions in the same\npolicy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "(Output)\nThe unique resource name for this condition.\nIts syntax is:\nprojects/[PROJECT_ID]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID]\n[CONDITION_ID] is assigned by Stackdriver Monitoring when\nthe condition is created as part of a new or updated alerting\npolicy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConditionAbsent",
      "A condition that checks that a time series\ncontinues to receive new data points.\nStructure is documented below.",
      Monitoring_AlertPolicyConditionConditionAbsent_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConditionMatchedLog",
      "A condition that checks for log messages matching given constraints.\nIf set, no other conditions can be present.\nStructure is documented below.",
      Monitoring_AlertPolicyConditionConditionMatchedLog_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConditionMonitoringQueryLanguage",
      "A Monitoring Query Language query that outputs a boolean stream\nStructure is documented below.",
      Monitoring_AlertPolicyConditionConditionMonitoringQueryLanguage_GetTypes(),
      false,
      false,
    ),
  ];
}
