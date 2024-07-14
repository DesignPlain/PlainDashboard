import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ProductSubscriptionArgs {
  /*
The ARN of the product that generates findings that you want to import into Security Hub - see below.

Amazon maintains a list of [Product integrations in AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-providers.html) that changes over time. Any of the products on the linked [Available AWS service integrations](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-internal-providers.html) or [Available third-party partner product integrations](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-partner-providers.html) can be configured using `aws.securityhub.ProductSubscription`.

Available products can also be listed by running the AWS CLI command `aws securityhub describe-products`.

A subset of currently available products (remember to replace `${var.region}` as appropriate) includes:

- `arn:aws:securityhub:${var.region}::product/aws/guardduty`
- `arn:aws:securityhub:${var.region}::product/aws/inspector`
- `arn:aws:securityhub:${var.region}::product/aws/macie`
- `arn:aws:securityhub:${var.region}::product/alertlogic/althreatmanagement`
- `arn:aws:securityhub:${var.region}::product/armordefense/armoranywhere`
- `arn:aws:securityhub:${var.region}::product/barracuda/cloudsecurityguardian`
- `arn:aws:securityhub:${var.region}::product/checkpoint/cloudguard-iaas`
- `arn:aws:securityhub:${var.region}::product/checkpoint/dome9-arc`
- `arn:aws:securityhub:${var.region}::product/crowdstrike/crowdstrike-falcon`
- `arn:aws:securityhub:${var.region}::product/cyberark/cyberark-pta`
- `arn:aws:securityhub:${var.region}::product/f5networks/f5-advanced-waf`
- `arn:aws:securityhub:${var.region}::product/fortinet/fortigate`
- `arn:aws:securityhub:${var.region}::product/guardicore/aws-infection-monkey`
- `arn:aws:securityhub:${var.region}::product/guardicore/guardicore`
- `arn:aws:securityhub:${var.region}::product/ibm/qradar-siem`
- `arn:aws:securityhub:${var.region}::product/imperva/imperva-attack-analytics`
- `arn:aws:securityhub:${var.region}::product/mcafee-skyhigh/mcafee-mvision-cloud-aws`
- `arn:aws:securityhub:${var.region}::product/paloaltonetworks/redlock`
- `arn:aws:securityhub:${var.region}::product/paloaltonetworks/vm-series`
- `arn:aws:securityhub:${var.region}::product/qualys/qualys-pc`
- `arn:aws:securityhub:${var.region}::product/qualys/qualys-vm`
- `arn:aws:securityhub:${var.region}::product/rapid7/insightvm`
- `arn:aws:securityhub:${var.region}::product/sophos/sophos-server-protection`
- `arn:aws:securityhub:${var.region}::product/splunk/splunk-enterprise`
- `arn:aws:securityhub:${var.region}::product/splunk/splunk-phantom`
- `arn:aws:securityhub:${var.region}::product/sumologicinc/sumologic-mda`
- `arn:aws:securityhub:${var.region}::product/symantec-corp/symantec-cwp`
- `arn:aws:securityhub:${var.region}::product/tenable/tenable-io`
- `arn:aws:securityhub:${var.region}::product/trend-micro/deep-security`
- `arn:aws:securityhub:${var.region}::product/turbot/turbot`
- `arn:aws:securityhub:${var.region}::product/twistlock/twistlock-enterprise`
*/
  productArn?: string;
}
export class ProductSubscription extends Resource {
  // The ARN of a resource that represents your subscription to the product that generates the findings that you want to import into Security Hub.
  public arn?: string;

