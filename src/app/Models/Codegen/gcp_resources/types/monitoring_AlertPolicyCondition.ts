import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  monitoring_AlertPolicyConditionConditionAbsent,
  monitoring_AlertPolicyConditionConditionAbsent_GetTypes,
} from "./monitoring_AlertPolicyConditionConditionAbsent";
import {
  monitoring_AlertPolicyConditionConditionMatchedLog,
  monitoring_AlertPolicyConditionConditionMatchedLog_GetTypes,
} from "./monitoring_AlertPolicyConditionConditionMatchedLog";
import {
  monitoring_AlertPolicyConditionConditionMonitoringQueryLanguage,
  monitoring_AlertPolicyConditionConditionMonitoringQueryLanguage_GetTypes,
} from "./monitoring_AlertPolicyConditionConditionMonitoringQueryLanguage";
import {
  monitoring_AlertPolicyConditionConditionPrometheusQueryLanguage,
  monitoring_AlertPolicyConditionConditionPrometheusQueryLanguage_GetTypes,
} from "./monitoring_AlertPolicyConditionConditionPrometheusQueryLanguage";
import {
  monitoring_AlertPolicyConditionConditionThreshold,
  monitoring_AlertPolicyConditionConditionThreshold_GetTypes,
} from "./monitoring_AlertPolicyConditionConditionThreshold";

export interface monitoring_AlertPolicyCondition {
  /*
A short name or phrase used to identify the
condition in dashboards, notifications, and
incidents. To avoid confusion, don't use the same
display name for multiple conditions in the same
policy.
*/
  displayName?: string;

  /*
(Output)
The unique resource name for this condition.
Its syntax is:
projects/[PROJECT_ID]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID]
[CONDITION_ID] is assigned by Stackdriver Monitoring when
the condition is created as part of a new or updated alerting
policy.
*/
  name?: string;

  /*
A condition that checks that a time series
continues to receive new data points.
Structure is documented below.
*/
  conditionAbsent?: monitoring_AlertPolicyConditionConditionAbsent;

  /*
A condition that checks for log messages matching given constraints.
If set, no other conditions can be present.
Structure is documented below.
*/
  conditionMatchedLog?: monitoring_AlertPolicyConditionConditionMatchedLog;

  /*
A Monitoring Query Language query that outputs a boolean stream
Structure is documented below.
*/
  conditionMonitoringQueryLanguage?: monitoring_AlertPolicyConditionConditionMonitoringQueryLanguage;

  /*
A condition type that allows alert policies to be defined using
Prometheus Query Language (PromQL).
The PrometheusQueryLanguageCondition message contains information
from a Prometheus alerting rule and its associated rule group.
Structure is documented below.
*/
  conditionPrometheusQueryLanguage?: monitoring_AlertPolicyConditionConditionPrometheusQueryLanguage;

  /*
A condition that compares a time series against a
threshold.
Structure is documented below.
*/
  conditionThreshold?: monitoring_AlertPolicyConditionConditionThreshold;
}

export function monitoring_AlertPolicyCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "conditionMonitoringQueryLanguage",
      "A Monitoring Query Language query that outputs a boolean stream\nStructure is documented below.",
      monitoring_AlertPolicyConditionConditionMonitoringQueryLanguage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "conditionPrometheusQueryLanguage",
      "A condition type that allows alert policies to be defined using\nPrometheus Query Language (PromQL).\nThe PrometheusQueryLanguageCondition message contains information\nfrom a Prometheus alerting rule and its associated rule group.\nStructure is documented below.",
      monitoring_AlertPolicyConditionConditionPrometheusQueryLanguage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "conditionThreshold",
      "A condition that compares a time series against a\nthreshold.\nStructure is documented below.",
      monitoring_AlertPolicyConditionConditionThreshold_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "A short name or phrase used to identify the\ncondition in dashboards, notifications, and\nincidents. To avoid confusion, don't use the same\ndisplay name for multiple conditions in the same\npolicy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "(Output)\nThe unique resource name for this condition.\nIts syntax is:\nprojects/[PROJECT_ID]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID]\n[CONDITION_ID] is assigned by Stackdriver Monitoring when\nthe condition is created as part of a new or updated alerting\npolicy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "conditionAbsent",
      "A condition that checks that a time series\ncontinues to receive new data points.\nStructure is documented below.",
      monitoring_AlertPolicyConditionConditionAbsent_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "conditionMatchedLog",
      "A condition that checks for log messages matching given constraints.\nIf set, no other conditions can be present.\nStructure is documented below.",
      monitoring_AlertPolicyConditionConditionMatchedLog_GetTypes(),
      false,
      false,
    ),
  ];
}
