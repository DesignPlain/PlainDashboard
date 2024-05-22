import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface StandardsSubscriptionArgs {
  /*
The ARN of a standard - see below.

Currently available standards (remember to replace `${var.region}` as appropriate):

| Name                                     | ARN                                                                                             |
|------------------------------------------|-------------------------------------------------------------------------------------------------|
| AWS Foundational Security Best Practices | `arn:aws:securityhub:${var.region}::standards/aws-foundational-security-best-practices/v/1.0.0` |
| CIS AWS Foundations Benchmark v1.2.0     | `arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0`                           |
| CIS AWS Foundations Benchmark v1.4.0     | `arn:aws:securityhub:${var.region}::standards/cis-aws-foundations-benchmark/v/1.4.0`            |
| NIST SP 800-53 Rev. 5                    | `arn:aws:securityhub:${var.region}::standards/nist-800-53/v/5.0.0`                              |
| PCI DSS                                  | `arn:aws:securityhub:${var.region}::standards/pci-dss/v/3.2.1`                                  |
*/
  standardsArn?: string;
}
export class StandardsSubscription extends Resource {
  /*
The ARN of a standard - see below.

Currently available standards (remember to replace `${var.region}` as appropriate):

| Name                                     | ARN                                                                                             |
|------------------------------------------|-------------------------------------------------------------------------------------------------|
| AWS Foundational Security Best Practices | `arn:aws:securityhub:${var.region}::standards/aws-foundational-security-best-practices/v/1.0.0` |
| CIS AWS Foundations Benchmark v1.2.0     | `arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0`                           |
| CIS AWS Foundations Benchmark v1.4.0     | `arn:aws:securityhub:${var.region}::standards/cis-aws-foundations-benchmark/v/1.4.0`            |
| NIST SP 800-53 Rev. 5                    | `arn:aws:securityhub:${var.region}::standards/nist-800-53/v/5.0.0`                              |
| PCI DSS                                  | `arn:aws:securityhub:${var.region}::standards/pci-dss/v/3.2.1`                                  |
*/
  public standardsArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "standardsArn",
        "The ARN of a standard - see below.\n\nCurrently available standards (remember to replace `${var.region}` as appropriate):\n\n| Name                                     | ARN                                                                                             |\n|------------------------------------------|-------------------------------------------------------------------------------------------------|\n| AWS Foundational Security Best Practices | `arn:aws:securityhub:${var.region}::standards/aws-foundational-security-best-practices/v/1.0.0` |\n| CIS AWS Foundations Benchmark v1.2.0     | `arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0`                           |\n| CIS AWS Foundations Benchmark v1.4.0     | `arn:aws:securityhub:${var.region}::standards/cis-aws-foundations-benchmark/v/1.4.0`            |\n| NIST SP 800-53 Rev. 5                    | `arn:aws:securityhub:${var.region}::standards/nist-800-53/v/5.0.0`                              |\n| PCI DSS                                  | `arn:aws:securityhub:${var.region}::standards/pci-dss/v/3.2.1`                                  |",
        [],
        true,
        true,
      ),
    ];
  }
}