  /*
The ARN of the product that generates findings that you want to import into Security Hub - see below.

Amazon maintains a list of [Product integrations in AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-providers.html) that changes over time. Any of the products on the linked [Available AWS service integrations](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-internal-providers.html) or [Available third-party partner product integrations](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-partner-providers.html) can be configured using `aws.securityhub.ProductSubscription`.

Available products can also be listed by running the AWS CLI command `aws securityhub describe-products`.

A subset of currently available products (remember to replace `${var.region}` as appropriate) includes:

- `arn:aws:securityhub:${var.region}::product/aws/guardduty`
- `arn:aws:securityhub:${var.region}::product/aws/inspector`
- `arn:aws:securityhub:${var.region}::product/aws/macie`
- `arn:aws:securityhub:${var.region}::product/alertlogic/althreatmanagement`
- `arn:aws:securityhub:${var.region}::product/armordefense/armoranywhere`
- `arn:aws:securityhub:${var.region}::product/barracuda/cloudsecurityguardian`
- `arn:aws:securityhub:${var.region}::product/checkpoint/cloudguard-iaas`
- `arn:aws:securityhub:${var.region}::product/checkpoint/dome9-arc`
- `arn:aws:securityhub:${var.region}::product/crowdstrike/crowdstrike-falcon`
- `arn:aws:securityhub:${var.region}::product/cyberark/cyberark-pta`
- `arn:aws:securityhub:${var.region}::product/f5networks/f5-advanced-waf`
- `arn:aws:securityhub:${var.region}::product/fortinet/fortigate`
- `arn:aws:securityhub:${var.region}::product/guardicore/aws-infection-monkey`
- `arn:aws:securityhub:${var.region}::product/guardicore/guardicore`
- `arn:aws:securityhub:${var.region}::product/ibm/qradar-siem`
- `arn:aws:securityhub:${var.region}::product/imperva/imperva-attack-analytics`
- `arn:aws:securityhub:${var.region}::product/mcafee-skyhigh/mcafee-mvision-cloud-aws`
- `arn:aws:securityhub:${var.region}::product/paloaltonetworks/redlock`
- `arn:aws:securityhub:${var.region}::product/paloaltonetworks/vm-series`
- `arn:aws:securityhub:${var.region}::product/qualys/qualys-pc`
- `arn:aws:securityhub:${var.region}::product/qualys/qualys-vm`
- `arn:aws:securityhub:${var.region}::product/rapid7/insightvm`
- `arn:aws:securityhub:${var.region}::product/sophos/sophos-server-protection`
- `arn:aws:securityhub:${var.region}::product/splunk/splunk-enterprise`
- `arn:aws:securityhub:${var.region}::product/splunk/splunk-phantom`
- `arn:aws:securityhub:${var.region}::product/sumologicinc/sumologic-mda`
- `arn:aws:securityhub:${var.region}::product/symantec-corp/symantec-cwp`
- `arn:aws:securityhub:${var.region}::product/tenable/tenable-io`
- `arn:aws:securityhub:${var.region}::product/trend-micro/deep-security`
- `arn:aws:securityhub:${var.region}::product/turbot/turbot`
- `arn:aws:securityhub:${var.region}::product/twistlock/twistlock-enterprise`
*/
  public productArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "productArn",
        "The ARN of the product that generates findings that you want to import into Security Hub - see below.\n\nAmazon maintains a list of [Product integrations in AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-providers.html) that changes over time. Any of the products on the linked [Available AWS service integrations](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-internal-providers.html) or [Available third-party partner product integrations](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-partner-providers.html) can be configured using `aws.securityhub.ProductSubscription`.\n\nAvailable products can also be listed by running the AWS CLI command `aws securityhub describe-products`.\n\nA subset of currently available products (remember to replace `${var.region}` as appropriate) includes:\n\n* `arn:aws:securityhub:${var.region}::product/aws/guardduty`\n* `arn:aws:securityhub:${var.region}::product/aws/inspector`\n* `arn:aws:securityhub:${var.region}::product/aws/macie`\n* `arn:aws:securityhub:${var.region}::product/alertlogic/althreatmanagement`\n* `arn:aws:securityhub:${var.region}::product/armordefense/armoranywhere`\n* `arn:aws:securityhub:${var.region}::product/barracuda/cloudsecurityguardian`\n* `arn:aws:securityhub:${var.region}::product/checkpoint/cloudguard-iaas`\n* `arn:aws:securityhub:${var.region}::product/checkpoint/dome9-arc`\n* `arn:aws:securityhub:${var.region}::product/crowdstrike/crowdstrike-falcon`\n* `arn:aws:securityhub:${var.region}::product/cyberark/cyberark-pta`\n* `arn:aws:securityhub:${var.region}::product/f5networks/f5-advanced-waf`\n* `arn:aws:securityhub:${var.region}::product/fortinet/fortigate`\n* `arn:aws:securityhub:${var.region}::product/guardicore/aws-infection-monkey`\n* `arn:aws:securityhub:${var.region}::product/guardicore/guardicore`\n* `arn:aws:securityhub:${var.region}::product/ibm/qradar-siem`\n* `arn:aws:securityhub:${var.region}::product/imperva/imperva-attack-analytics`\n* `arn:aws:securityhub:${var.region}::product/mcafee-skyhigh/mcafee-mvision-cloud-aws`\n* `arn:aws:securityhub:${var.region}::product/paloaltonetworks/redlock`\n* `arn:aws:securityhub:${var.region}::product/paloaltonetworks/vm-series`\n* `arn:aws:securityhub:${var.region}::product/qualys/qualys-pc`\n* `arn:aws:securityhub:${var.region}::product/qualys/qualys-vm`\n* `arn:aws:securityhub:${var.region}::product/rapid7/insightvm`\n* `arn:aws:securityhub:${var.region}::product/sophos/sophos-server-protection`\n* `arn:aws:securityhub:${var.region}::product/splunk/splunk-enterprise`\n* `arn:aws:securityhub:${var.region}::product/splunk/splunk-phantom`\n* `arn:aws:securityhub:${var.region}::product/sumologicinc/sumologic-mda`\n* `arn:aws:securityhub:${var.region}::product/symantec-corp/symantec-cwp`\n* `arn:aws:securityhub:${var.region}::product/tenable/tenable-io`\n* `arn:aws:securityhub:${var.region}::product/trend-micro/deep-security`\n* `arn:aws:securityhub:${var.region}::product/turbot/turbot`\n* `arn:aws:securityhub:${var.region}::product/twistlock/twistlock-enterprise`",
        [],
        true,
        true,
      ),
    ];
  }
}
