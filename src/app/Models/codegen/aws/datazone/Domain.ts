import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datazone_DomainTimeouts,
  datazone_DomainTimeouts_GetTypes,
} from '../types/datazone_DomainTimeouts';
import {
  datazone_DomainSingleSignOn,
  datazone_DomainSingleSignOn_GetTypes,
} from '../types/datazone_DomainSingleSignOn';

export interface DomainArgs {
  //
  tags?: Map<string, string>;

  //
  timeouts?: datazone_DomainTimeouts;

  // Description of the Domain.
  description?: string;

  /*
ARN of the role used by DataZone to configure the Domain.

The following arguments are optional:
*/
  domainExecutionRole?: string;

  // ARN of the KMS key used to encrypt the Amazon DataZone domain, metadata and reporting data.
  kmsKeyIdentifier?: string;

  // Name of the Domain.
  name?: string;

  // Single sign on options, used to [enable AWS IAM Identity Center](https://docs.aws.amazon.com/datazone/latest/userguide/enable-IAM-identity-center-for-datazone.html) for DataZone.
  singleSignOn?: datazone_DomainSingleSignOn;
}
export class Domain extends DS_Resource {
  // ARN of the Domain.
  public arn?: string;

  // Description of the Domain.
  public description?: string;

  // Name of the Domain.
  public name?: string;

  // Single sign on options, used to [enable AWS IAM Identity Center](https://docs.aws.amazon.com/datazone/latest/userguide/enable-IAM-identity-center-for-datazone.html) for DataZone.
  public singleSignOn?: datazone_DomainSingleSignOn;

  //
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: datazone_DomainTimeouts;

  /*
ARN of the role used by DataZone to configure the Domain.

The following arguments are optional:
*/
  public domainExecutionRole?: string;

  // ARN of the KMS key used to encrypt the Amazon DataZone domain, metadata and reporting data.
  public kmsKeyIdentifier?: string;

  // URL of the data portal for the Domain.
  public portalUrl?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        '',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => datazone_DomainTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the Domain.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domainExecutionRole',
        'ARN of the role used by DataZone to configure the Domain.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyIdentifier',
        'ARN of the KMS key used to encrypt the Amazon DataZone domain, metadata and reporting data.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the Domain.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'singleSignOn',
        'Single sign on options, used to [enable AWS IAM Identity Center](https://docs.aws.amazon.com/datazone/latest/userguide/enable-IAM-identity-center-for-datazone.html) for DataZone.',
        () => datazone_DomainSingleSignOn_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
