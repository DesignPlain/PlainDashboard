import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  customerprofiles_DomainMatching,
  customerprofiles_DomainMatching_GetTypes,
} from "../types/customerprofiles_DomainMatching";
import {
  customerprofiles_DomainRuleBasedMatching,
  customerprofiles_DomainRuleBasedMatching_GetTypes,
} from "../types/customerprofiles_DomainRuleBasedMatching";

export interface DomainArgs {
  // The name for your Customer Profile domain. It must be unique for your AWS account.
  domainName?: string;

  // A block that specifies the process of matching duplicate profiles. Documented below.
  matching?: customerprofiles_DomainMatching;

  // A block that specifies the process of matching duplicate profiles using the Rule-Based matching. Documented below.
  ruleBasedMatching?: customerprofiles_DomainRuleBasedMatching;

  // Tags to apply to the domain. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications.
  deadLetterQueueUrl?: string;

  // The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.
  defaultEncryptionKey?: string;

  /*
The default number of days until the data within the domain expires.

The following arguments are optional:
*/
  defaultExpirationDays?: number;
}
export class Domain extends Resource {
  // The name for your Customer Profile domain. It must be unique for your AWS account.
  public domainName?: string;

  // A block that specifies the process of matching duplicate profiles using the Rule-Based matching. Documented below.
  public ruleBasedMatching?: customerprofiles_DomainRuleBasedMatching;

  // Tags to apply to the domain. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A block that specifies the process of matching duplicate profiles. Documented below.
  public matching?: customerprofiles_DomainMatching;

  // The Amazon Resource Name (ARN) of the Customer Profiles Domain.
  public arn?: string;

  // The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications.
  public deadLetterQueueUrl?: string;

  // The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.
  public defaultEncryptionKey?: string;

  /*
The default number of days until the data within the domain expires.

The following arguments are optional:
*/
  public defaultExpirationDays?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "defaultExpirationDays",
        "The default number of days until the data within the domain expires.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "The name for your Customer Profile domain. It must be unique for your AWS account.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "matching",
        "A block that specifies the process of matching duplicate profiles. Documented below.",
        customerprofiles_DomainMatching_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ruleBasedMatching",
        "A block that specifies the process of matching duplicate profiles using the Rule-Based matching. Documented below.",
        customerprofiles_DomainRuleBasedMatching_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the domain. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deadLetterQueueUrl",
        "The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultEncryptionKey",
        "The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.",
        [],
        false,
        false,
      ),
    ];
  }
}
