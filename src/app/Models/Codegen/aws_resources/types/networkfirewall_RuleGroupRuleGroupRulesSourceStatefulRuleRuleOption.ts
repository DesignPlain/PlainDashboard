import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleRuleOption {
  /*
Keyword defined by open source detection systems like Snort or Suricata for stateful rule inspection.
See [Snort General Rule Options](http://manual-snort-org.s3-website-us-east-1.amazonaws.com/node31.html) or [Suricata Rule Options](https://suricata.readthedocs.io/en/suricata-5.0.1/rules/intro.html#rule-options) for more details.
*/
  keyword?: string;

  // Set of strings for additional settings to use in stateful rule inspection.
  settings?: Array<string>;
}

export function networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRuleRuleOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "keyword",
      "Keyword defined by open source detection systems like Snort or Suricata for stateful rule inspection.\nSee [Snort General Rule Options](http://manual-snort-org.s3-website-us-east-1.amazonaws.com/node31.html) or [Suricata Rule Options](https://suricata.readthedocs.io/en/suricata-5.0.1/rules/intro.html#rule-options) for more details.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "settings",
      "Set of strings for additional settings to use in stateful rule inspection.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
