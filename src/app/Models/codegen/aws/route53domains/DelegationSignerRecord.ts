import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  route53domains_DelegationSignerRecordTimeouts,
  route53domains_DelegationSignerRecordTimeouts_GetTypes,
} from '../types/route53domains_DelegationSignerRecordTimeouts';
import {
  route53domains_DelegationSignerRecordSigningAttributes,
  route53domains_DelegationSignerRecordSigningAttributes_GetTypes,
} from '../types/route53domains_DelegationSignerRecordSigningAttributes';

export interface DelegationSignerRecordArgs {
  //
  timeouts?: route53domains_DelegationSignerRecordTimeouts;

  // The name of the domain that will have its parent DNS zone updated with the Delegation Signer record.
  domainName?: string;

  // The information about a key, including the algorithm, public key-value, and flags.
  signingAttributes?: route53domains_DelegationSignerRecordSigningAttributes;
}
export class DelegationSignerRecord extends DS_Resource {
  // An ID assigned to the created DS record.
  public dnssecKeyId?: string;

  // The name of the domain that will have its parent DNS zone updated with the Delegation Signer record.
  public domainName?: string;

  // The information about a key, including the algorithm, public key-value, and flags.
  public signingAttributes?: route53domains_DelegationSignerRecordSigningAttributes;

  //
  public timeouts?: route53domains_DelegationSignerRecordTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => route53domains_DelegationSignerRecordTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domainName',
        'The name of the domain that will have its parent DNS zone updated with the Delegation Signer record.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'signingAttributes',
        'The information about a key, including the algorithm, public key-value, and flags.',
        () => route53domains_DelegationSignerRecordSigningAttributes_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
